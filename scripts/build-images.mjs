// Build every image format of Taddicons from svg/outline/*.svg and icons.json.
//
//   sprite/taddicons.svg            all icons as <symbol>s, styled by the page (fill none, stroke currentColor)
//   svg/gradient/<name>.svg         the lines in the Taddi button gradient, transparent background
//   svg/mark/<name>.svg             the official mark: the gradient icon on a light circle with a faint edge
//   png|webp|avif/<variant>/<size>/<name>.<ext>    variant gradient or mark, sizes 32 to 512 px
//   ico/<name>.ico                  the mark at 16, 24, 32, 48, 64, 128 and 256 px (PNG frames)
//
// usage: npm install && npm run build:images [-- --missing] [name …]
//   --missing   only the icons that have no png/mark/512 file yet (the vector files and the sprite are always rebuilt)
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const meta = JSON.parse(await readFile(join(ROOT, "icons.json"), "utf8"));
const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const icons = only.length ? meta.icons.filter((i) => only.includes(i.name)) : meta.icons;

/** The Taddi button gradient, left to right (oklch(70.66% 0.1785 34.6) to oklch(66.88% 0.1894 34.86), from 0%). */
const GRADIENT = ["#f76845", "#f25e3a"];
/** The mark's circle, lab(98.27 0 0), and its faint edge, lab(90.5 0 0). */
const CIRCLE = "#fafafa";
const EDGE = "#e4e4e4";
const STROKE = 1.35;
const SIZES = [32, 64, 128, 256, 512];
const ICO_SIZES = [16, 24, 32, 48, 64, 128, 256];
const VARIANTS = ["gradient", "mark"];
const FORMATS = {
  png: (img) => img.png({ compressionLevel: 9, adaptiveFiltering: true }),
  webp: (img) => img.webp({ lossless: true, effort: 6 }),
  avif: (img) => img.avif({ quality: 82, effort: 5, chromaSubsampling: "4:4:4" }),
};

/** The line never gets thinner than 1 px: 1.35 on the 24 grid, thicker when the icon is drawn under 18 px. */
const strokeFor = (iconPx) => Math.round(Math.max(STROKE, 24 / iconPx) * 100) / 100;
const bodyOf = (svg) => svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
const gradientDef = (id, x1, x2) =>
  `<linearGradient id="${id}" x1="${x1}" y1="0" x2="${x2}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${GRADIENT[0]}"/><stop offset="1" stop-color="${GRADIENT[1]}"/></linearGradient>`;
const lineAttrs = (stroke, width) => `fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`;

/** Gradient lines, 24 grid. `px` is the drawn size (sets the line weight); the vector file uses the 24 px weight. */
function gradientSvg(name, body, px = 24, size = 24) {
  const id = `ti-g-${name}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"><defs>${gradientDef(id, 2, 22)}</defs><g ${lineAttrs(`url(#${id})`, strokeFor(px))}>${body}</g></svg>`;
}

/** The mark: a 40 unit circle, the icon at 60% (24 units) in its middle. `px` is the circle's drawn size. */
function markSvg(name, body, px = 40, size = 40) {
  const id = `ti-m-${name}`;
  // A faint edge: 1 px up to 96 px, then growing gently (1/96 of the circle) so it stays faint on large files.
  const edge = Math.max(1, px / 96) * (40 / px);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40"><defs>${gradientDef(id, 10, 30)}</defs><circle cx="20" cy="20" r="${20 - edge / 2}" fill="${CIRCLE}" stroke="${EDGE}" stroke-width="${+edge.toFixed(3)}"/><g transform="translate(8 8)" ${lineAttrs(`url(#${id})`, strokeFor(px * 0.6))}>${body}</g></svg>`;
}

/** An .ico file holding PNG frames (Windows Vista and later, every current browser). */
function ico(frames) {
  const header = Buffer.alloc(6 + 16 * frames.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  let offset = header.length;
  frames.forEach(({ size, png }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt8(0, e + 2);
    header.writeUInt8(0, e + 3);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(png.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...frames.map((f) => f.png)]);
}

async function pool(items, n, fn) {
  let next = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (next < items.length) await fn(items[next++]); }));
}

const render = (svg) => sharp(Buffer.from(svg), { density: 72 });

async function main() {
  const dirs = ["sprite", "svg/gradient", "svg/mark", "ico"];
  for (const f of Object.keys(FORMATS)) for (const v of VARIANTS) for (const s of SIZES) dirs.push(`${f}/${v}/${s}`);
  await Promise.all(dirs.map((d) => mkdir(join(ROOT, d), { recursive: true })));

  const bodies = new Map();
  for (const i of meta.icons) bodies.set(i.name, bodyOf(await readFile(join(ROOT, "svg/outline", `${i.name}.svg`), "utf8")));

  // The sprite, in catalog order with a comment per category.
  const byCat = new Map(meta.categories.map((c) => [c.id, []]));
  for (const i of meta.icons) byCat.get(i.category).push(i);
  const sprite = [
    `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">`,
    `<!-- Taddicons ${meta.version} - The Official Taddi Icon Set - MIT - https://taddicons.com`,
    `     Use: <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><use href="taddicons.svg#birthday-card"/></svg> -->`,
    ...meta.categories.flatMap((c) => [`<!-- ${c.title} (${byCat.get(c.id).length}) -->`, ...byCat.get(c.id).map((i) => `<symbol id="${i.name}" viewBox="0 0 24 24">${bodies.get(i.name)}</symbol>`)]),
    `</svg>`,
  ].join("\n");
  await writeFile(join(ROOT, "sprite/taddicons.svg"), sprite + "\n");

  for (const icon of icons) {
    const body = bodies.get(icon.name);
    await writeFile(join(ROOT, "svg/gradient", `${icon.name}.svg`), gradientSvg(icon.name, body) + "\n");
    await writeFile(join(ROOT, "svg/mark", `${icon.name}.svg`), markSvg(icon.name, body) + "\n");
  }
  const raster = process.argv.includes("--missing") ? icons.filter((i) => !existsSync(join(ROOT, "png/mark/512", `${i.name}.png`))) : icons;
  console.log(`vectors: ${icons.length}; rasters to build: ${raster.length}`);

  let done = 0;
  await pool(raster, 8, async (icon) => {
    const body = bodies.get(icon.name);
    for (const size of SIZES) {
      for (const variant of VARIANTS) {
        const svg = variant === "mark" ? markSvg(icon.name, body, size, size) : gradientSvg(icon.name, body, size, size);
        const base = await render(svg).png().toBuffer();
        for (const [ext, encode] of Object.entries(FORMATS)) {
          await encode(sharp(base)).toFile(join(ROOT, ext, variant, String(size), `${icon.name}.${ext}`));
        }
      }
    }
    const frames = [];
    for (const size of ICO_SIZES) frames.push({ size, png: await render(markSvg(icon.name, body, size, size)).png({ compressionLevel: 9 }).toBuffer() });
    await writeFile(join(ROOT, "ico", `${icon.name}.ico`), ico(frames));
    if (++done % 100 === 0) console.log(`${done}/${raster.length}`);
  });
  const count = (await readdir(join(ROOT, "png/mark/512"))).length;
  console.log(`images: ${raster.length} icons rendered (${count} in png/mark/512)`);
}

await main();
