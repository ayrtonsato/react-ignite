import { Box } from '@chakra-ui/react';
import { useSwiper } from 'swiper/react';

export function GoToButton({
  isActive = false,
  index,
}: {
  isActive?: boolean;
  index: number;
}): JSX.Element {
  const swiper = useSwiper();

  return (
    <Box
      _hover={!isActive ? { backgroundColor: 'highlight.half' } : {}}
      transition="background-color 0.2s"
      as="button"
      type="button"
      draggable={false}
      onClick={() => swiper.slideTo(index)}
      width={{ base: '8px', md: '16px' }}
      height={{ base: '8px', md: '16px' }}
      background={isActive ? 'highlight.full' : 'dark.info.full'}
      borderRadius="50%"></Box>
  );
}
