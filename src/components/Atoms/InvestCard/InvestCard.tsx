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
      p={{ base: "20px", md: "40px" }}
      pb={{ base: "25px", md: "50px" }}
      boxShadow="0px 4px 4px 0px #00000040"
      borderRadius={{ base: "30px", md: "50px" }}
      border="1px solid #00000040"
      position="relative"
    >
      <Box
        position="absolute"
        top={{base:"5%", md:"65px"}}
        left={{base:"10%", md:"65px"}}
        zIndex="2"
        borderRadius="full"
        backgroundColor={property.isReady ? "#DF0000" : "#1CA242"}
        color="white"
        fontSize="14px"
        
        px="12px"
        py="4px"
        textAlign="center"
      >
        {property.isReady ? "Сбор завершен" : "Идет сбор средств"}
      </Box>

      <Box w="100%" borderRadius="md" overflow="hidden" position="relative">
        <Image
          src={property.image}
          alt={property.title}
          w="100%"
          filter={property.isReady ? "grayscale(100%) brightness(0.7)" : "none"}
          transition="filter 0.3s ease"
        />
      </Box>

      <VStack align="start" gap={2} mt={3}>
        <Text textStyle="h2"  textTransform={"none"}>{property.title}</Text>
        <HStack fontSize="sm">
          <Image src="/icons/location.svg" alt="Location" boxSize="15px" />
          <Text>{property.location}</Text>
          <Text>{property.area} м²</Text>
        </HStack>
      </VStack>

      <Text fontWeight="medium" mt={2}>Готовность проекта: {property.readiness}%</Text>
      <Progress.Root value={property.readiness} w="100%" shape="rounded">
        <Progress.Track>
          <Progress.Range style={{ backgroundColor: "#0048B4" }} />
        </Progress.Track>
      </Progress.Root>

      <HStack mt={3} gap="14px" w="100%" align="stretch" flexDirection={{ base: "column", md: "row" }}>
        <VStack w="100%" align="start">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Стоимость:</Text>
            <Text textStyle="t2">{property.price.toLocaleString()} $</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Ежемесячная доходность:</Text>
            <Text textStyle="t2" color="#0048B4" >{property.monthlyIncome}%</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Мин. порог входа:</Text>
            <Text textStyle="t2" >от {property.minEntry.toLocaleString()} $</Text>
          </HStack>
        </VStack>

        <Box width="2px" bg="#0048B4" display={{ base: "none", md: "block" }} />

        <VStack w="100%" align="start">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Выкуплено:</Text>
            <Text textStyle="t2" >{property.purchased} м²</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Осталось:</Text>
            <Text textStyle="t2" color="#0048B4" >
              {(property.area - property.purchased).toLocaleString()} м²
            </Text>
          </HStack>
        </VStack>
      </HStack>

      <HStack mt={4} flexDirection={{ base: "column", md: "row" }}>
        <BlueButton title="Купить м²" />
        <BlueButton title="Подробнее" variant="outline" />
      </HStack>
    </Box>
  );
};
