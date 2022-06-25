import { Flex } from '@chakra-ui/react';
import React from 'react';
import Background from '../assets/Home/home_bg2.jpg';

const BgImageAuth = ({ children }) => {
  return (
    <Flex
      // width={'100vw'}
      // height={'100vh'}
      backgroundImage={`url(${Background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      {children}
    </Flex>
  );
};

export default BgImageAuth;
