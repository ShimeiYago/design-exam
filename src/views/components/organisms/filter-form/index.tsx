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
import {
  RESAS_CLASSIFICATION_LABELS,
  RESAS_GENDER_LABELS,
  RESAS_MATTER_LABELS,
  TARGET_PREFECTURE,
} from 'views/constants';

export function FilterForm(props: Props): JSX.Element {
  const { onChange, disabled } = props;
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
      prefectureCd: TARGET_PREFECTURE.prefCd,
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
        {
          value: ResasClassification.Schooling,
          label: RESAS_CLASSIFICATION_LABELS[ResasClassification.Schooling],
        },
        {
          value: ResasClassification.Employment,
          label: RESAS_CLASSIFICATION_LABELS[ResasClassification.Employment],
        },
      ],
      selectedValue: classification,
      disabled,
      onChange: (e) => setClassification(e.target.value as ResasClassification),
    },
    {
      groupLabel: '進学・就職先',
      options: [
        { value: ResasMatter.Local, label: RESAS_MATTER_LABELS[ResasMatter.Local] },
        { value: ResasMatter.Outflow, label: RESAS_MATTER_LABELS[ResasMatter.Outflow] },
        { value: ResasMatter.Inflow, label: RESAS_MATTER_LABELS[ResasMatter.Inflow] },
        { value: ResasMatter.NetInflow, label: RESAS_MATTER_LABELS[ResasMatter.NetInflow] },
      ],
      selectedValue: matter,
      disabled,
      onChange: (e) => setMatter(e.target.value as ResasMatter),
    },
    {
      groupLabel: '表示内容',
      options: getDisplayTypeOptions(), // Assuming this uses RESAS_DISPLAY_TYPE_LABELS internally
      selectedValue: displayType,
      disabled,
      onChange: (e) => setDisplayType(e.target.value as ResasDisplayType),
    },
    {
      groupLabel: '性別',
      options: [
        { value: ResasGender.All, label: RESAS_GENDER_LABELS[ResasGender.All] },
        { value: ResasGender.Male, label: RESAS_GENDER_LABELS[ResasGender.Male] },
        { value: ResasGender.Female, label: RESAS_GENDER_LABELS[ResasGender.Female] },
      ],
      selectedValue: gender,
      disabled,
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
  disabled: boolean;
  onChange: (filter: GetEmployEducationTransitionParams) => void;
};
