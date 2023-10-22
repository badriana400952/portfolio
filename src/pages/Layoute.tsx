'use client'

import {
  Box,
  Flex,

  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Image,
  useColorMode,
  Divider,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link, Outlet } from 'react-router-dom'
import logos from "../assets/logos.jpeg"
import { BsMoonFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
interface Props {
  children: React.ReactNode
}

const Links = ['Home', 'About', 'Team']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.800', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Layoute() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>

      <Box  px={4} >
        <Container maxW='container.xl'  >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <Image src={logos} alt='hrhr' width={"40px"} />
              </Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/team">Contact</Link>
                {/* <Link to="/add">Add</Link>
                <Link to="/list">List</Link> */}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                 
                </MenuButton>
                <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? <HiSun /> :  <BsMoonFill />}

                  </Button>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
        <Divider/>

      </Box>

      <Outlet />
    </>
  )
}