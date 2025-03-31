import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { problems } from "../../ConstInfo/ImmovablesForInvestmentsProblems";
import { investmentSteps } from "../../ConstInfo/ImmovablesForInvestmentsInvestmentSteps";
import { investmentBenefits } from "../../ConstInfo/ImmovablesForInvestmentsInvestmentBenefits";
import { useNavigate } from "react-router-dom";
import useZoom from "../../zoom";

export const ImmovablesForInvestments = () => {
  const navigate = useNavigate();
  const zoom = useZoom();

  return (
    <VStack alignItems="center" justifyContent="center" zoom={zoom} mx={{ base: "20px", md: "none" }}>
      <Box px={{ base: "20px", md: "158px" }} mb={{ base: "40px", md: "140px" }}>
        <Box height={{ base: "auto", md: "620px" }}>
          <ImmovablesInfo
            title={"Рынок недвижимости Турции столкнулся с серьезными проблемами:"}
            info={problems}
            wrapId={2}
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
            <BlueButton title={"Инвестировать в недвижимость"} onClick={() => navigate("/immovables/forInvestments/catalog")} />
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
