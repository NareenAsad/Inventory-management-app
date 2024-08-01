import { Box, Heading, Flex, Input, FormControl, FormLabel, Button, Stack, useBreakpointValue, FormErrorMessage, useToast, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const users = [];

const AuthForms = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "50%" });
  const router = useRouter();
  const toast = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    
    // Validation
    if (!email) setEmailError('Email is required');
    if (!password) setPasswordError('Password is required');
    if (!email || !password) return;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      router.push('/dashboard'); // Redirect to the dashboard after successful login
    } else {
      toast({
        title: 'Login failed.',
        description: 'Invalid email or password.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex width="1280px" height="100vh" alignItems="center" justifyContent="center" bg="#9353b4" p={4} mx="auto">
      <Box maxW="lg" p={8} bg="white" borderRadius="md" boxShadow="md" width={formWidth}>
        <Stack spacing={6}>
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4} color="#9353b4">Sign In</Heading>
            <form onSubmit={handleSignIn}>
              <Stack spacing={4}>
                <FormControl id="email" isInvalid={emailError}>
                  <FormLabel color="#9353b4">Email address</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" color="black" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                  <FormErrorMessage>{emailError}</FormErrorMessage>
                </FormControl>
                <FormControl id="password" isInvalid={passwordError}>
                  <FormLabel color="#9353b4">Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" color="black" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                  <FormErrorMessage>{passwordError}</FormErrorMessage>
                </FormControl>
                <Button textColor="white" bg="#9353b4" type="submit" mb={4}>Sign In</Button>
                <NextLink href="/signup" passHref>
                  <Link color="purple.600">Don't have an account? Sign Up</Link>
                </NextLink>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default AuthForms;