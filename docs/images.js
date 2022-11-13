(() => {

  const bucketUrl = 'https://tybro0103-honeymoon.s3.amazonaws.com/images';

  const images = [
    {key: '1', urlSmall: '/small/01.png', urlLarge: '/large/01.png', urlOrig: '/orig/01.png'},
    {key: '2', urlSmall: '/small/02.jpeg', urlLarge: '/large/02.jpeg', urlOrig: '/orig/02.jpeg'},
    {key: '3', urlSmall: '/small/03.jpeg', urlLarge: '/large/03.jpeg', urlOrig: '/orig/03.jpeg'},
    {key: '4', urlSmall: '/small/04.jpeg', urlLarge: '/large/04.jpeg', urlOrig: '/orig/04.jpeg'},
    {key: '5', urlSmall: '/small/05.jpeg', urlLarge: '/large/05.jpeg', urlOrig: '/orig/05.jpeg'},
    {key: '6', urlSmall: '/small/06.jpeg', urlLarge: '/large/06.jpeg', urlOrig: '/orig/06.jpeg'},
    {key: '7', urlSmall: '/small/07.jpeg', urlLarge: '/large/07.jpeg', urlOrig: '/orig/07.jpeg'},
    {key: '8', urlSmall: '/small/08.jpeg', urlLarge: '/large/08.jpeg', urlOrig: '/orig/08.jpeg'},
    {key: '9', urlSmall: '/small/09.jpeg', urlLarge: '/large/09.jpeg', urlOrig: '/orig/09.jpeg'},
    {key: '10', urlSmall: '/small/10.jpeg', urlLarge: '/large/10.jpeg', urlOrig: '/orig/10.jpeg'},
    {key: '11', urlSmall: '/small/11.jpeg', urlLarge: '/large/11.jpeg', urlOrig: '/orig/11.jpeg'},
    {key: '12', urlSmall: '/small/12.jpeg', urlLarge: '/large/12.jpeg', urlOrig: '/orig/12.jpeg'},
    {key: '13', urlSmall: '/small/13.jpeg', urlLarge: '/large/13.jpeg', urlOrig: '/orig/13.jpeg'},
    {key: '14', urlSmall: '/small/14.jpeg', urlLarge: '/large/14.jpeg', urlOrig: '/orig/14.jpeg'},
    {key: '15', urlSmall: '/small/15.jpeg', urlLarge: '/large/15.jpeg', urlOrig: '/orig/15.jpeg'},
    {key: '16', urlSmall: '/small/16.jpeg', urlLarge: '/large/16.jpeg', urlOrig: '/orig/16.jpeg'},
    {key: '17', urlSmall: '/small/17.jpeg', urlLarge: '/large/17.jpeg', urlOrig: '/orig/17.jpeg'},
    {key: '18', urlSmall: '/small/18.jpeg', urlLarge: '/large/18.jpeg', urlOrig: '/orig/18.jpeg'},
    {key: '19', urlSmall: '/small/19.jpeg', urlLarge: '/large/19.jpeg', urlOrig: '/orig/19.jpeg'},
    {key: '20', urlSmall: '/small/20.jpeg', urlLarge: '/large/20.jpeg', urlOrig: '/orig/20.jpeg'},
    {key: '21', urlSmall: '/small/21.jpeg', urlLarge: '/large/21.jpeg', urlOrig: '/orig/21.jpeg'},
    {key: '22', urlSmall: '/small/22.jpeg', urlLarge: '/large/22.jpeg', urlOrig: '/orig/22.jpeg'},
    {key: '23', urlSmall: '/small/23.jpeg', urlLarge: '/large/23.jpeg', urlOrig: '/orig/23.jpeg'},
    {key: '24', urlSmall: '/small/24.jpeg', urlLarge: '/large/24.jpeg', urlOrig: '/orig/24.jpeg'},
    {key: '25', urlSmall: '/small/25.jpeg', urlLarge: '/large/25.jpeg', urlOrig: '/orig/25.jpeg'},
    {key: '26', urlSmall: '/small/26.jpeg', urlLarge: '/large/26.jpeg', urlOrig: '/orig/26.jpeg'},
    {key: '27', urlSmall: '/small/27.jpeg', urlLarge: '/large/27.jpeg', urlOrig: '/orig/27.jpeg'},
    {key: '28', urlSmall: '/small/28.jpeg', urlLarge: '/large/28.jpeg', urlOrig: '/orig/28.jpeg'},
    {key: '29', urlSmall: '/small/29.jpeg', urlLarge: '/large/29.jpeg', urlOrig: '/orig/29.jpeg'},
    {key: '30', urlSmall: '/small/30.jpeg', urlLarge: '/large/30.jpeg', urlOrig: '/orig/30.jpeg'},
    {key: '31', urlSmall: '/small/31.jpeg', urlLarge: '/large/31.jpeg', urlOrig: '/orig/31.jpeg'},
    {key: '32', urlSmall: '/small/32.jpeg', urlLarge: '/large/32.jpeg', urlOrig: '/orig/32.jpeg'},
    {key: '33', urlSmall: '/small/33.jpeg', urlLarge: '/large/33.jpeg', urlOrig: '/orig/33.jpeg'},
    {key: '34', urlSmall: '/small/34.jpeg', urlLarge: '/large/34.jpeg', urlOrig: '/orig/34.jpeg'},
    {key: '35', urlSmall: '/small/35.jpeg', urlLarge: '/large/35.jpeg', urlOrig: '/orig/35.jpeg'},
    {key: '36', urlSmall: '/small/36.jpeg', urlLarge: '/large/36.jpeg', urlOrig: '/orig/36.jpeg'},
    {key: '37', urlSmall: '/small/37.jpeg', urlLarge: '/large/37.jpeg', urlOrig: '/orig/37.jpeg'},
    {key: '38', urlSmall: '/small/38.jpeg', urlLarge: '/large/38.jpeg', urlOrig: '/orig/38.jpeg'},
    {key: '39', urlSmall: '/small/39.jpeg', urlLarge: '/large/39.jpeg', urlOrig: '/orig/39.jpeg'},
    {key: '40', urlSmall: '/small/40.jpeg', urlLarge: '/large/40.jpeg', urlOrig: '/orig/40.jpeg'},
    {key: '41', urlSmall: '/small/41.jpeg', urlLarge: '/large/41.jpeg', urlOrig: '/orig/41.jpeg'},
    {key: '42', urlSmall: '/small/42.jpeg', urlLarge: '/large/42.jpeg', urlOrig: '/orig/42.jpeg'},
    {key: '43', urlSmall: '/small/43.jpeg', urlLarge: '/large/43.jpeg', urlOrig: '/orig/43.jpeg'},
    {key: '44', urlSmall: '/small/44.jpeg', urlLarge: '/large/44.jpeg', urlOrig: '/orig/44.jpeg'},
    {key: '45', urlSmall: '/small/45.jpeg', urlLarge: '/large/45.jpeg', urlOrig: '/orig/45.jpeg'},
    {key: '46', urlSmall: '/small/46.jpeg', urlLarge: '/large/46.jpeg', urlOrig: '/orig/46.jpeg'},
    {key: '47', urlSmall: '/small/47.jpeg', urlLarge: '/large/47.jpeg', urlOrig: '/orig/47.jpeg'},
    {key: '48', urlSmall: '/small/48.jpeg', urlLarge: '/large/48.jpeg', urlOrig: '/orig/48.jpeg'},
    {key: '49', urlSmall: '/small/49.jpeg', urlLarge: '/large/49.jpeg', urlOrig: '/orig/49.jpeg'},
    {key: '50', urlSmall: '/small/50.jpeg', urlLarge: '/large/50.jpeg', urlOrig: '/orig/50.jpeg'},
    {key: '51', urlSmall: '/small/51.jpeg', urlLarge: '/large/51.jpeg', urlOrig: '/orig/51.jpeg'},
    {key: '52', urlSmall: '/small/52.jpeg', urlLarge: '/large/52.jpeg', urlOrig: '/orig/52.jpeg'},
    {key: '53', urlSmall: '/small/53.jpeg', urlLarge: '/large/53.jpeg', urlOrig: '/orig/53.jpeg'},
    {key: '54', urlSmall: '/small/54.jpeg', urlLarge: '/large/54.jpeg', urlOrig: '/orig/54.jpeg'},
    {key: '55', urlSmall: '/small/55.jpeg', urlLarge: '/large/55.jpeg', urlOrig: '/orig/55.jpeg'},
    {key: '56', urlSmall: '/small/56.jpeg', urlLarge: '/large/56.jpeg', urlOrig: '/orig/56.jpeg'},
    {key: '57', urlSmall: '/small/57.jpeg', urlLarge: '/large/57.jpeg', urlOrig: '/orig/57.jpeg'},
    {key: '58', urlSmall: '/small/58.jpeg', urlLarge: '/large/58.jpeg', urlOrig: '/orig/58.jpeg'},
    {key: '59', urlSmall: '/small/59.jpeg', urlLarge: '/large/59.jpeg', urlOrig: '/orig/59.jpeg'},
    {key: '60', urlSmall: '/small/60.jpeg', urlLarge: '/large/60.jpeg', urlOrig: '/orig/60.jpeg'},
    {key: '61', urlSmall: '/small/61.jpeg', urlLarge: '/large/61.jpeg', urlOrig: '/orig/61.jpeg'},
    {key: '62', urlSmall: '/small/62.jpeg', urlLarge: '/large/62.jpeg', urlOrig: '/orig/62.jpeg'},
    {key: '63', urlSmall: '/small/63.jpeg', urlLarge: '/large/63.jpeg', urlOrig: '/orig/63.jpeg'},
    {key: '64', urlSmall: '/small/64.jpeg', urlLarge: '/large/64.jpeg', urlOrig: '/orig/64.jpeg'},
    {key: '65', urlSmall: '/small/65.jpeg', urlLarge: '/large/65.jpeg', urlOrig: '/orig/65.jpeg'},
    {key: '66', urlSmall: '/small/66.jpeg', urlLarge: '/large/66.jpeg', urlOrig: '/orig/66.jpeg'},
  ];

  images.forEach((img) => {
    img.urlSmall = `${bucketUrl}${img.urlSmall}`;
    img.urlLarge = `${bucketUrl}${img.urlLarge}`;
    img.urlOrig = `${bucketUrl}${img.urlOrig}`;
  });

  const ssImageUrl = `${bucketUrl}/tyler-and-marisa.png`;
  const tybroData = {images, ssImageUrl};

  if (typeof window !== 'undefined') {
    window.tybroData = tybroData;
  }

  if (typeof module !== 'undefined') {
    module.exports = tybroData;
  }

})();
