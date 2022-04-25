import { Flex, Image, FlexProps } from '@chakra-ui/react';
import { useSwiper } from 'swiper/react';

type ArrowButtonProps = FlexProps;

type InnerButtonProps = {
  ariaLabel: string;
  image: string;
  action: (...args: any) => any;
} & ArrowButtonProps;

function ArrowButton({
  ariaLabel,
  image,
  action,
  ...props
}: InnerButtonProps): JSX.Element {
  return (
    <Flex
      {...props}
      align="center"
      justify="center"
      as="button"
      onClick={action}
      aria-label={ariaLabel}
      width={{ base: '32px', md: '60px' }}
      height={{ base: '32px', md: '60px' }}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.3)' }}>
      <Image
        draggable={false}
        width="100%"
        height="100%"
        src={image}
        alt={''}
      />
    </Flex>
  );
}

export function BackArrowButton(props: ArrowButtonProps): JSX.Element {
  const swiper = useSwiper();
  return (
    <ArrowButton
      {...props}
      image="/images/icons/back-arrow.svg"
      ariaLabel="back to previous image"
      action={() => swiper.slidePrev()}
    />
  );
}
export function ForwardArrowButton(props: ArrowButtonProps): JSX.Element {
  const swiper = useSwiper();
  return (
    <ArrowButton
      {...props}
      image="/images/icons/forward-arrow.svg"
      ariaLabel="forward to next image"
      action={() => swiper.slideNext()}
    />
  );
}
