import styles from './index.module.css';

export function TextWrapper(props: Props): JSX.Element {
  const { children, size, align, bold } = props;
  const classNames = [styles[size]];

  if (align) classNames.push(styles[align]);
  if (bold) classNames.push(styles.bold);

  return <p className={classNames.join(' ')}>{children}</p>;
}

export type Props = {
  children: string;
  size: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
};
