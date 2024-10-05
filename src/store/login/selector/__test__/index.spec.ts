import { selectIsLoggedIn } from '..';
import { LoginState } from '../../model';

describe('counter selector', () => {
  const loginState: LoginState = {
    isloggedIn: true,
  };
  const rootState = {
    login: loginState,
  };

  it('selectIsLoggedIn should return isLoggedIn value', () => {
    expect(selectIsLoggedIn(rootState)).toBeTruthy();
  });
});
