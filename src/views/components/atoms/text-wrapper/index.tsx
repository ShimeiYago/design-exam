import styles from './index.module.css';

export function TextWrapper(props: Props): JSX.Element {
  const { children, size, align, bold, color, tag = 'p' } = props;
  const classNames = [styles.text, styles[size]];

  if (align) classNames.push(styles[align]);
  if (bold) classNames.push(styles.bold);
  if (color) classNames.push(styles[color]);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={classNames.join(' ')}>{children}</Tag>;
}

export type Props = {
  children: string;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  tag?: 'p' | 'div' | 'span' | 'h1';
  color?: 'gray';
};
