import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../model';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isloggedIn = true;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

// reducer
export const loginReducer = loginSlice.reducer;

// actions
export const { login, setEmail } = loginSlice.actions;
