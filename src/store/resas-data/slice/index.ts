import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../model';
import { EmployEducationTransitionValue } from '../model/employ-education-transition-value';

export const resasDataSlice = createSlice({
  name: 'resasData',
  initialState,
  reducers: {
    setEmployEducationTransition(state, action: PayloadAction<EmployEducationTransitionValue[]>) {
      state.employEducationTransition = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setFailed(state, action: PayloadAction<boolean>) {
      state.failed = action.payload;
    },
  },
});

// reducer
export const resasDataReducer = resasDataSlice.reducer;

// actions
export const { setEmployEducationTransition, setLoading, setFailed } = resasDataSlice.actions;
