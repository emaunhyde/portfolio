import { Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ExternalLink({
  href,
  children,
  variant = "ghost",
  colorScheme = "whiteAlpha",
  size = "sm",
}) {
  return (
    <Button variant={variant} colorScheme={colorScheme} size={size}>
      <Link
        href={href}
        isExternal
        style={{ textDecoration: "none", textTransform: "uppercase" }}
        color="brand.alabaster"
        fontFamily="mono"
        fontWeight="normal"
      >
        {children}
        <ExternalLinkIcon mx={2} mb="3px" mr={0} />
      </Link>
    </Button>
  );
}
