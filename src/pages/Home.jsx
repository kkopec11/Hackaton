import React from 'react';
import { Flex, Text, VStack, Stack, Button } from '@chakra-ui/react';
import BgImageAuth from '../components/BgImageAuth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <BgImageAuth>
      <Flex align={'center'} justify={'center'} width={'100%'}>
        <VStack paddingBottom={'20vh'}>
          <VStack spacing={'10'}>
            <Text
              color={'black'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: '24px', md: '30px', lg: '40px', xl: '80px' }}
            >
              Welcome in AC/DC App
            </Text>
          </VStack>
          <Stack direction={'row'} spacing={20} paddingTop={'5vh'}>
            <Button
              width={{ base: '180px', md: '200px', lg: '240px', xl: '280px' }}
              py={7}
              px={5}
              bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
              rounded={'full'}
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
              }}
              _active={{
                bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
              }}
              fontSize={{ base: '14px', md: '16px', lg: '18px', xl: '20px' }}
              fontWeight={500}
              onClick={() => navigate('/login')}
            >
              START YOUR JOURNEY
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </BgImageAuth>
  );
};

export default Home;
