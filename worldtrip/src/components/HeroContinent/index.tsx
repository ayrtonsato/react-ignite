import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { FlexContainer } from '../FlexContainer';

type HeroContinent = {
  continentName: string;
  image: {
    src: string;
    alt: string;
  };
};

export function HeroContinent({ continentName, image }: HeroContinent) {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: '150px', md: '500px' }}>
      <Image width="100%" height="100%" src={image.src} alt={image.alt} />
      <FlexContainer
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        align={{ base: 'center', md: 'self-end' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        p={{ base: '32px', md: '64px' }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '28px', md: '48px' }}
          lineHeight={{ base: '42px', md: '72px' }}
          color="light.heading"
          as="h1">
          {continentName}
        </Heading>
      </FlexContainer>
    </Box>
  );
}
