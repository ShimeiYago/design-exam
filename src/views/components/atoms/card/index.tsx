import React from 'react';
import styles from './index.module.css';

export function Card(props: Props): JSX.Element {
  const { children, width, maxWidth, radius, height } = props;

  const classNames = [styles.card];
  if (radius) classNames.push(styles['radius']);

  return (
    <div className={classNames.join(' ')} style={{ width, maxWidth, height }}>
      {children}
    </div>
  );
}

export type Props = {
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
  radius?: boolean;
  height?: string;
};
