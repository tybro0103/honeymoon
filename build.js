const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const tybroData = require('./docs/images');

console.log('----tybroData.images.length', tybroData.images.length);
console.log('----tybroData.ssImageUrl', tybroData.ssImageUrl);

const baseHtmlPath = path.join(__dirname, '/docs/base.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

tybroData.images.forEach((img, index) => {
  const imgHtmlPath = path.join(__dirname, `/docs/${img.key}.html`);
  const imgHtml = baseHtml.replace('<!-- DYNAMIC_HEAD -->', `
    <title>#${img.key} | Tyler & Marisa Brown ❤️</title>
    <meta property="og:title" content="#${img.key} | Tyler & Marisa Brown ❤️" />
    <meta property="og:image" content="${img.urlLarge}" />
  `);
  fs.writeFileSync(imgHtmlPath, imgHtml);
});


const indexHtmlPath = path.join(__dirname, `/docs/index.html`);
const indexHtml = baseHtml.replace('<!-- DYNAMIC_HEAD -->', `
  <title>Tyler & Marisa Brown ❤️</title>
  <meta property="og:title" content="Tyler & Marisa Brown ❤️" />
  <meta property="og:image" content="${tybroData.ssImageUrl}" />
`);
fs.writeFileSync(indexHtmlPath, indexHtml);
