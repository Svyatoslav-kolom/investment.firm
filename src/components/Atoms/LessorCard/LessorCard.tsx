import { Box, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { BlueButton } from "../../Atoms/BlueButton";
import { useNavigate } from "react-router-dom";

interface Props {
  property: {
    id: number;
    title: string;
    location: string;
    area: number;
    price: number;
    commission: number;
    minEntry: number;
    floor: number;
    rooms: number;
    bathrooms: number;
    image: string;
  };
}

export const LessorCard: React.FC<Props> = ({ property }) => {
  const navigate = useNavigate();
  
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
      {/* Картинка */}
      <Box w="100%" borderRadius="md" overflow="hidden" position="relative">
        <Image src={property.image} alt={property.title} w="100%" transition="filter 0.3s ease" />
      </Box>

      {/* Заголовок и локация */}
      <VStack align="start" gap={2} mt={3}>
        <Text fontSize="38px" fontWeight={400}>{property.title}</Text>
        <HStack fontSize="sm">
          <Image src="/icons/location.svg" alt="Location" boxSize="15px" />
          <Text>{property.location}</Text>
          <Text>{property.area} м²</Text>
        </HStack>
      </VStack>

      {/* Блок с характеристиками */}
      <HStack mt={3} gap="14px" w="100%" align="stretch">
        <VStack w="100%" align="start">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Стоимость:</Text>
            <Text fontSize="18px" fontWeight="bold">{property.price.toLocaleString()} $</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Комиссия:</Text>
            <Text fontSize="18px" color="#0048B4" fontWeight="bold">{property.commission}%</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Мин. взнос:</Text>
            <Text fontSize="18px" fontWeight="bold">от {property.minEntry.toLocaleString()} $</Text>
          </HStack>
        </VStack>

        {/* Разделительная линия */}
        <Box width="2px" bg="#0048B4" />

        <VStack w="100%" align="start">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Этаж:</Text>
            <Text fontSize="18px" fontWeight="bold">{property.floor}</Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Кол-во комнат:</Text>
            <Text fontSize="18px" color="#0048B4" fontWeight="bold">
              {property.rooms}
            </Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="medium">Кол-во санузлов:</Text>
            <Text fontSize="18px" color="#0048B4" fontWeight="bold">
              {property.bathrooms}
            </Text>
          </HStack>
        </VStack>
      </HStack>

      {/* Кнопки */}
      <HStack mt={4}>
        <BlueButton title="Купить м²" />
        <BlueButton title="Подробнее" variant="outline"  onClick={() => navigate("/immovables/details")} />
      </HStack>
    </Box>
  );
};
