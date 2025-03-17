import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { BlueRectangleType } from "../../Types/BlueRectangleType";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { CarsTopInvest } from "../../components/Organisms/CarsTopInvest";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";

const investmentSteps: BlueRectangleType[] = [
  {
    number: "01",
    img: "/icons/blueRectangleIcons/cars/forInvestor/1.svg",
    title: "Покупка автомобиля",
    description:
      "Инвестор приобретает авто либо дает свое авто в пользование",
  },
  {
    number: "02",
    img: "/icons/blueRectangleIcons/cars/forInvestor/2.svg",
    title: "Заключение договора",
    description:
      "Вы подписываете договор с нашей компанией, передавая автомобиль в управление",
  },
  {
    number: "03",
    img: "/icons/blueRectangleIcons/cars/forInvestor/3.svg",
    title: "Сдача в аренду",
    description:
      "Автомобиль размещается на нашей платформе и сдается арендаторам",
  },
  {
    number: "04",
    img: "/icons/blueRectangleIcons/cars/forInvestor/4.svg",
    title: "Ежемесячный доход",
    description:
      "Инвестор получает стабильный доход ",
  },
  {
    number: "05",
    img: "/icons/blueRectangleIcons/cars/forInvestor/5.svg",
    title:
      "Полная окупаемость",
    description:
      "За 3–4 года вложения окупаются, и авто начинает приносить чистую прибыль",
  },
];

const investmentBenefits = [
  {
    img: "/icons/benefitsIcons/cars/investments/1.svg",
    title: "Стабильный пассивный доход",
    description: "",
  },
  {
    img: "/icons/benefitsIcons/cars/investments/2.svg",
    title: "Полное сопровождение сделки",
    description: "",
  },
  {
    img: "/icons/benefitsIcons/cars/investments/3.svg",
    title: "Минимальные риски и прозрачные условия, благодаря нашей платформе ",
    description: "",
  },
  {
    img: "/icons/benefitsIcons/cars/investments/4.svg",
    title: "Дополнительная реклама через нашу платформу увеличивает спрос",
    description: "",
  },
];

export const CarsForInvestments = () => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <CarsTopInvest />

      <Box px="158px" mt="140px" mb="140px">
        <Box>
          <AboutSection
            title="Автомобиль как выгодный актив: проблемы и решения"
            content={[
              "Многие инвестиции связаны с рисками или долгой окупаемостью. Автомобиль, сдаваемый в аренду через нашу платформу, становится стабильным источником дохода. Мы предоставляем полное сопровождение: от покупки до управления арендой.",
            ]}
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
            <BlueButton title={"Начать зарабатывать с авто"} />
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
