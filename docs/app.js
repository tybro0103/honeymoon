const images = [
  {key: '1', urlSmall: '/images/small/01.png', urlLarge: '/images/large/01.png', urlOrig: '/images/orig/01.png'},
  {key: '2', urlSmall: '/images/small/02.jpeg', urlLarge: '/images/large/02.jpeg', urlOrig: '/images/orig/02.jpeg'},
  {key: '3', urlSmall: '/images/small/03.jpeg', urlLarge: '/images/large/03.jpeg', urlOrig: '/images/orig/03.jpeg'},
  {key: '4', urlSmall: '/images/small/04.jpeg', urlLarge: '/images/large/04.jpeg', urlOrig: '/images/orig/04.jpeg'},
  {key: '5', urlSmall: '/images/small/05.jpeg', urlLarge: '/images/large/05.jpeg', urlOrig: '/images/orig/05.jpeg'},
  {key: '6', urlSmall: '/images/small/06.jpeg', urlLarge: '/images/large/06.jpeg', urlOrig: '/images/orig/06.jpeg'},
  {key: '7', urlSmall: '/images/small/07.jpeg', urlLarge: '/images/large/07.jpeg', urlOrig: '/images/orig/07.jpeg'},
  {key: '8', urlSmall: '/images/small/08.jpeg', urlLarge: '/images/large/08.jpeg', urlOrig: '/images/orig/08.jpeg'},
  {key: '9', urlSmall: '/images/small/09.jpeg', urlLarge: '/images/large/09.jpeg', urlOrig: '/images/orig/09.jpeg'},
  {key: '10', urlSmall: '/images/small/10.jpeg', urlLarge: '/images/large/10.jpeg', urlOrig: '/images/orig/10.jpeg'},
  {key: '11', urlSmall: '/images/small/11.jpeg', urlLarge: '/images/large/11.jpeg', urlOrig: '/images/orig/11.jpeg'},
  {key: '12', urlSmall: '/images/small/12.jpeg', urlLarge: '/images/large/12.jpeg', urlOrig: '/images/orig/12.jpeg'},
  {key: '13', urlSmall: '/images/small/13.jpeg', urlLarge: '/images/large/13.jpeg', urlOrig: '/images/orig/13.jpeg'},
  {key: '14', urlSmall: '/images/small/14.jpeg', urlLarge: '/images/large/14.jpeg', urlOrig: '/images/orig/14.jpeg'},
  {key: '15', urlSmall: '/images/small/15.jpeg', urlLarge: '/images/large/15.jpeg', urlOrig: '/images/orig/15.jpeg'},
  {key: '16', urlSmall: '/images/small/16.jpeg', urlLarge: '/images/large/16.jpeg', urlOrig: '/images/orig/16.jpeg'},
  {key: '17', urlSmall: '/images/small/17.jpeg', urlLarge: '/images/large/17.jpeg', urlOrig: '/images/orig/17.jpeg'},
  {key: '18', urlSmall: '/images/small/18.jpeg', urlLarge: '/images/large/18.jpeg', urlOrig: '/images/orig/18.jpeg'},
  {key: '19', urlSmall: '/images/small/19.jpeg', urlLarge: '/images/large/19.jpeg', urlOrig: '/images/orig/19.jpeg'},
  {key: '20', urlSmall: '/images/small/20.jpeg', urlLarge: '/images/large/20.jpeg', urlOrig: '/images/orig/20.jpeg'},
  {key: '21', urlSmall: '/images/small/21.jpeg', urlLarge: '/images/large/21.jpeg', urlOrig: '/images/orig/21.jpeg'},
  {key: '22', urlSmall: '/images/small/22.jpeg', urlLarge: '/images/large/22.jpeg', urlOrig: '/images/orig/22.jpeg'},
  {key: '23', urlSmall: '/images/small/23.jpeg', urlLarge: '/images/large/23.jpeg', urlOrig: '/images/orig/23.jpeg'},
  {key: '24', urlSmall: '/images/small/24.jpeg', urlLarge: '/images/large/24.jpeg', urlOrig: '/images/orig/24.jpeg'},
  {key: '25', urlSmall: '/images/small/25.jpeg', urlLarge: '/images/large/25.jpeg', urlOrig: '/images/orig/25.jpeg'},
  {key: '26', urlSmall: '/images/small/26.jpeg', urlLarge: '/images/large/26.jpeg', urlOrig: '/images/orig/26.jpeg'},
  {key: '27', urlSmall: '/images/small/27.jpeg', urlLarge: '/images/large/27.jpeg', urlOrig: '/images/orig/27.jpeg'},
  {key: '28', urlSmall: '/images/small/28.jpeg', urlLarge: '/images/large/28.jpeg', urlOrig: '/images/orig/28.jpeg'},
  {key: '29', urlSmall: '/images/small/29.jpeg', urlLarge: '/images/large/29.jpeg', urlOrig: '/images/orig/29.jpeg'},
  {key: '30', urlSmall: '/images/small/30.jpeg', urlLarge: '/images/large/30.jpeg', urlOrig: '/images/orig/30.jpeg'},
  {key: '31', urlSmall: '/images/small/31.jpeg', urlLarge: '/images/large/31.jpeg', urlOrig: '/images/orig/31.jpeg'},
  {key: '32', urlSmall: '/images/small/32.jpeg', urlLarge: '/images/large/32.jpeg', urlOrig: '/images/orig/32.jpeg'},
  {key: '33', urlSmall: '/images/small/33.jpeg', urlLarge: '/images/large/33.jpeg', urlOrig: '/images/orig/33.jpeg'},
  {key: '34', urlSmall: '/images/small/34.jpeg', urlLarge: '/images/large/34.jpeg', urlOrig: '/images/orig/34.jpeg'},
  {key: '35', urlSmall: '/images/small/35.jpeg', urlLarge: '/images/large/35.jpeg', urlOrig: '/images/orig/35.jpeg'},
  {key: '36', urlSmall: '/images/small/36.jpeg', urlLarge: '/images/large/36.jpeg', urlOrig: '/images/orig/36.jpeg'},
  {key: '37', urlSmall: '/images/small/37.jpeg', urlLarge: '/images/large/37.jpeg', urlOrig: '/images/orig/37.jpeg'},
  {key: '38', urlSmall: '/images/small/38.jpeg', urlLarge: '/images/large/38.jpeg', urlOrig: '/images/orig/38.jpeg'},
  {key: '39', urlSmall: '/images/small/39.jpeg', urlLarge: '/images/large/39.jpeg', urlOrig: '/images/orig/39.jpeg'},
  {key: '40', urlSmall: '/images/small/40.jpeg', urlLarge: '/images/large/40.jpeg', urlOrig: '/images/orig/40.jpeg'},
  {key: '41', urlSmall: '/images/small/41.jpeg', urlLarge: '/images/large/41.jpeg', urlOrig: '/images/orig/41.jpeg'},
  {key: '42', urlSmall: '/images/small/42.jpeg', urlLarge: '/images/large/42.jpeg', urlOrig: '/images/orig/42.jpeg'},
  {key: '43', urlSmall: '/images/small/43.jpeg', urlLarge: '/images/large/43.jpeg', urlOrig: '/images/orig/43.jpeg'},
  {key: '44', urlSmall: '/images/small/44.jpeg', urlLarge: '/images/large/44.jpeg', urlOrig: '/images/orig/44.jpeg'},
  {key: '45', urlSmall: '/images/small/45.jpeg', urlLarge: '/images/large/45.jpeg', urlOrig: '/images/orig/45.jpeg'},
  {key: '46', urlSmall: '/images/small/46.jpeg', urlLarge: '/images/large/46.jpeg', urlOrig: '/images/orig/46.jpeg'},
  {key: '47', urlSmall: '/images/small/47.jpeg', urlLarge: '/images/large/47.jpeg', urlOrig: '/images/orig/47.jpeg'},
  {key: '48', urlSmall: '/images/small/48.jpeg', urlLarge: '/images/large/48.jpeg', urlOrig: '/images/orig/48.jpeg'},
  {key: '49', urlSmall: '/images/small/49.jpeg', urlLarge: '/images/large/49.jpeg', urlOrig: '/images/orig/49.jpeg'},
  {key: '50', urlSmall: '/images/small/50.jpeg', urlLarge: '/images/large/50.jpeg', urlOrig: '/images/orig/50.jpeg'},
  {key: '51', urlSmall: '/images/small/51.jpeg', urlLarge: '/images/large/51.jpeg', urlOrig: '/images/orig/51.jpeg'},
  {key: '52', urlSmall: '/images/small/52.jpeg', urlLarge: '/images/large/52.jpeg', urlOrig: '/images/orig/52.jpeg'},
  {key: '53', urlSmall: '/images/small/53.jpeg', urlLarge: '/images/large/53.jpeg', urlOrig: '/images/orig/53.jpeg'},
  {key: '54', urlSmall: '/images/small/54.jpeg', urlLarge: '/images/large/54.jpeg', urlOrig: '/images/orig/54.jpeg'},
  {key: '55', urlSmall: '/images/small/55.jpeg', urlLarge: '/images/large/55.jpeg', urlOrig: '/images/orig/55.jpeg'},
  {key: '56', urlSmall: '/images/small/56.jpeg', urlLarge: '/images/large/56.jpeg', urlOrig: '/images/orig/56.jpeg'},
  {key: '57', urlSmall: '/images/small/57.jpeg', urlLarge: '/images/large/57.jpeg', urlOrig: '/images/orig/57.jpeg'},
  {key: '58', urlSmall: '/images/small/58.jpeg', urlLarge: '/images/large/58.jpeg', urlOrig: '/images/orig/58.jpeg'},
  {key: '59', urlSmall: '/images/small/59.jpeg', urlLarge: '/images/large/59.jpeg', urlOrig: '/images/orig/59.jpeg'},
  {key: '60', urlSmall: '/images/small/60.jpeg', urlLarge: '/images/large/60.jpeg', urlOrig: '/images/orig/60.jpeg'},
  {key: '61', urlSmall: '/images/small/61.jpeg', urlLarge: '/images/large/61.jpeg', urlOrig: '/images/orig/61.jpeg'},
  {key: '62', urlSmall: '/images/small/62.jpeg', urlLarge: '/images/large/62.jpeg', urlOrig: '/images/orig/62.jpeg'},
  {key: '63', urlSmall: '/images/small/63.jpeg', urlLarge: '/images/large/63.jpeg', urlOrig: '/images/orig/63.jpeg'},
  {key: '64', urlSmall: '/images/small/64.jpeg', urlLarge: '/images/large/64.jpeg', urlOrig: '/images/orig/64.jpeg'},
  {key: '65', urlSmall: '/images/small/65.jpeg', urlLarge: '/images/large/65.jpeg', urlOrig: '/images/orig/65.jpeg'},
  {key: '66', urlSmall: '/images/small/66.jpeg', urlLarge: '/images/large/66.jpeg', urlOrig: '/images/orig/66.jpeg'},
];

