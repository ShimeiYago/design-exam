import styles from './index.module.css';
import { HEADER_HEIGHT } from 'views/constants';
import { Card } from 'views/components/atoms/card';

export function PageLayout(props: Props): JSX.Element {
  const { children, sidebar } = props;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Card minHeight={`calc(100vh - ${HEADER_HEIGHT})`}>{sidebar}</Card>
      </div>
      <div className={styles.main}>
        <Card radius>{children}</Card>
      </div>
    </div>
  );
}

export type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};
