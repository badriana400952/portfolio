import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dedee from "../assets/dedee.jpg";

const Profile = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      mt={[10, 20]}
      mb={10}
    >
      <Box width={["150px", "200px", "250px", "300px"]}>
        <Image
          src={dedee}
          alt="Badriana"
          borderRadius="full"
          width="100%"
          objectFit="cover"
          boxShadow="lg"
        />
      </Box>
      <Text
        mt={4}
        fontSize={["xl", "2xl"]}
        fontWeight="bold"
        fontFamily="cursive"
      >
        Badriana
      </Text>
    </Flex>
  );
};

export default Profile;
