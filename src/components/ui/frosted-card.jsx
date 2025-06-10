import { Box } from "@chakra-ui/react";

export default function FrostedCard({ children, interactive = true, ...props }) {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      backdropFilter="blur(10px)"
      backgroundColor="rgba(255, 255, 255, 0.02)"
      border="1px solid rgba(255, 255, 255, 0.08)"
      transition={interactive ? "all 0.3s ease" : "none"}
      _hover={interactive ? {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        transform: "translateY(-2px)"
      } : {}}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        pointerEvents: "none",
        zIndex: 1
      }}
      sx={{
        "& > *": {
          position: "relative",
          zIndex: 2
        }
      }}
      {...props}
    >
      {children}
    </Box>
  );
}