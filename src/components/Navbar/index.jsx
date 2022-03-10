import Image from 'next/image'
import NextLink from 'next/link'
import {
  AspectRatio,
  Container,
  Text,
  Flex,
  Box,
  Heading,
  Icon,
  Grid,
  GridItem,
  Link,
  VisuallyHidden,
  HStack
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import logo from './logo.png'

const LinkedinIcon = props => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </Icon>
)

const GithubIcon = props => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </Icon>
)

const InstagramIcon = props => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </Icon>
)

const iconStyles = {
  boxSize: 3,
  color: '#4F4F4F',
  _hover: { color: '#55D983' },
  transition: 'color .5s ease-in-out'
}

const Navbar = () => {
  return (
    <Container px={8} py={2} m={0} bgColor="#FFF" maxW="full">
      <Grid
        templateRows={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(1, 1fr)'
        }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(10, 1fr)'
        }}
        gap={4}
      >
        <GridItem colSpan={1} rowSpan={1}>
          <NextLink href="/">
            <Flex
              cursor="pointer"
              w="full"
              h="full"
              align={{ base: 'flex-start', sm: 'center' }}
            >
              <Heading fontSize="1rem">Emaun Hyde</Heading>
            </Flex>
          </NextLink>
        </GridItem>

        <GridItem colSpan={[1, 1, 8]} rowSpan={1}>
          <Flex justifyContent="flex-end" mr={16}>
            <HStack spacing={8} fontSize="0.7rem">
              <Text
                _hover={{ color: '#55D983' }}
                transition="color .5s ease-in-out"
              >
                About
              </Text>
              <Text>Projects</Text>
              <Text>Resume</Text>
              <Text>Contact</Text>
            </HStack>
          </Flex>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
          <HStack spacing={4} justify="flex-end">
            <Link
              href="https://www.linkedin.com/in/emaunhyde/"
              rel="noopener"
              target="_blank"
            >
              <LinkedinIcon {...iconStyles} />
              <VisuallyHidden>Linkedin</VisuallyHidden>
            </Link>
            <Link
              href="https://github.com/emaunhyde"
              rel="noopener"
              target="_blank"
            >
              <GithubIcon {...iconStyles} />
              <VisuallyHidden>Github</VisuallyHidden>
            </Link>
            <Link
              href="https://www.instagram.com/maungrove/"
              rel="noopener"
              target="_blank"
            >
              <InstagramIcon {...iconStyles} />
              <VisuallyHidden>Instagram</VisuallyHidden>
            </Link>
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  )
}

export { Navbar }
