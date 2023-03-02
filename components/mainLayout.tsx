import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const MainLayout = ({ children, image, subtitle, title, description }) => {
  return (
    <Box height="100%" overflowY="auto">
      <Flex padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius="3px"
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="gray.400">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="x-small" fontWeight="100">
            {description}
          </Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default MainLayout;
