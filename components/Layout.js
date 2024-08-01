import styled from '@emotion/styled';
import React from 'react';
import { Box} from "@chakra-ui/react";
import '../styles/globals.css';

const Layout = ({ children}) => {
  return (
      <Box flex="1">
        <Container>
          <main>{children}</main>
        </Container>
      </Box>
  );
};

const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  color: #9053B5;
`;

export default Layout;
