import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import { FaFilePdf, FaPhoneVolume } from "react-icons/fa";
import Projects from "../componen2/Projects";
import Tech from "../componen2/Tech";
import "./font.css";

const Home = () => {
  return (
    <>
      <Container maxW="container.xl" mb={20} px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={10}
          my="20px"
        >
          {/* Text Section */}
          <Box flex={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
              Hey, I'm Badrian 👋
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }} mt={4}>
              Front-End Engineer from Pandeglang
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }} mt={2}>
              Focus on Web Development. Passionate about Writing Beautiful
              Technology
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify={{ base: "center", md: "flex-start" }}
              mt={6}
            >
              <Button
                leftIcon={<FaFilePdf />}
                colorScheme="teal"
                as="a"
                href="https://drive.google.com/file/d/11TkmHzhNXFvIJBvGdDx9fatYkdtqzzHG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
              <Button
                leftIcon={<FaPhoneVolume />}
                colorScheme="green"
                as="a"
                href="https://api.whatsapp.com/send/?phone=6285887535612&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </Button>
            </Stack>
          </Box>

          {/* Spline 3D Section */}
          <Box flex={1} display="flex" justifyContent="center">
            <Box w={{ base: "100%", sm: "80%", md: "500px" }} h="auto">
              <Spline scene="https://prod.spline.design/KCiwsgXHVK-HiWfP/scene.splinecode" />
            </Box>
          </Box>
        </Flex>

        {/* Tech Section */}
        <Box mt={20}>
          <Tech />
        </Box>

        <Divider my={10} />

        {/* Projects Section */}
        <Box mt={20}>
          <Projects />
        </Box>
      </Container>

      <Divider />
      <Center>
        <Box width="100%" height="50px">
          <Text textAlign="center" lineHeight="50px">
            Badrian - 18 Oktober 2023
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default Home;
