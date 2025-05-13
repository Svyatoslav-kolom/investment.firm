import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Stack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { DetailsImage } from "../../components/Molecules/DetailsImage";
import { LoanTerms } from "./LoanTerms";
import { BlueButton } from "../../components/Atoms/BlueButton";
import useZoom from "../../zoom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CarType } from "../../Types/CarType";
import { fetchInvestCarById } from "../../api/cars";

export const CarsDetailsPage = () => {
  const { id } = useParams();
  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;

  const [car, setCar] = useState<CarType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCar = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const data = await fetchInvestCarById(id);
        setCar(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadCar();
  }, [id]);

  if (isLoading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!car) {
    return (
      <Center h="60vh">
        <Text>Автомобиль не найден.</Text>
      </Center>
    );
  }

  return (
    <Box zoom={adjustedZoom} mt={"100px"}>
      <VStack>
        <VStack
          gap={{ base: "5px", md: "10px" }}
          mb={{ base: "10px", md: "20px" }}
          alignSelf={"start"}
        >
          <Heading textStyle="h1" alignSelf="start">
            #{car.id} {car.mark} {car.model}
          </Heading>

          <Text textStyle="t1" alignSelf="start">
            Подробное описание и технические характеристики
          </Text>
        </VStack>

        <HStack
          gap={{ base: "20px", md: "30px" }}
          alignItems={"start"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <DetailsImage images={[car.image]} />

          <VStack maxW={{ md: "530px" }} w="100%">
            <Heading textStyle="h1" alignSelf="start" mt="10px" mb="20px">
              Описание
            </Heading>

            <LoanTerms />

            <VStack mt="30px">
              {/* <Text>
                Комфортный и динамичный {car.bodyType} с {car.driveType}. Мотор: {car.motor} л, {car.horsepower} л.с.
              </Text> */}

              <Text>
                Комплектация: {car.description || "уточняется"}.
              </Text>
            </VStack>

            <VStack alignSelf={"end"} mt="40px" w="100%" gap={3}>
              <BlueButton title={"Арендовать"} variant="outline" />
              <BlueButton title={"Взять в лизинг"} />
            </VStack>
          </VStack>
        </HStack>
      </VStack>

      <Stack
        mt={{ base: "100px", md: "150px" }}
        mb={{ base: "80px", md: "120px" }}
        gap={{ base: "20px", md: "0px" }}
        direction={{ base: "column", md: "row" }}
      >
        <Text w={{ base: "100%", md: "513px" }} textAlign="left">
          Хотите взять авто в аренду или лизинг? Если вас интересует эта модель
          или любая другая, мы подберем подходящий автомобиль под ваши
          потребности.
        </Text>

        <Text w={{ base: "100%", md: "513px" }} textAlign="left">
          Оставьте заявку, и наш менеджер рассчитает сумму платежей, подробно
          расскажет о технических характеристиках автомобиля и поможет
          подобрать лучший вариант.
        </Text>

        <Text w={{ base: "100%", md: "513px" }} textAlign="left">
          *Предложение не является публичной офертой. Все условия
          согласовываются лично с клиентом и прописываются в договоре.
        </Text>
      </Stack>
    </Box>
  );
};
