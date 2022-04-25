import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Airplane } from './Airplane';

export function Hero() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      width="100%"
      height={['160px', '360px']}
      position="relative"
      bgGradient="url('/images/warren-wong-photo.jpg')"
      bgPosition="right -1500px"
      backgroundRepeat="no-repeat">
      <Flex
        height="100%"
        padding="0 16px"
        px={{ sm: '16px', lg: '32px', xl: '140px' }}
        align="center"
        justify="space-between">
        <Flex direction="column" maxWidth={600}>
          <Heading
            fontSize={['20x', '36px']}
            color="light.heading"
            fontWeight={500}
            as="h1">
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            fontSize={['14px', '20px']}
            color="light.info"
            fontWeight={400}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && <Airplane />}
      </Flex>
    </Box>
  );
}
