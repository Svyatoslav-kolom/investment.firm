import { FC } from "react";

interface Props {
  text: string;
  href: string;
}

export const HeaderLink: FC<Props> = ({ text, href }) => (
  <a href={href}>
    {text}
  </a>
);
