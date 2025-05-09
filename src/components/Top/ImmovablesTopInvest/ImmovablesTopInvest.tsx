import { useEffect, useState } from "react";
import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import { PropertySlider } from "../../Molecules/PropertySlider";
import { ImmovableInvestPropertyCard } from "../../Atoms/ImmovableInvestPropertyCard";
import { BlueButton } from "../../Atoms/BlueButton";
import { useNavigate } from "react-router-dom";
import { fetchInvestProperties } from "../../../api/immovables";
import { HouseType } from "../../../Types/HouseType";

type Props = {
  headingColor?: string; // Добавляем пропс для цвета заголовка
};

export const ImmovablesTopInvest: React.FC<Props> = ({ headingColor = "#F3F3F3" }) => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<HouseType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchInvestProperties();
      console.log('Полученные данные в компоненте:', data);
      setProperties(data);
    };

    loadData();
  }, []);

  return (
    <VStack justifyContent="end" w="100%">
      <VStack align="start" w="100%" pb="10px" color={headingColor} px={0}>
        <Heading textStyle="h1" alignSelf="start">
          Рынок недвижимости Турции: вызовы и возможности
        </Heading>

        <Text fontSize="22px">
          Объекты доступные для инвестирования:
        </Text>
      </VStack>

      <PropertySlider
        properties={properties}
        CustomSlideComponent={ImmovableInvestPropertyCard}
      />

      <Box w={{ base: "100%", md: "33%" }} h="71px" alignSelf="end" mt="25px">
        <BlueButton
          title={"Смотреть объекты"}
          fs="t2"
          onClick={() => navigate("/immovables/forInvestments/catalog")}
        />
      </Box>
    </VStack>
  );
};
