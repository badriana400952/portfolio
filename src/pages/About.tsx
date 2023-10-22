import { Container } from "@chakra-ui/react"
import Profile from "../componen2/Profile"
import ProfileDeskripsi from "../componen2/ProfileDeskripsi"

const About = () => {
  return (
    <>

      <Container maxW='container.xl' >
        <Profile />
      </Container>
        <ProfileDeskripsi/>

    </>
  )
}

export default About