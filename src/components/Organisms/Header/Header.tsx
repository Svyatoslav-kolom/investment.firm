import { Box, HStack } from "@chakra-ui/react";
import { IconButton } from "../../Atoms/IconButton";
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
    >
      <IconButton icon={HeaderIcon} label="Example" href="/" size="75px" />
      <HeaderLinks />
      <Box w="328px">
        <BlueButton title={isHome ? "Инвестируйте" : "Регистрация"} variant="outline" />
      </Box>
    </HStack>
  );
};
