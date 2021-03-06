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
import { FaMagento } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaConfluence } from 'react-icons/fa';
import { FaJira } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
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
          // height={'100%'}
        >
          <Flex width={'100%'} justifyContent={'flex-end'}>
            <button>
              <ImCross onClick={() => navigate('/projects')} />
            </button>
          </Flex>
          <Grid
            templateColumns="repeat(2, 1fr)"
            width={'100%'}
            // height={'10%'}
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
                height={'100%'}
              >
                <HStack>
                  <Text
                    fontSize={{
                      base: '18px',
                      md: '20px',
                      lg: '35px',
                      xl: '50px',
                    }}
                    fontWeight={'600'}
                  >
                    Project
                  </Text>
                  <Text
                    bgClip="text"
                    fontSize={{
                      base: '18px',
                      md: '20px',
                      lg: '35px',
                      xl: '50px',
                    }}
                    fontWeight={'600'}
                    bgGradient="linear(to-tr, #f64ae7, #4963e8 90% )"
                  >
                    PG
                  </Text>
                </HStack>

                <Text
                  fontSize={{
                    base: '8px',
                    md: '10px',
                    lg: '15px',
                    xl: '20px',
                  }}
                  fontWeight={'400'}
                >
                  Technology Stack:
                </Text>
                <Flex
                  width={'100%'}
                  justifyContent={'space-around'}
                  paddingTop={'2'}
                >
                  <VStack>
                    <Box
                      height={{
                        base: '8px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px',
                      }}
                    >
                      <FaMagento size={'100%'} />
                    </Box>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '12px',
                        xl: '20px',
                      }}
                    >
                      Magento
                    </Text>
                  </VStack>
                  <VStack>
                    <Box
                      height={{
                        base: '8px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px',
                      }}
                    >
                      <SiGoogleanalytics size={'100%'} />
                    </Box>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '12px',
                        xl: '20px',
                      }}
                    >
                      Google Analytics
                    </Text>
                  </VStack>
                  <VStack>
                    <Box
                      height={{
                        base: '8px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px',
                      }}
                    >
                      <FaGoogle size={'100%'} />
                    </Box>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '12px',
                        xl: '20px',
                      }}
                    >
                      Google Tag Manager
                    </Text>
                  </VStack>
                  <VStack>
                    <Box
                      height={{
                        base: '8px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px',
                      }}
                    >
                      <FaJira size={'100%'} />
                    </Box>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '12px',
                        xl: '20px',
                      }}
                    >
                      Jira
                    </Text>
                  </VStack>
                  <VStack>
                    <Box
                      height={{
                        base: '8px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px',
                      }}
                    >
                      <FaConfluence size={'100%'} />
                    </Box>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '12px',
                        xl: '20px',
                      }}
                    >
                      Confluence
                    </Text>
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
                        <Text
                          fontSize={{
                            base: '8px',
                            md: '10px',
                            lg: '15px',
                            xl: '20px',
                          }}
                          fontWeight={'400'}
                        >
                          PM:
                        </Text>
                        <Text
                          fontSize={{
                            base: '8px',
                            md: '10px',
                            lg: '15px',
                            xl: '20px',
                          }}
                          fontWeight={'200'}
                        >
                          Anna Gromanska
                        </Text>
                      </HStack>
                      <HStack>
                        <Text
                          fontSize={{
                            base: '8px',
                            md: '10px',
                            lg: '15px',
                            xl: '20px',
                          }}
                          fontWeight={'400'}
                        >
                          Contact phone:
                        </Text>
                        <Text
                          fontSize={{
                            base: '8px',
                            md: '10px',
                            lg: '15px',
                            xl: '20px',
                          }}
                          fontWeight={'200'}
                        >
                          +48573258228
                        </Text>
                      </HStack>
                      <HStack>
                        <Text
                          fontSize={{
                            base: '8px',
                            md: '10px',
                            lg: '15px',
                            xl: '20px',
                          }}
                          fontWeight={'400'}
                        >
                          email:
                        </Text>
                        <Text
                          fontSize={{
                            base: '8px',
                            md: '10px',
                            lg: '15px',
                            xl: '20px',
                          }}
                          fontWeight={'200'}
                        >
                          anna.gromanska@accenture.com
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '15px',
                        xl: '20px',
                      }}
                      fontWeight={'400'}
                    >
                      Status:
                    </Text>
                    <Text
                      fontSize={{
                        base: '8px',
                        md: '10px',
                        lg: '15px',
                        xl: '20px',
                      }}
                      fontWeight={'200'}
                    >
                      Finished
                    </Text>
                  </HStack>
                </Flex>
                <Stack>
                  <Text
                    fontSize={{
                      base: '8px',
                      md: '10px',
                      lg: '15px',
                      xl: '25px',
                    }}
                    fontWeight={'400'}
                  >
                    Description
                  </Text>
                </Stack>
                <Stack>
                  <Text
                    fontSize={{
                      base: '8px',
                      md: '10px',
                      lg: '11px',
                      xl: '14px',
                    }}
                    color={'gray.500'}
                  >
                    The PG Company had introduced the e-comm platform for B2B
                    present on North, Latin America and Europe. The natural
                    shift from the traditional offline sales rep process to
                    e-commerce should be driven by data analysis and insights.
                    Project goal was to: verify the current GA set up. Accenture
                    provided the team to diagnose the clients' systems and find
                    right solutions. We worked in the Agaile work methodology
                    which allowed us for the delivery of results on the fly. We
                    fulfill all goals and delivered: Recommendations Matrix,
                    Goal's structure for UA, 23 new events for GA, 28 Events
                    with required update, Naming convention mapped, Process Map
                    for future projects.
                  </Text>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem width={'100%'} height={'100%'}>
              <Center width={'100%'} height={'100%'} flexDirection={'column'}>
                <Image
                  src={'/assets/pg_logo.jpg'}
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
