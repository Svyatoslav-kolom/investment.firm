import { Box, VStack } from "@chakra-ui/react";
import { HowItWorks } from "../../components/Organisms/HowItWorks";
import { Projects } from "../../components/Organisms/Projects/Projects";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";
import { HowToInvest } from "../../components/Organisms/HowToInvest";
import useZoom from "../../zoom";


export const HomePage = () => {
  const zoom = useZoom();

  return (
    <Box
      display="flex"
      flexDirection="column"
      zoom={zoom}
    >

      <VStack mb={150} id="about" mx={{ base: "20px", md: "none" }}>
        <AboutSection
          title="Lumina investment fund – это инвестиционная платформа, позволяющая инвестировать в объекты через механизм коллективных инвестиций"
          content={[
            "Почти столетие нормативные барьеры мешали частным лицам инвестировать в частные рынки, предоставляя миллиардным учреждениям преимущественный доступ. Результатом стало то, что большинство инвесторов были ограничены публичными рынками и исключены из частных инвестиций — от недвижимости до венчурного капитала. Технологии наконец-то нарушают этот статус-кво.",
            "Мы создали технологическую платформу, наше программное обеспечение позволяет нам достичь масштаба учреждений без бюрократии. Объединяя наши технологии и опыт в области инвестиций, мы являемся пионерами новой модели, чтобы построить для вас лучший портфель."
          ]}
        />
      </VStack>

      <Box id="projects" mx={{ base: "20px", md: "none" }}>
        <Projects />
      </Box>

      <Box
        mb="309px"
        id="howToInvest"
      >
        <HowToInvest />
      </Box>

      <Box maxW="100vw" >
        <HowItWorks />
      </Box>

      <Box
        mt="150px"
        mx={{ base: "20px", md: "none" }}
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

    </Box>
  );
}
