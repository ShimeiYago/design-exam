import { useAppSelector } from 'store';
import { selectIsLoggedIn } from 'store/login/selector';
import { LoginPage } from '../login-page';
import { Header } from 'views/components/organisms/header';
import avatarIcon from 'images/Avatar.svg';
import { PageLayout } from 'views/components/organisms/page-layout';

export function App(): JSX.Element {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) return <LoginPage />;

  return (
    <>
      <Header title="タイトル" iconSrc={avatarIcon} emailAddress={'xxx'} />
      <PageLayout sidebar={'sidebar'}>Chart</PageLayout>
    </>
  );
}
