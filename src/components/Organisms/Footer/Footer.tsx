import { Box, HStack, Image } from "@chakra-ui/react";
import { FooterRegister } from "../../Molecules/FooterRegister";
import Icon from "../../../assets/icons/LuminaIcon.svg"
import { FooterInfo } from "../../Molecules/FooterInfo";

export const Footer = () => {
  return (
    <Box
      as="footer"
      w="100%"
      py={10}
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
      >
        <FooterInfo />

        <Image
          src={Icon}
          height={{ base: "80px", md: "100px", lg: "120px", xl: "150px", "2xl": "210px" }}
        />

        <FooterRegister />
      </HStack>
    </Box>
  );
};
