import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { IAppState } from 'types/app';

const initialState: IAppState = {
  sidebar: {
    show: true,
  },
};

const AppSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.show = !state.sidebar.show;
    },
  },
});

export const handleSidebar = AppSlice.actions.toggleSidebar;

export const getShowSidebar = (state: RootState) => state.app.sidebar.show;

const AppReducer = AppSlice.reducer;
export default AppReducer;
