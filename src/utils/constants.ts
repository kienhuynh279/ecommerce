import { ILanguage } from 'types/base';
import backgroundLogin from '../assets/images/background.jpg';

export const LOGOLOGIN = backgroundLogin;

export const APP_LANG_DEFAULT: ILanguage = {
  name: 'Tiếng Việt',
  code: 'vi',
  country_code: 'VN',
};

export const APP_LANGUAGES: ILanguage[] = [
  APP_LANG_DEFAULT,
  {
    name: 'English',
    code: 'en',
    country_code: 'US',
  },
];
