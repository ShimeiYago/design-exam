import { useAppDispatch, useAppSelector } from 'store';
import { selectEmail, selectIsLoggedIn } from 'store/login/selector';
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
import React from 'react';
import {
  RESAS_CLASSIFICATION_LABELS,
  RESAS_DISPLAY_TYPE_LABELS,
  RESAS_GENDER_LABELS,
  RESAS_MATTER_LABELS,
} from 'views/constants';

export function App(): JSX.Element {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const email = useAppSelector(selectEmail);
  const employEducationTransition = useAppSelector(selectEmployEducationTransition);
  const loading = useAppSelector(selectLoading);
  const failed = useAppSelector(selectFailed);
  const dispatch = useAppDispatch();
  const [chartTitle, setChartTitle] = React.useState('');

  if (!isLoggedIn) return <LoginPage />;

  const sidebar = <FilterForm onChange={handleChangeFilter} disabled={loading} />;

  return (
    <>
      <Header title="タイトル" iconSrc={avatarIcon} emailAddress={email} />
      <PageLayout sidebar={sidebar}>
        <TransitionChart
          data={employEducationTransition}
          loading={loading}
          failed={failed}
          chartTitle={chartTitle}
        />
      </PageLayout>
    </>
  );

  function handleChangeFilter(filter: GetEmployEducationTransitionParams) {
    setChartTitle(
      `${RESAS_CLASSIFICATION_LABELS[filter.classification]}者数の推移（${
        RESAS_MATTER_LABELS[filter.matter]
      }-${RESAS_DISPLAY_TYPE_LABELS[filter.displayType]}-${RESAS_GENDER_LABELS[filter.gender]}）`,
    );

    dispatch(fetchResasData(filter));
  }
}
