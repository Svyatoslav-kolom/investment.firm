import { Heading, VStack, Text } from "@chakra-ui/react";
import { BlueButton } from "../../../components/Atoms/BlueButton";

export const HeaderInfo = () => (
  <VStack
    align="start"
    gap={10}
    w={{md:"500px"}}
    color="#F3F3F3"
  >
    <VStack align="start" gap={{base:"10px", md:"30px"}} >
      <Heading
        textStyle="h1"
      >
        Инвестируйте в лучшую альтернативу
      </Heading>

      <Text
        textStyle="t1"
      >
        Создайте портфель частных активов, таких как недвижимость,
        частные кредиты и венчурный капитал.
      </Text>
    </VStack>

    <VStack align="start" gap={{base:"12px", md:"15px"}} w={"100%"}>
      <BlueButton title={"Зарегистрироваться"} />

      <Text
        textStyle="t3"
        alignSelf={{base: "center", md: "start"}}

      >
        Начните инвестировать менее чем
        за 5 минут и всего с 10 долларов.
      </Text>
    </VStack>
  </VStack>
);
