import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import AuthForms from '../components/AuthForms';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Flex 
        align="center" 
        justify="center" 
        minH="100vh" 
        bg="gray.100"
      >
        <AuthForms />
      </Flex>
  );
}