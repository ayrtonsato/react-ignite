/* eslint-disable jsx-a11y/alt-text */
import styles from './banner.module.scss';

type Props = {
  url: string;
  alt: string;
};

export function Banner({ url, alt }: Props): JSX.Element {
  return <img className={styles.banner} src={url} alt={alt} />;
}
