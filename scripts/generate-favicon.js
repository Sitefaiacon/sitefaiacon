import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function generateFavicon() {
  // Use /vercel/share/v0-project as the project root since that's the current working directory
  const projectRoot = '/vercel/share/v0-project';
  const inputPath = path.join(projectRoot, 'public/logo-faiacon.png');
  const outputPath = path.join(projectRoot, 'public/favicon.ico');
  
  try {
    console.log(`[v0] Reading logo from: ${inputPath}`);
    
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
    
    console.log(`[v0] ✓ favicon.ico generated successfully at: ${outputPath}`);
    
    // Also generate a 32x32 version for better compatibility
    const favicon32 = await sharp(inputBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    await fs.writeFile(path.join(projectRoot, 'public/favicon-32x32.png'), favicon32);
    console.log('[v0] ✓ 32x32 favicon generated successfully');
    
    // Generate 16x16 version
    const favicon16 = await sharp(inputBuffer)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    await fs.writeFile(path.join(projectRoot, 'public/favicon-16x16.png'), favicon16);
    console.log('[v0] ✓ 16x16 favicon generated successfully');
    
  } catch (error) {
    console.error('[v0] Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
