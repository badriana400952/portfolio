import { Box, Button, Container, Flex, Heading, Text, Divider, Center } from '@chakra-ui/react'
import "./font.css"
import { FaFilePdf, FaPhoneVolume } from "react-icons/fa";
import Projects from '../componen2/Projects';
import Tech from '../componen2/Tech';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <>

      <Container maxW='container.xl' >
        <Flex justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} my={'20px'}>
          <Box flex={1} >
            <Heading as={'h1'} size='3xl'>  Hey, I'm Badrian 👋</Heading> <br />
            <Text fontSize={'25px'}> Front-End Engineer from Pandeglang</Text>
            <Text fontSize={'20px'}>Focus on Web Development. Passionate about Writing Beautiful Technology</Text>
            <Button mt={'20px'} mx={'10px'}><FaFilePdf /><Link to={`https://drive.google.com/file/d/11TkmHzhNXFvIJBvGdDx9fatYkdtqzzHG/view?usp=sharing`}>Resume</Link> </Button>
            <Button mt={'20px'}><FaPhoneVolume /><Link to={`https://api.whatsapp.com/send/?phone=6285887535612&text&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer">Contact Me</Link> </Button>
          </Box>
          <Box flex={1} justifyContent={'center'}>
            <Box >
              <Spline style={{ width: '500px', }} scene="https://prod.spline.design/KCiwsgXHVK-HiWfP/scene.splinecode" />
            </Box>
          </Box>
        </Flex>
        <Box mt={40}>
          <Tech />
        </Box>
        <Divider />

        <Box mt={40}>
          <Projects />
        </Box>

      </Container>
      <Divider/>
      <Center mb={0} mt={20} >
        <Box width={'100%'} height={'50px'} >
          <Text textAlign={'center'} lineHeight={10}>Badrian - 18 0ktober 2023</Text>
        </Box>
      </Center>

    </>
  )
}

export default Home