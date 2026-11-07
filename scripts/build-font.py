"""Build the Taddicons webfont from svg/outline/*.svg and icons.json.

The icons are drawn as strokes. A font can only fill shapes, so every stroke is first turned into its outline (picosvg,
skia-pathops), the outlines of one icon are merged into one shape, and the shape is written as a TrueType glyph at the
icon's private-use code point (icons.json "unicode"). Each icon also has a ligature: the text "birthday-card" in the
font shows the birthday card icon.

Writes font/taddicons.{ttf,woff,woff2}, font/taddicons.css, font/taddicons.min.css, font/taddicons.scss and
font/taddicons.json.

usage: python3 scripts/build-font.py           (needs: pip install -r scripts/requirements.txt)
"""
import json
import re
from pathlib import Path

import pathops
from fontTools.feaLib.builder import addOpenTypeFeaturesFromString
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.areaPen import AreaPen
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.misc.timeTools import timestampFromString
from fontTools.ttLib import TTFont
from picosvg.svg import SVG
from picosvg.svg_pathops import skia_path

ROOT = Path(__file__).resolve().parent.parent
META = json.loads((ROOT / "icons.json").read_text())
VERSION = META["version"]
FAMILY = "Taddicons"
PREFIX = "ti"
# Fixed so a rebuild of the same version gives the same font file.
RELEASED = "Sat Nov  7 00:00:00 2026"

# 24 grid units -> 960 font units (40 per unit). The icon sits on the text like a capital letter: 840 above the
# baseline, 120 below it, so `vertical-align: -0.125em` centres it on lowercase text.
UPM, SCALE, ASCENT, DESCENT = 960, 40, 840, -120
# A little heavier than the SVG's 1.35: font icons are mostly used at 14 to 16 px, where 1.5 keeps the line at 1 px.
FONT_STROKE = 1.5
SHAPES = ("path", "circle", "ellipse", "line", "polyline", "polygon", "rect")
STROKE_ATTRS = f'fill="none" stroke="#000" stroke-width="{FONT_STROKE}" stroke-linecap="round" stroke-linejoin="round"'


def glyph_name(name: str) -> str:
    return "ti_" + name.replace("-", "_")


