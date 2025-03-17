import { Box } from "@chakra-ui/react";
import { FooterLinks } from "../../Molecules/FooterLinks";

export const FooterBottom = () => (
  <Box
    height="720px"
    w="100%"
    position="relative"
    backgroundImage={`url("/images/FooterBottom.png")`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    _after={{
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "200px", // Высота тени
      background: "linear-gradient(180deg, rgba(0, 3, 66, 0) 0%, rgba(0, 3, 66, 0.8) 100%)",
    }}
  >
    <FooterLinks />
  </Box>
);
