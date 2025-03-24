import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import CarsTopBackground from "../../../assets/PageBackgrounds/CarsTopBackground.png";
import { PropertySlider } from "../../Molecules/PropertySlider";
import { properties } from "./properties";
import { CarsPropertyCard } from "../../Atoms/CarsPropertyCard";
import { Head } from "../../Organisms/Head";
import { useNavigate } from "react-router-dom";
import { BlueButton } from "../../Atoms/BlueButton";

export const CarsTopLessor = () => {
  const navigate = useNavigate();

  return (
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

        <Box w="100%" h="71px" alignSelf="end" mt="25px" display={{ base: "block", md: "none" }}>
          <BlueButton title={"Смотреть каталог"} fs="t2" onClick={() => navigate("/auto/catalog")} />
        </Box>
      </VStack>
    </Head >
  );
}