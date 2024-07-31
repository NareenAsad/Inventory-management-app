import React from 'react';
import { Container, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell, FiLogOut } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

const initialSuppliers = [
  { id: 1, name: 'Pravin', contact: '0903040811', product: 'Rice', location: 'Thane Mumbai' },
  { id: 2, name: 'Shiv', contact: '0931164081', product: 'Sugar', location: 'Andheri East Mumbai' },
  { id: 3, name: 'Om', contact: '0932342807', product: 'Wheat', location: 'Maliiya Nagar Delhi' },
  { id: 4, name: 'Parth', contact: '0913248086', product: 'Toor Dal', location: 'Bandra Mumbai' },
  { id: 5, name: 'Pawan', contact: '0931245608', product: 'Chilli Powder', location: 'Shivajinagar Pune' },
  { id: 6, name: 'Samsat', contact: '09812457021', product: 'Turmeric Powder', location: 'Wakholi Pune' },
  { id: 7, name: 'Tanishk', contact: '0980050745', product: 'Salt', location: 'Aurangabad' },
  { id: 8, name: 'Bhuvan', contact: '0986587055', product: 'Moong Dal', location: 'Howrah Bridge Kolkata' },
  { id: 9, name: 'Joy', contact: '09845657031', product: 'Black Pepper', location: 'Kalyan Mumbai' },
];

const Suppliers = () => {
  return (
    <Flex height="145vh">
      <Sidebar />
      <Box flex="1" p="5">
        <Flex mb={6} alignItems="center">
          <Heading as="h1" size="lg" color="black" mr={4}>
            Suppliers
          </Heading>
          <InputGroup maxW="600px" mr={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray" />
            </InputLeftElement>
            <Input placeholder="Search..." />
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
        <Container maxW="container.lg">
          <Flex justifyContent="flex-end" mb={4}>
            <Button bg="#9353b4" textColor="white" leftIcon={<AddIcon />}>
              Add Supplier
            </Button>
          </Flex>
          <TableContainer mt={4} bg="gray.50" p={4} borderRadius="md">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Contact</Th>
                  <Th>Product</Th>
                  <Th>Location</Th>
                  <Th>Log</Th>
                  <Th>Edit</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              <Tbody>
                {initialSuppliers.map((supplier) => (
                  <Tr key={supplier.id}>
                    <Td>{supplier.name}</Td>
                    <Td>{supplier.contact}</Td>
                    <Td>{supplier.product}</Td>
                    <Td>{supplier.location}</Td>
                    <Td>
                      <IconButton colorScheme="teal" icon={<FiLogOut />} />
                    </Td>
                    <Td>
                      <IconButton colorScheme="blue" icon={<EditIcon />} mr={2} />
                    </Td>
                    <Td>
                      <IconButton colorScheme="red" icon={<DeleteIcon />} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Flex>
  );
};

export default Suppliers;
