import Buffer from "buffer";
import { IError, TAuthHeader } from "types";
import { ITokenLocal, IValidate } from "types/base";
import { APP_LANG_DEFAULT, APP_TOKEN_NAME } from "./constants";

export const diffArray = <T,>(arr1: T[], arr2: T[]): boolean => {
  const outside1 = arr2.filter((a) => arr1.indexOf(a) === -1);
  const outside2 = arr1.filter((a) => arr2.indexOf(a) === -1);
  return !!outside1.length || !!outside2.length;
};

export const generateUUID = (): string => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};
const s4 = (): string => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const contentType = (type: string): Record<"Content-Type", string> => {
  return { "Content-Type": type };
};

export const getAuthHeader = (
  token: string,
  type: TAuthHeader = "Bearer"
): Record<"Authorization", string> => {
  return { Authorization: `${type} ${token}` };
};

export const decodeToken = (): ITokenLocal => {
  const UT: ITokenLocal = { token: "", userid: "" };
  let localToken = getStorage(APP_TOKEN_NAME);
  if (!localToken) return UT;

  const parse = Buffer.Buffer.from(localToken, "base64").toString().split(".");
  UT.userid = parse.pop() ?? "";
  UT.token = parse.join(".");
  return UT;
};

export const fixNullToString = <T,>(data: T): T => {
  const rs: Record<string, any> = {};

  for (let v in data) {
    rs[v] = data[v] === null ? "" : data[v];
  }

  return rs as T;
};

export const getStorage = (name: string) => {
  return getLocalItem(name) || getSessionItem(name);
};

export const getSessionItem = (name: string) => {
  let data = sessionStorage.getItem(name);

  try {
    data = JSON.parse(data as string);
  } catch (e) {
    return null;
  }

  return data;
};

export const setSessionItem = (name: string, data: unknown) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};

export const removeSessionItem = (name: string) => {
  sessionStorage.removeItem(name);
};

export const removeStorage = (name: string) => {
  removeLocalItem(name);
  removeSessionItem(name);
};

export const formatPath = (
  path: string,
  ...params: (string | number)[]
): string => {
  if (!path) return path;

  let match = path.match(/:[a-z][a-z\d_]*\??/gi);
  if (!match) return path;

  match
    .map((param) => param.replace(/\?$/, ""))
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(
      (param, index) =>
      (path = path.replace(
        new RegExp(param + "\\??", "gi"),
        (params[index] ?? "").toString()
      ))
    );

  return path;
};

export const stringToBase64 = (str: string): string => {
  return Buffer.Buffer.from(str).toString("base64");
};

export const encodeToken = (UT: ITokenLocal): string => {
  return stringToBase64([UT.token, UT.userid].join("."));
};

export const getSearchPage = (search: string, name: string): number => {
  const params = new URLSearchParams(search);
  const page = Number(params.get(name)) || 1;
  return page < 1 ? 1 : page;
};

export const getQueryString = (
  init: Record<string, string | number | null | undefined>
) => {
  const qs: Record<string, string> = {};
  Object.keys(init).map((k) => {
    const t = typeof init[k];
    switch (t) {
      case "object":
        qs[k] = "";
        break;
      case "string":
      case "number":
        qs[k] = (init[k] as string | number).toString();
        break;
    }
    return k;
  });
  return new URLSearchParams(qs).toString();
};

export const getLang = () => {
  return (
    window.localStorage.i18nextLng ??
    document.querySelector("html")?.lang ??
    APP_LANG_DEFAULT.code
  );
};

export const getLocalItem = (name: string) => {
  let data = localStorage.getItem(name);

  try {
    data = JSON.parse(data as string);
  } catch (e) {
    return null;
  }

  return data;
};

export const dissectionErrors = (data: IError[]) => {
  return data[0].msg;
};

export const getValidate = (message = "", params = {}): IValidate => {
  return { message, params };
};

export const removeLocalItem = (name: string) => {
  localStorage.removeItem(name);
};

export const setLocalItem = (name: string, data: unknown) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const updateDocumentTitle = (title: string) => {
  const current = document.title.split("|").pop()?.trim();
  const newTitle = [title];
  current && newTitle.push(current);
  document.title = newTitle.join(" | ");
};

