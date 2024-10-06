import {
  GetEmployEducationTransitionParams,
  ResasClassification,
  ResasDisplayType,
  ResasGender,
  ResasMatter,
} from 'api/resas/get-employ-education-transition/parameters';
import { RadioGroup, Props as RadioGroupProps } from 'views/components/moleculars/radio-group';
import React from 'react';
import { TextWrapper } from 'views/components/atoms/text-wrapper';
import { Spacing } from 'views/components/atoms/spacing';
import { TARGET_PREFECTURE_CD } from 'views/constants';

export function FilterForm(props: Props): JSX.Element {
  const { onChange } = props;
  const [classification, setClassification] = React.useState(ResasClassification.Schooling);
  const [matter, setMatter] = React.useState(ResasMatter.Local);
  const [displayType, setDisplayType] = React.useState(ResasDisplayType.AllSchooling);
  const [gender, setGender] = React.useState(ResasGender.All);
  const [isInitialRendered, setIsInitialRendered] = React.useState(false);

  React.useEffect(() => {
    onChange({
      classification,
      matter,
      displayType,
      gender,
      prefectureCd: TARGET_PREFECTURE_CD,
    });
    setIsInitialRendered(true);
  }, [matter, displayType, gender]);

  React.useEffect(() => {
    // skip if initial rendering timing
    if (!isInitialRendered) return;

    const updatedDisplayType =
      classification === ResasClassification.Schooling
        ? ResasDisplayType.AllSchooling
        : ResasDisplayType.Employment;
    setDisplayType(updatedDisplayType);
  }, [classification]);

  const fields: RadioGroupProps[] = [
    {
      groupLabel: '表示分類',
      options: [
        { value: ResasClassification.Schooling, label: '進学' },
        { value: ResasClassification.Employment, label: '就活' },
      ],
      selectedValue: classification,
      onChange: (e) => setClassification(e.target.value as ResasClassification),
    },
    {
      groupLabel: '進学・就職先',
      options: [
        { value: ResasMatter.Local, label: '地元進学' },
        { value: ResasMatter.Outflow, label: '流出' },
        { value: ResasMatter.Inflow, label: '流入' },
        { value: ResasMatter.NetInflow, label: '純流入' },
      ],
      selectedValue: matter,
      onChange: (e) => setMatter(e.target.value as ResasMatter),
    },
    {
      groupLabel: '表示内容',
      options: getDisplayTypeOptions(),
      selectedValue: displayType,
      onChange: (e) => setDisplayType(e.target.value as ResasDisplayType),
    },
    {
      groupLabel: '性別',
      options: [
        { value: ResasGender.All, label: '総数' },
        { value: ResasGender.Male, label: '男性' },
        { value: ResasGender.Female, label: '女性' },
      ],
      selectedValue: gender,
      onChange: (e) => setGender(e.target.value as ResasGender),
    },
  ];

  return (
    <Spacing paddingHorizontal="32px" paddingVertical="24px">
      <TextWrapper size="medium" bold color="gray">
        フィルター
      </TextWrapper>
      {fields.map((radioGroupProps) => (
        <Spacing marginTop="32px" key={`filtering-${radioGroupProps.groupLabel}`}>
          <RadioGroup {...radioGroupProps} />
        </Spacing>
      ))}
    </Spacing>
  );

  function getDisplayTypeOptions() {
    if (classification === ResasClassification.Schooling) {
      return [
        { value: ResasDisplayType.AllSchooling, label: 'すべての進学' },
        { value: ResasDisplayType.UniversitySchooling, label: '大学進学' },
        { value: ResasDisplayType.JuniorCollegeSchooling, label: '短期大学進学' },
      ];
    }

    return [{ value: ResasDisplayType.Employment, label: '就職' }];
  }
}

export type Props = {
  onChange: (filter: GetEmployEducationTransitionParams) => void;
};
