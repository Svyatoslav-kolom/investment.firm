import { HStack } from "@chakra-ui/react";
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
    <HStack
      alignItems="end"
      justifyContent="space-between"
      h={`${heightPercentage}vh`} // Используем настраиваемую высоту
      w="100vw"
      backgroundImage={`${overlay}url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      pb="50px"
      pt="64px"
      px={150}
    >
      {children}
    </HStack>
  );
};
