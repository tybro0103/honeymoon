const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../images3/large');

console.log('-----dirPath', dirPath);

fs.readdir(dirPath, (error, fileNames) => {
  imgFileNames = fileNames.filter((fn) => fn.endsWith('.jpeg'));

  const imgs = imgFileNames.map((fn, i) => {
    return {
      key: i + 1,
      pathSmall: `small/${fn}`,
      pathLarge: `large/${fn}`,
      pathOrig:  `orig/${fn}`,
    };
  });

  console.log('---- imgs', imgs);
});



