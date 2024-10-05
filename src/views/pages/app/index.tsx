import { useAppSelector } from 'store';
import { selectIsLoggedIn } from 'store/login/selector';
import { LoginPage } from '../login-page';

export function App(): JSX.Element {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) return <LoginPage />;

  return <>Crart Page</>;
}
