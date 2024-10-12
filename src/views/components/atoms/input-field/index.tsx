import styles from './index.module.css';

export function InputField(props: Props): JSX.Element {
  const { value, placeholder, error, disabled, readOnly, onChange } = props;

  const classNames = [styles.input];
  classNames.push(error ? styles.error : styles.default);

  return (
    <input
      className={classNames.join(' ')}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
    />
  );
}

export type Props = {
  value: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
