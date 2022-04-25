import { Image, ImageProps } from '@chakra-ui/react';

export function Logo(props: ImageProps) {
  return (
    <Image
      height={['20px', '45px']}
      {...props}
      src="/images/logo.svg"
      alt="Logo"
    />
  );
}
