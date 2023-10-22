import {
    Button,
    Center, Container, Flex, FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useAppDispatch } from '../store/store'
import {  tambahData } from '../store/features/presonSlice'

const Add = () => {
    const names = useRef<string>('')
    const lastName = useRef<string>('')
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newData = {
            names: names.current,
            lastName: lastName.current 
        }
        try {
          await dispatch(tambahData(newData));
        } catch (error) {
            console.error(error);
            // Tangani kesalahan
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Center>
                        <Flex flexDirection={'column'}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input type='text' name='names' onChange={e => names.current = e.target.value} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='text' name='lastName' onChange={e => lastName.current = e.target.value} />
                            </FormControl>
                            <FormControl>
                                <Button type='submit'>
                                    Add
                                </Button>
                            </FormControl>
                        </Flex>
                    </Center>
                </Container>
            </form>
        </>
    )
}

export default Add