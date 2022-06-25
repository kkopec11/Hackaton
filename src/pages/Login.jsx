import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
  Spinner,
} from '@chakra-ui/react';
import BgImageAuth from '../components/BgImageAuth';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { login } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        navigate('/projects');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <BgImageAuth>
      <Flex align={'center'} justify={'center'} width={'100%'}>
        <Stack
          spacing={5}
          mx={'auto'}
          maxW={'lg'}
          py={12}
          px={8}
          bg={'blackAlpha.700'}
          rounded={'lg'}
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'white'}>
              Sign in to your account
            </Heading>
            <Text fontSize={'lg'} color={'gray.300'}>
              And check Accenture Song projects!
            </Text>
          </Stack>
          <Stack spacing={5} p={2}>
            <FormControl id="email">
              <FormLabel color={'white'}>Email address</FormLabel>
              <Input
                bgColor={'white'}
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Password</FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  bgColor={'white'}
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              onClick={() => onSubmit()}
              disabled={loading}
              bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
              }}
              _active={{
                bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
              }}
            >
              {loading ? <Spinner /> : 'Sign in'}
            </Button>
          </Stack>
          <Text align={'center'} color={'gray.300'} fontWeight={600}>
            Dont have an account?{' '}
            <Link onClick={() => navigate('/register')} color={'white'}>
              Register
            </Link>
          </Text>
        </Stack>
      </Flex>
    </BgImageAuth>
  );
};

export default Login;
