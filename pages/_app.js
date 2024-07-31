// pages/_app.js
import * as React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '../styles/globals.css';

const chakraTheme = extendTheme({
  // Customize your theme here
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
