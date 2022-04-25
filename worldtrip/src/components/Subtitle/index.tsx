import { Heading } from '@chakra-ui/react';
import { FlexContainer } from '../FlexContainer';

export function Subtitle() {
  return (
    <FlexContainer marginTop="24px" align="center" justify="center">
      <Heading
        textAlign="center"
        fontSize={{ sm: '20px', lg: '36px' }}
        fontWeight={500}
        color="dark.heading">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </FlexContainer>
  );
}
