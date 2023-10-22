import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from "@chakra-ui/react"

import brimtech from '../assets/brimtech.jpg'
import golang from '../assets/golang.png'
import lakoe from '../assets/lakoe.png'
const Projects = () => {
    return (
        <>
            <Box>
                <Heading>Projects</Heading>
                <Text fontSize={'20px'}>List of projects that I have made in the past.</Text>
                <Flex justifyContent={'space-between'} transition={'0.2s'} alignItems={'center'} flexWrap={'wrap'} mt={5} >
                    <Card maxW='xl' shadow={'2xl'} mt={9} _hover={{  transform: 'translate(0,-10px)' }} transition={'0.2s'}>
                        <CardBody>
                            <Image
                                src={golang}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                width={'100%'}
                                height={'300px'}
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Otocars</Heading>
                                <Text>
                                Selamat datang di Otocars, rumah bagi para pecinta otomotif dan penggemar mobil. Menggunakan teknologi terdepan seperti Echo Golang, Bootstrap, dan PostgreSQL, kami hadirkan platform blogging yang penuh ketangkasan untuk para penggemar mobil. Bagikan pengetahuan, ulasan, dan kecintaan Anda terhadap mobil dengan komunitas kami. Bergabunglah sekarang, sampaikan passion Anda, dan jelajahi dunia otomotif dengan Otocars.
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    
                    <Card maxW='xl' 
                    shadow={'2xl'}
                     mt={9} 
                    _hover={{  transform: 'translate(0,-10px)' }} transition={'0.2s'}
                    >
                        <CardBody >
                            <Image
                                src={brimtech}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                width={'100%'}
                                height={'300px'}
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card maxW='xl' shadow={'2xl'} mt={9} _hover={{  transform: 'translate(0,-10px)' }} transition={'0.2s'}>
                        <CardBody>
                            <Image
                                src={lakoe}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                width={'100%'}
                                height={'300px'}
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Laoke</Heading>
                                <Text>
                                   Laoke adalah This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card maxW='xl' shadow={'2xl'} mt={9} _hover={{  transform: 'translate(0,-10px)' }} transition={'0.2s'}>
                        <CardBody>
                            <Image
                                src={brimtech}
                                alt='brimtech'
                                borderRadius='lg'
                                width={'100%'}
                                height={'300px'}
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Brimtech</Heading>
                                <Text>
                                    Brimtech adalah nama aplikasi yang saya buat bersama rekan saya, meskipun belom sepenuhnya sempurna tapi kami masih perkembangan terhadap aplikasi kami.
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Flex>
            </Box>
        </>
    )
}

export default Projects