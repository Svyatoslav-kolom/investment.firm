import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { LessorCard } from "../../components/Atoms/LessorCard";
import { properties } from "./properties";
import useZoom from "../../zoom";

export const ImmivablesLessorCatalog = () => {
  const zoom = useZoom();
  
  return (
    <Box mt="200px" px="160px" pb="80px" w="100%" zoom={zoom}>
      <VStack color="#111111" gap={2} alignItems="start" pb="20px">
        <Heading fontWeight="500" fontSize="48px" lineHeight="55.1px">
          Каталог недвижимости
        </Heading>
        <Text>Объекты, доступные для инвестирования:</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="30px" mt={6} w="100%">
        {properties.map((property) => (
          <LessorCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
