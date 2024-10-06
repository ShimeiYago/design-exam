import { loginReducer, loginSlice, setEmail } from '..';
import { LoginState } from '../../model';

const { login } = loginSlice.actions;

describe('login reducer', () => {
  const initialState: LoginState = {
    isloggedIn: false,
    email: '',
  };

  it('should handle initial state', () => {
    expect(loginReducer(undefined, { type: 'unknown' })).toEqual({
      isloggedIn: false,
      email: '',
    });
  });

  it('should handle login action', () => {
    const actual = loginReducer(initialState, login());
    expect(actual.isloggedIn).toBeTruthy();
  });

  it('should handle setEmail action', () => {
    const actual = loginReducer(initialState, setEmail('example@example.com'));
    expect(actual.email).toBe('example@example.com');
  });
});
