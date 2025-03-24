import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { InvestCard } from "../../components/Atoms/InvestCard";
import { properties } from "./properties";
import useZoom from "../../zoom";
export const ImmivablesInvestCatalog = () => {
  const zoom = useZoom();
  
  return (
    <Box mt={{base:"70px", md: "200px"}} pb={{base:"20px", md: "80px"}} w="100%" zoom={zoom}>
      <VStack color="#111111" gap={2} alignItems="start" pb="20px">
        <Heading textStyle="h1">
          Каталог недвижимости
        </Heading>
        <Text>Объекты, доступные для инвестирования:</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="30px" mt={6} w="100%">
        {properties.map((property) => (
          <InvestCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
