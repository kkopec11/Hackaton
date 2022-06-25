import React from 'react';
import { Flex, Text, VStack, Stack } from '@chakra-ui/react';
import BgImageAuth from '../components/BgImageAuth';
import CustomBtn from '../components/CustomBtn';
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
              fontSize={'70px'}
            >
              Welcome in XYZ App
            </Text>
            {/* <Text
              color={'black'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={'30px'}
            >
              We are happy to explore the universe together
            </Text> */}
          </VStack>
          <Stack direction={'row'} spacing={20} paddingTop={'5vh'}>
            <CustomBtn
              bg={'linear(to-tr, #f64ae7, #4963e8 90% )'}
              bgHover={'whiteAlpha.500'}
              textColor={'white'}
              onClick={() => navigate('/login')}
            >
              START YOUR JOURNEY
            </CustomBtn>
          </Stack>
        </VStack>
      </Flex>
    </BgImageAuth>
  );
};

export default Home;
