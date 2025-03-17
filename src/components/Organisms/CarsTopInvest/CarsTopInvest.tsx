import { Heading, VStack, Text } from "@chakra-ui/react";
import CarsTopBackground from "../../../assets/PageBackgrounds/CarsTopBackground.png";
import { BlueButton } from "../../Atoms/BlueButton";
import { Head } from "../Head";
import { useNavigate } from "react-router-dom";

export const CarsTopInvest = () => {
  const navigate = useNavigate();

  return (
    <Head
      backgroundImage={CarsTopBackground}
    >
      <VStack
        alignSelf="start"
        width="100%"
        gap={10}
        w="500px"
        color="#F3F3F3"
        mt="auto"
      >
        <VStack align="start" gap="30px" >
          <Heading
            fontSize={38}
            lineHeight="55.1px"
            fontWeight={500}
          >
            Автомобиль как <br /> пассивный доход
          </Heading>

          <Text
            fontSize={22}
            lineHeight="29px"
            fontWeight={400}
          >
            Ваш автомобиль — инструмент стабильного дохода
            Инвестируйте в автомобиль и превращайте его в пассивный источник прибыли. Мы сопровождаем на каждом этапе: от покупки до аренды.
          </Text>
        </VStack>

        <BlueButton title={"Инвестировать в авто"} onClick={() => navigate("/auto/catalog")} />

      </VStack>
    </Head>
  );
}