images.forEach((img) => {
  img.urlSmall = `https://tybro0103-honeymoon.s3.amazonaws.com${img.urlSmall}`;
  img.urlLarge = `https://tybro0103-honeymoon.s3.amazonaws.com${img.urlLarge}`;
  img.urlOrig = `https://tybro0103-honeymoon.s3.amazonaws.com${img.urlOrig}`;
});


const imgDirBase = 'images3';

const albEl = document.querySelector('.alb');
const ssEl = document.querySelector('.ss');
const controlsEl = document.querySelector('.ss .ss-controls');
const progressEl = document.querySelector('.ss .ss-progress');
const ssImgEl = document.querySelector('.ss .ss-main-img');
const originalLinkEl = document.querySelector('.original-link');

let size = 'm';
let targetKey = null;
let shown = 'alb'; // one of: alb, ss

const mqlMedium = window.matchMedia('(max-width: 1199px)');
const mqlSmall  = window.matchMedia('(max-width: 749px)');
const onChangeMql = () => {
  const newSize = (() => {
    if (mqlSmall.matches) return 's';
    if (mqlMedium.matches) return 'm';
    return 'l';
  })();
  if (newSize !== size) {
    size = newSize;
    onSizeChange();
  }
};
mqlMedium.addEventListener('change', onChangeMql);
mqlSmall.addEventListener('change', onChangeMql);

