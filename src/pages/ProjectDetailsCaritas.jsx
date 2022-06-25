import React, { useState } from 'react';
import BgImageMain from '../components/BgImageMain';
import {
  Box,
  Center,
  GridItem,
  Grid,
  Image,
  Flex,
  Text,
  HStack,
  VStack,
  Stack,
  Button,
} from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GiStarFormation } from 'react-icons/gi';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const [showStar, setShowStar] = useState(false);

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const btnClicked = async () => {
    setShowStar(true);
    await sleep(1000);
    setShowStar(false);
  };
  return (
    <BgImageMain>
      <Center width={'100vw'} height={'100vh'}>
        <AnimatePresence>
          {showStar && (
            <Box position={'absolute'} zIndex={'1'} backdropBlur={'10px'}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 10 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <VStack>
                  <GiStarFormation color="gold" size={'50px'} />
                  <Text color="gold" marginTop={0}>
                    +10PKT
                  </Text>
                </VStack>
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
        <Box
          bg={'white'}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          width={'80%'}
          height={'70%'}
        >
          <Flex width={'100%'} justifyContent={'flex-end'}>
            <button>
              <ImCross onClick={() => navigate('/projects')} />
            </button>
          </Flex>
          <Grid
            templateColumns="repeat(2, 1fr)"
            width={'100%'}
            height={'100%'}
            gap={'5'}
          >
            <GridItem
              p={6}
              backgroundColor={'blackAlpha.100'}
              rounded={'lg'}
              width={'100%'}
              height={'100%'}
            >
              <Flex
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={'5'}
              >
                <HStack>
                  <Text fontSize={'50px'} fontWeight={'600'}>
                    Project
                  </Text>
                  <Text
                    bgClip="text"
                    fontSize={'50px'}
                    fontWeight={'600'}
                    bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
                  >
                    Caritas
                  </Text>
                </HStack>

                <Text fontSize={'20px'} fontWeight={'400'}>
                  Technology Stack:
                </Text>
                <Flex
                  width={'100%'}
                  justifyContent={'space-around'}
                  paddingTop={'2'}
                >
                  <VStack>
                    <FaReact size={'30px'} />
                    <Text>React</Text>
                  </VStack>
                  <VStack>
                    <SiRedux size={'30px'} />
                    <Text>Redux</Text>
                  </VStack>
                  <VStack>
                    <SiTypescript size={'30px'} />
                    <Text>TypeScript</Text>
                  </VStack>
                  <VStack>
                    <FaNodeJs size={'30px'} />
                    <Text>Node JS</Text>
                  </VStack>
                  <VStack>
                    <FaAws size={'30px'} />
                    <Text>Amazon AWS</Text>
                  </VStack>
                </Flex>
                <Flex
                  width={'100%'}
                  justifyContent={'space-around'}
                  paddingTop={'5'}
                  paddingBottom={'5'}
                  border={'1px'}
                  rounded={'lg'}
                  borderColor={'linear(to-tr, #f64ae7, #4963e8 90% )'}
                >
                  <HStack>
                    <VStack alignItems={'flex-start'}>
                      <HStack>
                        <Text fontSize={'20px'} fontWeight={'400'}>
                          PM:
                        </Text>
                        <Text fontSize={'20px'} fontWeight={'200'}>
                          Tomasz Malski
                        </Text>
                      </HStack>
                      <HStack>
                        <Text fontSize={'20px'} fontWeight={'400'}>
                          Contact phone:
                        </Text>
                        <Text fontSize={'20px'} fontWeight={'200'}>
                          +48505376010
                        </Text>
                      </HStack>
                      <HStack>
                        <Text fontSize={'20px'} fontWeight={'400'}>
                          email:
                        </Text>
                        <Text fontSize={'20px'} fontWeight={'200'}>
                          tomasz.malski@accenture.com
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Text fontSize={'20px'} fontWeight={'400'}>
                      Status:
                    </Text>
                    <Text fontSize={'20px'} fontWeight={'200'}>
                      Ongoing
                    </Text>
                  </HStack>
                </Flex>
                <Stack>
                  <Text fontSize={'25px'} fontWeight={'400'}>
                    Description
                  </Text>
                </Stack>
                <Stack>
                  <Text color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum.
                  </Text>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem width={'100%'} height={'100%'}>
              <Center width={'100%'} height={'100%'} flexDirection={'column'}>
                <Image
                  src={'/assets/caritas.jpg'}
                  // height={'100%'}
                  rounded={'lg'}
                />
                <Stack alignItems={'center'} paddingTop={'10'} width={'100%'}>
                  <Button
                    width={'full'}
                    onClick={() => btnClicked()}
                    bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
                    color={'white'}
                    _hover={{
                      bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
                    }}
                    _active={{
                      bgGradient: 'linear(to-tr, #c73bbb, #3347ab 90% )',
                    }}
                  >
                    Collect Points
                  </Button>
                </Stack>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </BgImageMain>
  );
};

export default ProjectDetails;
