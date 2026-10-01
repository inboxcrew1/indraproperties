const http = require('http');

http.get('http://localhost:3000/', (res) => {
  let body = '';
  res.on('data', chunk => { body += chunk; });
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Contains Next.js default text:', body.includes('To get started'));
    console.log('Contains GharDhundo:', body.includes('GharDhundo'));
    console.log('Contains Hero headline:', body.includes('Find a Place That'));
    console.log('Contains em-dash (\u2014):', body.includes('\u2014'));
    
    const titleMatch = body.match(/<title>([^<]+)<\/title>/);
    console.log('Resolved HTML Title:', titleMatch ? titleMatch[1] : 'No title');
  });
}).on('error', (err) => {
  console.error('Request failed:', err.message);
});
