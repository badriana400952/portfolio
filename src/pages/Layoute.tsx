"use client";

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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, Outlet } from "react-router-dom";
import logos from "../assets/logos.jpeg";
import { BsMoonFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.800", "gray.700"),
        color: "white",
      }}
    >
      {children}
    </ChakraLink>
  );
};

export default function Layoute() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={4}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <Image src={logos} alt="Logo" width={"40px"} />
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/team">Contact</NavLink>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                ></MenuButton>
                <Button onClick={toggleColorMode}>
                  {colorMode === "dark" ? <HiSun /> : <BsMoonFill />}
                </Button>
              </Menu>
            </Flex>
          </Flex>

          {/* Mobile menu */}
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <NavLink to="/" children="Home" />
                <NavLink to="/about" children="About" />
                <NavLink to="/team" children="Contact" />
              </Stack>
            </Box>
          ) : null}
        </Container>
        <Divider />
      </Box>

      <Outlet />
    </>
  );
}
