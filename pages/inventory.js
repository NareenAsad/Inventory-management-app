import { Box, Text, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, Image, Flex, Heading, InputGroup, InputLeftElement, Input, Stack, Icon } from '@chakra-ui/react';
import { FiPlus, FiMinus, FiBell } from 'react-icons/fi';
import { SearchIcon } from '@chakra-ui/icons';
import Sidebar from '../components/Sidebar';

const inventoryData = [
  { image: 'rice.png', name: 'Rice', supplier: 'Pravin', status: 'High', price: '10,000' },
  { image: 'sugar.png', name: 'Sugar', supplier: 'Shiv', status: 'Low', price: '5,000' },
  { image: 'wheat.png', name: 'Wheat', supplier: 'Om', status: 'Low', price: '20,000' },
  { image: 'toordal.png', name: 'Toor Dal', supplier: 'Parth', status: 'High', price: '55,000' },
  { image: 'chilipowder.png', name: 'Chili Powder', supplier: 'Pawan', status: 'High', price: '25,000' },
];

const Inventory = () => {
  // Calculate totals and counts
  const totalStock = inventoryData.reduce((total, item) => total + parseInt(item.price.replace(',', '')), 0);
  const lowStockCount = inventoryData.filter(item => item.status === 'Low').length;
  const highStockCount = inventoryData.filter(item => item.status === 'High').length;

  return (
    <Flex height="120vh">
      <Sidebar/>
      <Box flex="1" p="5" width="1050px">
        <Flex mb={6} alignItems="center">
          <Heading as="h1" size="lg" color="black" mr={4}>
            Inventory
          </Heading>
          <InputGroup maxW="600px" mr={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray" />
            </InputLeftElement>
            <Input placeholder="Search..." />
          </InputGroup>
          <Flex alignItems="right" ml={4}>
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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="5" mb="5">
          <Box bg="#b178c5" shadow="md" p="5" borderRadius="xl" textAlign="center" color="white">
            <Text>Total Stock Available</Text>
            <Text fontSize="2xl" fontWeight="bold">₹ {totalStock.toLocaleString()}</Text>
          </Box>
          <Box bg="#b178c5" shadow="md" p="5" borderRadius="xl" textAlign="center" color="white">
            <Text>Low Stock Items</Text>
            <Text fontSize="2xl" fontWeight="bold">{lowStockCount}</Text>
          </Box>
          <Box bg="#b178c5" shadow="md" p="5" borderRadius="xl" textAlign="center" color="white">
            <Text>High Stock Items</Text>
            <Text fontSize="2xl" fontWeight="bold">{highStockCount}</Text>
          </Box>
        </SimpleGrid>
        <Box bg="white" shadow="md" p="5" borderRadius="md">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Supplier Name</Th>
                <Th>Stock Status</Th>
                <Th>Price</Th>
                <Th>Add</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              {inventoryData.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Image src={`/images/${item.image}`} alt={item.name} boxSize="50px" objectFit="cover" />
                  </Td>
                  <Td>{item.name}</Td>
                  <Td>{item.supplier}</Td>
                  <Td>
                    <Badge colorScheme={item.status === 'High' ? 'green' : 'red'}>
                      {item.status}
                    </Badge>
                  </Td>
                  <Td>₹ {item.price}</Td>
                  <Td>
                    <IconButton icon={<FiPlus />} size="sm" />
                  </Td>
                  <Td>
                    <IconButton icon={<FiMinus />} size="sm" />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
};

export default Inventory;