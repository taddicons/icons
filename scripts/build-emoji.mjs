// Write emoji.json: every icon as a message emoji, for an emoji picker and for messages that carry emoji as short codes.
//
//   groups    the picker tabs in order, each with its categories and count
//   emoji     one row per icon: name (the short code is `:<name>:`), title (what screen readers say), group, keywords,
//             and `unicode`, the standard emoji it stands for when there is one (for notifications, emails and other
//             places that cannot show the sticker). The matches live in scripts/emoji-unicode.json.
//
// The drawings are svg/emoji/<name>.svg and sprite/taddicons-emoji.svg (scripts/build-images.mjs).
// usage: node scripts/build-emoji.mjs
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const meta = JSON.parse(await readFile(join(ROOT, "icons.json"), "utf8"));
const unicode = JSON.parse(await readFile(join(ROOT, "scripts/emoji-unicode.json"), "utf8"));

/** Picker tabs, in order. A category not named here lands in "objects"; the documents section is Taddi's own tab. */
const GROUPS = [
  ["faces", "Faces", ["emoji"]],
  ["hands", "Hands", ["hands"]],
  ["people", "People", ["people", "accessibility", "society", "faith"]],
  ["celebrations", "Celebrations", ["celebrations"]],
  ["food", "Food and drink", ["food", "kitchen"]],
  ["animals", "Animals", ["animals", "veterinary"]],
  ["nature", "Nature and weather", ["nature", "weather", "garden", "outdoors", "farming", "energy"]],
  ["travel", "Travel and places", ["transport", "aviation", "maritime", "maps", "buildings"]],
  ["activities", "Activities", ["sports", "games", "instruments", "photo-gear", "crafts"]],
  ["objects", "Objects", []],
  ["taddi", "Taddi", meta.sections.find((s) => s.id === "documents").categories],
];
const groupOf = new Map();
for (const [id, , cats] of GROUPS) for (const c of cats) groupOf.set(c, id);
const rows = meta.icons.map((i) => ({
  name: i.name,
  title: i.title,
  group: groupOf.get(i.category) ?? "objects",
  keywords: i.tags,
  ...(unicode[i.name] ? { unicode: unicode[i.name] } : {}),
}));
const order = new Map(GROUPS.map(([id], k) => [id, k]));
rows.sort((a, b) => order.get(a.group) - order.get(b.group));
const groups = GROUPS.map(([id, title, cats]) => ({
  id,
  title,
  categories: id === "objects" ? meta.categories.map((c) => c.id).filter((c) => !groupOf.has(c)) : cats,
  count: rows.filter((r) => r.group === id).length,
}));
const out = {
  name: "Taddicons emoji",
  version: meta.version,
  style: "White sticker: the shape filled and edged in white, the lines in the Taddi gradient",
  shortcode: ":<name>:",
  count: rows.length,
  groups,
  emoji: rows,
};
await writeFile(join(ROOT, "emoji.json"), JSON.stringify(out, null, 1) + "\n");
console.log(`emoji.json: ${rows.length} emoji in ${groups.length} groups, ${rows.filter((r) => r.unicode).length} with a standard emoji`);
for (const g of groups) console.log(`  ${g.id}: ${g.count}`);
