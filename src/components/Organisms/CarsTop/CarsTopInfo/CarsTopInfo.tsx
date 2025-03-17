import { Heading, VStack, Text } from "@chakra-ui/react";
import { BlueButton } from "../../../Atoms/BlueButton";
import { useNavigate } from "react-router-dom";

export const CarsTopInfo = () => {
  const navigate = useNavigate();

  return (
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
            fontSize={38}
            lineHeight="55.1px"
            fontWeight={500}
          >
            Ваши возможности с автомобилями: <br/> владение или доход
          </Heading>

          <Text
            fontSize={22}
            lineHeight="29px"
            fontWeight={400}
          >
            Выберите свой путь: аренда авто с выкупом или инвестиции для стабильного дохода.
          </Text>
        </VStack>

        <VStack w="100%" gap={5}>
          <BlueButton title={"Для арендаторов"} onClick={() => navigate("/auto/forLessors")} />
          <BlueButton title={"Для инвесторов"} onClick={() => navigate("/auto/forInvestments")} />
        </VStack>

      </VStack>
    </VStack>
  );
}