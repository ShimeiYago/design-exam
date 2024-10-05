import React from 'react';
import styles from './index.module.css';

export function Card(props: Props): JSX.Element {
  const { children, width, maxWidth } = props;

  return (
    <div className={styles.card} style={{ width, maxWidth }}>
      {children}
    </div>
  );
}

export type Props = {
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
};
