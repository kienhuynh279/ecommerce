import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { AccountState, User } from 'types/models/Account';

const initialState: AccountState = {
  // user: {
  //   username: 'kienhuynh',
  //   password: '',
  //   reminderLogin: false,
  // },
  user: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const handleLogin = AuthSlice.actions.login;

export const getUserAuth = (state: RootState) => state.auth.user;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;
