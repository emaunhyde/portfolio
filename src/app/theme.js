"use client";

import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/funnel-display";
import "@fontsource-variable/funnel-sans";
import "@fontsource-variable/source-code-pro";

const theme = extendTheme({
  fonts: {
    heading: `'Funnel Display', sans-serif`,
    body: `'Funnel Sans', sans-serif`,
    mono: `'Source Code Pro', monospace`,
  },
  colors: {
    brand: {
      alabaster: "#EDEBDF", 
      cream: "#C8C29D",
      onyx:  "#201E1A",
      darkgreen: "#313716",
      pale_green: "#ACBE5B", 
      pale_yellow: "#EFDF80",
    },
  },
});

export default theme;
