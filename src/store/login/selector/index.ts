import { RootState } from 'store';

type LoginRootState = Pick<RootState, 'login'>;

export const selectIsLoggedIn = (state: LoginRootState) => state.login.isloggedIn;
