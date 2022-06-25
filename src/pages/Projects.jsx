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
import { useDispatch, useSelector } from 'react-redux';

const Projects = () => {
  const { profile: currentProfile } = useSelector(state => state.auth);
  console.log(currentProfile.type);
  return (
    <BgImageMain>
      <Box width={'100%'} height={'100%'}>
        <Navbar />
        {currentProfile.type === 'user' && <UserView />}
        {currentProfile.type === 'admin' && <AdminView />}
      </Box>
    </BgImageMain>
  );
};

export default Projects;
