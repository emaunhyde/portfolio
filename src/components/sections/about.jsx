import {
  Box,
  Flex,
  Image,
  Text,
  List,
} from "@chakra-ui/react";
import { MdColorLens, MdCode } from "react-icons/md";
import { GiTowerBridge } from "react-icons/gi";
import BulletPoint from "@/components/ui/bullet-point";
import GlowingDot from "@/components/ui/glowing-dot";
import FrostedCard from "@/components/ui/frosted-card";

export default function About() {
  return (
    <Box
      minHeight="auto"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      py={[8, 8, 0, 0]}
    >
        <Flex
          direction={["column", "column", "row", "row"]}
          gap={[6, 6, 12, 12]}
          alignItems="flex-start"
        >
          <Image
            src="/headshot.jpg"
            alt="Portfolio Profile Photo"
            maxWidth={["100%", "100%", "18rem", "18rem"]}
            aspectRatio="5/7"
            objectFit="cover"
            borderRadius="lg"
          />
          <Flex direction="column" gap={4}>
            <List spacing={3}>
              <BulletPoint
                icon={MdColorLens}
                title="Design Roots"
                description="A mild obsession with color theory, typography, and human-computer interaction shapes every pixel I push."
              />
              <BulletPoint
                icon={MdCode}
                title="Engineering Chops"
                description="Whether contributing to a Clojure backend, optimizing front end component systems, or wrangling AI-driven data pipelines, I turn ambiguity into maintainable code."
              />
              <BulletPoint
                icon={GiTowerBridge}
                title="Bridge Builder"
                description="I thrive on cross-functional teams—translating business goals into intuitive interfaces and mentoring designers who want to read the diff (and engineers who want to nudge the kerning)."
              />
            </List>
          </Flex>
        </Flex>
        
        {/* Contact Section */}
        <Box 
          mt={["4rem", "8rem"]}
          mb={["2rem", "8rem"]}
        >
          <FrostedCard 
            p={[4, 6]} 
            interactive={false}
            backgroundColor="rgba(172, 190, 91, 0.1)"
          >
            <Flex 
              direction="row" 
              gap={[4, 4, 5, 5]}
            >
              <Box flexShrink={0}>
                <GlowingDot />
              </Box>
              <Text
                fontSize="xs"
                color="brand.pale_green"
                fontFamily="body"
                lineHeight={["150%", "150%", "170%", "170%"]}
                opacity="0.8"
                maxWidth={["100%", "100%", "90%", "90%"]}
              >
                I'm currently seeking my next challenge and would love to hear from you. If you're looking for someone who can spar on architecture diagrams, critique a color palette, or just geek out over the future of AGI, let's talk.
              </Text>
            </Flex>
          </FrostedCard>
        </Box>
      </Box>
  );
}
