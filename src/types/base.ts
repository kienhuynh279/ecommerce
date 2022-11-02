export interface ILanguage {
  code: string;
  name: string;
  country_code: string;
}

export interface ITokenLocal {
  token: string;
  userid: string | number;
}

export interface IValidate {
  message: string;
  params: Record<string, any>;
}