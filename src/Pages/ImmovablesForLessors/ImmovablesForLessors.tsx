import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { ImmovablesTopLessors } from "../../components/Organisms/ImmovablesTopLessors";
import { problems } from "./problems";
import { investmentSteps } from "./investmentSteps";
import { investmentBenefits } from "./investmentBenefits";

export const ImmovablesForLessors = () => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <ImmovablesTopLessors />

      <Box px="158px" mt="140px" mb="140px">
        <Box height="620px">
          <ImmovablesInfo
            title={"Мы предлагаем уникальное решение, которое сочетает в себе удобство аренды и выгоды владения:"}
            info={problems}
            wrapId={3}
          />
        </Box>


        <Box mt="170px" alignSelf="center">
          <InvestmentPoints info={investmentSteps} />
        </Box>

        <Box mt="170px" alignSelf="center">
          <ImmovablesInfo
            title={<Text>Почему это выгодно <br /> именно вам?</Text>}
            info={investmentBenefits}
            wrapId={2}
          />

          <Box w="515px" alignSelf="end" justifySelf="end" mt="80px">
            <BlueButton title={"Арендовать жилье"} />
          </Box>

          <Heading
            fontSize="32px"
            lineHeight="44px"
            fontWeight={400}
            textTransform="uppercase"
            alignSelf="start"
            w="515px"
            mt="80px"
          >
            Сделайте первый шаг к своему дому уже сегодня!
          </Heading>

        </Box>
      </Box>


    </VStack>
  );
};
