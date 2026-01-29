#!/usr/bin/env node
/**
 * Image pipeline: generate responsive WebP (and optional AVIF) at fixed widths.
 * Widths: 320, 480, 640, 800, 960, 1200
 * Output: img/responsive/{base}-{width}w.webp (and .avif if --avif)
 * Source: img/*.webp (originals kept; outputs go to img/responsive/)
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const WIDTHS = [320, 480, 640, 800, 960, 1200];
const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'img');
const OUT_DIR = path.join(IMG_DIR, 'responsive');
const avif = process.argv.includes('--avif');

function baseName(file) {
  const name = path.basename(file, path.extname(file));
  return name.replace(/\s+/g, '-');
}

async function main() {
  if (!fs.existsSync(IMG_DIR)) {
    console.error('img/ not found');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs.readdirSync(IMG_DIR)
    .filter((f) => f.toLowerCase().endsWith('.webp') && !f.includes('-') && !f.match(/-\d+w\.webp$/));

  console.log(`Processing ${files.length} images → ${OUT_DIR}`);
  if (avif) console.log('AVIF output enabled (--avif)');

  for (const file of files) {
    const base = baseName(file);
    const src = path.join(IMG_DIR, file);

    for (const w of WIDTHS) {
      const outBase = path.join(OUT_DIR, `${base}-${w}w`);

      const pipeline = sharp(src)
        .resize(w, null, { withoutEnlargement: false });

      await pipeline
        .webp({ quality: 82, effort: 4 })
        .toFile(`${outBase}.webp`);

      if (avif) {
        await sharp(src)
          .resize(w, null, { withoutEnlargement: false })
          .avif({ quality: 65, effort: 4 })
          .toFile(`${outBase}.avif`);
      }
    }
    console.log(`  ${file} → ${base}-*w.webp`);
  }

  console.log('\nDisplayed vs delivered (no oversizing):');
  console.log('  Hero: max 640px (50% max-w-7xl) → sizes 640px, srcset 320–1200w');
  console.log('  Portfolio grid: 33vw (~426px) → srcset 320–960w');
  console.log('  Wedding (lg only): 42vw (~533px) → 320–640w');
  console.log('  About: 50vw (~640px) → 320–640w');
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
