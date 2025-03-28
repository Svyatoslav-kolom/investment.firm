import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { BlueButton } from "../BlueButton";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  price: number;
  imageUrl: string;
};

export const CarsPropertyCard: React.FC<Props> = ({
  title,
  price,
  imageUrl,
}) => {

  const navigate = useNavigate();
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      bgColor="#F3F3F3"
      boxShadow="md"
      pt="10px"
      px="15px"
      pb="25px"
      height="100%"
    >
      <VStack gap={3} align="stretch">
        <Image src={imageUrl} alt={title} borderRadius="md" flex={1} w="100%" objectFit="contain" />

        <HStack gap={4} fontSize="12px" justifyContent="space-between">
          <Text fontSize="lg">{title}</Text>
          <Text fontSize="lg" color="#0048B4" fontWeight="bold">от {price} $/cут</Text>
        </HStack>

        <BlueButton title="Подробнее" variant="outline" fs="14px" onClick={() => navigate("/auto/details")} />
      </VStack>
    </Box>
  );
};