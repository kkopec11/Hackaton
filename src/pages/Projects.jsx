import React from 'react';
import {
  Flex,
  Text,
  VStack,
  Stack,
  Grid,
  HStack,
  GridItem,
  Box,
  Center,
} from '@chakra-ui/react';
import BgImageMain from '../components/BgImageMain';
import ProjectCard from '../components/ProjectCard';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <BgImageMain>
      <Box width={'100%'} height={'100%'}>
        <Navbar />
        <UserView />
        {/* <AdminView /> */}
      </Box>
    </BgImageMain>
  );
};

export default Projects;
