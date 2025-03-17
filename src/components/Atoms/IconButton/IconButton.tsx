import { FC } from "react";
import { Link, Box } from "@chakra-ui/react";

interface IconButtonProps {
  icon: string;
  label: string;
  href: string;
  size?: string;
}

export const IconButton: FC<IconButtonProps> = ({ icon, label, href, size = "35px" }) => (
  <Link key={label} href={href} >
    <Box as="span" display="flex">
      <img src={icon} alt={label} width={size} height={size} />
    </Box>
  </Link>
);
