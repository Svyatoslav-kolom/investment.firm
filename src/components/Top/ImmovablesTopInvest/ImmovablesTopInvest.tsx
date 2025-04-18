import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import { PropertySlider } from "../../Molecules/PropertySlider";
import { ImmovableInvestPropertyCard } from "../../Atoms/ImmovableInvestPropertyCard";
import { properties } from "./properties";
import { BlueButton } from "../../Atoms/BlueButton";
import { useNavigate } from "react-router-dom";

export const ImmovablesTopInvest = () => {
  const navigate = useNavigate();

  return (
    <VStack
      justifyContent="end"
      w="100%"
    >
      <VStack align="start" w="100%" pb="10px" color="#F3F3F3" px={0}>
        <Heading
          textStyle="h1"
          alignSelf="start"
        >
          Рынок недвижимости Турции: вызовы и возможности
        </Heading>

        <Text fontSize="22px">
          Обьекты доступные для инвестирования:
        </Text>
      </VStack>

      <PropertySlider
        properties={properties}
        CustomSlideComponent={ImmovableInvestPropertyCard}
      />


      <Box w={{base:"100%", md:"33%"}} h="71px" alignSelf="end" mt="25px">
        <BlueButton title={"Смотреть объекты"} fs="t2" onClick={() => navigate("/immovables/forInvestments/catalog")} />
      </Box>

    </VStack>
  );
}