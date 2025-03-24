import { VStack, Text } from "@chakra-ui/react";

export const FooterInfo = () => (
  <VStack
    align="flex-start"
    gap={3}
    w={{ base: "90%", md: "40%" }}
  >
    <Text
      textStyle="h2"
    >
      ОСТАЛИСЬ ВОПРОСЫ?
    </Text>
    <Text
      textStyle="t2"
    >
      Оставьте заявку, и наш менеджер свяжется с вами, чтобы дать подробные
      ответы и помочь вам разобраться во всех деталях!
    </Text>
    <Text
      fontWeight={400}
      fontSize={{ base: "25px", md: "30px", lg: "40px", xl: "45px", "2xl": "60px" }}
      lineHeight="70px"
      alignSelf={{ base: "center", md: "start" }}
    >
      +90 212 345 67 89
    </Text>
  </VStack>
);
