import { ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/Nav';
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
