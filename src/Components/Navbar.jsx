/*
Created by Nick Hanson
Last modified: 5/17/25

This file is part of The Bullpen Report project.
The Bullpen Report is a baseball statistics viewer powered by AWS services.
It connects to a custom API built using Lambda, API Gateway, and DynamoDB,
delivering live team, player, and game data directly to the browser.
The Bullpen Report is licensed under the MIT License.
See the LICENSE file in the project root for more information.
*/

import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import { NavLink as RouterLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Stats", to: "/stats" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const NavLink = ({ to, children }) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    _hover={{ textDecoration: "none", bg: "blue.500", color: "white" }}
    as={RouterLink}
    to={to}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.600" px={4} color="white" boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">Bullpen Report</Heading>
        <IconButton
          size="md"
          icon={isOpen ? <CloseButton /> : <CgMenu />}
          aria-label="Toggle Navigation"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.name}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={2}>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}