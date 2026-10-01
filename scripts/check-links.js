const http = require('http');

const links = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/careers',
  '/advertise',
  '/help',
  '/safety',
  '/cookies',
  '/disclaimer',
  '/listing-guidelines',
  '/buy',
  '/rent',
  '/plots-land',
  '/commercial',
  '/new-projects',
  '/compare',
  '/saved',
  '/tools',
  '/post-property',
  '/login',
  '/register',
  '/dashboard',
  '/my-listings',
  '/enquiries',
  '/admin',
  '/privacy',
  '/terms',
  '/property-in/bulandshahr',
  '/property-in/noida',
  '/property-in/greater-noida',
  '/property-in/delhi',
  '/property-in/gurugram',
  '/property-in/ghaziabad',
  '/property-in/meerut'
];

async function run() {
  const missing = [];
  for (const link of links) {
    await new Promise((resolve) => {
      http.get('http://localhost:3000' + link, (res) => {
        console.log(`[HTTP ${res.statusCode}] ${link}`);
        if (res.statusCode === 404) {
          missing.push(link);
        }
        resolve();
      }).on('error', (err) => {
        console.log(`[ERR] ${link}: ${err.message}`);
        resolve();
      });
    });
  }
  console.log('\n--- Missing Links (404) ---');
  console.log(missing);
}

run();
