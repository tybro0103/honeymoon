const images = tybroData.images;

const albEl = document.querySelector('.alb');
const ssEl = document.querySelector('.ss');
const controlsEl = document.querySelector('.ss .ss-controls');
const progressEl = document.querySelector('.ss .ss-progress');
const ssImgEl = document.querySelector('.ss .ss-main-img');
const originalLinkEl = document.querySelector('.original-link');

let size = 'm';
let targetKey = null;
let shown = 'alb'; // one of: alb, ss
let isPlaying = false;

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
    // onSizeChange();
  }
};
mqlMedium.addEventListener('change', onChangeMql);
mqlSmall.addEventListener('change', onChangeMql);

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
  const availImgs = images.filter(img => (!imgKeys.includes(img.key) && !img.hideAlbum));
  const rand = getRand(0, availImgs.length - 1);
  return availImgs[rand];
};

const fade = (el) => {
  el.classList.remove('fade-in');
  setTimeout(() => {
    el.classList.add('fade-in');
  }, 5);
};

const fadeSsImg = (el) => {
  el.classList.remove('fade-in');
  setTimeout(() => {
    ssImgEl.style.display = 'block';
    el.classList.add('fade-in');
  }, 20);
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
  aEl.setAttribute('data-use-ps', 'true');
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

const goToNext = () => {
  const targetIndex = getTargetIndex();
  if (targetIndex == null) return;
  let nextImg = images[targetIndex + 1] || images[0];
  goToImg(nextImg);
};

const goToPrev = () => {
  const targetIndex = getTargetIndex();
  if (targetIndex == null) return;
  let nextImg = images[targetIndex - 1] || images[images.length - 1];
  goToImg(nextImg);
};

const onPressNext = () => {
  if (isPlaying) autoPlay();
  goToNext();
};

const onPressPrev = () => {
  if (isPlaying) autoPlay();
  goToPrev();
};

const onPressPlay = () => {
  controlsEl.classList.remove('playing-no');
  controlsEl.classList.add('playing-yes');
  isPlaying = true;
  autoPlay();
};

const onPressPause = () => {
  controlsEl.classList.remove('playing-yes');
  controlsEl.classList.add('playing-no');
  isPlaying = false;
};

const onPressDownload = () => {
  console.log('onPressDownload');
  originalLinkEl.click();
};

const onPressEscape = () => {
  goToImg(null);
};

const onSsImgLoad = () => {
  console.log('------onSsImgLoad');
  fadeSsImg(ssImgEl);
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

const flashControls = () => {
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
      ssImgEl.style.display = 'none';
      ssImgEl.src = img.urlLarge;
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

let apInternal;
const autoPlay = () => {
  clearInterval(apInternal);
  apInternal = setInterval(() => {
    if (isPlaying) goToNext();
  }, 5000);
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
  });
};

// const handleStupidMobileHeightBug = () => {
//   const onResize = () => {
//     document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
//   };
//   setInterval(() => {
//     onResize();
//   }, 100);
//   onResize();
//   // window.addEventListener('resize', onResize);
// };

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
  // listenForRawClick();
  renderProgress();
  // handleStupidMobileHeightBug();
};

onReady();
