"use client";

import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import CursorLight from "@/components/ui/cursor";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/emaunhyde/",
    icon: FaLinkedin,
    label: "Linkedin profile",
  },
  {
    href: "https://github.com/emaunhyde",
    icon: FaGithub,
    label: "Github profile",
  },
  {
    href: "mailto:emaunaridnihyde@gmail.com",
    icon: MdAlternateEmail,
    label: "Email",
  },
];

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "background", label: "Background" },
  { id: "about", label: "About" },
];

function NavigationItem({ id, label, activeSection, onClick, navColor }) {
  return (
    <Button
      variant="ghost"
      onClick={() => onClick(id)}
      opacity={activeSection === id ? "1" : "0.3"}
      textTransform="uppercase"
      letterSpacing="0.10em"
      fontSize="xs"
      fontWeight={activeSection === id ? "semibold" : "regular"}
      color={navColor}
      bg="transparent"
      p={2}
      pl={0}
      h="auto"
      justifyContent="flex-start"
      fontFamily="heading"
      _hover={
        activeSection === id
          ? { opacity: "1", bg: "transparent" }
          : { opacity: "0.6", bg: "transparent" }
      }
      aria-label={`Navigate to ${label} section`}
    >
      {label}
    </Button>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <Link
      href={href}
      isExternal
      aria-label={label}
      minH={["2.75rem", "2.75rem"]}
      minW={["2.75rem", "2.75rem"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      _focus={{
        boxShadow: "0 0 0 0.125rem",
        boxShadowColor: "brand.alabaster",
        outline: "none",
      }}
    >
      <Icon
        as={icon}
        fontSize={["1.5rem", "1.5rem"]}
        opacity="0.5"
        _hover={{ color: "brand.pale_green", opacity: 1 }}
        color="brand.alabaster"
        role="img"
      />
    </Link>
  );
}

export default function Navigation({ activeSection, onNavigate }) {
  const navColor = "brand.alabaster";

  return (
    <>
      {/* Fixed Header */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        height="6rem"
        bg="brand.onyx"
        zIndex={10}
        pt="1.5rem"
        pb="0.5rem"
      >
        <Grid templateColumns="1fr 2fr" gap="2rem" px="2rem">
          <GridItem>
            <Image src="wordmark.svg" alt="Wordmark" maxWidth="10rem" />
          </GridItem>
        </Grid>
      </Box>

      {/* Left Column - Fixed Nav */}
      <GridItem position="sticky" top="6rem" height="fit-content" zIndex={20}>
        <CursorLight />
        <Stack spacing={2}>
          {navItems.map((item) => (
            <NavigationItem
              key={item.id}
              id={item.id}
              label={item.label}
              activeSection={activeSection}
              onClick={onNavigate}
              navColor={navColor}
            />
          ))}
          <Button
            as={Link}
            href="/eh_resume.pdf"
            target="_blank"
            variant="ghost"
            opacity="0.3"
            textTransform="uppercase"
            letterSpacing="0.10em"
            fontSize="xs"
            fontWeight="regular"
            color={navColor}
            bg="transparent"
            p={2}
            pl={0}
            h="auto"
            justifyContent="flex-start"
            mb={[2, 2, 6, 6]}
            textDecoration="none"
            _hover={{
              opacity: "0.6",
              bg: "transparent",
              textDecoration: "none",
            }}
            aria-label="Download resume PDF"
          >
            Resumé
          </Button>
        </Stack>

        <Stack direction="row" spacing={4} mt={[4, 4, 6, 6]}>
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.href}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </Stack>

        <Text
          color="brand.alabaster"
          fontSize="xs"
          mt={[8, 8, 12, 12]}
          opacity="0.3"
          fontFamily="mono"
        >
          Mocked up in Figma, and coded in Cursor. Built with Next.js +
          ChakraUI, then deployed with Vercel.
        </Text>
      </GridItem>
    </>
  );
}
