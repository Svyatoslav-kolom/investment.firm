import { Box, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const FooterLinks = () => {
  return (
    <Box
      display="flex"
      w="100%"
      justifyContent="center"
      gap="50px" // Уменьшил gap для мобильных
      flexDirection={{ base: "column", md: "row" }} // Меняем направление на мобильных устройствах
      fontWeight={400}
      fontSize={18}
      lineHeight="19px"
      mx={{ base: "20px", md: "auto" }}
      textStyle="t1"
    >
      <VStack align="flex-start" gap={3} >
        <Text mb={3}>Полезные ссылки</Text>
        <RouterLink to="/#about">О нас</RouterLink>
        <RouterLink to="/#projects">Проекты</RouterLink>
        <RouterLink to="/#howToInvest">Как инвестировать</RouterLink>
        <RouterLink to="/#contact">Контакты</RouterLink>
        <RouterLink to="/#invest">Как инвестировать</RouterLink>
      </VStack>

      <VStack align="flex-start" gap={3}>
        <Text mb={3}>Юридический</Text>
        <RouterLink to="/#terms">Условия использования</RouterLink>
        <RouterLink to="/#privacy">Политика конфиденциальности</RouterLink>
        <RouterLink to="/#credit-terms">Общие условия кредитования</RouterLink>
        <RouterLink to="/#conflict-policy">Политика в отношении конфликта интересов</RouterLink>
      </VStack>
    </Box>
  );
};
