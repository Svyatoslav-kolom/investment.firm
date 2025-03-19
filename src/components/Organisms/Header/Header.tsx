import { Box, HStack, Link, Image } from "@chakra-ui/react";
import { HeaderLinks } from "../../Molecules/HeaderLinks";
import { BlueButton } from "../../Atoms/BlueButton";
import HeaderIcon from "../../../assets/icons/LuminaIcon.svg";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <HStack
      borderRadius="full"
      background="linear-gradient(180deg, rgba(255,255,255,0.2), rgba(0,0,0,0.1))"
      backdropFilter="blur(10px)"
      px={12}
      py={3}
      justifyContent="space-between"
      alignItems={"center"}
      h={{ base: "30px", md: "40px", lg: "50px", xl: "75px", "2xl": "100px" }}
      boxSizing={"border-box"}
    >

      <Link href="/" height={"100%"}>
        <Image src={HeaderIcon} height={"100%"}/>
      </Link>


      <HeaderLinks />
      <Box w="20%">
        <BlueButton title={isHome ? "Инвестируйте" : "Регистрация"} variant="outline" />
      </Box>
    </HStack >
  );
};
