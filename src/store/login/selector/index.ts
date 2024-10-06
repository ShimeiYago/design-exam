import { RootState } from 'store';

type LoginRootState = Pick<RootState, 'login'>;

export const selectIsLoggedIn = (state: LoginRootState) => state.login.isloggedIn;

export const selectEmail = (state: LoginRootState) => state.login.email;
