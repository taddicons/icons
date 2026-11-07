// Build the documentation pieces that come from icons.json: the README banner (light and dark), the README's category
// table and full icon gallery (between the <!-- ...:start --> and <!-- ...:end --> markers), and font/demo.html.
//
// usage: npm run build:docs
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const meta = JSON.parse(await readFile(join(ROOT, "icons.json"), "utf8"));
const GRADIENT = ["#f76845", "#f25e3a"];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const bodyOf = (svg) => svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
const bodies = new Map();
for (const i of meta.icons) bodies.set(i.name, bodyOf(await readFile(join(ROOT, "svg/outline", `${i.name}.svg`), "utf8")));
const byCat = new Map(meta.categories.map((c) => [c.id, meta.icons.filter((i) => i.category === c.id)]));

// ── Banner ────────────────────────────────────────────────────────────────────────────────────────────────────────────
function banner(dark) {
  const W = 1280, H = 420, D = 84, GAP = 16, COLS = 6;
  const ink = dark ? "#f5f5f5" : "#161616";
  const soft = dark ? "#a3a3a3" : "#5c5c5c";
  const bg = dark ? "#121212" : "#ffffff";
  const picks = meta.categories.map((c) => byCat.get(c.id)[0]);
  const x0 = W - 56 - (COLS * D + (COLS - 1) * GAP);
  const y0 = (H - (3 * D + 2 * GAP)) / 2;
  const s = (D * 0.6) / 24;
  const marks = picks.map((icon, k) => {
    const x = x0 + (k % COLS) * (D + GAP), y = y0 + Math.floor(k / COLS) * (D + GAP);
    return `<g transform="translate(${x} ${y})"><circle cx="${D / 2}" cy="${D / 2}" r="${D / 2 - 0.5}" fill="#fafafa" stroke="#e4e4e4"/><g transform="translate(${D * 0.2} ${D * 0.2}) scale(${s})" fill="none" stroke="url(#ti-banner)" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">${bodies.get(icon.name)}</g></g>`;
  });
  const font = `font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Taddicons, the official Taddi icon set">
<defs><linearGradient id="ti-banner" x1="2" y1="0" x2="22" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${GRADIENT[0]}"/><stop offset="1" stop-color="${GRADIENT[1]}"/></linearGradient>
<linearGradient id="ti-rule" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${GRADIENT[0]}"/><stop offset="1" stop-color="${GRADIENT[1]}"/></linearGradient></defs>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="24" fill="${bg}" stroke="${dark ? "#262626" : "#ececec"}"/>
<text x="64" y="132" ${font} font-size="15" font-weight="600" letter-spacing="2.4" fill="${GRADIENT[1]}">THE OFFICIAL TADDI ICON SET</text>
<text x="60" y="214" ${font} font-size="84" font-weight="700" letter-spacing="-2.5" fill="${ink}">Taddicons</text>
<rect x="64" y="240" width="56" height="4" rx="2" fill="url(#ti-rule)"/>
<text x="64" y="288" ${font} font-size="24" fill="${soft}">${meta.count} outline icons for every kind of document.</text>
<text x="64" y="324" ${font} font-size="17" fill="${soft}">SVG · Sprite · Webfont · PNG · WebP · AVIF · ICO · MIT</text>
${marks.join("\n")}
</svg>
`;
}

// ── README sections ───────────────────────────────────────────────────────────────────────────────────────────────────
const anchor = (title) => title.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/ /g, "-");
const categoriesTable = [
  "| | Category | Icons | What it covers |",
  "|:-:|---|--:|---|",
  ...meta.categories.map((c) => `| <img src="svg/mark/${byCat.get(c.id)[0].name}.svg" width="28" height="28" alt=""> | [${c.title}](#${anchor(c.title)}) | ${c.count} | ${c.summary} |`),
  `| | **All** | **${meta.count}** | |`,
].join("\n");

const COLS = 6;
const gallery = meta.categories.map((c) => {
  const list = byCat.get(c.id);
  const rows = [];
  for (let k = 0; k < list.length; k += COLS) {
    const cells = list.slice(k, k + COLS).map((i) =>
      `<td align="center" width="16%"><img src="svg/mark/${i.name}.svg" width="44" height="44" alt="${esc(i.title)}"><br><sub><b>${esc(i.title)}</b></sub><br><sub><code>${i.name}</code></sub></td>`);
    rows.push(`<tr>\n${cells.join("\n")}\n</tr>`);
  }
  return `### ${c.title}\n\n${c.summary} ${c.count} icons.\n\n<table>\n${rows.join("\n")}\n</table>\n\n<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>`;
}).join("\n\n");

function fill(text, key, content) {
  const re = new RegExp(`(<!-- ${key}:start -->)[\\s\\S]*?(<!-- ${key}:end -->)`);
  if (!re.test(text)) throw new Error(`README marker ${key} missing`);
  return text.replace(re, `$1\n${content}\n$2`);
}

// ── Font demo ─────────────────────────────────────────────────────────────────────────────────────────────────────────
const demo = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Taddicons webfont</title>
<link rel="stylesheet" href="taddicons.css">
<style>
  body { margin: 0; font: 15px/1.5 Inter, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; color: #161616; background: #fff; }
  header { padding: 40px 24px 8px; max-width: 1200px; margin: 0 auto; }
  h1 { margin: 0 0 4px; font-size: 28px; } h2 { font-size: 17px; margin: 32px 0 12px; }
  p { margin: 0; color: #5c5c5c; }
  main { max-width: 1200px; margin: 0 auto; padding: 0 24px 64px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
  .cell { border: 1px solid #ececec; border-radius: 12px; padding: 16px 8px 10px; text-align: center; }
  .cell .ti { font-size: 32px; }
  .cell code { display: block; margin-top: 8px; font-size: 11px; color: #5c5c5c; word-break: break-all; }
  .cell small { display: block; font-size: 11px; color: #9a9a9a; }
</style>
</head>
<body>
<header>
  <h1><i class="ti ti-mark ti-${meta.icons[0].name}"></i> Taddicons webfont</h1>
  <p>${meta.count} icons. Use <code>&lt;i class="ti ti-name"&gt;&lt;/i&gt;</code>, the code point, or the ligature (the icon's name as text).</p>
</header>
<main>
${meta.categories.map((c) => `<h2>${esc(c.title)} (${c.count})</h2>\n<div class="grid">\n${byCat.get(c.id).map((i) => `<div class="cell"><i class="ti ti-${i.name}" title="${esc(i.title)}"></i><code>ti-${i.name}</code><small>U+${i.unicode.toUpperCase()}</small></div>`).join("\n")}\n</div>`).join("\n")}
</main>
</body>
</html>
`;

await writeFile(join(ROOT, "assets/banner-light.svg"), banner(false));
await writeFile(join(ROOT, "assets/banner-dark.svg"), banner(true));
await writeFile(join(ROOT, "font/demo.html"), demo);
let readme = await readFile(join(ROOT, "README.md"), "utf8");
readme = fill(readme, "categories", categoriesTable);
readme = fill(readme, "gallery", gallery);
await writeFile(join(ROOT, "README.md"), readme);
console.log(`docs: banner, README (${meta.categories.length} categories, ${meta.count} icons), font/demo.html`);
