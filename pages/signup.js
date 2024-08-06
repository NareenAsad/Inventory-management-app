import { Flex, Link, Box, Heading, Input, FormControl, FormLabel, Button, Stack, useBreakpointValue, FormErrorMessage, useToast } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const users = [];

const SignUp = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "50%" });
  const router = useRouter();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Validation
    if (!name) setNameError('Name is required');
    if (!email) setEmailError('Email is required');
    if (!password) setPasswordError('Password is required');
    if (!name || !email || !password) return;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      toast({
        title: 'Sign Up failed.',
        description: 'User already exists.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } else {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      router.push('/');
    }
  };

  return (
    <Flex width="1280px" height="100vh" alignItems="center" justifyContent="center" bg="#9353b4" p={4} mx="auto">
      <Box maxW="lg" p={8} bg="white" borderRadius="md" boxShadow="md" width={formWidth}>
        <Stack spacing={8}>
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4} color="#9353b4">Sign Up</Heading>
            <form onSubmit={handleSignUp}>
              <Stack spacing={4}>
                <FormControl id="name" isInvalid={nameError}>
                  <FormLabel color="#9353b4">Full Name</FormLabel>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" color="black" borderColor="gray.300" _placeholder={{ color: 'gray.500' }} />
                  <FormErrorMessage>{nameError}</FormErrorMessage>
                </FormControl>
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
                <Button textColor="white" bg="#9353b4" type="submit">Sign Up</Button>
                <NextLink href="/" passHref>
                  <Link color="purple.600">Already have an account? Sign In</Link>
                </NextLink>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SignUp;