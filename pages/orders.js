import React, {useState}from "react";
import AddOrder from "@/components/AddOrder";
import { Container, Button, Table, Thead, Tbody, Badge, Tr, Th, Td, TableContainer, IconButton, Flex, Icon, Heading, InputGroup, Input, InputLeftElement, Box, Image, Stack, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { FiBell} from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

const initialOrders = [];

const Orders = () => {
  const [filter, setFilter] = useState('all');

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
                Add Order
              </Button>
            </Link>
          </Flex>
          <TableContainer mt={2} bg="white" p={4} borderRadius="md" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
            <Table variant="simple">
              <Thead bg="#9353b4">
                <Tr>
                  <Th> </Th>
                  <Th textColor="white">Name</Th>
                  <Th textColor="white">Item Quantity</Th>
                  <Th textColor="white">Customer NO</Th>
                  <Th textColor="white">Sales order NO</Th>
                  <Th textColor="white">Amount</Th>
                  <Th textColor="white">Status</Th>
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