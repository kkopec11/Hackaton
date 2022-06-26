import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import ProjectCardCaritas from '../components/ProjectCardCaritas';
import ProjectCardPG from '../components/ProjectCardPG';

const UserView = () => {
  return (
    <Grid
      height={'100%'}
      width={'100%'}
      templateRows="repeat(3, 1fr)"
      gap={{ base: '20px', md: '20px', lg: '10px', xl: '20px' }}
    >
      <GridItem
        display={'flex'}
        justifyContent={'center'}
        gap={{ base: '20px', md: '20px', lg: '10px', xl: '20px' }}
      >
        <ProjectCardCaritas />
        <ProjectCardPG />
        <ProjectCard />
      </GridItem>
      <GridItem
        display={'flex'}
        justifyContent={'center'}
        gap={{ base: '20px', md: '20px', lg: '10px', xl: '20px' }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridItem>
      <GridItem
        display={'flex'}
        justifyContent={'center'}
        gap={{ base: '20px', md: '20px', lg: '10px', xl: '20px' }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridItem>
    </Grid>
  );
};

export default UserView;
