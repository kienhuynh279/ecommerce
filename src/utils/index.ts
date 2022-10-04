import { APP_LANG_DEFAULT } from './constants';

export const diffArray = <T>(arr1: T[], arr2: T[]): boolean => {
  const outside1 = arr2.filter((a) => arr1.indexOf(a) === -1);
  const outside2 = arr1.filter((a) => arr2.indexOf(a) === -1);
  return !!outside1.length || !!outside2.length;
};

export const getLang = () => {
  return (
    window.localStorage.i18nextLng ?? document.querySelector('html')?.lang ?? APP_LANG_DEFAULT.code
  );
};
