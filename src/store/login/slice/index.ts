import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../model';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isloggedIn = true;
    },
  },
});

// reducer
export const loginReducer = loginSlice.reducer;

// actions
export const { login } = loginSlice.actions;
