import { VStack, Text } from "@chakra-ui/react";

export const FooterInfo = () => (
  <VStack
    align="flex-start"
    gap={3}
    maxW="525px"
  >
    <Text
      fontWeight={400}
      fontSize={32}
      lineHeight="45px"
    >
      ОСТАЛИСЬ ВОПРОСЫ?
    </Text>
    <Text
      fontWeight={400}
      fontSize={18}
      lineHeight="25px"
    >
      Оставьте заявку, и наш менеджер свяжется с вами, чтобы дать подробные
      ответы и помочь вам разобраться во всех деталях!
    </Text>
    <Text
      fontWeight={400}
      fontSize={58}
      lineHeight="70px"
    >
      +90 212 345 67 89
    </Text>
  </VStack>
);
