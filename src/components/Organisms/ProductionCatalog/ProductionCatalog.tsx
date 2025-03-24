import { Box, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { LegalServiceItem } from "../../Molecules/LegalServiceItem";
import { ServiceItem } from "../../../Pages/LegalServicesPage/services";
import { fadeInFrom, withMotion } from "../../../utils/animations";
import { AboutSection } from "../AboutSection";

interface Props {
  services: ServiceItem[];
}

const MotionBox = withMotion(Box);

export const ProductionCatalog: FC<Props> = ({ services }) => (
  <Grid
    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
    gap="30px"
    justifyItems="center"
  >
    {services.map((service, index) => {
      const isEvenRow = Math.floor(index / 3) % 2 === 0;

      return (
        <MotionBox
          key={index}
          {...fadeInFrom(isEvenRow ? "left" : "right")}
          maxW="400px"
          w="100%"
        >
          <LegalServiceItem service={service} />
        </MotionBox>
      );
    })}

    <Box gridColumn={{ base: "span 1", md: "span 2" }}>
      <AboutSection
        title="Доверьте нам свои правовые вопросы!"
        content={[
          "С нами ваш бизнес и личные интересы в надежных руках. Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и начать сотрудничество!",
        ]}
      />
    </Box>
  </Grid>
);
