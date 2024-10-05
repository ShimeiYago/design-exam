import { RootState } from 'store';

type ResasDataRootState = Pick<RootState, 'resasData'>;

export const selectEmployEducationTransition = (state: ResasDataRootState) =>
  state.resasData.employEducationTransition;

export const selectLoading = (state: ResasDataRootState) => state.resasData.loading;

export const selectFailed = (state: ResasDataRootState) => state.resasData.failed;
