import { Image } from '@chakra-ui/react';

export function Airplane() {
  return (
    <Image
      src="/images/airplane.svg"
      height="auto"
      width={'420px'}
      transform="rotate(3deg)"
      mt="120px"
      alt="Avião"
    />
  );
}
