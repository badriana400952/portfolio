import {
  Box,
  Flex,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsBootstrapFill } from "react-icons/bs";
import { DiCss3, DiMaterializecss } from "react-icons/di";
import { FaReact, FaGithub, FaGolang } from "react-icons/fa6";
import {
  SiBootstrap,
  SiFirebase,
  SiJavascript,
  SiRemix,
  SiTypescript,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const techStackData = {
  "Framework Design": [
    { icon: <BsBootstrapFill />, label: "Bootstrap" },
    { icon: <SiBootstrap />, label: "Chakra UI" },
    { icon: <DiMaterializecss />, label: "Materialize CSS" },
    { icon: <DiCss3 />, label: "Vanilla CSS" },
  ],
  "Framework Javascript": [
    { icon: <FaReact />, label: "React JS/TS" },
    { icon: <TbBrandRedux />, label: "Redux Toolkit" },
    { icon: <SiRemix />, label: "Remix" },
  ],
  Language: [
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <FaGolang />, label: "Golang" },
  ],
  Others: [
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiFirebase />, label: "Firebase" },
  ],
};

const TechCard = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <Box
    w={["100%", "47%", "210px"]}
    minW="160px"
    mt="10px"
    h="80px"
    border="1px"
    borderColor="blue.200"
    borderRadius="5px"
    _hover={{
      border: "2px",
      borderColor: "blue.600",
      transform: "translate(0,-8px)",
    }}
    transition="0.2s"
    display="flex"
    alignItems="center"
    px={3}
    gap={4}
  >
    <Box fontSize="2xl">{icon}</Box>
    <Text fontSize={["sm", "md"]}>{label}</Text>
  </Box>
);

const Tech = () => {
  return (
    <Box px={[4, 8]} py={10}>
      <Heading as="h1" size="xl" textAlign={["center", "left"]}>
        Tech Stack
      </Heading>
      <Text fontSize={["md", "lg"]} mt={2} textAlign={["center", "left"]}>
        A list of my favorite tools and technologies that I use on a regular
        basis.
      </Text>

      <Box mt={5}>
        <Tabs position="relative" variant="unstyled" isFitted>
          <Box overflowX="auto">
            <TabList gap="20px" minW="500px">
              {Object.keys(techStackData).map((category) => (
                <Tab key={category}>{category}</Tab>
              ))}
            </TabList>
          </Box>

          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />

          <TabPanels mt={5}>
            {Object.values(techStackData).map((items, index) => (
              <TabPanel key={index}>
                <Flex flexWrap="wrap" gap={3} justify={["center", "start"]}>
                  {items.map((tech, i) => (
                    <TechCard key={i} icon={tech.icon} label={tech.label} />
                  ))}
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Tech;
