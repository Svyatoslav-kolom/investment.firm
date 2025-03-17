import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import ImmovablesTopBackground from "../../../assets/PageBackgrounds/ImmovablesTopBackground.png";
import { PropertySlider } from "../../Molecules/PropertySlider";
import { properties } from "./properties";
import { ImmovableLessorPropertyCard } from "../../Atoms/ImmovableLessorPropertyCard";
import { BlueButton } from "../../Atoms/BlueButton";
import { Head } from "../Head";
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
            fontSize="38px"
            lineHeight="44px"
            fontWeight={400}
            textTransform="uppercase"
            alignSelf="start"
          >
            Аренда с возможностью стать владельцем
          </Heading>

          <Text fontSize="22px">
            Обьекты доступные для аренды:
          </Text>
        </VStack>

        <PropertySlider
          properties={properties}
          CustomSlideComponent={ImmovableLessorPropertyCard}
        />

        <Box w="515px" h="71px" alignSelf="end" mt="25px">
          <BlueButton title={"Смотреть объекты"} fs={18} onClick={() => navigate("catalog")} />
        </Box>
      </VStack>
    </Head>
  )
}
