import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { DetailsImage } from "../../components/Molecules/DetailsImage";
import { LoanTerms } from "./LoanTerms";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { images } from "./images";
import useZoom from "../../zoom";

export const CarsDetailsPage = () => {
  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;
  
  return (
  <Box mt="170px" px="158px" zoom={adjustedZoom}>
    <VStack>
      <VStack gap="10px" mb="20px" alignSelf={"start"}>
        <Heading
          textStyle="h1"
          alignSelf="start"
        >
          #69646400
          Mercedes-AMG С43 W205 White
        </Heading>

        <Text
          fontSize={"22px"}
          alignSelf="start"
        >
          Подробное описание и технические характеристики
        </Text>
      </VStack>

      <HStack gap="30px" alignItems={"start"}>
        <DetailsImage images={images} />

        <VStack maxW="530px" w="100%">
          <Heading
            textStyle="h1"
            alignSelf="start"
            mt="10px"
            mb="20px"
          >
            Описание
          </Heading>

          <LoanTerms />

          <VStack mt="30px">
            <Text>
              Комфортный и динамичный седан с передним приводом. Надежный атмосферный двигатель объемом 2.0 л. Дополнительно установлено ГБО, внесенное в регистрационные документы. Автомобиль в хорошем техническом состоянии, кузов ухожен.
            </Text>

            <Text>
              Комплектация: кондиционер, темный тканевый салон, мультируль, электрорегулировка зеркал, бортовой компьютер, датчик света, камера заднего вида, круиз-контроль и многое другое.
            </Text>
          </VStack>

          <VStack alignSelf={"end"} mt="40px" w="100%" gap={3}>
            <BlueButton title={"Арендовать"} variant="outline" />
            <BlueButton title={"Взять в лизинг"} />
          </VStack>
        </VStack>
      </HStack>
    </VStack>

    <HStack mt={"150px"} mb={"120px"} justifyContent={"space-between"}>
      <Text w="513px">
        Хотите взять авто в аренду или лизинг? Если вас интересует эта модель или любая другая, мы подберем подходящий автомобиль под ваши потребности.
      </Text>

      <Text w="513px">
        Хотите взять авто в аренду или лизинг? Если вас интересует эта модель или любая другая, мы подберем подходящий автомобиль под ваши потребности.
      </Text>

      <Text w="513px">
        Хотите взять авто в аренду или лизинг? Если вас интересует эта модель или любая другая, мы подберем подходящий автомобиль под ваши потребности.
      </Text>
    </HStack>

  </Box>
);
}