import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Button, Table, Thead, Tbody, Badge, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image, Stack, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell, FiLogOut, FiFileText } from 'react-icons/fi'; // Import FiFileText for invoice icon
import Sidebar from '@/components/Sidebar';

const initialOrders = [
  { id: 1, name: 'Pravin', item: '20', number: '878223', orderno: 'SO1256', imageUrl: 'path_to_image_1.jpg', amount:'1000' ,status: 'delivered' },
  { id: 2, name: 'Shiv', item: '10', number: '123456', orderno: 'SO4372', imageUrl: 'path_to_image_2.jpg',amount: '3000' , status:'approved'},
  { id: 3, name: 'Om', item: '15', number: '987533', orderno: 'SO9987', imageUrl: 'path_to_image_3.jpg' ,amount: '3200', status:'delivered'},
  { id: 4, name: 'Parth', item: '50', number: '224466', orderno: 'SO4523', imageUrl: 'path_to_image_4.jpg' ,amount: '2000', status:'delivered'},
  { id: 5, name: 'Pawan', item: '44', number: '993366', orderno: 'SO6154', imageUrl: 'path_to_image_5.jpg',amount: '2500' , status:'not delivered'},
  { id: 6, name: 'Samsat', item: '30', number: '554411', orderno: 'SO2876', imageUrl: 'path_to_image_6.jpg',amount: '1400' , status:'canceled'},
  { id: 7, name: 'Tanishk', item: '45', number: '863649', orderno: 'SO0912', imageUrl: 'path_to_image_7.jpg',amount: '1200', status:'delivered' },
  { id: 8, name: 'Bhuvan', item: '29', number: '098763', orderno: 'SO1144', imageUrl: 'path_to_image_8.jpg' ,amount: '4000', status:'approved'},
];

const Orders = () => {
  const [filter, setFilter] = useState('all'); // State to manage the filter

  const handleFilter = (status) => {
    setFilter(status);
  };

  // Filter the orders based on the current filter state
  const filteredOrders = initialOrders.filter(order => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

  return (
    <Flex direction={{ base: 'column', md: 'row' }} h="100vh">
      <Sidebar />
      <Box flex="1" p="5" overflowY="auto" width="1080px">
        <Flex mb={6} alignItems="center">
          <Heading as="h1" size="md" color="black" mr={4} fontFamily="-moz-initial">
            Order Status
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
            <Link href="/add-order" passHref>
              <Button bg="#9353b4" textColor="white" leftIcon={<AddIcon />} fontFamily="-moz-initial">
                Create Order
              </Button>
            </Link>
          </Flex>
          <TableContainer mt={4} bg="white" p={4} borderRadius="md">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th> </Th>
                  <Th>Name</Th>
                  <Th>Item Quantity</Th>
                  <Th>Customer NO</Th>
                  <Th>Sales order NO</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                </Tr>
                <Tr>
                  <Th colSpan={7}>
                    <Flex justify="start">
                      <Button
                        onClick={() => handleFilter('all')}
                        size="sm"
                        bg={filter === 'all' ? '#f7f7f7' : 'white'}
                        color={filter === 'all' ? 'black' : 'gray'}
                        borderColor="gray"
                        borderWidth="1px"
                        mr={2}
                      >
                        All
                      </Button>
                      <Button
                        onClick={() => handleFilter('delivered')}
                        size="sm"
                        bg={filter === 'delivered' ? '#f7f7f7' : 'white'}
                        color={filter === 'delivered' ? 'black' : 'gray'}
                        borderColor="gray"
                        borderWidth="1px"
                        mr={2}
                      >
                        Delivered
                      </Button>
                      <Button
                        onClick={() => handleFilter('canceled')}
                        size="sm"
                        bg={filter === 'canceled' ? '#f7f7f7' : 'white'}
                        color={filter === 'canceled' ? 'black' : 'gray'}
                        borderColor="gray"
                        borderWidth="1px"
                        mr={2}
                      >
                        Canceled
                      </Button>
                      <Button
                        onClick={() => handleFilter('not delivered')}
                        size="sm"
                        bg={filter === 'not delivered' ? '#f7f7f7' : 'white'}
                        color={filter === 'not delivered' ? 'black' : 'gray'}
                        borderColor="gray"
                        borderWidth="1px"
                        mr={2}
                      >
                        Not Delivered
                      </Button>
                      <Button
                        onClick={() => handleFilter('approved')}
                        size="sm"
                        bg={filter === 'approved' ? '#f7f7f7' : 'white'}
                        color={filter === 'approved' ? 'black' : 'gray'}
                        borderColor="gray"
                        borderWidth="1px"
                      >
                        Approved
                      </Button>
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>
                      <Image
                        src={order.imageUrl}
                        boxSize="30px"
                        borderRadius="full"
                      />
                    </Td>
                    <Td>{order.name}</Td>
                    <Td textAlign="center"><Text>{order.item}</Text></Td>
                    <Td textAlign="center">{order.number}</Td>
                    <Td textAlign="center">{order.orderno}</Td>
                    <Td textAlign="center">₹ {order.amount}</Td>
                    <Td textAlign="center">
                      <Badge colorScheme={
                          order.status === 'delivered' ? 'green' :
                          order.status === 'approved' ? 'blue' :
                          order.status === 'canceled' ? 'red' :
                          'yellow'
                        }>
                        {order.status}
                      </Badge>
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

export default Orders;