import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = () => {
  const navigate = useNavigate();

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={'white'}
        boxShadow={'dark-lg'}
        rounded={'lg'}
        p={6}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          roundedTop={'lg'}
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
            roundedTop={'lg'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Blog
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack mt={3}>
          <Text fontWeight={600}>Project Manager:</Text>
        </Stack>
        <Stack mt={4} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>John Smith</Text>
            <Text color={'gray.500'}>john.smith@accenture.com</Text>
          </Stack>
        </Stack>
        <Stack paddingTop={'5'}>
          <Button
            onClick={() => navigate('/projectDetails')}
            rounded={'full'}
            bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
            color={'white'}
            _hover={{
              bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
            }}
            _active={{
              bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
            }}
          >
            Details
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProjectCard;
