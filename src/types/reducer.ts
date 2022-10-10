import { IAppState } from './app';
import { AccountState } from './models/Account';

export interface RootState {
  auth: AccountState;
  app: IAppState;
}
