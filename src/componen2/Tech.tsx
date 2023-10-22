import { Box, Flex, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Image } from '@chakra-ui/react'
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiRemix, SiJavascript, SiTypescript, SiFirebase, SiBootstrap } from "react-icons/si";
import { DiMaterializecss, DiCss3, } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { FaGolang, FaGithub } from "react-icons/fa6";
import chakraui from '../assets/chakraui.png'
import css from '../assets/css.png'
import materulia from '../assets/materulia.png'
import bootstrap from '../assets/bootstrap.png'

import remix from '../assets/remix.png'
import reduk from '../assets/reduk.png'
import react from '../assets/react.png'

import Golangg from '../assets/Golangg.png'
import typescript from '../assets/typescript.png'
import js from '../assets/js.png'

import GitHub from '../assets/GitHub.png'
import firebase from '../assets/firebase.png'


import { motion } from 'framer-motion';
const Tech = () => {
  return (
    <>
      <Box >
        <Heading as={'h1'} size='xl'>  Tech Stack</Heading>
        <Text fontSize={'20px'}>A list of my favorite tools and technologies that I use on a regular basis.</Text>
        <Box >

          <Box mt={5}>
            <Tabs position="relative" variant="unstyled">
              <TabList gap={'20px'}>
                <Tab>Framework Design</Tab>
                <Tab>framework Javascript</Tab>
                <Tab>Language</Tab>
                <Tab>Others</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels width="100%">
                <TabPanel mt={5}>
                  <Flex >
                    <Flex flex={2} gap={'10px'} flexWrap={'wrap'}>
                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <BsBootstrapFill style={{ padding: '6px', width: '40px', height: '40px', fontSize: '20px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Bootstrap</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <SiBootstrap style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Chakra ui</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <DiMaterializecss style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Matearilize Css</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <DiCss3 style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}> Vanila Css</Text>
                      </Box>

                    </Flex>
                    <Box flex={1} display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={5} >
                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={bootstrap} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>
                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={chakraui} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>
                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={materulia} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>
                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={css} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex >
                    <Flex flex={2} gap={'10px'} flexWrap={'wrap'}>
                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <FaReact style={{ padding: '6px', width: '40px', height: '40px', fontSize: '20px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  React Js/Ts</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <TbBrandRedux style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Redux Toolkit</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <SiRemix style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Remix</Text>
                      </Box>

                    </Flex>
                    <Box flex={1} display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={8}>
                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={react} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>

                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={reduk} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>

                      <Box w="80px" h="80px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "80px", height: "80px" }}
                        >
                          <Box>
                            <Image src={remix} alt="chakra" w="80px" h="80px" />
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex >
                    <Flex flex={2} gap={'10px'} flexWrap={'wrap'}>
                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <SiJavascript style={{ padding: '6px', width: '40px', height: '40px', fontSize: '20px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Javascript</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <SiTypescript style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Typescript</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <FaGolang style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Golang</Text>
                      </Box>
                    </Flex>
                    <Box flex={1} display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={8}>
                    <Box w="80px" h="80px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "80px", height: "80px" }}
                        >
                          <Box>
                            <Image src={js} alt="chakra" w="80px" h="80px" />
                          </Box>
                        </motion.div>
                      </Box>

                      <Box w="80px" h="80px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "80px", height: "80px" }}
                        >
                          <Box>
                            <Image src={typescript} alt="chakra" w="80px" h="80px" />
                          </Box>
                        </motion.div>
                      </Box>

                      <Box w="80px" h="80px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "80px", height: "80px" }}
                        >
                          <Box>
                            <Image src={Golangg} alt="chakra" w="80px" h="60px" />
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex >
                    <Flex flex={2} gap={'10px'} flexWrap={'wrap'}>
                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <FaGithub style={{ padding: '6px', width: '40px', height: '40px', fontSize: '20px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Github</Text>
                      </Box>

                      <Box width={'210px'} marginTop={'10px'} height={'80px'} border='1px' borderColor='blue.200' borderRadius={'5px'}
                        _hover={{ border: '2px', borderColor: 'blue.600', transform: 'translate(0,-8px)' }}
                        transition={'0.2s'} display={'Flex'}
                      >
                        <SiFirebase style={{ padding: '6px', width: '40px', height: '40px', fontSize: '25px', margin: '14px', borderRadius: '5px' }} />
                        <Text my={'20px'}>  Firebase</Text>
                      </Box>


                    </Flex>
                    <Box flex={1} display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={8}>
                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={GitHub} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>

                      <Box w="100px" h="100px" position="relative" >
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ width: "100px", height: "100px" }}
                        >
                          <Box>
                            <Image src={firebase} alt="chakra" w="100px" h="100px" />
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Tech