import { Box, HStack, Image } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import HeaderIcon from "../../../assets/icons/LuminaIcon.svg";
import { HeaderLinks } from "../../Molecules/HeaderLinks";
import { BlueButton } from "../../Atoms/BlueButton";

interface HeaderProps {
  isHome: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isHome }) => (
  <HStack
    borderRadius="full"
    backdropFilter="blur(10px)"
    px={{ base: 4, md: 12 }}
    py={3}
    justifyContent="space-between"
    alignItems="center"
    h={{ base: "50px", md: "75px", xl: "100px" }}
    w="100%"
    position="relative"
  >
    <HashLink smooth to="/#">
      <Image src={HeaderIcon} height={{ base: "30px", md: "70px" }} alt="Logo" />
    </HashLink>

    <Box>
      <HeaderLinks />
    </Box>


    <Box w="20%">
      <BlueButton title={isHome ? "Инвестируйте" : "Регистрация"} variant="outline" />
    </Box>

  </HStack>
);