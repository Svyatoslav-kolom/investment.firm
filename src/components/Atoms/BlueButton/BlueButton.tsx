import { Box } from "@chakra-ui/react";

interface BlueButtonProps {
  title: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "light";
  fs?: string;
  height?: any; // Сделаем height адаптивным
}

const defaultHeight = { base: "45px", md: "30px", lg: "40px", xl: "45px", "2xl": "50px" };

export const BlueButton = ({
  title,
  onClick,
  variant = "solid",
  fs = "t1",
  height = defaultHeight,
}: BlueButtonProps) => {
  const styles = {
    solid: {
      borderColor: "blue.600",
      color: "#F3F3F3",
      background: "blue.600",
      hoverBg: "transparent",
      hoverColor: "blue.600",
    },
    outline: {
      borderColor: "blue.600",
      color: "blue.600",
      background: "transparent",
      hoverBg: "blue.600",
      hoverColor: "#F3F3F3",
    },
    light: {
      borderColor: "transparent",
      color: "blue.600",
      background: "#EBEFFB",
      hoverBg: "blue.100",
      hoverColor: "blue.700",
    },
  };

  const handleClick = () => {
    if (title === "Зарегистрироваться" || title === "Инвестируйте") {
      window.location.href = "https://t.me/LuminaFund_bot/webapp";
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Box
      as="button"
      w="100%"
      h={height}
      cursor="pointer"
      fontSize={fs}
      fontWeight="bold"
      border="2px solid"
      borderColor={styles[variant].borderColor}
      color={styles[variant].color}
      background={styles[variant].background}
      borderRadius="full"
      transition="0.3s"
      _hover={{
        bg: styles[variant].hoverBg,
        color: styles[variant].hoverColor,
      }}
      onClick={handleClick}
    >
      {title}
    </Box>
  );
};
