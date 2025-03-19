import { Box, Heading, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { CarCatalogCard } from "../../components/Molecules/CarCatalogCard";
import { carList } from "./carList";
import useZoom from "../../zoom";

export const CarsCatalog = () => {
  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;
  
  return (
  <Box zoom={adjustedZoom}>
    <VStack
      mt="90px"
      align="start">
      <Heading
        textStyle="h1"
      >
        наш автопарк
      </Heading>

      {/* Фильтры */}
      <HStack gap="30px" w="100%" mt="80px">
        <BlueButton title="Все" variant="light" />
        <BlueButton title="СпортКар" />
        <BlueButton title="Бизнес" variant="light" />
        <BlueButton title="Внедорожники" variant="light" />
        <BlueButton title="Комфорт" variant="light" />
      </HStack>

      {/* Грид карточек авто */}
    </VStack>

    <SimpleGrid columns={[1, 2, 3]} gap="30px" mt="30px" w="100%" px="158px">
      {carList.map((car, idx) => (
        <CarCatalogCard
          key={idx}
          title={car.title}
          price={car.price}
          imageUrl={car.imageUrl}
          horsePower={car.horsePower}
          volume={car.volume}
        />
      ))}
    </SimpleGrid>
  </Box>
);
}