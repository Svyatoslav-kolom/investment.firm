import { FC } from "react";
import { HashLink } from "react-router-hash-link";

interface Props {
  text: string;
  href: string;
}

export const HeaderLink: FC<Props> = ({ text, href }) => (
  <HashLink smooth to={href}>
    {text}
  </HashLink>
);
// 