import { Box, Text } from "@chakra-ui/react";
import { LegalServiceCatalog } from "../../components/Organisms/LegalServiceCatalog";
import { servicesDataWithIcons } from "../../ConstInfo/LegalServicesServices";
import { fadeInFrom, withMotion } from "../../utils/animations";
import useZoom from "../../zoom";
import { AboutSection } from "../../components/Organisms/AboutSection";

const MotionText = withMotion(Text);

export const LegalServicesPage = () => {
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
        Наша команда профессиональных юристов предоставляет полный спектр юридических услуг в Турции — от регистрации бизнеса до получения гражданства. Мы поможем вам решить любые правовые вопросы, защитить ваши интересы и минимизировать риски на всех этапах.
      </MotionText>

      <LegalServiceCatalog services={servicesDataWithIcons} />

      <Box height={{ base: "auto", md: "140px" }} mx={{ base: "20px", md: "none" }} mt={"50px"}>
        <AboutSection
          title="Доверьте нам свои правовые вопросы!"
          content={[
            "С нами ваш бизнес и личные интересы в надежных руках. Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и начать сотрудничество!",
          ]}
        />
      </Box>
    </Box>
  );
}