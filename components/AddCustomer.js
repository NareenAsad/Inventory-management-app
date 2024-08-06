import React from 'react';
import { Box, Button, Container, Flex, Heading, Icon, Input, Stack, Text, FormControl, FormLabel, Image, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Sidebar from '@/components/Sidebar';
import { FiBell } from 'react-icons/fi';

const AddCustomer = () => {
    return(
        <Flex direction={{ base: 'column', md: 'row' }} h="100vh">
            <Sidebar />
            <Box flex="1" p="5" overflowY="auto" width="1080px">
            <Flex mb={6} alignItems="center">
                <InputGroup maxW="600px" mr={4}>
                    <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray" />
                    </InputLeftElement>
                    <Input placeholder="Search here what you want" bg="white" />
                </InputGroup>
                <Flex alignItems="center" ml="auto">
                    <Icon as={FiBell} w={6} h={6} mr={3} />
                    <Image
                    src="" // Add the image source here if needed
                    alt="Person"
                    boxSize="50px"
                    borderRadius="full"
                    mr={3}
                    />
                </Flex>
                </Flex>
                <Container maxW="container.lg" bg="white" p={6} borderRadius="lg" boxShadow="xl">
                    <Stack spacing={4}>
                        <Heading as="h1" size="lg" color="black" mr={4}>
                        New Supplier
                        </Heading>
                        <FormControl>
                        <Flex alignItems="center">
                            <Box flex="1" mr={4}>
                            <FormLabel>Name</FormLabel>
                            <Flex>
                                <Input placeholder="First name" mr={2} bg="#f7f7f7" />
                                <Input placeholder="Last name" bg="#f7f7f7" />
                            </Flex>
                            </Box>
                            <Box>
                            <Box borderWidth="1px" borderRadius="md" p={2} textAlign="center">
                                <Text mb={2}>Add Picture</Text>
                                <Input type="file" accept="image/*" />
                            </Box>
                            </Box>
                        </Flex>
                        </FormControl>
                        <FormControl>
                        <Flex>
                            <Box flex="1" mr={4}>
                            <FormLabel>Contact number</FormLabel>
                            <Input type="tel" placeholder="Contact number" bg="#f7f7f7" />
                            </Box>
                            <Box flex="1">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="example@gmail.com" bg="#f7f7f7" />
                            </Box>
                        </Flex>
                        </FormControl>
                        <FormControl>
                        <Box width="40%"> 
                            <FormLabel>Customer number</FormLabel>
                            <Input placeholder="Customer number" bg="#f7f7f7" />
                        </Box>
                        </FormControl>
                        <FormControl>
                            <Box width="70%">
                            <FormLabel>Address</FormLabel>
                            <Input placeholder="Address" bg="#f7f7f7" />
                            </Box>
                        </FormControl>
                        <FormControl>
                        <Flex>
                            <Box flex="2" mr={4}>
                            <FormLabel>City</FormLabel>
                            <Input placeholder="City" bg="#f7f7f7" />
                            </Box>
                            <Box flex="2">
                            <FormLabel>Postal code</FormLabel>
                            <Input placeholder="Postal code" bg="#f7f7f7" />
                            </Box>
                        </Flex>
                        </FormControl>
                        <FormControl>
                        <Flex>
                            <Box flex="1" mr={4}>
                            <FormLabel>Country</FormLabel>
                            <Input placeholder="Country" bg="#f7f7f7" />
                            </Box>
                            <Box flex="1">
                            <FormLabel>State</FormLabel>
                            <Input placeholder="State" bg="#f7f7f7" />
                            </Box>
                        </Flex>
                        </FormControl>
                        <Flex justifyContent="flex-end">
                        <Button bg="#9353b4" color="white" size="sm">
                            Save
                        </Button>
                        </Flex>
                    </Stack>
                </Container>
            </Box>
        </Flex>
    );
}

export default AddCustomer;