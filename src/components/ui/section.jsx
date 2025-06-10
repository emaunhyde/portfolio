import { Box } from "@chakra-ui/react";

export default function Section({
  id,
  children,
  mt = ["8rem", "8rem", "15rem", "15rem"],
}) {
  return (
    <Box id={id} mt={mt}>
      {children}
    </Box>
  );
}
