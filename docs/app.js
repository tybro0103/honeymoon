const images = [
  {key: '1', urlSmall: '/images/small/DSCF0357-edit-orig.jpeg', urlLarge: '/images/large/DSCF0357-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0357-edit-orig.jpeg'},
  {key: '2', urlSmall: '/images/small/DSCF0379-edit-orig.jpeg', urlLarge: '/images/large/DSCF0379-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0379-edit-orig.jpeg'},
  {key: '3', urlSmall: '/images/small/DSCF0426-edit-orig.jpeg', urlLarge: '/images/large/DSCF0426-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0426-edit-orig.jpeg'},
  {key: '4', urlSmall: '/images/small/DSCF0441-edit-orig.jpeg', urlLarge: '/images/large/DSCF0441-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0441-edit-orig.jpeg'},
  {key: '5', urlSmall: '/images/small/DSCF0446-edit-orig.jpeg', urlLarge: '/images/large/DSCF0446-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0446-edit-orig.jpeg'},
  {key: '6', urlSmall: '/images/small/DSCF0470-edit-orig.jpeg', urlLarge: '/images/large/DSCF0470-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0470-edit-orig.jpeg'},
  {key: '7', urlSmall: '/images/small/DSCF0473-edit-orig.jpeg', urlLarge: '/images/large/DSCF0473-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0473-edit-orig.jpeg'},
  {key: '8', urlSmall: '/images/small/DSCF0492-edit-orig.jpeg', urlLarge: '/images/large/DSCF0492-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0492-edit-orig.jpeg'},
  {key: '9', urlSmall: '/images/small/DSCF0499-edit-orig.jpeg', urlLarge: '/images/large/DSCF0499-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0499-edit-orig.jpeg'},
  {key: '10', urlSmall: '/images/small/DSCF0524-edit-orig.jpeg', urlLarge: '/images/large/DSCF0524-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0524-edit-orig.jpeg'},
  {key: '11', urlSmall: '/images/small/DSCF0533-edit-orig.jpeg', urlLarge: '/images/large/DSCF0533-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0533-edit-orig.jpeg'},
  {key: '12', urlSmall: '/images/small/DSCF0598-edit-orig.jpeg', urlLarge: '/images/large/DSCF0598-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0598-edit-orig.jpeg'},
  {key: '13', urlSmall: '/images/small/DSCF0614-edit-orig.jpeg', urlLarge: '/images/large/DSCF0614-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0614-edit-orig.jpeg'},
  {key: '14', urlSmall: '/images/small/DSCF0626-edit-orig.jpeg', urlLarge: '/images/large/DSCF0626-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0626-edit-orig.jpeg'},
  {key: '15', urlSmall: '/images/small/DSCF0633-edit-orig.jpeg', urlLarge: '/images/large/DSCF0633-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0633-edit-orig.jpeg'},
  {key: '16', urlSmall: '/images/small/DSCF0665-edit-orig.jpeg', urlLarge: '/images/large/DSCF0665-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0665-edit-orig.jpeg'},
  {key: '17', urlSmall: '/images/small/DSCF0674-edit-orig.jpeg', urlLarge: '/images/large/DSCF0674-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0674-edit-orig.jpeg'},
  {key: '18', urlSmall: '/images/small/DSCF0676-edit-orig.jpeg', urlLarge: '/images/large/DSCF0676-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0676-edit-orig.jpeg'},
  {key: '19', urlSmall: '/images/small/DSCF0682-edit-orig.jpeg', urlLarge: '/images/large/DSCF0682-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0682-edit-orig.jpeg'},
  {key: '20', urlSmall: '/images/small/DSCF0715-edit-orig.jpeg', urlLarge: '/images/large/DSCF0715-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0715-edit-orig.jpeg'},
  {key: '21', urlSmall: '/images/small/DSCF0743-edit-orig.jpeg', urlLarge: '/images/large/DSCF0743-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0743-edit-orig.jpeg'},
  {key: '22', urlSmall: '/images/small/DSCF0758-edit-orig.jpeg', urlLarge: '/images/large/DSCF0758-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0758-edit-orig.jpeg'},
  {key: '23', urlSmall: '/images/small/DSCF0769-edit-orig.jpeg', urlLarge: '/images/large/DSCF0769-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0769-edit-orig.jpeg'},
  {key: '24', urlSmall: '/images/small/DSCF0786-edit-orig.jpeg', urlLarge: '/images/large/DSCF0786-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0786-edit-orig.jpeg'},
  {key: '25', urlSmall: '/images/small/DSCF0791-edit-orig.jpeg', urlLarge: '/images/large/DSCF0791-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0791-edit-orig.jpeg'},
  {key: '26', urlSmall: '/images/small/DSCF0793-edit-orig.jpeg', urlLarge: '/images/large/DSCF0793-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0793-edit-orig.jpeg'},
  {key: '27', urlSmall: '/images/small/DSCF0809-edit-orig.jpeg', urlLarge: '/images/large/DSCF0809-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0809-edit-orig.jpeg'},
  {key: '28', urlSmall: '/images/small/DSCF0821-edit-orig.jpeg', urlLarge: '/images/large/DSCF0821-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0821-edit-orig.jpeg'},
  {key: '29', urlSmall: '/images/small/DSCF0822-edit-orig.jpeg', urlLarge: '/images/large/DSCF0822-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0822-edit-orig.jpeg'},
  {key: '30', urlSmall: '/images/small/DSCF0836-edit-orig.jpeg', urlLarge: '/images/large/DSCF0836-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0836-edit-orig.jpeg'},
  {key: '31', urlSmall: '/images/small/DSCF0843-edit-orig.jpeg', urlLarge: '/images/large/DSCF0843-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0843-edit-orig.jpeg'},
  {key: '32', urlSmall: '/images/small/DSCF0848-edit-orig.jpeg', urlLarge: '/images/large/DSCF0848-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0848-edit-orig.jpeg'},
  {key: '33', urlSmall: '/images/small/DSCF0854-edit-orig.jpeg', urlLarge: '/images/large/DSCF0854-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0854-edit-orig.jpeg'},
  {key: '34', urlSmall: '/images/small/DSCF0868-edit-orig.jpeg', urlLarge: '/images/large/DSCF0868-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0868-edit-orig.jpeg'},
  {key: '35', urlSmall: '/images/small/DSCF0879-edit-orig.jpeg', urlLarge: '/images/large/DSCF0879-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0879-edit-orig.jpeg'},
  {key: '36', urlSmall: '/images/small/DSCF0886-edit-orig.jpeg', urlLarge: '/images/large/DSCF0886-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0886-edit-orig.jpeg'},
  {key: '37', urlSmall: '/images/small/DSCF0901-edit-orig.jpeg', urlLarge: '/images/large/DSCF0901-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0901-edit-orig.jpeg'},
  {key: '38', urlSmall: '/images/small/DSCF0905-edit-orig.jpeg', urlLarge: '/images/large/DSCF0905-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0905-edit-orig.jpeg'},
  {key: '39', urlSmall: '/images/small/DSCF0926-edit-orig.jpeg', urlLarge: '/images/large/DSCF0926-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0926-edit-orig.jpeg'},
  {key: '40', urlSmall: '/images/small/DSCF0937-edit-orig.jpeg', urlLarge: '/images/large/DSCF0937-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0937-edit-orig.jpeg'},
  {key: '41', urlSmall: '/images/small/DSCF0938-edit-orig.jpeg', urlLarge: '/images/large/DSCF0938-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0938-edit-orig.jpeg'},
  {key: '42', urlSmall: '/images/small/DSCF0946-edit-orig.jpeg', urlLarge: '/images/large/DSCF0946-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0946-edit-orig.jpeg'},
  {key: '43', urlSmall: '/images/small/DSCF0956-edit-orig.jpeg', urlLarge: '/images/large/DSCF0956-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0956-edit-orig.jpeg'},
  {key: '44', urlSmall: '/images/small/DSCF0961-edit-orig.jpeg', urlLarge: '/images/large/DSCF0961-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0961-edit-orig.jpeg'},
  {key: '45', urlSmall: '/images/small/DSCF0965-edit-orig.jpeg', urlLarge: '/images/large/DSCF0965-edit-orig.jpeg', urlOrig: '/images/orig/DSCF0965-edit-orig.jpeg'},
  {key: '46', urlSmall: '/images/small/IMG_2004-edit-orig.jpeg', urlLarge: '/images/large/IMG_2004-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2004-edit-orig.jpeg'},
  {key: '47', urlSmall: '/images/small/IMG_2010-edit-orig.jpeg', urlLarge: '/images/large/IMG_2010-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2010-edit-orig.jpeg'},
  {key: '48', urlSmall: '/images/small/IMG_2015-edit-orig.jpeg', urlLarge: '/images/large/IMG_2015-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2015-edit-orig.jpeg'},
  {key: '49', urlSmall: '/images/small/IMG_2018-edit-orig.jpeg', urlLarge: '/images/large/IMG_2018-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2018-edit-orig.jpeg'},
  {key: '50', urlSmall: '/images/small/IMG_2023-edit-orig.jpeg', urlLarge: '/images/large/IMG_2023-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2023-edit-orig.jpeg'},
  {key: '51', urlSmall: '/images/small/IMG_2058-edit-orig.jpeg', urlLarge: '/images/large/IMG_2058-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2058-edit-orig.jpeg'},
  {key: '52', urlSmall: '/images/small/IMG_2064-edit-orig.jpeg', urlLarge: '/images/large/IMG_2064-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2064-edit-orig.jpeg'},
  {key: '53', urlSmall: '/images/small/IMG_2069-edit-orig.jpeg', urlLarge: '/images/large/IMG_2069-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2069-edit-orig.jpeg'},
  {key: '54', urlSmall: '/images/small/IMG_2074-edit-orig.jpeg', urlLarge: '/images/large/IMG_2074-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2074-edit-orig.jpeg'},
  {key: '55', urlSmall: '/images/small/IMG_2109-edit-orig.jpeg', urlLarge: '/images/large/IMG_2109-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2109-edit-orig.jpeg'},
  {key: '56', urlSmall: '/images/small/IMG_2165-edit-orig.jpeg', urlLarge: '/images/large/IMG_2165-edit-orig.jpeg', urlOrig: '/images/orig/IMG_2165-edit-orig.jpeg'},
  {key: '57', urlSmall: '/images/small/IMG_5135-edit-orig.jpeg', urlLarge: '/images/large/IMG_5135-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5135-edit-orig.jpeg'},
  {key: '58', urlSmall: '/images/small/IMG_5140-edit-orig.jpeg', urlLarge: '/images/large/IMG_5140-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5140-edit-orig.jpeg'},
  {key: '59', urlSmall: '/images/small/IMG_5157-edit-orig.jpeg', urlLarge: '/images/large/IMG_5157-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5157-edit-orig.jpeg'},
  {key: '60', urlSmall: '/images/small/IMG_5160-edit-orig.jpeg', urlLarge: '/images/large/IMG_5160-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5160-edit-orig.jpeg'},
  {key: '61', urlSmall: '/images/small/IMG_5173-edit-orig.jpeg', urlLarge: '/images/large/IMG_5173-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5173-edit-orig.jpeg'},
  {key: '62', urlSmall: '/images/small/IMG_5210-edit-orig.jpeg', urlLarge: '/images/large/IMG_5210-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5210-edit-orig.jpeg'},
  {key: '63', urlSmall: '/images/small/IMG_5212-edit-orig.jpeg', urlLarge: '/images/large/IMG_5212-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5212-edit-orig.jpeg'},
  {key: '64', urlSmall: '/images/small/IMG_5219-edit-orig.jpeg', urlLarge: '/images/large/IMG_5219-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5219-edit-orig.jpeg'},
  {key: '65', urlSmall: '/images/small/IMG_5223-edit-orig.jpeg', urlLarge: '/images/large/IMG_5223-edit-orig.jpeg', urlOrig: '/images/orig/IMG_5223-edit-orig.jpeg' }
];

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
