import { Box, VStack, Text, Link } from "@chakra-ui/react";

export const FooterLinks = () => {
  return (
    <Box 
      display="flex"
      w="100%"
      justifyContent="center"
      gap="350px"
      fontWeight={400}
      fontSize={18}
      lineHeight="19px"
    >
      <VStack align="flex-start" gap={3}>
        <Text mb={3} >Полезные ссылки</Text>
        <Link href="#">О нас</Link>
        <Link href="#">Проекты</Link>
        <Link href="#">Команда</Link>
        <Link href="#">Контакты</Link>
        <Link href="#">Как инвестировать</Link>
      </VStack>
      <VStack align="flex-start" gap={3}>
        <Text mb={3} >Юридический</Text>
        <Link href="#">Условия использования</Link>
        <Link href="#">Политика конфиденциальности</Link>
        <Link href="#">Общие условия кредитования</Link>
        <Link href="#">Политика в отношении конфликта интересов</Link>
      </VStack>
    </Box>
  );
};
