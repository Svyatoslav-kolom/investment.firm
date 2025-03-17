import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { ImmovablesTopInvest } from "../../components/Organisms/ImmovablesTopInvest";
import { Head } from "../../components/Organisms/Head";
import ImmovablesTopBackground from "../../assets/PageBackgrounds/ImmovablesTopBackground.png";
import { problems } from "./problems";
import { investmentSteps } from "./investmentSteps";
import { investmentBenefits } from "./investmentBenefits";

export const ImmovablesForInvestments = () => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <Head backgroundImage={ImmovablesTopBackground}>
        <ImmovablesTopInvest />
      </Head>

      <Box px="158px" mt="140px" mb="140px">
        <Box height="430px">
          <ImmovablesInfo
            title={"Рынок недвижимости Турции столкнулся с серьезными проблемами:"}
            info={problems}
            wrapId={2}
          />
        </Box>


        <Box mt="170px" alignSelf="center">
          <InvestmentPoints info={investmentSteps} />
        </Box>

        <Box mt="170px" alignSelf="center">
          <ImmovablesInfo
            title={
              <Text>Почему это выгодно <br /> именно вам?</Text>
            }
            info={investmentBenefits}
            wrapId={2}
          />

          <Box w="515px" alignSelf="end" justifySelf="end" mt="80px">
            <BlueButton title={"Инвестировать в недвижимость"} />
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
            С нами ваши средства работают эффективно,
            а вы — получаете уверенность в завтрашнем дне.
          </Heading>

        </Box>
      </Box>


    </VStack>
  );
};
