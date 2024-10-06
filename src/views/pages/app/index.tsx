import { useAppDispatch, useAppSelector } from 'store';
import { selectIsLoggedIn } from 'store/login/selector';
import { LoginPage } from '../login-page';
import { Header } from 'views/components/organisms/header';
import avatarIcon from 'images/Avatar.svg';
import { PageLayout } from 'views/components/organisms/page-layout';
import { FilterForm } from 'views/components/organisms/filter-form';
import { GetEmployEducationTransitionParams } from 'api/resas/get-employ-education-transition/parameters';
import { fetchResasData } from 'store/resas-data/action';
import {
  selectEmployEducationTransition,
  selectFailed,
  selectLoading,
} from 'store/resas-data/selector';
import { TransitionChart } from 'views/components/organisms/transition-chart';

export function App(): JSX.Element {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const employEducationTransition = useAppSelector(selectEmployEducationTransition);
  const loading = useAppSelector(selectLoading);
  const failed = useAppSelector(selectFailed);
  const dispatch = useAppDispatch();

  if (!isLoggedIn) return <LoginPage />;

  const sidebar = <FilterForm onChange={handleChangeFilter} disabled={loading} />;

  return (
    <>
      <Header title="タイトル" iconSrc={avatarIcon} emailAddress={'xxx'} />
      <PageLayout sidebar={sidebar}>
        <TransitionChart data={employEducationTransition} loading={loading} failed={failed} />
      </PageLayout>
    </>
  );

  function handleChangeFilter(filter: GetEmployEducationTransitionParams) {
    dispatch(fetchResasData(filter));
  }
}