const onSizeChange = () => {
  console.log('---- onSizeChange', size);
};

const getRand = (min, max) => {
  const range = max - min;
  return Math.round((Math.random() * range)) + min;
};

const getImgEls = () => {
  return [...document.querySelectorAll('.alb-box img')];
};

const getVisImgEls = () => {
  return [...document.querySelectorAll(`.alb-box.${size} img`)];
};

const getAlbCellEls = () => {
  return [...document.querySelectorAll(`.alb-box:not(.center)`)];
};

const getVisAlbCellEls = () => {
  return [...document.querySelectorAll(`.alb-box:not(.center).${size}`)];
};

const getImg = () => {
  const cellEls = getVisAlbCellEls();
  const imgKeys = cellEls.map((el) => el.getAttribute('data-img-key')).filter(k => k);
  const availImgs = images.filter(img => !imgKeys.includes(img.key));
  const rand = getRand(0, availImgs.length - 1);
  return availImgs[rand];
};

const fade = (el) => {
  el.classList.remove('fade-in');
  setTimeout(() => {
    el.classList.add('fade-in');
  }, 0);  
};

const applyImg = (img, cellEl, animate=false) => {
  const imgEl = cellEl.querySelector('img');
  const aEl = cellEl.querySelector('a');
  imgEl.src = img.urlSmall;
  aEl.href = `${img.key}`;
  cellEl.setAttribute(`data-img-key`, img.key);
  if (animate) fade(imgEl);
};

