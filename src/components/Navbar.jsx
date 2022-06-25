import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FiPower } from 'react-icons/fi';
import { logout } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <Flex
      width={'99vw'}
      paddingTop={'5'}
      paddingRight={'5'}
      justifyContent={'flex-end'}
    >
      <button>
        <FiPower color="white" size={'50px'} onClick={() => logOut()} />
      </button>
    </Flex>
  );
};

export default Navbar;
