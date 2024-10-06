import { EmployEducationTransitionValue } from 'store/resas-data/model/employ-education-transition-value';
import { TextWrapper } from 'views/components/atoms/text-wrapper';

export function TransitionChart(props: Props): JSX.Element {
  const { data, loading, failed } = props;

  if (loading) {
    return (
      <TextWrapper size="medium" align="center">
        Loading...
      </TextWrapper>
    );
  }

  if (failed) {
    return (
      <TextWrapper size="medium" align="center">
        データの取得に失敗しました。しばらくしてから再度お試しください。
      </TextWrapper>
    );
  }

  return <>{JSON.stringify(data)}</>;
}

export type Props = {
  data: EmployEducationTransitionValue[];
  loading: boolean;
  failed: boolean;
};
