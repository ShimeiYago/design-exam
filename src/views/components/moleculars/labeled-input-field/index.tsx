import styles from './index.module.css';
import { InputField, Props as InputProps } from 'views/components/atoms/input-field';

export function LabeledInputField(props: Props): JSX.Element {
  const { label } = props;

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <InputField {...props} />
    </div>
  );
}

export type Props = {
  label: string;
} & InputProps;
