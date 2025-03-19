import { Heading, VStack, Text } from "@chakra-ui/react";
import { BlueButton } from "../../Atoms/BlueButton";
import { useNavigate } from "react-router-dom";
import { Head } from "../../Organisms/Head";
import CarsTopInvestmentImg from "../../../assets/PageBackgrounds/CarsTopBackground.png";

export const CarsTopInvestment = () => {
  const navigate = useNavigate();

  return (
    <Head backgroundImage={CarsTopInvestmentImg}>
      <VStack
        align="start"
      >
        <VStack
          align="start"
          gap={10}
          w="500px"
          color="#F3F3F3"
        >
          <VStack align="start" gap="30px" >
            <Heading
              textStyle="h2"
            >
              Автомобиль как пассивный доход
            </Heading>

            <Text
              textStyle="t1"
            >
              Ваш автомобиль — инструмент стабильного дохода
              Инвестируйте в автомобиль и превращайте его в пассивный источник прибыли. Мы сопровождаем на каждом этапе: от покупки до аренды.
            </Text>
          </VStack>

          <VStack w="100%" gap={5}>
            <BlueButton title={"Инвестировать в авто"} onClick={() => navigate("/auto/catalog")} />
          </VStack>

        </VStack>
      </VStack>
    </Head>
  );
}