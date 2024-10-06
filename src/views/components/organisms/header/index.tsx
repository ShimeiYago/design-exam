import { IconWithText } from 'views/components/moleculars/icon-with-text';
import styles from './index.module.css';
import { TextWrapper } from 'views/components/atoms/text-wrapper';
import { HEADER_HEIGHT } from 'views/constants';

export function Header(props: Props): JSX.Element {
  const { title, iconSrc, emailAddress } = props;

  return (
    <header className={styles.header} style={{ height: HEADER_HEIGHT }}>
      <TextWrapper size="large" tag="h1" bold>
        {title}
      </TextWrapper>
      <IconWithText text={emailAddress} iconSrc={iconSrc} />
    </header>
  );
}

export type Props = {
  title: string;
  iconSrc: string;
  emailAddress: string;
};
