import { Box, Input, VStack } from "@chakra-ui/react";
import { BlueButton } from "../../Atoms/BlueButton";

export const FooterRegister = () => (
  <VStack
    align="stretch"
    gap={6}
    w={{ base: "90%", md: "40%" }} // на мобильных ширина 100%, на ПК 40%
  >
    <Input
      placeholder="Имя"
      bg="gray.100"
      borderRadius="full"
      py="20px"
      px="30px"
      h={{ base: "50px", md: "30px", lg: "40px", xl: "45px", "2xl": "70px" }}
      textStyle="t1"
    />
    <Input
      placeholder="Телефон"
      bg="gray.100"
      borderRadius="full"
      py="20px"
      px="30px"
      h={{ base: "50px", md: "30px", lg: "40px", xl: "45px", "2xl": "70px" }}
      textStyle="t1"
    />

    <Box h="70px">
      <BlueButton title="Перезвоните мне" />
    </Box>
  </VStack>
);
