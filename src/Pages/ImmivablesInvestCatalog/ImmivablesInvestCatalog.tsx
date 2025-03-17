import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { InvestCard } from "../../components/Atoms/InvestCard";
export const ImmivablesInvestCatalog = () => {
  const properties = [
    {
      id: 1,
      title: "Аппартаменты Park Res",
      isReady: false,
      location: "Анталья",
      area: 120,
      readiness: 55,
      price: 200000,
      monthlyIncome: 9,
      minEntry: 2000,
      purchased: 65,
      image: "/images/ImmovablesCards/Invest/1.png",
    },
    {
      id: 2,
      title: "Вилла Sea Breeze",
      isReady: false,
      location: "Бодрум",
      area: 250,
      readiness: 70,
      price: 450000,
      monthlyIncome: 7,
      minEntry: 5000,
      purchased: 120,
      image: "/images/ImmovablesCards/Invest/2.png",
    },
    {
      id: 3,
      title: "Курортный комплекс SunBay",
      isReady: false,
      location: "Мармарис",
      area: 180,
      readiness: 40,
      price: 320000,
      monthlyIncome: 8,
      minEntry: 3000,
      purchased: 90,
      image: "/images/ImmovablesCards/Invest/3.png",
    },
    {
      id: 4,
      title: "Кондоминиум Sky Tower",
      isReady: true,
      location: "Стамбул",
      area: 95,
      readiness: 85,
      price: 150000,
      monthlyIncome: 10,
      minEntry: 1500,
      purchased: 40,
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
          <InvestCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
