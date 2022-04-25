import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Image as ImageProps } from '../../constants/continent-type';

type CardProps = {
  city: string;
  country: string;
  flagImage: ImageProps;
  cityImage: ImageProps;
};

export function Card({
  city,
  country,
  flagImage,
  cityImage,
}: CardProps): JSX.Element {
  return (
    <Flex
      width="256px"
      height="280px"
      flexDirection="column"
      rounded="lg"
      overflow="hidden">
      <Image
        src={cityImage.src}
        alt={cityImage.alt}
        height="150px"
        width="100%"
      />
      <Flex
        p="24px"
        borderWidth={1}
        borderColor="highlight.half"
        borderTopColor="transparent"
        alignContent="center"
        justify="space-between"
        roundedBottom="lg"
        flexFlow="row nowrap">
        <Flex flexDirection="column">
          <Heading
            fontWeight={600}
            fontSize="20px"
            lineHeight="25px"
            color="dark.heading"
            as="h3">
            {city}
          </Heading>
          <Text
            fontWeight={500}
            fontSize="16px"
            lineHeight="26px"
            color="dark.info.full">
            {country}
          </Text>
        </Flex>
        <Image
          alignSelf="center"
          width="30px"
          height="30px"
          borderRadius="50%"
          src={flagImage.src}
          alt={flagImage.alt}
        />
      </Flex>
    </Flex>
  );
}
