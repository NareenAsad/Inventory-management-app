import React,{useState} from "react";
import AddSupplier from "@/components/AddSupplier";
import { Container, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image, Stack, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell, FiLogOut } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

const initialSuppliers = [];

const Suppliers = () => {
  const supplierSetting = () => {};
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
          <TableContainer mt={2} bg="white" p={4} borderRadius="md" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
            <Table variant="simple">
              <Thead>
                <Tr bg="#9353b4">
                  <Th> </Th>
                  <Th textColor="white">Name</Th>
                  <Th textColor="white">Contact</Th>
                  <Th textColor="white">Product</Th>
                  <Th textColor="white">Edit</Th>
                  <Th textColor="white">Remove</Th>
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