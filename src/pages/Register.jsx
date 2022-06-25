import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  HStack,
  InputRightElement,
  InputGroup,
  Spinner,
} from '@chakra-ui/react';
import BgImageAuth from '../components/BgImageAuth';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { register } from '../actions/auth';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    setLoading(true);

    dispatch(register(firstName, lastName, email, password))
      .then(() => {
        // navigate('/projects');
        setLoading(false);
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
          py={10}
          px={6}
          bg={'blackAlpha.700'}
          rounded={'lg'}
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'white'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.300'}>
              And check Accenture Song projects!
            </Text>
          </Stack>
          <Stack spacing={5} p={2}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={'white'}>First Name</FormLabel>
                  <Input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    bgColor={'white'}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={'white'}>Last Name</FormLabel>
                  <Input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    bgColor={'white'}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color={'white'}>Email address</FormLabel>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                bgColor={'white'}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
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
              {loading ? <Spinner /> : 'Sign up'}
            </Button>
          </Stack>
          <Text align={'center'} color={'gray.300'} fontWeight={600}>
            Already have an account?{' '}
            <Link onClick={() => navigate('/login')} color={'white'}>
              Login
            </Link>
          </Text>
        </Stack>
      </Flex>
    </BgImageAuth>
  );
};

export default Register;
