const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'public', 'brand');

async function processAssets() {
  // 1. Copy with friendly names
  fs.copyFileSync(path.join(brandDir, 'media_1793370786620.jpg'), path.join(brandDir, 'founder-vishal.jpg'));
  fs.copyFileSync(path.join(brandDir, 'media_1793370786661.jpg'), path.join(brandDir, 'bowl-fresh-prep.jpg'));
  fs.copyFileSync(path.join(brandDir, 'media_1793370786746.jpg'), path.join(brandDir, 'protein-adda-logo.jpg'));
  fs.copyFileSync(path.join(brandDir, 'media_1793370786759.jpg'), path.join(brandDir, 'menu-poster.jpg'));

  // Also extract square transparent or cropped versions
  // Menu poster dimensions: 682 width x 1024 height
  // Let's crop:
  // High Protein Oats Bowl: around x: 50, y: 275, width: 300, height: 260
  // Classic Oats Bowl: around x: 380, y: 280, width: 280, height: 250
  // Healthy Sandwich: around x: 35, y: 565, width: 330, height: 200

  // High Protein Oats Bowl crop
  await sharp(path.join(brandDir, 'menu-poster.jpg'))
    .extract({ left: 45, top: 265, width: 290, height: 260 })
    .toFile(path.join(brandDir, 'high-protein-oats-bowl.jpg'));

  // Classic Oats Bowl crop
  await sharp(path.join(brandDir, 'menu-poster.jpg'))
    .extract({ left: 370, top: 275, width: 290, height: 250 })
    .toFile(path.join(brandDir, 'classic-oats-bowl.jpg'));

  // Healthy Sandwich crop
  await sharp(path.join(brandDir, 'menu-poster.jpg'))
    .extract({ left: 30, top: 565, width: 335, height: 200 })
    .toFile(path.join(brandDir, 'healthy-sandwich.jpg'));

  // Also create a cropped hero bowl
  await sharp(path.join(brandDir, 'menu-poster.jpg'))
    .extract({ left: 40, top: 250, width: 310, height: 300 })
    .toFile(path.join(brandDir, 'hero-bowl.jpg'));

  console.log('Successfully organized and cropped all brand assets!');
}

processAssets().catch(console.error);
