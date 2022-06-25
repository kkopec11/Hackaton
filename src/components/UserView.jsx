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
import ProjectCard from '../components/ProjectCard';

const UserView = () => {
  return (
    <Grid height={'100%'} width={'100%'} templateRows="repeat(3, 1fr)">
      <GridItem display={'flex'} justifyContent={'center'} gap={'20'}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridItem>
      <GridItem display={'flex'} justifyContent={'center'} gap={'20'}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridItem>
      <GridItem display={'flex'} justifyContent={'center'} gap={'20'}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridItem>
    </Grid>
  );
};

export default UserView;
