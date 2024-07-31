import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, Heading, Text, Stat, StatLabel, StatNumber, CircularProgress, CircularProgressLabel, Input, InputGroup, InputLeftElement, Image, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Layout from "../components/Layout"; // Ensure Layout is correctly imported

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Flex height="147vh">
      <Layout isAuthenticated={true}>
        <Box p={5} bg="purple.50" flex="1">
          <Flex mb={6} alignItems="center">
            <Heading as="h1" size="lg" color="black" mr={4}>
              Dashboard
            </Heading>
            <InputGroup maxW="600px" mr={4}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray" />
              </InputLeftElement>
              <Input placeholder="Search..." />
            </InputGroup>
            <Flex alignItems="center" ml={4}>
              <Image
                src=""
                alt="Person"
                boxSize="50px"
                borderRadius="full"
                mr={3}
              />
              <Stack spacing={1} align="flex-start">
                <Text color="black" fontWeight="bold">
                  Hello Rojeev
                </Text>
                <Text color="black">
                  Welcome Back!
                </Text>
              </Stack>
            </Flex>
          </Flex>
          <Heading as="h3" size="md" mb={4} color="black">
            Your Business Summary
          </Heading>
          <Flex direction="column" p={5} bg="purple.50" flex="1">
            <Flex mb={6} alignItems="flex-start">
              <Flex direction="column" ml={6} flex="1">
                <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
                  <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="180px" height="120px">
                    <StatLabel>Total Purchase</StatLabel>
                    <StatNumber>₹ 60,000</StatNumber>
                  </Stat>
                  <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="180px" height="120px">
                    <StatLabel>Total Income</StatLabel>
                    <StatNumber>₹ 54,000</StatNumber>
                  </Stat>
                  <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="180px" height="120px">
                    <StatLabel>Total Sales</StatLabel>
                    <StatNumber>₹ 40,000</StatNumber>
                  </Stat>
                </Grid>

                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="180px" height="120px">
                    <StatLabel>Total Orders</StatLabel>
                    <StatNumber>30</StatNumber>
                  </Stat>
                  <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="180px" height="120px">
                    <StatLabel>Order Not Delivered</StatLabel>
                    <StatNumber>1</StatNumber>
                  </Stat>
                  <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="180px" height="120px">
                    <StatLabel>Total Return Order</StatLabel>
                    <StatNumber>2</StatNumber>
                  </Stat>
                </Grid>
              </Flex>
              <Box bg="white" p={5} borderRadius="lg" textAlign="center" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="300px" height="300px" border="1px" borderColor="grey">
                <CircularProgress value={80} color="#f4c764" size="80px">
                  <CircularProgressLabel>₹ 80,000</CircularProgressLabel>
                </CircularProgress>
                <Text mt={4} textAlign="center">Total Profit</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex mb={6} gap={6}>
            <Box bg="white" p={5} borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="540px" height="360px" border="1px" borderColor="grey">
              <Heading as="h3" size="md" mb={4} textColor="black">
                Total Summary Of Sale
              </Heading>
              {/* Placeholder for chart */}
              <Box h="200px" />
            </Box>
            <Box bg="white" p={5} borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" flex="1" border="1px" borderColor="grey">
              <Heading as="h3" size="md" mb={4} textColor="black">
                Product Stock Details
              </Heading>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Product to be received</Text>
                  <Text fontWeight="bold">50</Text>
                </Box>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Product in hand</Text>
                  <Text fontWeight="bold">20</Text>
                </Box>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Product to be returned</Text>
                  <Text fontWeight="bold">10</Text>
                </Box>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Cancel Order</Text>
                  <Text fontWeight="bold">15</Text>
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Flex>
  );
};

export default Dashboard;