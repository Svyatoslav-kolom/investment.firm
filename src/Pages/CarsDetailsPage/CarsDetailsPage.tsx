import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { DetailsImage } from "../../components/Molecules/DetailsImage";
import { LoanTerms } from "./LoanTerms";
import { BlueButton } from "../../components/Atoms/BlueButton";

interface Props { }

const images = [
  "/images/CarsCards/1.png",
  "/images/CarsCards/2.png",
  "/images/CarsCards/3.png",
  "/images/CarsCards/4.png",
];

export const CarsDetailsPage: FC<Props> = () => (
  <Box mt="170px" px="158px">
    <VStack>
      <VStack gap="10px" mb="20px" alignSelf={"start"}>
        <Heading
          fontSize={"38px"}
          fontWeight={400}
          textTransform={"uppercase"}
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
            fontWeight={400}
            fontSize="38px"
            textTransform={"uppercase"}
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

      <Text  w="513px">
        Хотите взять авто в аренду или лизинг? Если вас интересует эта модель или любая другая, мы подберем подходящий автомобиль под ваши потребности.
      </Text>

      <Text  w="513px">
        Хотите взять авто в аренду или лизинг? Если вас интересует эта модель или любая другая, мы подберем подходящий автомобиль под ваши потребности.
      </Text>
    </HStack>

  </Box>
);
