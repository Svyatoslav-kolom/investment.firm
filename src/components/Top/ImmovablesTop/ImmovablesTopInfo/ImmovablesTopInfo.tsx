import { Heading, VStack, Text } from "@chakra-ui/react";
import { BlueButton } from "../../../../components/Atoms/BlueButton";
import { useNavigate } from "react-router-dom";

export const ImmovablesTopInfo = () => {
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
            textStyle="h1"
          >
            Открываем новые горизонты для
            инвестиций и аренды недвижимости
          </Heading>

          <Text
            textStyle="t1"
          >
            Инвестиции в турецкую недвижимость сталкиваются
            с неликвидностью и рисками, но мы знаем, как это изменить.
          </Text>
        </VStack>

        <VStack w="100%" gap={5}>
          <BlueButton title={"Для арендаторов"} onClick={() => navigate("/immovables/forLessors")} />
          <BlueButton title={"Для инвесторов"} onClick={() => navigate("/immovables/forInvestments")} />
        </VStack>

      </VStack>
    </VStack>
  );
}