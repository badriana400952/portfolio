import { Box, Flex, Image } from '@chakra-ui/react'
import dedee from '../assets/dedee.jpg'
import "./component2.css"
const Profile = () => {
    return (
        <>
            <Flex justifyContent={'center'} mt={20}>
                <Box>
              
                <Box width={'300px'}>
                    <Image src={dedee} borderRadius={'50%'} width={'100%'} objectFit={'cover'} />
                </Box>
                <h2 className='latin' >Badriana</h2>
                </Box>
            </Flex>
            
            
        </>
    )
}

export default Profile