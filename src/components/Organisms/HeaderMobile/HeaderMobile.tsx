import { Box, HStack, IconButton, Image } from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { HashLink } from "react-router-hash-link";
import HeaderIcon from "../../../assets/icons/LuminaIcon.svg";
import { HeaderLinksMobile } from "../../Molecules/HeaderLinksMobile";
import { BlueButton } from "../../Atoms/BlueButton";
import { useState } from "react";
import { keyframes } from "@emotion/react";

// Define keyframes for the animation
const slideIn = keyframes`
  0% {
    transform: translateX(-150%);
    visibility: hidden;
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  }
`;

const backgroundFill = keyframes`
  0% {
    background-color: transparent;
    width: 0;
  }
  100% {
    background-color: white;
    width: 100%;
  }
`;

interface HeaderProps {
  isHome: boolean;
}

export const HeaderMobile: React.FC<HeaderProps> = ({ isHome }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <HStack
      px={4}
      py={3}
      justifyContent="space-between"
      alignItems="center"
      h={{ base: "50px", md: "75px", xl: "100px" }}
      w="100%"
      position="relative"
      id="mobile-header"
      animation={open ? `${backgroundFill} 0.5s forwards` : ""}
    >
      <HashLink smooth to="/#">
        <Image src={HeaderIcon} height={{ base: "30px", md: "40px" }} alt="Logo" />
      </HashLink>

      <IconButton
        aria-label="Меню"
        colorScheme="blue"
        variant="ghost"
        fontSize="24px"
        boxSize="40px"
        color="#0048B4"
        onClick={toggleMenu}
      >
        {open ? <LuX /> : <LuMenu />}
      </IconButton>

      {/* Menu with animation */}
      {open && (
        <Box
          bg="white"
          w="100%"
          p={4}
          position="absolute"
          top="100%"
          left={0}
          right={0}
          zIndex={10}
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
          animation={`${slideIn} 0.3s forwards`}
          visibility="visible"
          opacity={1}
        >
          <HeaderLinksMobile />
          <Box mt={3}>
            <BlueButton title={isHome ? "Инвестируйте" : "Регистрация"} variant="outline" />
          </Box>
        </Box>
      )}
    </HStack>
  );
};
