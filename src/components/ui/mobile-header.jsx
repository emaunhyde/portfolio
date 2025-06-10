"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function MobileHeader({ activeSection, handleClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = useRef(null);
  
  const handleMenuClose = () => {
    onClose();
    // Return focus to menu button when drawer closes
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 100);
  };

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "background", label: "Background" },
    { id: "about", label: "About" },
  ];

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/emaunhyde/",
      icon: FaLinkedin,
      label: "LinkedIn profile"
    },
    {
      href: "https://github.com/emaunhyde",
      icon: FaGithub,
      label: "Github profile"
    },
    {
      href: "mailto:emaunaridnihyde@gmail.com",
      icon: MdAlternateEmail,
      label: "Email"
    }
  ];

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="brand.onyx"
        zIndex={1000}
        borderBottom="1px solid"
        borderColor="brand.darkgreen"
      >
        <Flex
          justify="space-between"
          align="center"
          p={4}
          maxWidth="100%"
          margin="0 auto"
        >
          <Image
            src="wordmark.svg"
            alt="Wordmark"
            maxWidth="6rem"
            height="auto"
          />
          <IconButton
            ref={menuButtonRef}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            color="brand.alabaster"
            _hover={{ bg: "brand.darkgreen" }}
            _focus={{
              boxShadow: "0 0 0 0.125rem",
              boxShadowColor: "brand.alabaster"
            }}
          />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={handleMenuClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="brand.onyx">
          <DrawerCloseButton 
            color="brand.alabaster" 
            _focus={{
              boxShadow: "0 0 0 0.125rem",
              boxShadowColor: "brand.alabaster"
            }}
          />
          <DrawerBody pt={16} id="mobile-navigation">
            <Flex 
              direction="column" 
              justify="space-between"
              height="calc(100vh - 100px)" // Account for the top padding and close button
            >
              <Stack spacing={6}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => {
                      // Close drawer first, then scroll after a brief delay
                      handleMenuClose();
                      setTimeout(() => {
                        handleClick(item.id);
                      }, 300); // Allow drawer to close first
                    }}
                    opacity={activeSection === item.id ? "1" : "0.3"}
                    textTransform="uppercase"
                    letterSpacing="0.10em"
                    fontSize="sm"
                    fontWeight={activeSection === item.id ? "semibold" : "regular"}
                    color="brand.alabaster"
                    bg="transparent"
                    h="auto"
                    p={3}
                    minH="44px"
                    w="full"
                    justifyContent="flex-start"
                    _hover={{ opacity: "0.6", bg: "transparent" }}
                    _focus={{
                      boxShadow: "0 0 0 0.125rem",
                      boxShadowColor: "brand.alabaster",
                      opacity: "1"
                    }}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  as={Link}
                  href="/eh_resume.pdf"
                  target="_blank"
                  variant="ghost"
                  opacity="0.3"
                  textTransform="uppercase"
                  letterSpacing="0.10em"
                  fontSize="sm"
                  fontWeight="regular"
                  color="brand.alabaster"
                  bg="transparent"
                  h="auto"
                  p={3}
                  minH="2.75rem"
                  w="full"
                  justifyContent="flex-start"
                  textDecoration="none"
                  onClick={handleMenuClose}
                  _hover={{ opacity: "0.6", bg: "transparent", textDecoration: "none" }}
                  _focus={{
                    boxShadow: "0 0 0 0.125rem",
                    boxShadowColor: "brand.alabaster",
                    opacity: "1"
                  }}
                  aria-label="Download resume PDF"
                >
                  Resumé
                </Button>
              </Stack>

              <Stack spacing={6} align="center">
                <Stack direction="row" spacing={6}>
                  {socialLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      isExternal
                      onClick={handleMenuClose}
                    >
                      <Icon
                        as={link.icon}
                        aria-label={link.label}
                        fontSize="1.5rem"
                        opacity="0.5"
                        _hover={{ color: "brand.pale_green", opacity: 1 }}
                        color="brand.alabaster"
                      />
                    </Link>
                  ))}
                </Stack>

                <Text 
                  color="brand.alabaster" 
                  fontSize={["sm", "sm", "xs", "xs"]} 
                  opacity="0.2"
                  textAlign="center"
                >
                  Designed in Figma, and coded in Cursor. 
                  Built with Next.js + ChakraUI, then deployed with Vercel.
                </Text>
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
} 