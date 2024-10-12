import styles from './index.module.css';

export function Button(props: Props): JSX.Element {
  const { children, color, fullWidth, disabled, onClick } = props;
  const classNames = [styles.button, styles[color]];

  if (fullWidth) classNames.push(styles.fullWidth);

  return (
    <button className={classNames.join(' ')} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export type Props = {
  children: string;
  color: 'primary' | 'basic';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick: () => void;
};
