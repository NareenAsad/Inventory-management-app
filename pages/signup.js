import Layout from '../components/Layout';
import { Box, Heading, Input, FormControl, FormLabel, Button, Stack, useBreakpointValue, Link, Flex } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const users = [];

export default function SignUp() {
  const formWidth = useBreakpointValue({ base: "90%", md: "50%" });
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simulated sign-up logic
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('User already exists');
    } else {
      users.push({ name, email, password });
      router.push('/dashboard');
    }
  };

  return (
    <Layout>
      <Flex 
        width="1280px"
        height="100vh" 
        alignItems="center" 
        justifyContent="center" 
        bg="#9353b4"
        p={4}
        mx="auto"
      >
        <Box 
          maxW="lg" 
          p={8} // Padding for the box
          bg="white" 
          borderRadius="md" 
          boxShadow="md" 
          width={formWidth}
        >
          <Stack spacing={8}>
            <Box textAlign="center">
              <Heading as="h2" size="lg" mb={4} color="#9353b4" textAlign="center">
                Sign Up
              </Heading>
              <form onSubmit={handleSignUp}>
                <Stack spacing={4}>
                  <FormControl id="name" >
                    <FormLabel textColor="#9353b4">Full Name</FormLabel>
                    <Input type="text" name="name" placeholder="Enter your full name" color="black" 
                    borderColor="gray.300" 
                    _placeholder={{ color: 'gray.500' }}/>
                  </FormControl>
                  <FormControl id="email" >
                    <FormLabel textColor="#9353b4">Email address</FormLabel>
                    <Input type="email" name="email" placeholder="Enter your email" color="black" 
                    borderColor="gray.300" 
                    _placeholder={{ color: 'gray.500' }}/>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel textColor="#9353b4">Password</FormLabel>
                    <Input type="password" name="password" placeholder="Enter your password"color="black" 
                    borderColor="gray.300" 
                    _placeholder={{ color: 'gray.500' }} />
                  </FormControl>
                  <Button textColor="white"
                  bg="#9353b4"  type="submit">Sign Up</Button>
                  <NextLink href="/" passHref>
                    <Link color="purple.600">Already have an account? Sign In</Link>
                  </NextLink>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  );
}