import { Heading, VStack, Text } from "@chakra-ui/react";
import { BlueButton } from "../../../components/Atoms/BlueButton";

export const HeaderInfo = () => (
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
          Инвестируйте в лучшую альтернативу
        </Heading>

        <Text
          fontSize={22}
          lineHeight="29px"
          fontWeight={400}
        >
          Создайте портфель частных активов, таких как недвижимость,
          частные кредиты и венчурный капитал.
        </Text>
      </VStack>

      <VStack align="start" gap="15px">
        <BlueButton title={"Зарегистрироваться"} />

        <Text
          fontSize={14}
          lineHeight="19px"
          fontWeight={400}
        >
          Начните инвестировать менее чем
          за 5 минут и всего с 10 долларов.
        </Text>
      </VStack>
    </VStack>
  </VStack>
);
