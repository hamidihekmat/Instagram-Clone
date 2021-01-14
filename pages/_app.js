import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Nav from '../components/Nav';
import { theme } from '../utils/theme';
import { Fonts } from '../utils/fonts';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
