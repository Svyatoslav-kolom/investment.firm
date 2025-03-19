import { Heading, VStack, Text } from "@chakra-ui/react";
import CarsTopBackground from "../../../assets/PageBackgrounds/CarsTopBackground.png";
import { PropertySlider } from "../../Molecules/PropertySlider";
import { properties } from "./properties";
import { CarsPropertyCard } from "../../Atoms/CarsPropertyCard";
import { Head } from "../../Organisms/Head";

export const CarsTopLessor = () => (
  <Head
    backgroundImage={CarsTopBackground}
  >

    <VStack w="100%">

      <VStack align="start" w="100%" pb="10px" ml="30px" color="#F3F3F3">
        <Heading
          textStyle="h1"
          alignSelf="start"
        >
          Доступный лизинг автомобилей для граждан СНГ
        </Heading>

        <Text textStyle="t1">
          Обьекты доступные для аренды:
        </Text>
      </VStack>

      <PropertySlider
        properties={properties}
        CustomSlideComponent={CarsPropertyCard}
      />
    </VStack>
  </Head >
);
