import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { BlueButton } from "../../Atoms/BlueButton";
import engineIcon from "../../../assets/icons/engine.svg";
import speedometerIcon from "../../../assets/icons/speedometer.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  price: number;
  horsePower: number;
  volume: string;
  imageUrl: string;
};

export const CarCatalogCard: React.FC<Props> = ({
  title,
  price,
  horsePower,
  volume,
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

        <Text textStyle="h3">{title}</Text>

        <HStack gap={4} textStyle="t1">
          <Image src={engineIcon} />
          <Text textStyle="t2">{volume} л/бензин</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <HStack gap={4} textStyle="t1">
            <Image src={speedometerIcon} />
            <Text textStyle="t2">{horsePower} л.с.</Text>
          </HStack>

          <Text textStyle={{base:"h3", md:"t3"}}>от {price} $/cут</Text>
        </HStack>

        <BlueButton title="Подробнее" variant="outline" fs="t2" onClick={() => navigate("/auto/details")} />
        <BlueButton title="Арендовать" fs="t2" onClick={() => navigate("/auto/details")} />
      </VStack>
    </Box>
  );
};