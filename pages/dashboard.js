import React from "react";
import { Box, Flex, Grid, Heading, Text, Stat, StatLabel, StatNumber, CircularProgress, CircularProgressLabel, Input, InputGroup, InputLeftElement, Image, Stack } from "@chakra-ui/react";
import Sidebar from '@/components/Sidebar';

const Dashboard = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} h="100vh">
      <Sidebar />
      <Box p={5} bg="white" flex="1" overflowY="auto" width="1080px">
        <Flex direction="column" mb={6}>
          <Flex mb={6} alignItems="center" wrap="wrap">
            <Heading as="h1" size="md" color="black" mr={4} fontFamily="-moz-initial">
              Dashboard
            </Heading>
            <Flex alignItems="center" ml={4}>
              <Stack>
                <Text color="black" fontWeight="bold">
                  Hello Ali
                </Text>
                <Text color="black">
                  Welcome Back!
                </Text>
              </Stack>
            </Flex>
          </Flex>
          <Heading as="h1" size="md" mb={4} color="black" fontFamily="-moz-initial">
            Your Business Summary
          </Heading>
          <Flex direction="column" mb={6}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} mb={6}>
              <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="100%" height="auto">
                <StatLabel>Total Purchase</StatLabel>
                <StatNumber>₹ 60,000</StatNumber>
              </Stat>
              <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="100%" height="auto">
                <StatLabel>Total Income</StatLabel>
                <StatNumber>₹ 54,000</StatNumber>
              </Stat>
              <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="100%" height="auto">
                <StatLabel>Total Sales</StatLabel>
                <StatNumber>₹ 40,000</StatNumber>
              </Stat>
            </Grid>

            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
              <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="100%" height="auto">
                <StatLabel>Total Orders</StatLabel>
                <StatNumber>30  📦</StatNumber>
              </Stat>
              <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="100%" height="auto">
                <StatLabel>Order Not Delivered</StatLabel>
                <StatNumber>1   ❌</StatNumber>
              </Stat>
              <Stat bg="purple.100" p={6} textColor="black" textAlign="center" borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" width="100%" height="auto">
                <StatLabel>Total Return Order</StatLabel>
                <StatNumber>2   📅</StatNumber>
              </Stat>
            </Grid>
          </Flex>
            <Box bg="white" p={5} borderRadius="xl" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" flex="1" border="1px" borderColor="grey">
              <Heading as="h1" size="md" mb={4} textColor="black" fontFamily="-moz-initial">
                Product Stock Details
              </Heading>
              <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={4} justifyItems="center" fontFamily="-moz-initial">
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Product to be received </Text>
                  <Text fontWeight="bold">📥      50</Text>
                </Box>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Product in hand </Text>
                  <Text fontWeight="bold">📦      20</Text>
                </Box>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Product to be returned</Text>
                  <Text fontWeight="bold">🔄       10</Text>
                </Box>
                <Box p={3} borderRadius="md" textAlign="center" width="200px" height="120px" textColor="black">
                  <Text>Cancel Order</Text>
                  <Text fontWeight="bold">❌       15</Text>
                </Box>
              </Grid>
            </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;