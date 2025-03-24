import { Stack } from "@chakra-ui/react"
import { FC, ReactNode } from "react";

interface Props {
  backgroundImage: string;
  hasOverlay?: boolean;
  children: ReactNode;
  heightPercentage?: number; // Новый пропс для настройки высоты
}

export const Head: FC<Props> = ({
  backgroundImage,
  hasOverlay = true,
  children,
  heightPercentage = 100, // Значение по умолчанию - 100% от высоты экрана
}) => {
  const overlay = hasOverlay
    ? "linear-gradient(26.67deg, rgba(0, 0, 0, 0.7) 11.94%, rgba(0, 0, 0, 0.56) 28.66%, rgba(0, 0, 0, 0.21) 41.89%, rgba(0, 0, 0, 0) 71.44%), "
    : "";

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      alignItems={{base:"center", md: "flex-end"}}
      justifyContent={{ base: "flex-end", md: "space-between" }}
      gap={{ base: "20px", md: "none" }}
      h={`${heightPercentage}vh`} // Используем настраиваемую высоту
      w="100vw"
      backgroundImage={`${overlay}url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      pb={{ base: "10px", md: "30px", "2xl": "64px" }}
      pt="64px"
      px={{ base: "16px", md: "40px", lg: "150px" }}
    >
      {children}
    </Stack>
  );
};
