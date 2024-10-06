import styles from './index.module.css';

export function InputField(props: Props): JSX.Element {
  const { value, placeholder, onChange } = props;

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export type Props = {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