const startRandomFlipping = () => {
  const flip = () => {
    const cellEls = getVisAlbCellEls();
    const rand = getRand(0, cellEls.length - 1);
    const cellEl = cellEls[rand];
    const img = getImg();
    applyImg(img, cellEl, true);
  };
  setTimeout(() => {
    setInterval(flip, 4000);
    flip();
  }, 1000);
};

const goToImg = (img) => {
  const aEl = document.createElement('a');
  aEl.href = img ? `/${img.key}` : '/';
  document.body.append(aEl);
  aEl.click();
  aEl.remove();
};

const getTargetIndex = () => {
  const targetImg = images.find(img => img.key === targetKey);
  if (!targetImg) return null;
  return images.indexOf(targetImg);
};

const onPressNext = () => {
  const targetIndex = getTargetIndex();
  if (targetIndex == null) return;
  let nextImg = images[targetIndex + 1] || images[0];
  goToImg(nextImg);
};

const onPressPrev = () => {
  const targetIndex = getTargetIndex();
  if (targetIndex == null) return;
  let nextImg = images[targetIndex - 1] || images[images.length - 1];
  goToImg(nextImg);
};

const onPressEscape = () => {
  goToImg(null);
};

const listenForKeys = () => {
  document.addEventListener('keyup', (event) => {
    if (['ArrowRight', 'ArrowDown'].includes(event.code)) onPressNext();
    if (['ArrowLeft', 'ArrowUp'].includes(event.code)) onPressPrev();
    if (event.code === 'Escape') onPressEscape();
  });
};

const hijackLinks = () => {
  const onClick = (event) => {
    const aEl = event.target && event.target.closest('a');
    if (!aEl) return;
    const usePs = aEl.getAttribute('data-use-ps') === 'true';
    if (!usePs) return;
    event.preventDefault();
    const href = aEl.getAttribute('href');
    history.pushState(href, '', href);
  };
  document.addEventListener('click', onClick);
};

// let controlsFlashed = false;
const flashControls = () => {
  // if (controlsFlashed) return;
  // controlsFlashed = true;
  controlsEl.classList.add('open');
  setTimeout(() => {
    controlsEl.classList.remove('open');
  }, 3000);
};

const showAlbum = () => {
  document.body.classList.remove('show-ss');
  document.body.classList.add('show-alb');
  shown = 'alb';
};
const showSlideShow = () => {
  document.body.classList.remove('show-alb');
  document.body.classList.add('show-ss');
  if (shown !== 'ss') flashControls();
  shown = 'ss';
};

const onTargetKeyChange = () => {
  if (targetKey) {
    showSlideShow();

    // update active progress cell
    const activeCellEL = progressEl.querySelector('.ss-progress-cell.active');
    if (activeCellEL) activeCellEL.classList.remove('active');
    // TODO: don't use nth-child
    const newCellEl = progressEl.querySelector(`.ss-progress-cell:nth-child(${targetKey})`);
    if (newCellEl) newCellEl.classList.add('active');

    // update main img el
    const img = images.find(img => img.key === targetKey);
    if (img) {
      originalLinkEl.href = img.urlOrig;
      ssImgEl.src = img.urlLarge;
      fade(ssImgEl);
    }
  } else {
    showAlbum();
  }
};

const listenForTargetChange = () => {
  setInterval(() => {
    const urlKey = window.location.pathname.slice(1);
    const img = images.find(img => img.key === urlKey);
    const newKey = (img && img.key) || null;
    if (targetKey !== newKey) {
      targetKey = newKey;
      onTargetKeyChange();
    }
  }, 50);
};

const listenForRawClick = () => {
  ssImgEl.addEventListener('click', () => {
    originalLinkEl.click();
  });
};

const renderProgress = () => {
  images.forEach((img) => {
    const el = document.createElement('a');
    el.setAttribute('data-img-key', img.key);
    el.setAttribute('data-use-ps', 'true');
    el.classList.add('ss-progress-cell');
    el.href = `/${img.key}`;
    el.textContent = img.key;
    progressEl.append(el);

    // const el2 = document.createElement('a');
    // el2.setAttribute('data-img-key', img.key);
    // el2.classList.add('ss-progress-cell');
    // el2.href = `/${img.key}`;
    // el2.textContent = img.key;
    // progressEl.append(el2);
  });
};

const onReady = () => {
  onChangeMql();

  const cellEls = getAlbCellEls();
  cellEls.forEach((cellEl) => {
    const img = getImg();
    applyImg(img, cellEl);
  });

  hijackLinks();
  startRandomFlipping();
  listenForKeys();
  listenForTargetChange();
  listenForRawClick();
  renderProgress();
};

onReady();
