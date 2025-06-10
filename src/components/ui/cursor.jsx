"use client";

import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function CursorLight() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      position="fixed"
      pointerEvents="none"
      top={`${cursorPos.y}px`}
      left={`${cursorPos.x}px`}
      transform="translate(-50%, -50%)"
      width="300px"
      height="300px"
      borderRadius="50%"
      opacity="0.1"
      bgColor="brand.cream"
      filter="blur(100px)"
      zIndex={-1}
    />
  );
}
