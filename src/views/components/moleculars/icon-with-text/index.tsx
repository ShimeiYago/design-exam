import { Image } from 'views/components/atoms/image';
import styles from './index.module.css';
import { TextWrapper } from 'views/components/atoms/text-wrapper';

export function IconWithText(props: Props): JSX.Element {
  const { text, iconSrc } = props;

  return (
    <div className={styles.iconWithText}>
      <Image src={iconSrc} />
      <TextWrapper size="small">{text}</TextWrapper>
    </div>
  );
}

export type Props = {
  text: string;
  iconSrc: string;
};
