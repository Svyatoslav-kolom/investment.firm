import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const FooterLinks = () => {
  return (
    <Box w="100%" px={{ base: "20px", md: "auto" }}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={{ base: 6, md: 10 }}
        justifyContent="center"
        textStyle="t2"
      >
        {/* Пустой столбец для выравнивания */}
        <Box display={{ base: "none", md: "block" }} />

        <VStack align="flex-start" gap={3}>
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
      </Grid>
    </Box>
  );
};