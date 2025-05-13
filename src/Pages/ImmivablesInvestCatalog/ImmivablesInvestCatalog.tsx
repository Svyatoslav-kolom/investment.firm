import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InvestCard } from "../../components/Atoms/InvestCard";
import useZoom from "../../zoom";
import { HouseType } from "../../Types/HouseType";
import { fetchInvestProperties } from "../../api/house";

export const ImmivablesInvestCatalog = () => {
  const [properties, setProperties] = useState<HouseType[]>([]);
  const [loading, setLoading] = useState(true);
  const zoom = useZoom();

  useEffect(() => {
    fetchInvestProperties()
      .then((data) => setProperties(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box
      pb={{ base: "20px", md: "80px" }}
      w="100%"
      zoom={zoom}
      mt={{ base: "80px", md: "100px" }}
    >
      <VStack color="#111111" gap={2} alignItems="start" pb="20px">
        <Heading textStyle="h1">Каталог недвижимости</Heading>
        <Text>Объекты, доступные для инвестирования:</Text>
      </VStack>

      {loading ? (
        <Spinner size="xl" />
      ) : properties.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="30px" mt={6} w="100%">
          {properties.map((property) => (
            <InvestCard key={property.id} property={property} />
          ))}
        </SimpleGrid>
      ) : (
        <Text>Нет доступных объектов для инвестирования.</Text>
      )}
    </Box>
  );
};
