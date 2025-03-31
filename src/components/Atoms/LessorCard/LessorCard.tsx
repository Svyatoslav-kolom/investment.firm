import { Box, VStack, Text, Stack, Image } from "@chakra-ui/react";
import { BlueButton } from "../../Atoms/BlueButton";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/icons/location.svg";

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
      p={{ base: "20px", md: "40px" }}
      pb={{ base: "25px", md: "50px" }}
      boxShadow="0px 4px 4px 0px #00000040"
      borderRadius={{ base: "30px", md: "50px" }}
      border="1px solid #00000040"
      position="relative"
    >
      {/* Картинка */}
      <Box w="100%" borderRadius="md" overflow="hidden" position="relative">
        <Image src={property.image} alt={property.title} w="100%" transition="filter 0.3s ease" />
      </Box>

      {/* Заголовок и локация */}
      <VStack align="start" gap={2} mt={3}>
        <Text textStyle="h1" textTransform={"none"}>{property.title}</Text>
        <Stack direction={{ base: "column", md: "row" }} fontSize="sm">
          <Image src={icon} alt="Location" boxSize="15px" />
          <Text>{property.location}</Text>
          <Text>{property.area} м²</Text>
        </Stack>
      </VStack>

      {/* Блок с характеристиками */}
      <Stack direction={{ base: "column", md: "row" }} mt={3} gap={{ base: "8px", md: "14px" }} w="100%">
        <VStack w="100%" align="start">
          <Stack direction="row" justify="space-between" w="100%">
            <Text fontWeight="medium">Стоимость:</Text>
            <Text textStyle="t2" >{property.price.toLocaleString()} $</Text>
          </Stack>

          <Stack direction="row" justify="space-between" w="100%">
            <Text fontWeight="medium">Комиссия:</Text>
            <Text textStyle="t2" color="#0048B4" >{property.commission}%</Text>
          </Stack>

          <Stack direction="row" justify="space-between" w="100%">
            <Text fontWeight="medium">Мин. взнос:</Text>
            <Text textStyle="t2" >от {property.minEntry.toLocaleString()} $</Text>
          </Stack>
        </VStack>

        {/* Разделительная линия только для desktop */}
        <Box display={{ base: "none", md: "block" }} width="2px" bg="#0048B4" />

        <VStack w="100%" align="start">
          <Stack direction="row" justify="space-between" w="100%">
            <Text fontWeight="medium">Этаж:</Text>
            <Text textStyle="t2" >{property.floor}</Text>
          </Stack>

          <Stack direction="row" justify="space-between" w="100%">
            <Text fontWeight="medium">Кол-во комнат:</Text>
            <Text textStyle="t2" color="#0048B4" >
              {property.rooms}
            </Text>
          </Stack>

          <Stack direction="row" justify="space-between" w="100%">
            <Text fontWeight="medium">Кол-во санузлов:</Text>
            <Text textStyle="t2" color="#0048B4" >
              {property.bathrooms}
            </Text>
          </Stack>
        </VStack>
      </Stack>

      {/* Кнопки */}
      <Stack direction={{ base: "column", md: "row" }} mt={4} gap={2} w="100%">
        <BlueButton title="Купить м²" />
        <BlueButton title="Подробнее" variant="outline" onClick={() => navigate("/immovables/details")} />
      </Stack>
    </Box>
  );
};