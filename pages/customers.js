import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Flex } from '@chakra-ui/react';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const querySnapshot = await getDocs(collection(db, 'customers'));
      setCustomers(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchCustomers();
  }, []);

  return (
    <Flex>
      <Sidebar/>

    </Flex>
    // <div style={{ display: 'flex' }}>
    //   <Sidebar />
    //   <div style={{ marginLeft: '240px', padding: '20px' }}>
    //     <h1>Customers</h1>
    //     <Button variant="contained" color="primary">Add New Customer</Button>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Name</TableCell>
    //           <TableCell>Email</TableCell>
    //           <TableCell>Phone</TableCell>
    //           <TableCell>City</TableCell>
    //           <TableCell>Country</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {customers.map(customer => (
    //           <TableRow key={customer.id}>
    //             <TableCell>{customer.name}</TableCell>
    //             <TableCell>{customer.email}</TableCell>
    //             <TableCell>{customer.phone}</TableCell>
    //             <TableCell>{customer.city}</TableCell>
    //             <TableCell>{customer.country}</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </div>
    // </div>
  );
}