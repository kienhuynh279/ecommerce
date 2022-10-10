import { SxProps, Theme } from '@mui/material';

export type SxBaseApp = SxProps<Theme>;

export interface ISidebar {
  show: boolean;
}

export interface IAppState {
  sidebar: ISidebar;
}
