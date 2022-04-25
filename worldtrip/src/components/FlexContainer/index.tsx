import { Flex, FlexProps } from '@chakra-ui/react';

export function FlexContainer({
  children,
  ...rest
}: FlexProps): JSX.Element {
  return (
    <Flex {...rest} px={{ sm: '16px', lg: '32px', xl: '140px' }}>
      {children}
    </Flex>
  );
}
