import { IError } from "types";
import { ILanguage } from "types/base";

export const API_BASE_URL = "/api/v1";

export const API_KEY = '';

export const APP_AUTH_ENABLE = false;

export const APP_COUNTRY_DEFAULT = 'VN';

export const APP_DATE_FORMAT = 'DD/MM/YYYY';

export const APP_DATE_FORMAT_ISO= "YYYY-MM-DD";

export const APP_NOTIFICATION_MAX_STACK = 5;

export const APP_NOTIFICATION_VERTICAL = 'top'; // top | bottom

export const APP_NOTIFICATION_HORIZONTAL = 'right'; // left | center | right

export const APP_LANG_DEFAULT: ILanguage = {
  name: "Tiếng Việt",
  code: "vi",
  country_code: "VN"
};

export const APP_LANGUAGES: ILanguage[] = [
  APP_LANG_DEFAULT,
  {
    name: 'English',
    code: 'en',
    country_code: 'US'
  }
];
export const APP_SESSION_TIMEOUT = 900000; // 15 minutes
export const APP_TOKEN_NAME = "accessToken";
export const USER_CURRENT = "user";
export const ON_FETCH_ERROR = [
  {
    detail: "Cannot send request.",
    msg: "ERR_CANNOT_SEND_REQUEST",
    loc: "FETCH"
  }
] as IError[];

export const ON_FETCH_BAD_REQUEST = [
  {
    detail: "Bad request.",
    msg: "ERR_BAD_REQUEST",
    loc: "FETCH"
  }
] as IError[];

export const ON_PARSE_ERROR = [
  {
    loc: "PARSE",
    msg: "Parse_Response_failure",
    detail: "Parse response failure"
  }
] as IError[];

export const ON_RESPONSE_ERROR = [
  {
    loc: "RESPONSE",
    msg: "Result_Response_failure",
    detail: "Result response failure"
  }
] as IError[];

export const DEFAULT_TOTAL_RECORD = 0
export const DEFAULT_LIMIT = 20
export const DEFAULT_PAGE = 1
export const DEFAULT_TOTAL_PAGE = 0

export enum ETypeDeletedRecord {
  TEMPORARY_RECORD = "TEMPORARY_RECORD",
  API_RECORD = "API_RECORD"
} 