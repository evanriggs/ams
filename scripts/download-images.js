const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash photo IDs for seafood products (free to use, no API key needed)
const imageMap = {
  'shrimp.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'grouper.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'tuna.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'snapper.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'mahi.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'snowcrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'stonecrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'bluecrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'swordfish.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'lobster.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'oysters.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'triggerfish.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'seabass.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'scallops.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'wahoo.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'cobia.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
};

// Better image URLs with specific seafood photos
const betterImageMap = {
  'shrimp.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'grouper.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'tuna.jpg': 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&q=80',
  'snapper.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'mahi.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'snowcrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'stonecrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'bluecrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'swordfish.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'lobster.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'oysters.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'triggerfish.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'seabass.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'scallops.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80',
  'wahoo.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'cobia.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
  
  // Ensure directory exists
  if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true });
  }

  console.log('Downloading product images...');
  
  // Using Unsplash with specific photo IDs for seafood products
  // These are free to use under Unsplash license
  const imageUrls = {
    'shrimp.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'grouper.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'tuna.jpg': 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&q=80&fit=crop',
    'snapper.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'mahi.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'snowcrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'stonecrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'bluecrab.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'swordfish.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'lobster.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'oysters.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'triggerfish.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'seabass.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'scallops.jpg': 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80&fit=crop',
    'wahoo.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
    'cobia.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop',
  };

  const promises = Object.entries(imageUrls).map(async ([filename, url]) => {
    const filepath = path.join(productsDir, filename);
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Downloaded ${filename}`);
    } catch (error) {
      console.error(`✗ Failed to download ${filename}:`, error.message);
    }
  });

  await Promise.all(promises);
  console.log('\nAll images downloaded!');
}

downloadAllImages().catch(console.error);

