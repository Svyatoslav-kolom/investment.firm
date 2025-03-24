import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import ImmovablesTopBackground from "../../../assets/PageBackgrounds/ImmovablesTopBackground.png";
import { PropertySlider } from "../../Molecules/PropertySlider";
import { properties } from "./properties";
import { ImmovableLessorPropertyCard } from "../../Atoms/ImmovableLessorPropertyCard";
import { BlueButton } from "../../Atoms/BlueButton";
import { Head } from "../../Organisms/Head";
import { useNavigate } from "react-router-dom";

export const ImmovablesTopLessors = () => {
  const navigate = useNavigate();

  return (
    <Head
      backgroundImage={ImmovablesTopBackground}
    >
      <VStack w="100%">

        <VStack align="start" w="100%" pb="10px" color="#F3F3F3">
          <Heading
            textStyle="h1"
            alignSelf="start"
          >
            Аренда с возможностью стать владельцем
          </Heading>

          <Text textStyle="t1">
            Обьекты доступные для аренды:
          </Text>
        </VStack>

        <PropertySlider
          properties={properties}
          CustomSlideComponent={ImmovableLessorPropertyCard}
        />

        <Box w={{base:"100%", md:"515px"}} h="71px" alignSelf="end" mt="25px">
          <BlueButton title={"Смотреть объекты"} fs="t2" onClick={() => navigate("/immovables/forLessors/catalog")} />
        </Box>
      </VStack>
    </Head>
  )
}
