import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { BlueButton } from "../BlueButton";

type Props = {
  title: string;
  location: string;
  area: number;
  price: number;
  commision: number;
  minInvestment: number;
  imageUrl: string;
};

export const ImmovableLessorPropertyCard: React.FC<Props> = ({
  title,
  location,
  area,
  price,
  commision,
  minInvestment,
  imageUrl,
}) => {

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bgColor="#F3F3F3"
      boxShadow="md"
      pt="12px"
      px="10px"
      pb="25px"
      height="100%"
    >
      <VStack gap={3} align="stretch">
        <VStack align="start" gap={1}>
          <Text fontSize="lg">{title}</Text>
          <HStack fontSize="sm">
            <Image src="/icons/location.svg" alt="Location" boxSize="15px"/>
            <Text>{location}</Text>
            <Text>{area} м²</Text>
          </HStack>
        </VStack>

        <HStack gap={4} fontSize="12px">
          <Image src={imageUrl} alt={title} borderRadius="md"  objectFit="contain"/>

          <VStack align="start" justifyContent="space-between" maxHeight="100%" w="100%">
            <Box>
              <Text fontWeight="medium">Стоимость:</Text>
              <Text fontSize="lg" fontWeight="bold">{price.toLocaleString()} $</Text>
            </Box>

            <Box>
              <Text fontWeight="medium">Комиссия:</Text>
              <Text fontSize="lg" color="#0048B4" fontWeight="bold">{commision}%</Text>
            </Box>

            <Box>
              <Text fontWeight="medium">Минимальный взнос:</Text>
              <Text fontSize="lg" fontWeight="bold">{minInvestment.toLocaleString()} %</Text>
            </Box>

            <BlueButton title="Подробнее" variant="outline" fs={13} />
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};