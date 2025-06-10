"use client";

import { Icon, Text, Flex } from "@chakra-ui/react";
import { MdOutlineCopyright } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Flex
      direction="row"
      alignItems="center"
      gap={2}
      pt={2}
      pb={[2, 2, 0, 0]}
      px={[2, 2, 0, 0]}
      borderTop="1px solid"
      borderColor="rgba(255, 255, 255, 0.08)"
      bg="brand.onyx"
    >
      <Icon
        aria-label="Copyright"
        fontSize={["1.2rem", "1.3rem"]}
        color="brand.cream"
        opacity={0.6}
      >
        <MdOutlineCopyright />
      </Icon>
      <Text
        fontSize="xs"
        color="brand.cream"
        fontFamily="mono"
        opacity={0.6}
      >
        {currentYear} Emaun Hyde. All rights reserved.
      </Text>
    </Flex>
  );
}
