import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { LessorCard } from "../../components/Atoms/LessorCard";

export const ImmivablesLessorCatalog = () => {
  const properties = [
    {
      id: 1,
      title: "Апартаменты Park Res",
      location: "Анталья",
      area: 120,
      price: 200000,
      commission: 9,
      minEntry: 2000,
      floor: 5, // Добавлено
      rooms: 3, // Добавлено
      bathrooms: 2, // Добавлено
      image: "/images/ImmovablesCards/Invest/1.png",
    },
    {
      id: 2,
      title: "Вилла Sea Breeze",
      location: "Бодрум",
      area: 250,
      price: 450000,
      commission: 7,
      minEntry: 5000,
      floor: 2, // Добавлено
      rooms: 5, // Добавлено
      bathrooms: 4, // Добавлено
      image: "/images/ImmovablesCards/Invest/2.png",
    },
    {
      id: 3,
      title: "Курортный комплекс SunBay",
      location: "Мармарис",
      area: 180,
      price: 320000,
      commission: 8,
      minEntry: 3000,
      floor: 8, // Добавлено
      rooms: 4, // Добавлено
      bathrooms: 3, // Добавлено
      image: "/images/ImmovablesCards/Invest/3.png",
    },
    {
      id: 4,
      title: "Кондоминиум Sky Tower",
      location: "Стамбул",
      area: 95,
      price: 150000,
      commission: 10,
      minEntry: 1500,
      floor: 12, // Добавлено
      rooms: 2, // Добавлено
      bathrooms: 1, // Добавлено
      image: "/images/ImmovablesCards/Invest/4.png",
    },
  ];

  return (
    <Box mt="200px" px="160px" pb="80px" w="100%">
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
