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
import hero from './hero.png'
import { roundValueToStep } from '@chakra-ui/utils'

const Hero = () => {
  return (
    <Container
      m={0}
      bgColor="#FFF"
      maxW="full"
      bgImage={hero.src}
      bgSize="cover"
      h="full"
      justify="center"
      pos="relative"
    >
      <Flex px={[8, 12, 40]} py={[8, 12, 40]} w="full" direction="column">
        <Heading pb={8}>
          My name is Emaun and I'm a designer turned engineer.
        </Heading>
        <Text fontSize="0.8rem">
          I`m a full-stack software engineer driven by creating dynamic
          experiences. I build projects with well-thought-out code while
          maintaining a focus on intuitive user experiences and scalable
          functionality. My creative background and curiosity drive my process
          and afford me unique perspectives when problem-solving. As a result of
          growing up in the Caribbean, where teamwork and a positive attitude
          are part of our culture, I thrive in community-driven environments.
          I`m looking forward to working with companies that seek to reimagine
          the world and fearlessly face challenges.
        </Text>
      </Flex>
    </Container>
  )
}

export { Hero }