def outline(name: str):
    """The icon as one filled skia path in the 24 grid (y down)."""
    src = (ROOT / "svg/outline" / f"{name}.svg").read_text()
    body = re.search(r"<svg[^>]*>(.*)</svg>", src, re.S).group(1)
    body = re.sub(rf"<({'|'.join(SHAPES)})\b", rf"<\1 {STROKE_ATTRS}", body)
    pico = SVG.fromstring(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{body}</svg>').topicosvg()
    builder = pathops.OpBuilder(fix_winding=True, keep_starting_points=False)
    for shape in pico.shapes():
        builder.add(skia_path(shape.as_cmd_seq(), shape.fill_rule), pathops.PathOp.UNION)
    return builder.resolve()


def draw_glyph(path, reverse: bool):
    pen = TTGlyphPen(None)
    path.draw(TransformPen(Cu2QuPen(pen, max_err=0.5, reverse_direction=reverse), (SCALE, 0, 0, -SCALE, 0, ASCENT)))
    return pen.glyph()


def signed_area(path) -> float:
    pen = AreaPen()
    path.draw(TransformPen(pen, (1, 0, 0, -1, 0, 0)))
    return pen.value


def main():
    icons = META["icons"]
    letters = [chr(c) for c in range(ord("a"), ord("z") + 1)] + [str(d) for d in range(10)]
    letter_names = {c: c if c.isalpha() else ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][int(c)] for c in letters}
    order = [".notdef", "space", "hyphen"] + [letter_names[c] for c in letters] + [glyph_name(i["name"]) for i in icons]

    empty = TTGlyphPen(None).glyph()
    glyphs = {".notdef": empty, "space": empty, "hyphen": empty, **{letter_names[c]: empty for c in letters}}
    metrics = {".notdef": (UPM, 0), "space": (UPM // 4, 0), "hyphen": (0, 0), **{letter_names[c]: (0, 0) for c in letters}}
    cmap = {0x20: "space", 0x2D: "hyphen", **{ord(c): letter_names[c] for c in letters}}

    for icon in icons:
        gname = glyph_name(icon["name"])
        path = outline(icon["name"])
        # TrueType wants outer contours clockwise (y up). Flip the drawing direction when the merged shape runs the other way.
        reverse = signed_area(path) > 0
        glyph = draw_glyph(path, reverse)
        glyphs[gname] = glyph
        metrics[gname] = (UPM, 0)
        cmap[int(icon["unicode"], 16)] = gname

    fb = FontBuilder(UPM, isTTF=True)
    fb.setupGlyphOrder(order)
    fb.setupCharacterMap(cmap)
    fb.setupGlyf(glyphs)
    glyf = fb.font["glyf"]
    lsb = {}
    for g in order:
        glyf[g].recalcBounds(glyf)
        lsb[g] = glyf[g].xMin if glyf[g].numberOfContours else 0
    fb.setupHorizontalMetrics({g: (adv, lsb[g]) for g, (adv, _) in metrics.items()})
    fb.setupHorizontalHeader(ascent=ASCENT, descent=DESCENT, lineGap=0)
    fb.setupNameTable({
        "familyName": FAMILY,
        "styleName": "Regular",
        "uniqueFontIdentifier": f"{FAMILY}-{VERSION}",
        "fullName": f"{FAMILY} Regular",
        "psName": f"{FAMILY}-Regular",
        "version": f"Version {VERSION}",
        "copyright": "Copyright (c) 2026 Taddi",
        "manufacturer": "Taddi",
        "designer": "Taddi",
        "description": "Taddicons, the official Taddi icon set: one outline icon for every kind of document.",
        "vendorURL": "https://taddi.app",
        "designerURL": "https://icons.taddi.app",
        "licenseDescription": "MIT License. https://github.com/official-taddi/icons/blob/main/LICENSE",
        "licenseInfoURL": "https://opensource.org/license/mit",
    })
    fb.setupOS2(
        sTypoAscender=ASCENT, sTypoDescender=DESCENT, sTypoLineGap=0,
        usWinAscent=ASCENT, usWinDescent=-DESCENT, achVendID="TADI",
        fsType=0, version=4, usWeightClass=400,
    )
    fb.setupPost()
    stamp = timestampFromString(RELEASED)
    fb.setupHead(fontRevision=float(VERSION.rsplit(".", 1)[0]), created=stamp, modified=stamp)

    # Ligatures: "birthday-card" -> the birthday card icon.
    def seq(name: str) -> str:
        return " ".join("hyphen" if ch == "-" else letter_names[ch] for ch in name)

    rules = "\n".join(f"  sub {seq(i['name'])} by {glyph_name(i['name'])};" for i in sorted(icons, key=lambda x: -len(x["name"])))
    addOpenTypeFeaturesFromString(fb.font, f"languagesystem DFLT dflt;\nlanguagesystem latn dflt;\nfeature liga {{\n{rules}\n}} liga;\n")

    out = ROOT / "font"
    out.mkdir(exist_ok=True)
    fb.font.save(out / "taddicons.ttf")
    for flavor in ("woff", "woff2"):
        f = TTFont(out / "taddicons.ttf")
        f.flavor = flavor
        f.save(out / f"taddicons.{flavor}")

    write_css(icons, out)
    (out / "taddicons.json").write_text(json.dumps({i["name"]: i["unicode"] for i in icons}, indent=2) + "\n")
    print(f"font: {len(icons)} glyphs, ttf {(out / 'taddicons.ttf').stat().st_size // 1024} KB, woff2 {(out / 'taddicons.woff2').stat().st_size // 1024} KB")


CSS_HEAD = """/*!
 * Taddicons {version} - The Official Taddi Icon Set
 * https://icons.taddi.app - https://github.com/official-taddi/icons
 * License: MIT
 */
@font-face {{
  font-family: "{family}";
  src: url("taddicons.woff2?v={version}") format("woff2"),
       url("taddicons.woff?v={version}") format("woff"),
       url("taddicons.ttf?v={version}") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}}

/* Base: <i class="ti ti-birthday-card"></i> */
.{p} {{
  display: inline-block;
  font-family: "{family}" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: -0.125em;
  speak: never;
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}}

/* Sizes */
.{p}-xs {{ font-size: .75em; }}
.{p}-sm {{ font-size: .875em; }}
.{p}-lg {{ font-size: 1.25em; }}
.{p}-xl {{ font-size: 1.5em; }}
.{p}-2x {{ font-size: 2em; }}
.{p}-3x {{ font-size: 3em; }}
.{p}-4x {{ font-size: 4em; }}
.{p}-5x {{ font-size: 5em; }}
.{p}-6x {{ font-size: 6em; }}
.{p}-8x {{ font-size: 8em; }}
.{p}-10x {{ font-size: 10em; }}

/* Fixed width, for lists and menus */
.{p}-fw {{ width: 1.25em; text-align: center; }}

/* Rotate and flip */
.{p}-rotate-90 {{ transform: rotate(90deg); }}
.{p}-rotate-180 {{ transform: rotate(180deg); }}
.{p}-rotate-270 {{ transform: rotate(270deg); }}
.{p}-flip-h {{ transform: scaleX(-1); }}
.{p}-flip-v {{ transform: scaleY(-1); }}
.{p}-flip-both {{ transform: scale(-1, -1); }}

/* The Taddi button gradient on the icon's lines */
.{p}-gradient::before {{
  background-image: linear-gradient(to right, #f76845, #f25e3a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}}

/* The official Taddi mark: the gradient icon on a light circle with a faint edge */
.{p}-mark {{
  display: inline-grid;
  place-items: center;
  width: 1.6667em;
  height: 1.6667em;
  border-radius: 50%;
  background: #fafafa;
  box-shadow: inset 0 0 0 1px #e4e4e4;
  vertical-align: -.45em;
}}
.{p}-mark::before {{
  background-image: linear-gradient(to right, #f76845, #f25e3a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}}

/* Icons in a list: <ul class="ti-ul"><li><i class="ti ti-li ti-thank-you-note"></i> Thank you</li></ul> */
.{p}-ul {{ list-style: none; margin-left: 1.75em; padding-left: 0; }}
.{p}-ul > li {{ position: relative; }}
.{p}-li {{ position: absolute; left: -1.75em; width: 1.25em; text-align: center; line-height: inherit; }}

@media (forced-colors: active) {{
  .{p}-gradient::before, .{p}-mark::before {{ background: none; color: CanvasText; }}
  .{p}-mark {{ background: Canvas; box-shadow: none; border: 1px solid CanvasText; }}
}}

/* Icons */
"""


def write_css(icons, out: Path):
    head = CSS_HEAD.format(version=VERSION, family=FAMILY, p=PREFIX)
    rules = "\n".join(f'.{PREFIX}-{i["name"]}::before {{ content: "\\{i["unicode"]}"; }}' for i in icons)
    css = head + rules + "\n"
    (out / "taddicons.css").write_text(css)
    mini = re.sub(r"/\*(?!!).*?\*/", "", css, flags=re.S)
    mini = re.sub(r"\s+", " ", mini)
    mini = re.sub(r"\s*([{}:;,>])\s*", r"\1", mini).replace(";}", "}")
    mini = mini.replace("*/", "*/\n", 1).strip() + "\n"
    (out / "taddicons.min.css").write_text(mini)
    scss_map = ",\n".join(f'  "{i["name"]}": "\\{i["unicode"]}"' for i in icons)
    (out / "taddicons.scss").write_text(
        f"// Taddicons {VERSION} - The Official Taddi Icon Set (MIT). The code point of every icon, for your own Sass.\n"
        f"// @use \"taddicons\" as ti;  .x::before {{ font-family: \"Taddicons\"; content: map-get(ti.$icons, \"birthday-card\"); }}\n"
        f"$font-family: \"{FAMILY}\" !default;\n$prefix: \"{PREFIX}\" !default;\n$icons: (\n{scss_map}\n);\n"
    )


if __name__ == "__main__":
    main()
