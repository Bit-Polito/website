export function getImagePathBasedOnTheme(image, isDark) {
  let BASE_PATH = '/assets/';
  if (typeof document !== 'undefined') {
    if (isDark) {
      image = image.concat('-dark');
    }
    else {
      image = image.concat('-light');
    }
    return BASE_PATH.concat(image).concat('.png');
  }
}