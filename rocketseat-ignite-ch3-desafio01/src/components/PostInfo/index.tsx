import styles from './postinfo.module.scss';

type PostInfoProps = {
  image: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
};

type PostInfoContainerProps = {
  children: React.ReactNode;
};

export function PostInfo({ image, children }: PostInfoProps): JSX.Element {
  return (
    <span className={styles.postInfo}>
      <img src={image.src} alt={image.alt} />
      {children}
    </span>
  );
}

export function PostInfoContainer({
  children,
}: PostInfoContainerProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
