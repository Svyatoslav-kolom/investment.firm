import { Box, Input, VStack } from "@chakra-ui/react";
import { BlueButton } from "../../Atoms/BlueButton";

export const FooterRegister = () => (
  <VStack
    align="stretch"
    w="100%"
    gap={6}
  >
    <Input
      placeholder="Имя"
      bg="gray.100"
      borderRadius="full"
      py="20px"
      px="30px"
      h="70px"
    />
    <Input
      placeholder="Телефон"
      bg="gray.100"
      borderRadius="full"
      py="20px"
      px="30px"
      h="70px"
    />

    <Box h="70px">
      <BlueButton title="Перезвоните мне" /> 
    </Box>
  </VStack>
);
