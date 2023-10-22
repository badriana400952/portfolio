import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Center,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSeleector } from '../store/store'
import { useEffect } from 'react'
import { getData } from '../store/features/presonSlice'


const List = () => {
    const person = useAppSeleector(state => state.person.persons)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getData())
        
    }, [dispatch])
    return (
        <>
            <Container maxW='container.2xl' my={'50px'}>
                <Center py={'20px'}>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Person</Th>
                                    <Th>Last Name</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {person.map((p) =>
                                    <Tr key={p.id}>
                                        <Td>{p.id}</Td>
                                        <Td>{p.names}</Td>
                                        <Td>{p.lastName}</Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Center>
            </Container>
        </>
    )
}

export default List