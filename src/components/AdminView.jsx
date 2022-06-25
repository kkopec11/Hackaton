import React from 'react';
import {
  Flex,
  Text,
  Stack,
  Box,
  Center,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';
import projectsList from '../static/projects';
import { MdSettings } from 'react-icons/md';
const AdminView = () => {
  return (
    <Box width={'100%'} height={'95vh'}>
      <Center width={'100%'} height={'100%'} flexDirection={'column'}>
        <Stack paddingBottom={'10'}>
          <Text color={'white'} fontSize={'50px'} fontWeight={'600'}>
            Admin Panel
          </Text>
        </Stack>
        <TableContainer backgroundColor={'white'} width={'80%'}>
          <Table>
            <TableCaption>Panel for managing projects</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>status</Th>
                <Th>Project Manager</Th>
                <Th isNumeric>Settings</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projectsList.map(project => (
                <Tr>
                  <Td>{project.title}</Td>
                  <Td>{project.status}</Td>
                  <Td>{project.projectManager}</Td>
                  <Td>
                    <Flex justifyContent={'flex-end'} marginRight={'5'}>
                      <MdSettings />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            {/* <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot> */}
          </Table>
        </TableContainer>
      </Center>
    </Box>
  );
};

export default AdminView;
