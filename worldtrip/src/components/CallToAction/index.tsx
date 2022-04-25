import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Flex } from '@chakra-ui/react';

import { BackArrowButton, ForwardArrowButton } from './ArrowButton';
import { GoToButton } from './GoToButton';
import { SliderItem } from './SliderItem';

import 'swiper/css';
import { api } from '../../services/api';

type GetContinentsResponse = {
  image: {
    src: string;
    alt: string;
  };
  continent: {
    title: string;
    subtitle: string;
  };
  link: string;
};

export function CallToAction(): JSX.Element {
  const [indexActive, setIndexActive] = useState(0);
  const [continents, setContinents] = useState<GetContinentsResponse[]>([]);

  async function getContinents() {
    try {
      const response = await api.get<GetContinentsResponse[]>(
        '/continents'
      );
      setContinents(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getContinents();
  }, []);

  return (
    <Box
      px={{ base: '0', xl: '140px' }}
      marginTop={{ base: '24px', md: '52px' }}
      marginBottom={{ base: '24px', md: '52px' }}
      position="relative"
      width="100%"
      maxHeight={{ base: '250px', md: '450px' }}>
      <Swiper
        style={{
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1240px',
          width: '100%',
          maxHeight: '100%',
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        onSlideChange={(swiper) => setIndexActive(swiper.activeIndex)}>
        {continents.length > 0 &&
          continents.map(({ continent, image, link }, index) => (
            <SwiperSlide
              key={continent.title}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <SliderItem
                image={{
                  src: image.src,
                  alt: image.alt,
                }}
                continent={{
                  title: continent.title,
                  subtitle: continent.subtitle,
                }}
                link={link}
              />
            </SwiperSlide>
          ))}
        <BackArrowButton
          position="absolute"
          left="0"
          bottom="0"
          top="0"
          my="auto"
          zIndex={40}
          mx={{ base: '16px', md: '24px' }}
        />
        <ForwardArrowButton
          position="absolute"
          right="0"
          bottom="0"
          top="0"
          my="auto"
          zIndex={40}
          mx={{ base: '16px', md: '24px' }}
        />
        <Flex
          width="100%"
          position="absolute"
          zIndex={30}
          bottom={{ base: '12px', md: '24px' }}
          justify="center"
          gap={{ base: '8px', md: '10px' }}
          left="0">
          {continents.length > 0 &&
            continents.map((c, index) => (
              <GoToButton
                key={c.link}
                isActive={index === indexActive}
                index={index}
              />
            ))}
        </Flex>
      </Swiper>
    </Box>
  );
}
