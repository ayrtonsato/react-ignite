import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { HeroContinent } from '../../components/HeroContinent';
import { FlexContainer } from '../../components/FlexContainer';
import { Card } from '../../components/Card';

import { Continent } from '../../constants/continent-type';
import { api } from '../../services/api';
import { getContinent } from '../api/continents/[continent]';

type ContinentInfoProps = {
  heading: number;
  description: string;
};

function ContinentInfo({
  heading,
  description,
}: ContinentInfoProps): JSX.Element {
  return (
    <Flex
      align="center"
      justify="center"
      flexFlow="column"
      alignItems="baseline"
      _notLast={{ marginRight: '42px' }}>
      <Text
        fontWeight={600}
        fontSize={{ base: '24px', md: '48px' }}
        lineHeight={{ base: '36px', md: '72px' }}
        color="highlight.full">
        {heading}
      </Text>
      <Text
        fontWeight={{ base: '400', md: '600' }}
        fontSize={{ base: '18px', md: '24px' }}
        lineHeight={{ base: '27px', md: '36px' }}
        color="dark.heading">
        {description}
      </Text>
    </Flex>
  );
}

const Continent = ({ continent: c }: { continent: Continent }) => {
  const [continent, setContinent] = useState<Continent>(c);
  const router = useRouter();

  async function getContinent() {
    try {
      const { continent } = router.query;
      const response = await api.get<Continent>(`/continents/${continent}`);
      setContinent(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getContinent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Header />
      {continent && (
        <>
          <HeroContinent
            image={{ src: continent.hero.src, alt: continent.hero.alt }}
            continentName={continent.title}
          />
          <main>
            <FlexContainer
              my={{ base: '24px', md: '80px' }}
              flexFlow={{ base: 'column', md: 'row' }}>
              <Text
                color="dark.heading"
                fontWeight={400}
                fontSize={{ base: '14px', md: '24px' }}
                lineHeight={{ base: '21px', md: '36px' }}
                marginRight={{ md: '70px' }}
                marginBottom={{ base: '16px', md: '0px' }}>
                {continent.description}
              </Text>
              <Flex
                align={{ base: 'center', md: 'flex-start' }}
                justify={{ base: 'center', md: 'flex-start' }}
                mb={{ base: '32px', md: '80px' }}>
                <ContinentInfo
                  heading={continent.briefInfo.countries}
                  description="países"
                />
                <ContinentInfo
                  heading={continent.briefInfo.languages}
                  description="línguas"
                />
                <ContinentInfo
                  heading={continent.briefInfo.cities}
                  description="cidades +100"
                />
              </Flex>
            </FlexContainer>
            <FlexContainer flexDirection="column" marginBottom="80px">
              <Heading marginBottom={{ base: '20px', md: '40px' }} as="h2">
                Cidades +100
              </Heading>
              <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
                gap="45px">
                {continent.cities.map((city) => (
                  <Card
                    key={city.name}
                    city={city.name}
                    country={city.country}
                    flagImage={city.flagImage}
                    cityImage={city.cityImage}
                  />
                ))}
              </Flex>
            </FlexContainer>
          </main>
        </>
      )}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { continent: c } = context.query;
    const result = getContinent(String(c));
    if (result) {
      return {
        props: { continent: result },
      };
    }
    context.res.statusCode = 302;
    context.res.setHeader('Location', `/`); // Replace <link> with your url link
    return { props: {} };
  } catch (error) {
    console.error(error);
    context.res.statusCode = 302;
    context.res.setHeader('Location', `/`); // Replace <link> with your url link
    return { props: {} };
  }
};

export default Continent;
