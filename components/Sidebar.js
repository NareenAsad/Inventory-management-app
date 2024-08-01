import { Box, VStack, Text, Link, Icon, Spacer } from "@chakra-ui/react";
import { FaTachometerAlt, FaBox, FaTruck, FaUsers, FaListAlt, FaSignOutAlt, FaChartBar } from "react-icons/fa";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const router = useRouter();
const handleLogout = async () => {
  try {
    // Step 1: Clear authentication tokens or session data
    Cookies.remove('authToken'); // Example for removing a cookie
    localStorage.removeItem('authToken'); // Example for removing from local storage

    // Step 2: Notify backend (optional)
    await fetch('/api/logout', { method: 'POST' }); // Replace with your actual logout endpoint

    // Step 3: Redirect to the sign-in page
    router.push('/signin');
  } catch (error) {
    console.error('Logout error:', error);
    // Optionally, you can redirect to an error page or show an error message
  }
};

  return (
    <Box bg="#9353b4" color="white" p={5} width="200px" borderRadius="md">
      <VStack spacing={10} align="center" h="full">
        <Box textAlign="center">
          <Icon as={FaChartBar} w={8} h={8} mb={2} />
          <Text fontSize="xl" fontWeight="bold" fontFamily="-moz-initial">
            Grow
          </Text>
        </Box>
        <Link href="/dashboard" display="flex" alignItems="center" mt={2} fontFamily="-moz-initial">
          <Icon as={FaTachometerAlt} mr={2} />
          Dashboard
        </Link>
        <Link href="/inventory" display="flex" alignItems="center" mt={2} fontFamily="-moz-initial">
          <Icon as={FaBox} mr={2} />
          Inventory
        </Link>
        <Link href="/suppliers" display="flex" alignItems="center" mt={2} fontFamily="-moz-initial">
          <Icon as={FaTruck} mr={2} />
          Suppliers
        </Link>
        <Link href="/customers" display="flex" alignItems="center" mt={2} fontFamily="-moz-initial">
          <Icon as={FaUsers} mr={2} />
          Customers
        </Link>
        <Link href="/orders" display="flex" alignItems="center" mt={2} fontFamily="-moz-initial">
          <Icon as={FaListAlt} mr={2} />
          Order Status
        </Link>
        <Spacer />
        <Link href="/" display="flex" alignItems="center" mt={2} onClick={handleLogout} fontFamily="-moz-initial">
          <Icon as={FaSignOutAlt} mr={2} />
          Logout
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;