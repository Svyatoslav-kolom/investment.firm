import { Box, VStack, Text, HStack, Image, Progress } from "@chakra-ui/react";
import { BlueButton } from "../../Atoms/BlueButton";

interface Props {
  property: {
    id: number;
    title: string;
    isReady: boolean;
    location: string;
    area: number;
    readiness: number;
    price: number;
    monthlyIncome: number;
    minEntry: number;
    purchased: number;
    image: string;
  };
}

export const InvestCard: React.FC<Props> = ({ property }) => {
  return (
    <Box
      key={property.id}
      w="100%"
      p="40px"
      pb="50px"
      boxShadow="0px 4px 4px 0px #00000040"
      borderRadius="50px"
      border="1px solid #00000040"
      position="relative"
    >
      {/* Бейдж статуса вынесен за пределы блока с фильтром */}
      <Box
        position="absolute"
        top="65px"
        left="65px"
        zIndex="2"  // Устанавливаем поверх изображения
        borderRadius="full"
        backgroundColor={property.isReady ? "#DF0000" : "#1CA242"}
        color="white"
        fontSize="14px"
        fontWeight="bold"
        px="12px"
        py="4px"
        textAlign="center"
      >
        {property.isReady ? "Сбор завершен" : "Идет сбор средств"}
      </Box>

      {/* Картинка с фильтром */}
      <Box
        w="100%"
        borderRadius="md"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={property.image}
          alt={property.title}
          w="100%"
          filter={property.isReady ? "grayscale(100%) brightness(0.7)" : "none"}
          transition="filter 0.3s ease"
        />
      </Box>

      {/* Заголовок и локация */}
      <VStack align="start" gap={2} mt={3}>
        <Text textStyle="h2" >{property.title}</Text>
        <HStack fontSize="sm">
          <Image src="/icons/location.svg" alt="Location" boxSize="15px" />
          <Text>{property.location}</Text>
          <Text>{property.area} м²</Text>
        </HStack>
      </VStack>

      {/* Прогресс готовности */}
      <Text fontWeight="medium" mt={2}>Готовность проекта: {property.readiness}%</Text>
      <Progress.Root value={property.readiness} w="100%" shape="rounded">
        <Progress.Track>
          <Progress.Range style={{ backgroundColor: "#0048B4" }} />
        </Progress.Track>
      </Progress.Root>

      {/* Блок с характеристиками */}
      <HStack mt={3} gap="14px" w="100%" align="stretch">
        <VStack w="100%" align="start">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Стоимость:</Text>
            <Text textStyle="t2" fontWeight="bold">{property.price.toLocaleString()} $</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Ежемесячная доходность:</Text>
            <Text textStyle="t2" color="#0048B4" fontWeight="bold">{property.monthlyIncome}%</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Мин. порог входа:</Text>
            <Text textStyle="t2" fontWeight="bold">от {property.minEntry.toLocaleString()} $</Text>
          </HStack>
        </VStack>

        {/* Разделительная линия */}
        <Box width="2px" bg="#0048B4" />

        <VStack w="100%" align="start">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Выкуплено:</Text>
            <Text textStyle="t2" fontWeight="bold">{property.purchased} м²</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Осталось:</Text>
            <Text textStyle="t2" color="#0048B4" fontWeight="bold">
              {(property.area - property.purchased).toLocaleString()} м²
            </Text>
          </HStack>
        </VStack>
      </HStack>

      {/* Кнопки */}
      <HStack mt={4}>
        <BlueButton title="Купить м²" />
        <BlueButton title="Подробнее" variant="outline" />
      </HStack>
    </Box>
  );
};
