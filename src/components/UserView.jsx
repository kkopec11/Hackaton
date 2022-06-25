import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import ProjectCardCaritas from '../components/ProjectCardCaritas';
import ProjectCardPG from '../components/ProjectCardPG';

const UserView = () => {
  return (
    <Grid height={'100%'} width={'100%'} templateRows="repeat(3, 1fr)">
      <GridItem display={'flex'} justifyContent={'center'} gap={'20'}>
        <ProjectCardCaritas />
        <ProjectCardPG />
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
