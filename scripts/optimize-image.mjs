#!/usr/bin/env node
/**
 * Optimize images for public/images/.
 *
 * next.config.ts sets images.unoptimized (required by output: "export"), so
 * nothing is compressed at build time — whatever lands in public/images/ is
 * exactly what visitors download. Run this on every new photo.
 *
 *   npm run optimize-image public/images/foo.png
 *   npm run optimize-image public/images/*.jpg -- --width 1600 --quality 82
 *
 * Flags:
 *   --width N     max width in px (default 2400; never enlarges)
 *   --quality N   JPEG quality (default 80)
 *   --dry         report what would happen, write nothing
 *
 * Behaviour:
 *   - photographic PNGs (no transparency) are converted to .jpg — PNG is
 *     lossless and roughly 10x too big for photos
 *   - PNGs that actually use transparency stay PNG (logos, badges)
 *   - metadata (EXIF/GPS/XMP/ICC) is always stripped
 *   - JPEGs are written progressive so they paint a low-res pass early
 *   - filenames are slugified: "iscj wedding 1.png" -> "iscj-wedding-1.jpg"
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const argv = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : Number(argv[i + 1]);
};
const MAX_WIDTH = flag("width", 2400);
const QUALITY = flag("quality", 80);
const DRY = argv.includes("--dry");
const files = argv.filter((a) => !a.startsWith("--") && !/^\d+$/.test(a));

if (files.length === 0) {
  console.error("usage: npm run optimize-image <file...> [-- --width N --quality N --dry]");
  process.exit(1);
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
const slug = (s) =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9.-]/g, "").replace(/-+/g, "-");

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`skip (missing): ${file}`);
    continue;
  }

  const before = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));

  // Transparency is the only reason to keep a PNG.
  const keepPng = meta.format === "png" && meta.hasAlpha;
  const ext = keepPng ? ".png" : ".jpg";
  const outName = slug(base) + ext;
  const outPath = path.join(dir, outName);

  const willResize = meta.width > MAX_WIDTH;
  const pipeline = sharp(file)
    .rotate() // bake in EXIF orientation before we strip metadata
    .resize({ width: MAX_WIDTH, withoutEnlargement: true, kernel: "lanczos3" });

  const encoded = keepPng
    ? pipeline.png({ compressionLevel: 9, palette: true })
    : pipeline.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true });

  const note = [
    meta.format === "png" && !meta.hasAlpha ? "png->jpg" : null,
    willResize ? `${meta.width}->${MAX_WIDTH}px` : `${meta.width}px kept`,
    meta.exif || meta.xmp ? "metadata stripped" : null,
    outName !== path.basename(file) ? `renamed ${outName}` : null,
  ].filter(Boolean).join(", ");

  if (DRY) {
    console.log(`${path.basename(file)}\n   ${kb(before)}  [${note}]  (dry run)`);
    continue;
  }

  // Encode to a temp file first so a failure can't destroy the original.
  const tmp = path.join(dir, `.${outName}.tmp`);
  await encoded.toFile(tmp);
  const after = fs.statSync(tmp).size;

  if (after >= before && ext === path.extname(file)) {
    fs.unlinkSync(tmp);
    console.log(`${path.basename(file)}\n   ${kb(before)} — already optimal, left alone`);
    totalBefore += before;
    totalAfter += before;
    continue;
  }

  fs.renameSync(tmp, outPath);
  if (path.resolve(outPath) !== path.resolve(file)) fs.unlinkSync(file);

  const pct = (100 - (after / before) * 100).toFixed(1);
  console.log(`${path.basename(file)} -> ${outName}\n   ${kb(before)} -> ${kb(after)}  (-${pct}%)  [${note}]`);
  totalBefore += before;
  totalAfter += after;
}

if (!DRY && totalBefore > 0) {
  console.log(
    `\ntotal: ${kb(totalBefore)} -> ${kb(totalAfter)}  (-${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}%)`
  );
}
