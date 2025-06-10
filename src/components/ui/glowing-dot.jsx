"use client";

import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(4);
  }
`;

export default function GlowingDot() {
  const pulseAnimation = `${pulse} 2.5s cubic-bezier(0.1, 0.5, 0.6, 1) infinite`;

  return (
    <Box position="relative" w="2rem" h="2rem" zIndex={20}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="12px"
        h="12px"
        borderRadius="50%"
        bg="brand.pale_green"
        animation={pulseAnimation}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="12px"
        h="12px"
        borderRadius="50%"
        bg="brand.pale_green"
      />
    </Box>
  );
}
