import { EmployEducationTransitionValue } from 'store/resas-data/model/employ-education-transition-value';
import { TextWrapper } from 'views/components/atoms/text-wrapper';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Spacing } from 'views/components/atoms/spacing';
import { LoadingSpinner } from 'views/components/atoms/loading-spinner';

export function TransitionChart(props: Props): JSX.Element {
  const { data, loading, failed, chartTitle } = props;

  if (loading) {
    return (
      <Spacing paddingVertical="20px" paddingHorizontal="15px">
        <LoadingSpinner />
      </Spacing>
    );
  }

  if (failed) {
    return (
      <Spacing paddingVertical="20px" paddingHorizontal="15px">
        <TextWrapper size="medium" align="center">
          データの取得に失敗しました。しばらくしてから再度お試しください。
        </TextWrapper>
      </Spacing>
    );
  }

  return (
    <Spacing paddingVertical="20px" paddingHorizontal="15px">
      <TextWrapper size="small" bold>
        {chartTitle}
      </TextWrapper>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 15 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: '年', position: 'insideBottom', offset: -10 }} />
          <YAxis
            domain={['dataMin', 'dataMax']}
            label={{ value: '人数 (万人)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <TextWrapper size="xsmall" color="gray" align="right">
        出典：RESAS（地域経済分析システム）
      </TextWrapper>
    </Spacing>
  );
}

export type Props = {
  data: EmployEducationTransitionValue[];
  loading: boolean;
  failed: boolean;
  chartTitle: string;
};
