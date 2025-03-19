import { Box, Text, Image, Grid } from "@chakra-ui/react";
import Consulting from "../../assets/Consulting.svg";
import { services } from "./services";
import useZoom from "../../zoom";

export const ConsultingPage = () => {
  const zoom = useZoom();
  
  return (
  <Box mb="180px" mt="60px" zoom={zoom}>
    <Text maxW="620px" fontSize="t2" fontWeight={400} lineHeight="140%">
      Мы поможем вам открыть, развить и успешно вести бизнес в Турции. Наша команда предложит индивидуальные решения, обеспечит профессиональную юридическую, финансовую и аналитическую поддержку, а также окажет экспертное сопровождение на каждом этапе вашего бизнеса.
    </Text>

    <Image src={Consulting} userSelect="none" pointerEvents="none" draggable="false" mt="50px" />

    {/* Используем Grid для выравнивания */}
    <Grid templateColumns={`repeat(${services.length}, 1fr)`} gap="40px" mt="60px">
      {services.map((section) => (
        <Box key={section.title}>
          <Text fontSize="28px" fontWeight={400} lineHeight="140%" mb="16px">
            {section.title}
          </Text>
          {section.items.map((item, index) => (
            <Text key={index} mb="8px">• {item}</Text>
          ))}
        </Box>
      ))}
    </Grid>
  </Box>
);
}