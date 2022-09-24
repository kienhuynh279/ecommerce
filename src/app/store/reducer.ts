import { AnyAction, ReducersMapObject } from '@reduxjs/toolkit';
import AuthReducer from 'features/auth/slice';
import { RootState } from 'types';

const reducer: ReducersMapObject<RootState, AnyAction> = {
  auth: AuthReducer,
};

export default reducer;
