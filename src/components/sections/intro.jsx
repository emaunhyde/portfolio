import { Box, Text } from "@chakra-ui/react";

export default function Intro() {
  return (
    <Box
      minHeight="auto"
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Text
        fontSize={["2xl", "3xl", "3xl", "4xl"]}
        color="brand.cream"
        fontFamily="heading"
        lineHeight={["140%", "140%", "120%", "120%"]}
      >
        I'm an interdisciplinary software engineer blending 
        ten years of visual design experience with full-stack engineering
        rigor to turn ideas into products that are as intuitive as they are functional.
      </Text>
    </Box>
  );
}
