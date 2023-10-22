import { Box, Button, Center, Container, Divider, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

const Team = () => {
  const [send, setSend] = useState({
    name: '',
    email: '',
    deskripsi: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, deskripsi } = send;
    const emailAddress = email;
    const subject = name;
    const body = deskripsi;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSend(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <>
    <Container maxW='container.xl' display={'flex'} justifyContent={'center'} alignItems={'center'} mb={"190px"}>
      <Box width={"500px"} mt={20}  background={"linear-gradient(#713ABE, #940B92)"} p={4} borderRadius={10}>
        <form onSubmit={handleSubmit}>
        <FormControl mb={9}>
          <FormLabel color={"white"}>Name</FormLabel>
          <Input type='text' placeholder="Name" name="name" color={"white"} onChange={handleInputChange}/>
        </FormControl>
        <FormControl mb={9}>
          <FormLabel color={"white"}>Email</FormLabel>
          <Input type='email' name="email" placeholder="Email" color={"white"} onChange={handleInputChange}/>
        </FormControl>
        <FormControl mb={9}>
          <FormLabel color={"white"}>Deskripsi</FormLabel>
          <Input type='text' name="deskripsi" placeholder="Deskripsi" color={"white"} onChange={handleInputChange}/>
        </FormControl>
        <FormControl mb={9}>
          <Button type='submit'>Submit</Button>
        </FormControl>
        </form>

      </Box>
      <Box >

      </Box>
      </Container>
      <Divider />
      <Center mb={0}  >

        <Box width={'100%'} height={'50px'} >
          <Text textAlign={'center'} lineHeight={10}>Badrian - 18 0ktober 2023</Text>
        </Box>
      </Center>
    </>
  )
}

export default Team