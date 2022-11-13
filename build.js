const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const baseHtmlPath = path.join(__dirname, '/docs/base.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const numOfImages = 65;

_.range(1, numOfImages+1).forEach((imgNum) => {
  const imgHtmlPath = path.join(__dirname, `/docs/${imgNum}.html`);
  const imgHtml = baseHtml.replace('<!-- DYNAMIC_HEAD -->', `
    <title>#${imgNum} | ❤️ Tyler & Marisa Brown</title>
    <meta property="og:title" content="#${imgNum} | ❤️ Tyler & Marisa Brown" />
    <meta property="og:image" content="/images/large/DSCF0426-edit-orig.jpeg" />
  `);
  fs.writeFileSync(imgHtmlPath, imgHtml);
  console.log('---- imgHtmlPath', imgHtmlPath);
});

const indexHtmlPath = path.join(__dirname, `/docs/index.html`);
const indexHtml = baseHtml.replace('<!-- DYNAMIC_HEAD -->', `
  <title>❤️ Tyler & Marisa Brown</title>
  <meta property="og:title" content="❤️ Tyler & Marisa Brown" />
  <meta property="og:image" content="/images/large/DSCF0357-edit-orig.jpeg" />
`);
fs.writeFileSync(indexHtmlPath, indexHtml);
