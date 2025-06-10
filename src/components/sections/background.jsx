import { Box, Flex } from "@chakra-ui/react";
import WorkExperience from "@/components/ui/work-experience";
import ExternalLink from "@/components/ui/external-link";

export default function Background() {
  return (
    <Box
      minHeight="auto"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
    >
      <Flex direction="column" gap={8}>
        <WorkExperience
          companyLogo="/mobot.svg"
          companyLogoAlt="Mobot Company Logo"
          companyLink="https://www.ycombinator.com/companies/mobot"
          externalLink="https://mobot.io"
          externalLinkText="View Live"
          jobTitle="Software Engineer"
          dateRange="2022 - 2025"
          description="Automating quality assurance testing for mobile applications utilizing AI-driven robots alongside real mobile devices, effectively identifying and addressing bugs for popular mobile applications such as AllTrails, onX, Citizen, Sandboxx, and Batch."
          contribution="Acting as a bridge between engineering and design, I had a hand in everything from AI-driven automation in the backend to a cohesive design system. The result was a faster, more reliable QA pipeline and a developer experience that felt as polished as the apps we tested."
          technologies={[
            "Clojure",
            "Clojurescript",
            "Python",
            "AI Engineering",
            "AI",
            "Prompt Engineering",
            "UI/UX",
          ]}
        />

        <WorkExperience
          companyLogo="/parade.svg"
          companyLogoAlt="Parade Company Logo"
          companyLink="https://www.ycombinator.com/companies/parade"
          externalLink="https://www.youtube.com/watch?v=kO5a715UXFU"
          externalLinkText="View Demo"
          jobTitle="Software Engineer"
          dateRange="2021 - 2022"
          description="Empowering startup founders and small business owners without dedicated graphic design resources to create comprehensive brand systems and generate essential digital assets, including marketing emails, social media posts, and more."
          contribution="Combining data-driven demand-gen experiments, customer research, and hands-on engineering, I tripled top-of-funnel traffic and translated real-world feedback into self-serve features that moved the company toward product-market fit. "
          technologies={[
            "NextJS",
            "Javascript",
            "Python",
            "AI",
            "Figma",
            "Graphic Design",
          ]}
        />
      </Flex>

      <Flex justifyContent="center" pt={8}>
        <ExternalLink href="/eh_resume.pdf">View Full Resume</ExternalLink>
      </Flex>
    </Box>
  );
}
