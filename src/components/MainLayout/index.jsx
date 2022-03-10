import '@fontsource/space-grotesk/400.css'
import { Flex } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from '../Navbar'
import { theme } from '../../theme/index'

const MainLayout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" w="full" h="full" bg="blue">
        <Navbar />
        <Flex as="main" direction="column" w="full">
          <Flex direction="column" flexGrow="1">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MainLayout
