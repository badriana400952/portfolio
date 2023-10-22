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

import lap6 from '../assets/lap6.png'
import lap3 from '../assets/lap3.png'
import lap5 from '../assets/lap5.png'
import lapSircle from '../assets/lapSircle.png'
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
                                src={lap3}
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
                                src={lapSircle}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                width={'100%'}
                                height={'300px'}
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Sircle</Heading>
                                <Text>
                                    Sircle adalah clone Twitter yang dibuat menggunakan React, Node.js, Express.js, PostgreSQL, dan Chakra ui. meskipun belom sempurna dalam jangka waktu pengerjaan 1 bulan tetapi sudah bisa digunakan dan saya masih perkembangan terhadap aplikasi ini agar lebih menjadi sempurna selayak nya twitter.
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card maxW='xl' shadow={'2xl'} mt={9} _hover={{  transform: 'translate(0,-10px)' }} transition={'0.2s'}>
                        <CardBody>
                            <Image
                                src={lap5}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                width={'100%'}
                                height={'300px'}
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Laoke</Heading>
                                <Text>
                                   Laoke adalah aplikasi order online yang dibuat untuk mempermudah masyarakat dalam menjual product yang ingin lepas ketergantungan dengan web eccommerce seperti Tokopdeia Lazada dll.
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card maxW='xl' shadow={'2xl'} mt={9} _hover={{  transform: 'translate(0,-10px)' }} transition={'0.2s'}>
                        <CardBody>
                            <Image
                                src={lap6}
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