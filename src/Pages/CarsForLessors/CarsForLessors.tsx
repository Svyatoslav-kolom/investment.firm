import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import { InvestmentPoints } from "../../components/Molecules/InvestmentPoints";
import { BlueRectangleType } from "../../Types/BlueRectangleType";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { ImmovablesInfo } from "../../components/Molecules/ImmovablesInfo";
import { CarsTopLessor } from "../../components/Organisms/CarsTopLessor";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";

const investmentSteps: BlueRectangleType[] = [
  {
    number: "01",
    img: "/icons/blueRectangleIcons/cars/forLessors/1.svg",
    title: "Заключение договора",
    description:
      "Клиент подписывает договор аренды с последующим выкупом",
  },
  {
    number: "02",
    img: "/icons/blueRectangleIcons/cars/forLessors/2.svg",
    title: "Ежемесячные платежи",
    description:
      "Клиент вносит фиксированные суммы, которые идут в счёт полной стоимости автомобиля",
  },
  {
    number: "03",
    img: "/icons/blueRectangleIcons/cars/forLessors/3.svg",
    title: "Владение",
    description:
      "После завершения выплат автомобиль переходит в собственность клиента",
  },
  {
    number: "04",
    img: "/icons/blueRectangleIcons/cars/forLessors/4.svg",
    title: "Опционально",
    description:
      "Клиент может сдавать автомобиль в аренду через нашу платформу и получать дополнительный доход",
  },
  {
    number: "05",
    img: "/icons/blueRectangleIcons/cars/forLessors/5.svg",
    title:
      "Правила неуплаты",
    description:
      "Если платежи не вносятся в течение 2 месяцев, автомобиль изымается",
  },
];

const investmentBenefits = [
  {
    img: "/icons/benefitsIcons/cars/lessors/1.svg",
    title: "Стабильный пассивный доход",
    description: "",
  },
  {
    img: "/icons/benefitsIcons/cars/lessors/2.svg",
    title: "Полное сопровождение сделки",
    description: "",
  },
  {
    img: "/icons/benefitsIcons/cars/lessors/3.svg",
    title: "Минимальные риски и прозрачные условия, благодаря нашей платформе ",
    description: "",
  },
  {
    img: "/icons/benefitsIcons/cars/lessors/4.svg",
    title: "Дополнительная реклама через нашу платформу увеличивает спрос",
    description: "",
  },
];

export const CarsForLessors = () => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <CarsTopLessor />

      <Box px="158px" mt="140px" mb="140px">
        <Box>
          <AboutSection
            title="Почему лизинг авто недоступен: проблемы и пути решения"
            content={[
              "Для граждан СНГ в Турции лизинг автомобилей практически невозможен. Мы создали уникальную модель, которая позволяет арендовать автомобиль с последующим выкупом на понятных и выгодных условиях.",
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
            <BlueButton title={"Оформить лизинг"} />
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
