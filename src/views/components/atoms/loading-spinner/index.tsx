import styles from './index.module.css';

export function LoadingSpinner(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}
