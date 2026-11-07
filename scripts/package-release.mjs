// Pack the raster formats for the GitHub release: release/taddicons-<version>-{png,webp,avif,ico}.zip.
// The raster files are built by build-images.mjs and kept out of git (about a gigabyte at this size of set).
//
// usage: npm run release     then attach release/*.zip to the GitHub release v<version>
import { readFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const { version } = JSON.parse(await readFile(join(ROOT, "icons.json"), "utf8"));
const OUT = join(ROOT, "release");
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
for (const format of ["png", "webp", "avif", "ico"]) {
  if (!existsSync(join(ROOT, format))) throw new Error(`${format}/ is missing: run npm run build:images first`);
  const zip = join(OUT, `taddicons-${version}-${format}.zip`);
  const r = spawnSync("zip", ["-qr", "-X", zip, format, "LICENSE"], { cwd: ROOT, stdio: "inherit" });
  if (r.status !== 0) throw new Error(`zip ${format} failed`);
  const size = spawnSync("du", ["-h", zip], { encoding: "utf8" }).stdout.split("\t")[0];
  console.log(`${zip.slice(ROOT.length + 1)}  ${size}`);
}
