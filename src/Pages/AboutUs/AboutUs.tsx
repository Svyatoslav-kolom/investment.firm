import { Box } from "@chakra-ui/react";
import { HowItWorks } from "../../components/Organisms/HowItWorks";
import { Projects } from "../../components/Organisms/Projects/Projects";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";
import { HowToInvest } from "../../components/Organisms/HowToInvest";
import useZoom from "../../zoom";
import { ImmovablesTopInvest } from "../../components/Top/ImmovablesTopInvest";


export const AboutUs = () => {
  const zoom = useZoom();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ base: "60px", md: "150px" }}
      zoom={zoom}
      mx={{ base: "0", md: "-20px" }}
    >
      <Box id="about" zoom={1.5}>
        <ImmovablesTopInvest headingColor="black"/>
      </Box>

      <Box id="projects"
        mx={{ base: "20px", md: 0, "2xl": "137px" }}
      >
        <Projects />
      </Box>

      <Box
        mx={{ base: "20px", md: 0, "2xl": "137px" }}
      >
        <AboutSection
          title="Почему инвестировать с Lumina investment fund  выгодно и безопасно?"
          content={[
            "Ваши инвестиции защищены системой гарантирования вкладов и профессиональной юридической поддержкой, обеспечивающей прозрачность каждой сделки.",
            "Надёжный актив, устойчивый к кризисам и инфляции, сохраняет стоимость и приносит стабильный доход. Мы отбираем лучшие объекты и анализируем риски, предлагая только проверенные решения.",
            "Инвестировать можно начиная с суммы, эквивалентной 1 м², что делает коммерческую недвижимость доступной для широкой аудитории.",
          ]}
        />
      </Box>

      <Box
        mb="100px"
        id="howToInvest"
        mx={{ base: "20px", md: 0, "2xl": "137px" }}
      >
        <HowToInvest />
      </Box>

      <Box
        maxW="100vw"
        px={{ base: "20px", md: 0, "2xl": "137px" }}
      >
        <HowItWorks />
      </Box>

    </Box>
  );
}
