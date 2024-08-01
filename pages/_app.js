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
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    // Replace this with your actual user fetching logic
    const fetchUserName = async () => {
      // Simulate an API call
      const fetchedUserName = 'Rojeev';
      setUserName(fetchedUserName);
    };

    fetchUserName();
  }, []);

  return (
    <ChakraProvider theme={chakraTheme}>
      {userName ? (
        <Component {...pageProps} userName={userName} />
      ) : (
        <div>Loading...</div>
      )}
    </ChakraProvider>
  );
}

export default MyApp;