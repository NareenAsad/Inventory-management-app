import React from 'react';
import Link from 'next/link';
import { Container, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image, Stack, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell } from 'react-icons/fi'; // Removed FiFileText as it's not used
import Sidebar from '@/components/Sidebar';

const initialCustomers = [
  { id: 1, cid: '73214678', contact: '0903040811', number: '878223', location: 'Thane Mumbai', imageUrl: 'path_to_image_1.jpg' },
  { id: 2, cid: '92023993', contact: '0931164081', number: '123456', location: 'Andheri East Mumbai', imageUrl: 'path_to_image_2.jpg' },
  { id: 3, cid: '19345637', contact: '0932342807', number: '987533', location: 'Maliiya Nagar Delhi', imageUrl: 'path_to_image_3.jpg' },
  { id: 4, cid: '28394738', contact: '0913248086', number: '224466', location: 'Bandra Mumbai', imageUrl: 'path_to_image_4.jpg' },
  { id: 5, cid: '63788493', contact: '0931245608', number: '993366', location: 'Shivajinagar Pune', imageUrl: 'path_to_image_5.jpg' },
  { id: 6, cid: '46890334', contact: '09812457021', number: '554411', location: 'Wakholi Pune', imageUrl: 'path_to_image_6.jpg' },
  { id: 7, cid: '83729003', contact: '0980050745', number: '863649', location: 'Aurangabad', imageUrl: 'path_to_image_7.jpg' },
  { id: 8, cid: '15367899', contact: '0986587055', number: '098763', location: 'Howrah Bridge Kolkata', imageUrl: 'path_to_image_8.jpg' },
];

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
                <Thead>
                  <Tr>
                    <Th> </Th>
                    <Th>Customer ID</Th>
                    <Th>Contact Details</Th>
                    <Th>Customer Number</Th>
                    <Th>Edit Details</Th>
                    <Th>Remove</Th>
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