import React from "react";
import AddCustomer from "@/components/AddCustomer";
import { Container, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image, Stack, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

const initialCustomers = [];

const Customers = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} h="100vh">
      <Sidebar />
      <Box flex="1" p={5} overflowY="auto" width="1080px">
        <Flex direction="column" mb={6}>
          <Flex mb={6} alignItems="center" wrap="wrap">
            <Heading as="h1" size="md" color="black" mr={4} fontFamily="-moz-initial">
              Customers
            </Heading>
            <InputGroup maxW="600px" mr={4}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray" />
              </InputLeftElement>
              <Input placeholder="Search..." />
            </InputGroup>
            <Flex alignItems="center" ml="auto" gap={4}>
              <Icon as={FiBell} w={6} h={6} mr={3} />
            </Flex>
          </Flex>
          <Flex justifyContent="flex-end" mb={4}>
           <Link href="/add-customer" passHref>
              <Button bg="#9353b4" textColor="white" leftIcon={<AddIcon />} fontFamily="-moz-initial">
                Add Customer
              </Button>
            </Link>
          </Flex>
          <Container maxW="container.lg" p={0}>
            <TableContainer mt={2} bg="white" p={4} borderRadius="md" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
              <Table variant="simple">
                <Thead bg="#9353b4">
                  <Tr>
                    <Th> </Th>
                    <Th textColor="white">Customer ID</Th>
                    <Th textColor="white">Contact Details</Th>
                    <Th textColor="white">Customer Number</Th>
                    <Th textColor="white">Edit Details</Th>
                    <Th textColor="white">Remove</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {initialCustomers.map((customer) => (
                    <Tr key={customer.id}>
                      <Td>
                        <Image
                          src={customer.imageUrl}
                          boxSize="30px"
                          borderRadius="full"
                        />
                      </Td>
                      <Td>{customer.cid}</Td>
                      <Td>
                        <Stack spacing={1}>
                          <Text>{customer.contact}</Text>
                          <Text color="gray.500">{customer.location}</Text>
                        </Stack>
                      </Td>
                      <Td textAlign="center">{customer.number}</Td>
                      <Td>
                        <IconButton color="blue" icon={<EditIcon />} aria-label="Edit" />
                      </Td>
                      <Td>
                        <IconButton color="red" icon={<DeleteIcon />} aria-label="Delete" />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Customers;