export interface LoginState {
  isloggedIn: boolean;
  email: string;
}

export const initialState: LoginState = {
  isloggedIn: false,
  email: '',
};
