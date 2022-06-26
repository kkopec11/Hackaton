import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
  Spinner,
  Center,
} from '@chakra-ui/react';
import BgImageAuth from '../components/BgImageAuth';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';

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
          width={{ base: '240px', md: '330px', lg: '400px', xl: '400px' }}
        >
          <Stack align={'center'}>
            <Heading
              fontSize={{ base: 'md', md: 'lg', lg: '3xl', xl: '4xl' }}
              color={'white'}
            >
              Sign in to your account
            </Heading>
            <Text
              fontSize={{ base: '11px', md: 'sm', lg: 'lg', xl: 'lg' }}
              color={'gray.300'}
            >
              And check Accenture Song projects!
            </Text>
          </Stack>
          <Stack spacing={5} p={2}>
            <FormControl id="email">
              <FormLabel
                color={'white'}
                fontSize={{ base: '11px', md: 'sm', lg: 'lg', xl: 'lg' }}
              >
                Email address
              </FormLabel>
              <Input
                bgColor={'white'}
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel
                color={'white'}
                fontSize={{ base: '11px', md: 'sm', lg: 'lg', xl: 'lg' }}
              >
                Password
              </FormLabel>
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
            <Center width={'100%'}>
              <Button
                fontSize={{ base: '11px', md: 'md', lg: 'lg', xl: 'lg' }}
                width={'100%'}
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
            </Center>
          </Stack>
          <Text
            align={'center'}
            color={'gray.300'}
            fontWeight={600}
            fontSize={{ base: '11px', md: 'sm', lg: 'lg', xl: 'lg' }}
          >
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
