import styled from '@emotion/styled';
import React from 'react';
import Sidebar from './Sidebar';
import { Box, Flex } from "@chakra-ui/react";
import '../styles/globals.css';

const Layout = ({ children, isAuthenticated }) => {
  return (
    <Flex minH="100vh" className="layout">
      {isAuthenticated && <Sidebar />}
      <Box flex="1">
        <Container>
          <main>{children}</main>
        </Container>
      </Box>
    </Flex>
  );
};

const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  color: #9053B5;
`;

export default Layout;
