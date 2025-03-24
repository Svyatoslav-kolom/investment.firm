import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";
import { investmentSteps } from "./investmentSteps";
import { investmentBenefits } from "./investmentBenefits";
import useZoom from "../../zoom";

export const CarsForLessors = () => {
  const zoom = useZoom();

  return (
    <VStack alignItems="center" justifyContent="center" zoom={zoom} mx={{ base: "20px", md: "none" }}>
      <Box px={{ base: "20px", md: "158px" }} mt={{ base: "40px", md: "140px" }} mb={{ base: "40px", md: "140px" }}>
        <Box height={{ base: "auto", md: "620px" }}>
          <AboutSection
            title="Почему лизинг авто недоступен: проблемы и пути решения"
            content={[
              "Для граждан СНГ в Турции лизинг автомобилей практически невозможен. Мы создали уникальную модель, которая позволяет арендовать автомобиль с последующим выкупом на понятных и выгодных условиях.",
            ]}
          />
        </Box>

        <Box mt={{ base: "80px", md: "170px" }} alignSelf="center">
          <InvestmentPoints info={investmentSteps} />
        </Box>

        <Box mt={{ base: "80px", md: "170px" }} alignSelf="center">
          <ImmovablesInfo
            title={<Text>Почему это выгодно <br /> именно вам?</Text>}
            info={investmentBenefits}
            wrapId={2}
          />

          <Box w={{ base: "100%", md: "515px" }} justifySelf="end" mt="40px">
            <BlueButton title={"Оформить лизинг"} />
          </Box>

          <Heading
            textStyle="h2"
            textTransform="uppercase"
            alignSelf="center"
            w={{ base: "100%", md: "515px" }}
            mt="40px"
            textAlign="left"
          >
            С нами ваши средства работают эффективно,
            а вы — получаете уверенность в завтрашнем дне.
          </Heading>
        </Box>
      </Box>
    </VStack>
  );
};
