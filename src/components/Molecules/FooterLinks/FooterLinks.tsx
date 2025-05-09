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
          <RouterLink to="/aboutUs">О нас</RouterLink>
          <RouterLink to="/#projects">Услуги</RouterLink>
          <RouterLink to="/#howToInvest">Как инвестировать</RouterLink>
          <RouterLink to="/#contact">Контакты</RouterLink>
          <RouterLink to="/#invest">Как инвестировать</RouterLink>
        </VStack>

        <VStack align="flex-start" gap={3}>
          <Text mb={3}>Юридический</Text>
          <RouterLink to="/legal/user-agreement">Пользовательское соглашение</RouterLink>
          <RouterLink to="/legal/privacy-policy">Политика конфиденциальности</RouterLink>
          <RouterLink to="/legal/share-terms">Общие условия приобретения доли</RouterLink>
          <RouterLink to="/legal/referral-terms">Условия участия в реферальной программе</RouterLink>
          <RouterLink to="/legal/exit-policy">Условия возврата и выхода из проекта</RouterLink>
          <RouterLink to="/legal/aml-policy">AML Политика</RouterLink>
          <RouterLink to="/legal/investment-safety">Безопасность инвестиций</RouterLink>
          <RouterLink to="/legal/about">О юридическом отделе</RouterLink>
          <RouterLink to="/legal/faq">FAQ</RouterLink>
          <RouterLink to="/legal/club">Клуб Lumina</RouterLink>
        </VStack>
      </Grid>
    </Box>
  );
};