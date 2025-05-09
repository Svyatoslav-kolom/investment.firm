import { Box, Image, Text, VStack, Progress, HStack, AspectRatio } from "@chakra-ui/react";
import React from "react";
import { BlueButton } from "../BlueButton";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/icons/location.svg";
import { HouseType } from "../../../Types/HouseType";

type Props = HouseType;

export const ImmovableInvestPropertyCard: React.FC<Props> = ({
  name,
  city,
  square,
  price,
  pricemon,
  priceforinvest,
  image,
  ready,
}) => {
  const validatedReadiness = Math.min(100, Math.max(0, ready * 100));

  const navigate = useNavigate();

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
          <Text fontSize="lg">{name}</Text>
          <HStack fontSize="sm">
            <Image src={icon} alt="Location" boxSize="15px" />
            <Text>{city}</Text>
            <Text>{square} м²</Text>
          </HStack>
        </VStack>

        <HStack gap={4} fontSize="12px">
          <AspectRatio ratio={16 / 9} w="100%" flex={1}>
            <Image src={image} alt={name} borderRadius="md" objectFit="cover" />
          </AspectRatio>

          <VStack align="start" justifyContent="space-between" maxHeight="100%">
            <Text fontWeight="medium">Готовность проекта:</Text>
            <Progress.Root value={validatedReadiness} w="100%" shape="rounded">
              <Progress.Track>
                <Progress.Range style={{ backgroundColor: "#0048B4" }} />
              </Progress.Track>
            </Progress.Root>

            {[{ label: "Стоимость:", value: `${price.toLocaleString()} $` },
              { label: "Ежемесячная доходность:", value: `${pricemon}%`, color: "blue.600" },
              { label: "Минимальный порог входа:", value: `от ${priceforinvest.toLocaleString()} $` },
            ].map(({ label, value, color }) => (
              <Box key={label}>
                <Text fontWeight="medium">{label}</Text>
                <Text fontSize="lg" fontWeight="bold" color={color}>{value}</Text>
              </Box>
            ))}

            <BlueButton title="Подробнее" variant="outline" fs="13px" onClick={() => navigate("/immovables/details")} />
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
