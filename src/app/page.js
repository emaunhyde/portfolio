"use client";

import { useEffect, useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Background from "@/components/sections/background";
import Intro from "@/components/sections/intro";
import About from "@/components/sections/about";
import Footer from "@/components/ui/footer";
import ModernCursor from "@/components/ui/modern-cursor";
import Navigation from "@/components/ui/navigation";
import MobileHeader from "@/components/ui/mobile-header";
import Section from "@/components/ui/section";

const SECTIONS = ["intro", "background", "about"];
const HEADER_HEIGHT = 6 * 16; // 6rem = 96px
const MOBILE_HEADER_HEIGHT = 56;

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(sectionId);
    if (element) {
      const isMobileCheck = window.innerWidth < 768;
      const headerHeight = isMobileCheck ? MOBILE_HEADER_HEIGHT : HEADER_HEIGHT;
      const offsetTop = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i]);
        if (element && scrollY >= element.offsetTop) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box bg="brand.onyx" p={["0", "0", "2rem", "2.5rem"]} minHeight="100vh">
      <ModernCursor />
      
      {/* Mobile Header */}
      <Box display={["block", "block", "none", "none"]}>
        <MobileHeader
          activeSection={activeSection}
          handleClick={scrollToSection}
        />
      </Box>
      
      {/* Main Layout */}
      <Grid
        templateColumns={["1fr", "1fr", "1fr 2fr", "1fr 2fr"]}
        gap={["0", "0", "10rem", "10rem"]}
        pt={["4rem", "4rem", "6rem", "6rem"]}
        pr={["0", "0", "2rem", "2rem"]}
        minHeight="100vh"
      >
        {/* Desktop Navigation */}
        <GridItem display={["none", "none", "block", "block"]}>
          <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
        </GridItem>
        
        {/* Content */}
        <GridItem 
          colStart={[1, 1, 2, 2]} 
          px={[5, 5, 0, 0]} 
          mt={[12, 12, 0, 0]}
        >
          <Box>
            <Section id="intro" mt="0">
              <Intro />
            </Section>
            <Section id="background" mt={["6rem", "6rem", "15rem", "15rem"]}>
              <Background />
            </Section>
            <Section id="about" mt={["6rem", "6rem", "15rem", "15rem"]}>
              <About />
            </Section>
          </Box>
        </GridItem>
      </Grid>
      
      <Footer />
    </Box>
  );
}
