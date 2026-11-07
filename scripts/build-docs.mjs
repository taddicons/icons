// Build the documentation pieces that come from icons.json:
//   assets/banner-{light,dark}.svg    the README banner
//   README.md                          the section and category tables and the gallery index (between the
//                                      <!-- categories:start/end --> and <!-- gallery:start/end --> markers) and the counts
//   gallery/<category>.md              one gallery page per category (every icon with its name; GitHub renders them)
//   gallery/index.html                 the whole set on one self-contained, searchable page
//   font/demo.html                     every webfont glyph
//
// usage: npm run build:docs
import { readFile, writeFile, mkdir, readdir, unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const meta = JSON.parse(await readFile(join(ROOT, "icons.json"), "utf8"));
const GRADIENT = ["#f76845", "#f25e3a"];
const N = meta.count.toLocaleString("en");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const bodyOf = (svg) => svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
const bodies = new Map();
for (const i of meta.icons) bodies.set(i.name, bodyOf(await readFile(join(ROOT, "svg/outline", `${i.name}.svg`), "utf8")));
const byCat = new Map(meta.categories.map((c) => [c.id, meta.icons.filter((i) => i.category === c.id)]));
const catOf = new Map(meta.categories.map((c) => [c.id, c]));

// ── Banner ────────────────────────────────────────────────────────────────────────────────────────────────────────────
/** 18 icons for the banner: the first icon of each section's categories, taking one category per section in turn. */
function bannerPicks() {
  const queues = meta.sections.map((s) => s.categories.map((id) => byCat.get(id)[0]).filter(Boolean));
  const picks = [];
  for (let k = 0; picks.length < 18 && queues.some((q) => q.length); k = (k + 1) % queues.length) {
    const next = queues[k].shift();
    if (next) picks.push(next);
  }
  return picks;
}
function banner(dark) {
  const W = 1280, H = 420, D = 84, GAP = 16, COLS = 6;
  const ink = dark ? "#f5f5f5" : "#161616";
  const soft = dark ? "#a3a3a3" : "#5c5c5c";
  const bg = dark ? "#121212" : "#ffffff";
  const x0 = W - 56 - (COLS * D + (COLS - 1) * GAP);
  const y0 = (H - (3 * D + 2 * GAP)) / 2;
  const s = (D * 0.6) / 24;
  const marks = bannerPicks().map((icon, k) => {
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
<text x="64" y="288" ${font} font-size="24" fill="${soft}">${N} outline icons in one calm style.</text>
<text x="64" y="324" ${font} font-size="17" fill="${soft}">SVG · Sprite · Webfont · PNG · WebP · AVIF · ICO · MIT</text>
${marks.join("\n")}
</svg>
`;
}

// ── README sections ───────────────────────────────────────────────────────────────────────────────────────────────────
const categoriesTables = meta.sections.map((s) => [
  `### ${s.title}`,
  "",
  `${s.summary} ${s.count.toLocaleString("en")} icons.`,
  "",
  "| | Category | Icons | What it covers |",
  "|:-:|---|--:|---|",
  ...s.categories.map((id) => {
    const c = catOf.get(id);
    return `| <img src="svg/mark/${byCat.get(id)[0].name}.svg" width="28" height="28" alt=""> | [${c.title}](gallery/${id}.md) | ${c.count} | ${c.summary} |`;
  }),
].join("\n")).join("\n\n") + `\n\n**All: ${N} icons in ${meta.categories.length} categories.**`;

const galleryIndex = [
  `Every icon with its name, one page per category. The same set is on [taddicons.com](https://taddicons.com) with search,`,
  `and on one page in [\`gallery/index.html\`](gallery/index.html).`,
  "",
  ...meta.sections.map((s) => `- **${s.title}:** ${s.categories.map((id) => `[${catOf.get(id).title}](gallery/${id}.md)`).join(" · ")}`),
].join("\n");

function fill(text, key, content) {
  const re = new RegExp(`(<!-- ${key}:start -->)[\\s\\S]*?(<!-- ${key}:end -->)`);
  if (!re.test(text)) throw new Error(`README marker ${key} missing`);
  return text.replace(re, `$1\n${content}\n$2`);
}

// ── Gallery pages (Markdown, one per category) ───────────────────────────────────────────────────────────────────────
const COLS = 6;
function galleryPage(c, prev, next) {
  const list = byCat.get(c.id);
  const rows = [];
  for (let k = 0; k < list.length; k += COLS) {
    const cells = list.slice(k, k + COLS).map((i) =>
      `<td align="center" width="16%"><img src="../svg/mark/${i.name}.svg" width="44" height="44" alt="${esc(i.title)}"><br><sub><b>${esc(i.title)}</b></sub><br><sub><code>${i.name}</code></sub></td>`);
    rows.push(`<tr>\n${cells.join("\n")}\n</tr>`);
  }
  const section = meta.sections.find((s) => s.id === c.section);
  const nav = [prev && `[← ${prev.title}](${prev.id}.md)`, `[All categories](../README.md#gallery)`, next && `[${next.title} →](${next.id}.md)`].filter(Boolean).join(" · ");
  return `# ${c.title}\n\n<sub>Taddicons ${meta.version} · ${section.title} · ${c.count} icons</sub>\n\n${c.summary}\n\n<table>\n${rows.join("\n")}\n</table>\n\n${nav}\n`;
}

// ── gallery/index.html (self-contained, searchable) ──────────────────────────────────────────────────────────────────
const galleryHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Taddicons ${meta.version} gallery</title>
<style>
  :root { --bg: #fafafa; --fg: #161616; --muted: #5c5c5c; --card: #fff; --edge: #ececec; --ink: #f25e3a; color-scheme: light dark; }
  @media (prefers-color-scheme: dark) { :root { --bg: #121212; --fg: #f5f5f5; --muted: #a3a3a3; --card: #1b1b1b; --edge: #2a2a2a; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font: 14px/1.45 Inter, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }
  header { position: sticky; top: 0; z-index: 1; background: var(--bg); border-bottom: 1px solid var(--edge); padding: 16px; }
  .wrap { max-width: 1200px; margin: 0 auto; }
  h1 { margin: 0 0 4px; font-size: 22px; } h2 { margin: 36px 0 4px; font-size: 20px; } h3 { margin: 24px 0 10px; font-size: 15px; }
  h3 small, header p { color: var(--muted); font-weight: 400; }
  header p { margin: 0 0 12px; }
  input { width: 100%; padding: 10px 14px; font: inherit; border: 1px solid var(--edge); border-radius: 999px; background: var(--card); color: var(--fg); }
  main { padding: 0 16px 64px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(116px, 1fr)); gap: 8px; }
  .cell { background: var(--card); border: 1px solid var(--edge); border-radius: 12px; padding: 16px 6px 10px; text-align: center; }
  .cell svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 1.35; stroke-linecap: round; stroke-linejoin: round; }
  .cell code { display: block; margin-top: 8px; font-size: 11px; color: var(--muted); word-break: break-all; }
  .cell:hover svg { stroke: var(--ink); }
  [hidden] { display: none !important; }
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
${meta.icons.map((i) => `<symbol id="${i.name}" viewBox="0 0 24 24">${bodies.get(i.name)}</symbol>`).join("\n")}
</svg>
<header><div class="wrap">
  <h1>Taddicons ${meta.version}</h1>
  <p>${N} outline icons in ${meta.categories.length} categories. MIT licensed. <a href="https://taddicons.com">taddicons.com</a></p>
  <input type="search" placeholder="Search ${N} icons" aria-label="Search icons" autofocus>
</div></header>
<main class="wrap">
${meta.sections.map((s) => `<section data-section><h2>${esc(s.title)}</h2>\n${s.categories.map((id) => {
  const c = catOf.get(id);
  return `<div data-cat><h3>${esc(c.title)} <small>${c.count}</small></h3>\n<div class="grid">\n${byCat.get(id).map((i) => `<div class="cell" title="${esc(i.title)}" data-k="${esc([i.name, i.title, ...i.tags].join(" ").toLowerCase())}"><svg aria-hidden="true"><use href="#${i.name}"/></svg><code>${i.name}</code></div>`).join("\n")}\n</div></div>`;
}).join("\n")}</section>`).join("\n")}
</main>
<script>
  const input = document.querySelector("input");
  const cells = [...document.querySelectorAll(".cell")];
  input.addEventListener("input", () => {
    const words = input.value.toLowerCase().trim().split(/\\s+/).filter(Boolean);
    for (const c of cells) c.hidden = !words.every((w) => c.dataset.k.includes(w));
    for (const g of document.querySelectorAll("[data-cat]")) g.hidden = !g.querySelector(".cell:not([hidden])");
    for (const s of document.querySelectorAll("[data-section]")) s.hidden = !s.querySelector("[data-cat]:not([hidden])");
  });
</script>
</body>
</html>
`;

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
  <p>${N} icons. Use <code>&lt;i class="ti ti-name"&gt;&lt;/i&gt;</code>, the code point, or the ligature (the icon's name as text).</p>
</header>
<main>
${meta.categories.map((c) => `<h2>${esc(c.title)} (${c.count})</h2>\n<div class="grid">\n${byCat.get(c.id).map((i) => `<div class="cell"><i class="ti ti-${i.name}" title="${esc(i.title)}"></i><code>ti-${i.name}</code><small>U+${i.unicode.toUpperCase()}</small></div>`).join("\n")}\n</div>`).join("\n")}
</main>
</body>
</html>
`;

await mkdir(join(ROOT, "gallery"), { recursive: true });
for (const f of await readdir(join(ROOT, "gallery"))) if (f.endsWith(".md") && !catOf.has(f.slice(0, -3))) await unlink(join(ROOT, "gallery", f));
const ordered = meta.sections.flatMap((s) => s.categories.map((id) => catOf.get(id)));
for (const [k, c] of ordered.entries()) await writeFile(join(ROOT, "gallery", `${c.id}.md`), galleryPage(c, ordered[k - 1], ordered[k + 1]));
await writeFile(join(ROOT, "gallery/index.html"), galleryHtml);
await writeFile(join(ROOT, "assets/banner-light.svg"), banner(false));
await writeFile(join(ROOT, "assets/banner-dark.svg"), banner(true));
await writeFile(join(ROOT, "font/demo.html"), demo);
let readme = await readFile(join(ROOT, "README.md"), "utf8");
readme = fill(readme, "categories", categoriesTables);
readme = fill(readme, "gallery", galleryIndex);
// The counts in the prose: <!-- count -->…<!-- /count --> and the badge.
readme = readme.replace(/<!-- count -->[\s\S]*?<!-- \/count -->/g, `<!-- count -->${N}<!-- /count -->`);
readme = readme.replace(/<!-- categories-count -->[\s\S]*?<!-- \/categories-count -->/g, `<!-- categories-count -->${meta.categories.length}<!-- /categories-count -->`);
readme = readme.replace(/badge\/icons-[0-9%C,]+-f25e3a/, `badge/icons-${encodeURIComponent(N)}-f25e3a`).replace(/alt="[0-9,]+ icons"/, `alt="${N} icons"`);
await writeFile(join(ROOT, "README.md"), readme);
console.log(`docs: banner, README (${meta.sections.length} sections, ${meta.categories.length} categories, ${N} icons), ${ordered.length} gallery pages, gallery/index.html, font/demo.html`);
