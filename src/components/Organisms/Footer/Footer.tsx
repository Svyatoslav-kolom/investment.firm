import { Box, HStack, Image } from "@chakra-ui/react";
import { FooterRegister } from "../../Molecules/FooterRegister";
import Icon from "../../../assets/icons/LuminaIcon.svg";
import { FooterInfo } from "../../Molecules/FooterInfo";

export const Footer = () => {
  return (
    <Box as="footer" w="100%" py={10}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }} // Меняем направление на мобильных устройствах
        gap={{ base: 6, md: 12 }} // Добавляем отступы для мобильных версий
        w="100%"
      >
        <FooterInfo />

        <Image
          src={Icon}
          height={{ base: "150px", md: "100px", lg: "120px", xl: "150px", "2xl": "210px" }}
        />

        <FooterRegister />
      </HStack>
    </Box>
  );
};
