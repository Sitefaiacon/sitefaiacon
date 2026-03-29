import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  const inputPath = path.join(__dirname, '../public/logo-faiacon.png');
  const outputPath = path.join(__dirname, '../public/favicon.ico');
  
  try {
    // Read the source image
    const inputBuffer = await fs.readFile(inputPath);
    
    // Generate 48x48 PNG (standard favicon size for Google)
    const pngBuffer = await sharp(inputBuffer)
      .resize(48, 48, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // For simplicity, we'll save as PNG with .ico extension
    // Modern browsers handle this well, and Google prefers PNG anyway
    await fs.writeFile(outputPath, pngBuffer);
    
    console.log('Favicon generated successfully at:', outputPath);
    
    // Also generate a 32x32 version for better compatibility
    const favicon32 = await sharp(inputBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    await fs.writeFile(path.join(__dirname, '../public/favicon-32x32.png'), favicon32);
    console.log('32x32 favicon generated successfully');
    
    // Generate 16x16 version
    const favicon16 = await sharp(inputBuffer)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    await fs.writeFile(path.join(__dirname, '../public/favicon-16x16.png'), favicon16);
    console.log('16x16 favicon generated successfully');
    
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
