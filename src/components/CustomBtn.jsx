import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomBtn = ({ children, bg, bgHover, textColor, onClick }) => {
  return (
    <Button
      py={7}
      px={5}
      // bg={bg}
      bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
      rounded={'full'}
      color={textColor}
      _hover={{
        bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
      }}
      _active={{
        bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
      }}
      fontSize={'20px'}
      fontWeight={500}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
