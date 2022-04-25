import { Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { CallToAction } from '../components/CallToAction';
import { FlexContainer } from '../components/FlexContainer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { InfoList } from '../components/InfoList';
import { Subtitle } from '../components/Subtitle';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <InfoList />
      <FlexContainer align="center" justify="center">
        <Divider
          borderColor="dark.heading"
          width="90px"
          marginTop={{ base: '36px', md: '80px' }}
        />
      </FlexContainer>
      <Subtitle />
      <CallToAction />
    </div>
  );
};

export default Home;
