import { Box, Text } from "@chakra-ui/react";
import { fadeInFrom, withMotion } from "../../utils/animations";
import useZoom from "../../zoom";
import { servicesData } from "../../ConstInfo/ProductionPageServices";
import { ProductionCatalog } from "../../components/Organisms/ProductionCatalog";

const MotionText = withMotion(Text);

export const ProductionPage = () => {
  const zoom = useZoom();
  return (
    <Box zoom={zoom}>
      <MotionText
        {...fadeInFrom("left")}
        w={{ base: "350px", md: "520px" }}
        textStyle="t2"
        lineHeight="140%"
        justifySelf={{ base: "center", md: "end" }}
        mb="100px"
      >
        Профессиональное производство видео, фото, аудио и рекламы – полный цикл услуг от идеи до финального выпуска.
        Мы обеспечиваем полный продакшн-контроль на каждом этапе: от разработки концепции до монтажа и финальной публикации.
      </MotionText>

      <ProductionCatalog services={servicesData} />
    </Box>
  );
}