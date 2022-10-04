import { ComponentType, ReactNode } from 'react';

export interface Badge {
  color: string;
  value: string;
}

export interface Route {
  children?: Route[];
  icon?: ReactNode;
  name?: string;
  path?: string;
  element?: ComponentType<any> | null;
  iconText?: string;
  label?: string;
  component?: ComponentType<any> | null;
  badge?: Badge;
  auth?: string[];
  type?: string;
  exact?: boolean;
  isRoute?: boolean;
}
