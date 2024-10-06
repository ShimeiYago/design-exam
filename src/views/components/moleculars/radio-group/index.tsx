import { TextWrapper } from 'views/components/atoms/text-wrapper';
import styles from './index.module.css';
import { Spacing } from 'views/components/atoms/spacing';

export function RadioGroup(props: Props): JSX.Element {
  const { options, groupLabel, selectedValue, disabled, onChange } = props;

  return (
    <div className={styles.group}>
      <Spacing marginBottom="8px">
        <TextWrapper size="small" bold>
          {groupLabel}
        </TextWrapper>
      </Spacing>
      {options.map((option) => (
        <label key={`radio-${option.value}`} className={styles.label}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            className={styles.radioInput}
            disabled={disabled}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export type Props = {
  options: RadioOption[];
  groupLabel: string;
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

type RadioOption = {
  label: string;
  value: string;
};
