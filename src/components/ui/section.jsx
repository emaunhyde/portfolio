import { Box } from "@chakra-ui/react";

export default function Section({ id, children, mt = ["6rem", "6rem", "15rem", "15rem"] }) {
  return (
    <Box id={id} mt={mt}>
      {children}
    </Box>
  );
}