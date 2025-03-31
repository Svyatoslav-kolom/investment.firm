import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { LessorCard } from "../../components/Atoms/LessorCard";
import { properties } from "./properties";
import useZoom from "../../zoom";

export const ImmivablesLessorCatalog = () => {
  const zoom = useZoom();

  return (
    <Box pb={{base:"20px", md: "80px"}} w="100%" zoom={zoom} mt={{ base: "80px", md: "100px" }}>
      <VStack color="#111111" gap={2} alignItems="start" pb="20px">
        <Heading textStyle={"h1"} width="100%" textTransform={"uppercase"}>
          Каталог недвижимости
        </Heading>

        <Text textStyle={"t1"}>
          Объекты, доступные для инвестирования:
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="30px" w="100%">
        {properties.map((property) => (
          <LessorCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
