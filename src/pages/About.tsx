import { Container } from "@chakra-ui/react";
import Profile from "../componen2/Profile";
import ProfileDeskripsi from "../componen2/ProfileDeskripsi";

const About = () => {
  return (
    <>
      <Container maxW="container.xl" px={[4, 6, 8]} py={[8, 10]}>
        <Profile />
        <ProfileDeskripsi />
      </Container>
    </>
  );
};

export default About;
