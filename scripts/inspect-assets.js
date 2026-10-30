const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'public', 'brand');

async function run() {
  const files = fs.readdirSync(brandDir);
  for (const f of files) {
    if (f.endsWith('.jpg')) {
      const meta = await sharp(path.join(brandDir, f)).metadata();
      console.log(`${f} -> Width: ${meta.width}, Height: ${meta.height}`);
    }
  }
}

run().catch(console.error);
