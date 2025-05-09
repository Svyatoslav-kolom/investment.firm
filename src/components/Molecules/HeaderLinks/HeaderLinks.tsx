import { HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const links = [
  { text: "О нас", to: "/#about" },
  { text: "Услуги", to: "/#projects" },
  { text: "Команда", to: "/#team" },
  { text: "Контакты", to: "/#footer" },
];

export const HeaderLinks = () => (
  <HStack gap={12}>
    {links.map((link) => (
      <RouterLink to={link.to} key={link.to}>
        {link.text}
      </RouterLink>
    ))}
  </HStack>
);
