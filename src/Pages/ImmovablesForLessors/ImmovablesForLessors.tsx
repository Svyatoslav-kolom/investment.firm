import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { problems } from "../../ConstInfo/ImmovablesForLessorsProblems";
import { investmentSteps } from "../../ConstInfo/ImmovablesForLessorsInvestmentSteps";
import { investmentBenefits } from "../../ConstInfo/ImmovablesForLessorsInvestmentBenefits";
import { useNavigate } from "react-router-dom";
import useZoom from "../../zoom";

export const ImmovablesForLessors = () => {
  const navigate = useNavigate();
  const zoom = useZoom();

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      zoom={zoom}
      mx={{ base: "20px", md: "none" }}
    >

      <Box px={{ base: "20px", md: "158px" }} mt={{ base: "40px", md: "140px" }} mb={{ base: "40px", md: "140px" }}>
        <Box
          height={{ base: "auto", md: "620px" }}
        >
          <ImmovablesInfo
            title={"Мы предлагаем уникальное решение, которое сочетает в себе удобство аренды и выгоды владения:"}
            info={problems}
            wrapId={3}
          />
        </Box>

        <Box mt={{ base: "80px", md: "170px" }} alignSelf="center" >
          <InvestmentPoints info={investmentSteps} />
        </Box>

        <Box mt={{ base: "80px", md: "170px" }} alignSelf="center">
          <ImmovablesInfo
            title={<Text>Почему это выгодно <br /> именно вам?</Text>}
            info={investmentBenefits}
            wrapId={2}
          />

          <Box w={{ base: "100%", md: "515px" }} justifySelf="end" mt="40px">
            <BlueButton title={"Арендовать жилье"} onClick={() => navigate("/immovables/forLessors/catalog")} />
          </Box>

          <Heading
            textStyle="h2"
            textTransform="uppercase"
            alignSelf="center"
            w={{ base: "100%", md: "515px" }}
            mt="40px"
            textAlign="left"
          >
            Сделайте первый шаг к своему дому уже сегодня!
          </Heading>
        </Box>
      </Box>


    </VStack>
  );
};
