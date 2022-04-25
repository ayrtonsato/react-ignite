import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

type SliderItemsProps = {
  image: {
    src: string;
    alt: string;
  };
  link: string;
  continent: {
    title: string;
    subtitle: string;
  };
};

export function SliderItem({
  image: { src, alt },
  link,
  continent: { title, subtitle },
}: SliderItemsProps): JSX.Element {
  return (
    <Box width="100%" maxHeight="450px" height="100%" position="relative">
      <Image
        position="relative"
        width="100%"
        maxHeight="450px"
        height="100%"
        src={src}
        alt={alt}
      />
      <Box
        backgroundColor="black"
        opacity="0.4"
        position="absolute"
        zIndex={99}
        top={0}
        left={0}
        right={0}
        width="100%"
        height="100%"></Box>
      <Flex
        top={0}
        left={0}
        width="100%"
        height="100%"
        justify="center"
        align="center"
        direction="column"
        position="absolute"
        zIndex={100}>
        <Link href={link} passHref>
          <Heading
            as="a"
            _hover={{ color: 'highlight.full' }}
            fontSize={{ base: '24px', md: '48px' }}
            lineHeight={{ base: '36px', md: '72px' }}
            textAlign="center"
            fontWeight={700}
            color="light.heading">
            {title}
          </Heading>
        </Link>
        <Text
          fontSize={{ base: '14px', md: '24px' }}
          lineHeight={{ base: '21px', md: '36px' }}
          textAlign="center"
          fontWeight={700}
          color="light.heading">
          {subtitle}
        </Text>
      </Flex>
    </Box>
  );
}
