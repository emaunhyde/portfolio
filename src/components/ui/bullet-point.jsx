import { Flex, Text, ListItem, ListIcon } from "@chakra-ui/react";
import FrostedCard from "@/components/ui/frosted-card";

export default function BulletPoint({ icon, title, description }) {
  return (
    <ListItem pb={2}>
      <FrostedCard p={4} interactive={false}>
        <Flex
          direction="row"
          pb={3}
          alignItems="center"
          justifyContent={["center", "center", "flex-start"]}
        >
          <ListIcon
            as={icon}
            color="brand.pale_green"
            fontSize={["md", "sm", "xs", "lg"]}
          />
          <Text
            fontSize={["md", "sm", "xs", "sm"]}
            color="brand.alabaster"
            fontWeight="semibold"
            textTransform="capitalize"
            fontFamily="heading"
          >
            {title}
          </Text>
        </Flex>
        <Text
          className="description-text"
          fontSize="sm"
          color="brand.cream"
          fontFamily="body"
          lineHeight={["150%", "150%", "160%", "160%"]}
        >
          {description}
        </Text>
      </FrostedCard>
    </ListItem>
  );
}
