import { AnyAction, ReducersMapObject } from '@reduxjs/toolkit';
import AppReducer from 'features/app/slice';
import AuthReducer from 'features/auth/slice';
import { RootState } from 'types';

const reducer: ReducersMapObject<RootState, AnyAction> = {
  auth: AuthReducer,
  app: AppReducer,
};

export default reducer;
