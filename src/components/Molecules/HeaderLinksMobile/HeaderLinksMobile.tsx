import { VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const HeaderLinksMobile = () => {
  return (
    <VStack gap={4} alignItems="flex-start">
      {[ 
        { text: "О нас", to: "/#about" },
        { text: "Проекты", to: "/#projects" },
        { text: "Команда", to: "/#team" },
        { text: "Контакты", to: "/#footer" },
      ].map((link) => (
        <RouterLink to={link.to} key={link.to}>
          {link.text}
        </RouterLink>
      ))}
    </VStack>
  );
};
