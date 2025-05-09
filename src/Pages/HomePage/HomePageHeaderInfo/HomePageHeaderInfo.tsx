import { Heading, VStack, Text } from "@chakra-ui/react";
import { BlueButton } from "../../../components/Atoms/BlueButton";

export const HeaderInfo = () => (
  <VStack
    align="start"
    gap={10}
    w={{ md: "500px" }}
    color="#F3F3F3"
  >
    <VStack align="start" gap={{ base: "10px", md: "30px" }} >
      <Heading
        textStyle="h1"
      >
        Инвестируйте безопасно Зарабатывайте стабильно
      </Heading>

      <Text
        textStyle="t1"
      >
        Создавайте стабильный доход из недвижимости и активов — с минимальными вложениями и полной прозрачностью.
      </Text>
    </VStack>

    <VStack align="start" gap={{ base: "12px", md: "15px" }} w={"100%"}>
      <BlueButton title={"Зарегистрироваться"} />

      <Text
        textStyle="t3"
        alignSelf={{ base: "center", md: "start" }}

      >
        ✔ Доход до 24% годовых <br/>
        ✔ Управление и аренда за нас <br/>
        ✔ Минимальный вход — от $200

      </Text>
    </VStack>
  </VStack>
);
