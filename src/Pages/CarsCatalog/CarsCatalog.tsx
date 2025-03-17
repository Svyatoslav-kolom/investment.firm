import { Box, Heading, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { CarsCatalogTop } from "../../components/Molecules/CarsCatalogTop";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { CarCatalogCard } from "../../components/Molecules/CarCatalogCard";

// Данные по авто (пример)
const carList = [
  {
    title: "Mercedes-AMG C43 W205 White",
    price: 120,
    imageUrl: "/images/Property/Cars/1.png",
    horsePower: 390,
    volume: "3,0",
  },
  {
    title: "Mercedes-AMG C43 W205 White",
    price: 120,
    imageUrl: "/images/Property/Cars/2.png",
    horsePower: 390,
    volume: "3,0",
  },
  {
    title: "Mercedes-AMG C43 W205 White",
    price: 120,
    imageUrl: "/images/Property/Cars/3.png",
    horsePower: 390,
    volume: "3,0",
  },
  {
    title: "Mercedes-AMG C43 W205 White",
    price: 120,
    imageUrl: "/images/Property/Cars/1.png",
    horsePower: 390,
    volume: "3,0",
  },
  {
    title: "Mercedes-AMG C43 W205 White",
    price: 120,
    imageUrl: "/images/Property/Cars/2.png",
    horsePower: 390,
    volume: "3,0",
  },
  {
    title: "Mercedes-AMG C43 W205 White",
    price: 120,
    imageUrl: "/images/Property/Cars/3.png",
    horsePower: 390,
    volume: "3,0",
  }
];

export const CarsCatalog = () => (
  <Box>
    <CarsCatalogTop />

    <VStack mt="90px" mx="158px" align="start">
      <Heading
        fontSize="38px"
        fontWeight={400}
        lineHeight="55.1px"
        textTransform="uppercase"
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
