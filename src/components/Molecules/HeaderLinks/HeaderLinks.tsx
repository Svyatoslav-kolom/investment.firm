import { HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const links = [
  { text: "О нас", href: "/#about" },
  { text: "Проекты", href: "/#projects" },
  { text: "Команда", href: "/#team" },
  { text: "Контакты", href: "/#footer" },
];

export const HeaderLinks = () => (
  <HStack gap={12}>
    {links.map((link) => (
      <RouterLink key={link.href} to={link.href}>
        {link.text}
      </RouterLink>
    ))}
  </HStack>
);