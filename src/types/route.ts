import { ComponentType } from 'react';

export interface Route {
  path: string;
  element: ComponentType<any> | null;
}
