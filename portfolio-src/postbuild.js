import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('dist');
const destDir = path.resolve('../');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    // If it's a file, copy it, overwriting existing
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${path.relative(srcDir, src)} -> ${path.relative(destDir, dest)}`);
  }
}

try {
  console.log('Running post-build copy script...');
  if (fs.existsSync(srcDir)) {
    copyRecursiveSync(srcDir, destDir);
    console.log('Post-build copy completed successfully!');
  } else {
    console.error('Dist directory does not exist! Build might have failed.');
  }
} catch (error) {
  console.error('Error during post-build copy:', error);
  process.exit(1);
}
