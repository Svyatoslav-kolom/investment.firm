import { Box, HStack, Text } from "@chakra-ui/react";
import { Head } from "../../Organisms/Head";
import CarsTopCatalog from "../../../assets/PageBackgrounds/CarsTopCatalog.png";

// Данные для списка пунктов
const steps = [
  "Большой парк автомобилей в наличии",
  "Доставка авто до вашей геолокации",
  "Скидки постоянным клиентам",
  "Любая форма оплаты",
  "Выгодные цены",
];

export const CarsCatalogTop = () => (
  <Box>
    <Head backgroundImage={CarsTopCatalog}>
      <HStack gap={4} mx="auto">
        {steps.map((text, index) => (
          <HStack key={index} gap="20px" height="52px" align="center">
            <Box
              fontSize="12px"
              boxSize="26px"
              bg="white"
              color="black"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              {index + 1}
            </Box>
            <Text color="white" maxW="210px" textStyle="t2">
              {text}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Head>
  </Box>
);
