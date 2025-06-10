"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({ theme, children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
