import { Box, Heading, Text, Flex, Input, FormControl, FormLabel, Button, Stack, useBreakpointValue, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const users = [
  { email: "test@example.com", password: "password123" }
];

const AuthForms = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "50%" });
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simulated sign-in logic
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      router.push('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Flex 
      width="1280px" // Set width of the Flex container
      height="100vh" 
      alignItems="center" 
      justifyContent="center" 
      bg="#9353b4"
      p={4} // Padding to ensure content doesn't touch screen edges
      mx="auto" // Center the Flex container horizontally
    >
      <Box 
        maxW="lg" 
        p={8} // Padding for the box
        bg="white" 
        borderRadius="md" 
        boxShadow="md" 
        width={formWidth}
      >
        <Stack spacing={6}>
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4} color="#9353b4">
              Sign In
            </Heading>
            <form onSubmit={handleSignIn}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel color="#9353b4">Email address</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    color="black" 
                    borderColor="gray.300" // Optional: Set border color for better visibility
                    _placeholder={{ color: 'gray.500' }} // Optional: Set placeholder color
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color="#9353b4">Password</FormLabel>
                  <Input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    color="black" 
                    borderColor="gray.300" 
                    _placeholder={{ color: 'gray.500' }} 
                  />
                </FormControl>
                <Button 
                  textColor="white"
                  bg="#9353b4" 
                  type="submit" 
                  mb={4}
                >
                  Sign In
                </Button>
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