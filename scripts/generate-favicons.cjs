/**
 * Script para generar favicons correctamente desde una imagen rectangular.
 *
 * Uso:
 *   1. Colocar tu imagen original en: public/DT-GROWTH-LOGO-DYCI6Arf2.png
 *   2. Ejecutar: node scripts/generate-favicons.cjs
 *
 * Resultado:
 *   - Genera todos los favicons en public/ con fondo transparente
 *   - Centra la imagen original en un lienzo cuadrado
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Configuración
const INPUT_PATH = path.join(__dirname, '../public/DT-GROWTH-LOGO-DYCI6Arf2.png');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Tamaños de favicon a generar
const FAVICON_SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
];

// Tamaños para Android Chrome
const CHROME_SIZES = [
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

// Apple Touch Icon
const APPLE_SIZE = [
  { name: 'apple-touch-icon.png', size: 180 },
];

/**
 * Calcula las dimensiones para escalar la imagen manteniendo proporción
 * y cabiendo dentro del lienzo
 */
function calculateScaledDimensions(imgWidth, imgHeight, maxSize) {
  const scale = Math.min(maxSize / imgWidth, maxSize / imgHeight);
  return {
    width: Math.round(imgWidth * scale),
    height: Math.round(imgHeight * scale)
  };
}

/**
 * Calcula las coordenadas para centrar una imagen dentro de un lienzo cuadrado
 */
function calculateCenteredPosition(imgWidth, imgHeight, canvasSize) {
  const x = Math.floor((canvasSize - imgWidth) / 2);
  const y = Math.floor((canvasSize - imgHeight) / 2);
  return { x, y };
}

/**
 * Genera un favicon cuadrado centrado con fondo transparente
 */
async function generateSquareFavicon(inputPath, outputPath, size) {
  try {
    // Obtener dimensiones de la imagen original
    const metadata = await sharp(inputPath).metadata();
    console.log(`Imagen original: ${metadata.width}x${metadata.height} px`);

    // Calcular dimensiones escaladas (manteniendo proporción)
    const { width: scaledWidth, height: scaledHeight } = calculateScaledDimensions(
      metadata.width,
      metadata.height,
      size // Usar 100% del lienzo para máximo tamaño
    );

    // Calcular posición centrada
    const { x, y } = calculateCenteredPosition(scaledWidth, scaledHeight, size);

    // Redimensionar la imagen primero
    const resizedBuffer = await sharp(inputPath)
      .resize(scaledWidth, scaledHeight, { fit: 'inside' })
      .png()
      .toBuffer();

    // Crear el favicon usando compositing
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparente
      }
    })
    .composite([{
      input: resizedBuffer,
      top: y,
      left: x,
    }])
    .png()
    .toFile(outputPath);

    console.log(`✅ Generado: ${outputPath} (${size}x${size} px, imagen: ${scaledWidth}x${scaledHeight} px)`);
  } catch (error) {
    console.error(`❌ Error generando ${outputPath}:`, error.message);
    throw error;
  }
}

/**
 * Genera un favicon.ico multiresolución
 */
async function generateIco(inputPath, outputPath, sizes = [16, 32, 48]) {
  try {
    const buffers = await Promise.all(
      sizes.map(async (size) => {
        const { width: scaledWidth, height: scaledHeight } = calculateScaledDimensions(
          (await sharp(inputPath).metadata()).width,
          (await sharp(inputPath).metadata()).height,
          size
        );

        const buffer = await sharp(inputPath)
          .resize(scaledWidth, scaledHeight, { fit: 'inside' })
          .png()
          .toBuffer();
        return buffer;
      })
    );

    // Guardar como ICO (PNG concatenation para navegadores modernos)
    fs.writeFileSync(outputPath, Buffer.concat(buffers));
    console.log(`✅ Generado: ${outputPath} (multiresolución: ${sizes.join(', ')} px)`);
  } catch (error) {
    console.error(`❌ Error generando ${outputPath}:`, error.message);
  }
}

/**
 * Función principal
 */
async function main() {
  console.log('🚀 Iniciando generación de favicons...\n');

  // Verificar que existe la imagen de entrada
  if (!fs.existsSync(INPUT_PATH)) {
    console.error(`❌ Error: No se encontró la imagen en ${INPUT_PATH}`);
    console.log('   Por favor, coloca tu imagen original en esa ubicación.');
    return;
  }

  // Crear directorio de salida si no existe
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    // Generar favicons estándar
    console.log('📱 Generando favicons estándar...');
    for (const config of FAVICON_SIZES) {
      await generateSquareFavicon(
        INPUT_PATH,
        path.join(OUTPUT_DIR, config.name),
        config.size
      );
    }

    // Generar iconos para Android Chrome
    console.log('\n🤖 Generando iconos para Android Chrome...');
    for (const config of CHROME_SIZES) {
      await generateSquareFavicon(
        INPUT_PATH,
        path.join(OUTPUT_DIR, config.name),
        config.size
      );
    }

    // Generar Apple Touch Icon
    console.log('\n🍎 Generando Apple Touch Icon...');
    for (const config of APPLE_SIZE) {
      await generateSquareFavicon(
        INPUT_PATH,
        path.join(OUTPUT_DIR, config.name),
        config.size
      );
    }

    // Generar favicon.ico
    console.log('\n🌐 Generando favicon.ico...');
    await generateIco(INPUT_PATH, path.join(OUTPUT_DIR, 'favicon.ico'));

    console.log('\n✨ ¡Favicons generados exitosamente!');
    console.log('\n📋 Para usar los favicons, actualiza tu index.html:');
    console.log('   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />');
    console.log('   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />');
    console.log('   <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />');
    console.log('   <link rel="icon" type="image/ico" href="/favicon.ico" />');
    console.log('   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />');
    console.log('   <link rel="manifest" href="/site.webmanifest" />');

  } catch (error) {
    console.error('\n❌ Error fatal:', error.message);
    process.exit(1);
  }
}

// Ejecutar
main();
