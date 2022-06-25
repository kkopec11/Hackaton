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
            src={'/assets/pg_logo.jpg'}
            layout={'fill'}
            roundedTop={'lg'}
            height={'234px'}
            width={'full'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            paddingTop={'3'}
          >
            PG
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
          <Avatar src={'/assets/avatar_2.jpg'} alt={'Author'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Anna Gromanska</Text>
            <Text color={'gray.500'}>anna.gromanska@accenture.com</Text>
          </Stack>
        </Stack>
        <Stack paddingTop={'5'}>
          <Button
            onClick={() => navigate('/projectDetailsPG')}
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
