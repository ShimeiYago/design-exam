import { selectEmail, selectIsLoggedIn } from '..';
import { LoginState } from '../../model';

describe('counter selector', () => {
  const loginState: LoginState = {
    isloggedIn: true,
    email: 'example@example.com',
  };
  const rootState = {
    login: loginState,
  };

  it('selectIsLoggedIn should return isLoggedIn value', () => {
    expect(selectIsLoggedIn(rootState)).toBeTruthy();
  });

  it('selectEmail should return isLoggedIn value', () => {
    expect(selectEmail(rootState)).toBe('example@example.com');
  });
});
