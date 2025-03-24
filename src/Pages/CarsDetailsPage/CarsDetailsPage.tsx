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
  <Box mt={{ base: "70px", md: "170px" }} zoom={adjustedZoom}>
    <VStack>
      <VStack gap={{ base: "5px", md: "10px" }} mb={{ base: "10px", md: "20px" }} alignSelf={"start"}>
        <Heading textStyle="h1" alignSelf="start">
          #69646400
          Mercedes-AMG С43 W205 White
        </Heading>

        <Text textStyle="t1" alignSelf="start">
          Подробное описание и технические характеристики
        </Text>
      </VStack>

      <HStack gap={{ base: "20px", md: "30px" }} alignItems={"start"} flexDirection={{ base: "column", md: "row" }}>
        <DetailsImage images={images} />

        <VStack maxW={{ md: "530px" }} w="100%">
          <Heading textStyle="h1" alignSelf="start" mt="10px" mb="20px">
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

    <VStack mt={{ base: "100px", md: "150px" }} mb={{ base: "80px", md: "120px" }} gap={{ base: "20px", md: "0px" }}>
      <Text w={{ base: "100%", md: "513px" }} textAlign="left">
        Хотите взять авто в аренду или лизинг? Если вас интересует эта модель или любая другая, мы подберем подходящий автомобиль под ваши потребности.
      </Text>

      <Text w={{ base: "100%", md: "513px" }} textAlign="left">
      Оставьте заявку, и наш менеджер рассчитает сумму платежей, подробно расскажет о технических характеристиках автомобиля и поможет подобрать лучший вариант.
      </Text>

      <Text w={{ base: "100%", md: "513px" }} textAlign="left">
      *Предложение не является публичной офертой. Все условия согласовываются лично с клиентом и прописываются в договоре.
      </Text>
    </VStack>
  </Box>
  );
};
