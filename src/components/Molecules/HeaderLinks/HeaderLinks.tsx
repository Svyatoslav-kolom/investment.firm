import { HeaderLink } from "../../Atoms/HeaderLink";
import { HStack } from "@chakra-ui/react";

interface Link {
  text: string;
  href: string;
}

const links: Link[] = [
  { text: "О нас", href: "/about" },
  { text: "Проекты", href: "/projects" },
  { text: "Команда", href: "/team" },
  { text: "Контакты", href: "/contact" },
];

export const HeaderLinks = () => (
  <HStack gap={12}>
    {links.map((link) => (
      <HeaderLink key={link.href} text={link.text} href={link.href} />
    ))}
  </HStack>
);
