import styles from './index.module.css';

export function TextWrapper(props: Props): JSX.Element {
  const { children, size, align, bold, tag = 'p' } = props;
  const classNames = [styles.text, styles[size]];

  if (align) classNames.push(styles[align]);
  if (bold) classNames.push(styles.bold);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={classNames.join(' ')}>{children}</Tag>;
}

export type Props = {
  children: string;
  size: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  tag?: 'p' | 'div' | 'span' | 'h1';
};
