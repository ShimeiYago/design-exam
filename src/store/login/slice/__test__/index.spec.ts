import { loginReducer, loginSlice } from '..';
import { LoginState } from '../../model';

const { login } = loginSlice.actions;

describe('login reducer', () => {
  const initialState: LoginState = {
    isloggedIn: false,
  };

  it('should handle initial state', () => {
    expect(loginReducer(undefined, { type: 'unknown' })).toEqual({
      isloggedIn: false,
    });
  });

  it('should handle login action', () => {
    const actual = loginReducer(initialState, login());
    expect(actual.isloggedIn).toBeTruthy();
  });
});
