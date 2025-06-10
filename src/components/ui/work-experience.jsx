import { Box, Flex, Image, Link, Stack, Tag, Text } from "@chakra-ui/react";
import FrostedCard from "@/components/ui/frosted-card";
import ExternalLink from "@/components/ui/external-link";

export default function WorkExperience({
  companyLogo,
  companyLogoAlt,
  companyLink,
  externalLink,
  externalLinkText = "View Live",
  jobTitle,
  dateRange,
  description,
  contribution,
  technologies = [],
}) {
  return (
    <FrostedCard p={6}>
      <Flex pb={4} justifyContent="space-between" alignItems="center">
        <Link href={companyLink} isExternal style={{ textDecoration: "none" }}>
          <Image
            src={companyLogo}
            alt={companyLogoAlt}
            maxWidth={["4rem", "4rem", "5rem", "5rem"]}
            opacity="0.8"
          />
        </Link>
        <ExternalLink href={externalLink}>{externalLinkText}</ExternalLink>
      </Flex>
      <Text
        fontSize={["xl", "2xl", "3xl", "3xl"]}
        color="brand.cream"
        fontFamily="heading"
        lineHeight="120%"
      >
        {jobTitle}
      </Text>
      <Text
        fontSize="xs"
        color="brand.cream"
        fontFamily="mono"
        lineHeight="120%"
        pb={4}
      >
        {dateRange}
      </Text>
      <Text
        fontSize="sm"
        color="brand.alabaster"
        fontFamily="body"
        lineHeight={["150%", "150%", "170%", "170%"]}
      >
        {description}
      </Text>
      <Text
        fontSize="xs"
        color="brand.cream"
        fontFamily="body"
        lineHeight={["140%", "140%", "160%", "160%"]}
        paddingTop="1rem"
      >
        {contribution}
      </Text>
      <Stack direction={["row"]} spacing={2} pt={4} flexWrap="wrap" gap={2}>
        {technologies.map((tech, index) => (
          <Tag
            key={index}
            size="sm"
            borderRadius="full"
            backgroundColor="brand.darkgreen"
            color="brand.pale_green"
            fontFamily="mono"
            variant="subtle"
          >
            {tech}
          </Tag>
        ))}
      </Stack>
    </FrostedCard>
  );
}
