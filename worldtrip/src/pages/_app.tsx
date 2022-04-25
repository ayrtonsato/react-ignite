import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendedTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
