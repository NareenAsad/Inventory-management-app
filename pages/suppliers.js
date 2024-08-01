import React from 'react';
import Link from 'next/link';
import { Container, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image, Stack, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell, FiLogOut } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

const initialSuppliers = [
  { id: 1, name: 'Pravin', contact: '0903040811', product: 'Rice', location: 'Thane Mumbai', imageUrl: 'path_to_image_1.jpg' },
  { id: 2, name: 'Shiv', contact: '0931164081', product: 'Sugar', location: 'Andheri East Mumbai', imageUrl: 'path_to_image_2.jpg' },
  { id: 3, name: 'Om', contact: '0932342807', product: 'Wheat', location: 'Maliiya Nagar Delhi', imageUrl: 'path_to_image_3.jpg' },
  { id: 4, name: 'Parth', contact: '0913248086', product: 'Toor Dal', location: 'Bandra Mumbai', imageUrl: 'path_to_image_4.jpg' },
  { id: 5, name: 'Pawan', contact: '0931245608', product: 'Chilli Powder', location: 'Shivajinagar Pune', imageUrl: 'path_to_image_5.jpg' },
  { id: 6, name: 'Samsat', contact: '09812457021', product: 'Turmeric Powder', location: 'Wakholi Pune', imageUrl: 'path_to_image_6.jpg' },
  { id: 7, name: 'Tanishk', contact: '0980050745', product: 'Salt', location: 'Aurangabad', imageUrl: 'path_to_image_7.jpg' },
  { id: 8, name: 'Bhuvan', contact: '0986587055', product: 'Moong Dal', location: 'Howrah Bridge Kolkata', imageUrl: 'path_to_image_8.jpg' },
];

const Suppliers = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} h="100vh">
      <Sidebar />
      <Box flex="1" p="5" overflowY="auto" width = "1080px">
        <Flex mb={6} alignItems="center">
          <Heading as="h1" size="md" color="black" mr={4} fontFamily="-moz-initial">
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
          </Flex>
        </Flex>
        <Container maxW="container.lg">
          <Flex justifyContent="flex-end" mb={4}>
            <Link href="/add-supplier" passHref>
              <Button bg="#9353b4" textColor="white" leftIcon={<AddIcon />} fontFamily="-moz-initial">
                Add Supplier
              </Button>
            </Link>
          </Flex>
          <TableContainer mt={2} bg="white" p={4} borderRadius="md">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th> </Th>
                  <Th>Name</Th>
                  <Th>Contact</Th>
                  <Th>Product</Th>
                  <Th>Edit</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              <Tbody>
                {initialSuppliers.map((supplier) => (
                  <Tr key={supplier.id}>
                    <Td>
                      <Image
                        src={supplier.imageUrl}
                        boxSize="30px"
                        borderRadius="full"
                      />
                    </Td>
                    <Td>{supplier.name}</Td>
                    <Td>
                      <Stack spacing={1}>
                        <Text>{supplier.contact}</Text>
                        <Text color="gray.500">{supplier.location}</Text>
                      </Stack>
                    </Td>
                    <Td>{supplier.product}</Td>
                    <Td>
                      <IconButton bg="white" color="blue" icon={<EditIcon />} mr={2} />
                    </Td>
                    <Td>
                      <IconButton bg="white" color="red" icon={<DeleteIcon />} />
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