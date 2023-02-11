import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container
} from '@chakra-ui/react'
import React from 'react';
import { motion } from 'framer-motion';

const Rankings = () =>{
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }
  
  return(
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Container>
        <TableContainer>
          <Table variant='simple' size='sm'>
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Player</Th>
                <Th>Pos</Th>
                <Th>Team</Th>
                <Th isNumeric>Projected</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td fontWeight={600}>Dalvin Cook</Td>
                <Td>RB</Td>
                <Td>Vikings</Td>
                <Td isNumeric>323</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td fontWeight={600}>Austin Ekeler</Td>
                <Td>RB</Td>
                <Td>Chargers</Td>
                <Td isNumeric>278</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td fontWeight={600}>Christian McCaffery</Td>
                <Td>RB</Td>
                <Td>49ers</Td>
                <Td isNumeric>264</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </motion.div>
    
  );
}
export default Rankings;