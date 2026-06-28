const fs = require('fs');

const html = fs.readFileSync('biryanibrews.html', 'utf-8');
const regex = /https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_~]+\.(?:jpg|png|webp|jpeg)/g;
const matches = [...new Set(html.match(regex))];

fs.writeFileSync('src/images.json', JSON.stringify(matches, null, 2));
console.log(`Extracted ${matches.length} unique images.`);
