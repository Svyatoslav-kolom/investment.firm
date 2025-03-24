import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import { BlueButton } from "../../../../components/Atoms/BlueButton";
import { useNavigate } from "react-router-dom";
import { ClientComponent } from "../../../Molecules/ClientComponent";

export const ImmovablesTopInfo = () => {
  const navigate = useNavigate();

  return (
      <VStack
        align="start"
        gap={{base:5, md:10}}
        w={{md:"500px"}}
        color="#F3F3F3"
      >
        <VStack align="start" gap={{base: "10px", md: "30px"}} >
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

        <Box w={"100%"} display={{base: "block", md: "none"}}>
          <ClientComponent />
        </Box>

        <VStack w="100%" gap={{base:3, md:5}}>
          <BlueButton title={"Для арендаторов"} onClick={() => navigate("/immovables/forLessors")} />
          <BlueButton title={"Для инвесторов"} onClick={() => navigate("/immovables/forInvestments")} />
        </VStack>

      </VStack>
  );
}