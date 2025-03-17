import { Box, Text, Image, Grid } from "@chakra-ui/react";
import { Head } from "../../components/Organisms/Head";
import ConsultingTop from "../../assets/PageBackgrounds/Consulting.png";
import Consulting from "../../assets/Consulting.svg";
import { services } from "./services";

export const ConsultingPage = () => (
  <Box mb="180px">
    <Head backgroundImage={ConsultingTop} hasOverlay={false} heightPercentage={72}>
      <Box />
    </Head>

    <Box mx="158px" mt="60px">
      <Text maxW="620px" fontSize={18} fontWeight={400} lineHeight="140%">
        Мы поможем вам открыть, развить и успешно вести бизнес в Турции. Наша команда предложит индивидуальные решения, обеспечит профессиональную юридическую, финансовую и аналитическую поддержку, а также окажет экспертное сопровождение на каждом этапе вашего бизнеса.
      </Text>

      <Image src={Consulting} userSelect="none" pointerEvents="none" draggable="false" mt="50px" />

      {/* Используем Grid для выравнивания */}
      <Grid templateColumns={`repeat(${services.length}, 1fr)`} gap="40px" mt="60px">
        {services.map((section) => (
          <Box key={section.title}>
            <Text fontSize={28} fontWeight={400} lineHeight="140%" mb="16px">
              {section.title}
            </Text>
            {section.items.map((item, index) => (
              <Text key={index} mb="8px">• {item}</Text>
            ))}
          </Box>
        ))}
      </Grid>
    </Box>
  </Box>
);
