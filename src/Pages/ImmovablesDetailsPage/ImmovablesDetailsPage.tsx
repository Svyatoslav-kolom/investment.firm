import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { DetailsImage } from "../../components/Molecules/DetailsImage";
import { LoanTerms } from "./LoanTerms";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";

interface Props { }

const images = [
  "/images/ImmovablesCards/Invest/1.png",
  "/images/ImmovablesCards/Invest/2.png",
  "/images/ImmovablesCards/Invest/3.png",
  "/images/ImmovablesCards/Invest/4.png",
];

export const ImmovablesDetailsPage: FC<Props> = () => (
  <Box mt="170px" px="158px">
    <VStack>
      <VStack gap="10px" mb="20px" alignSelf={"start"}>
        <Heading
          fontSize={"38px"}
          fontWeight={400}
          textTransform={"uppercase"}
          alignSelf="start"
        >
          #69646431 Bridge loan - 1.stage (Lithuania)
        </Heading>

        <Text
          fontSize={"22px"}
          alignSelf="start"
        >
          Подробное описание проекта
        </Text>
      </VStack>

      <HStack h="950px" gap="30px">
        <DetailsImage images={images} />

        <VStack height={"100%"}>
          <Heading
            fontWeight={400}
            fontSize="38px"
            textTransform={"uppercase"}
            alignSelf="start"
            mt="10px"
            mb="20px"
          >
            Условия займа
          </Heading>

          <LoanTerms />
        </VStack>

      </HStack>

      <Box w="514px" alignSelf={"end"} mt="80px">
        <BlueButton title={"Инвестировать в недвижимость"} />
      </Box>

    </VStack>

    <Box mt={"150px"} mb={"150px"}>
      <AboutSection
        title="Этот проект представляет собой уникальную возможность инвестирования в недвижимость с гарантией возврата и высокой доходностью. Каждый объект оценивается индивидуально, что позволяет учитывать все особенности и предлагать максимально выгодные условия."
        content={[
          "Заем используется для высвобождения капитала в период продажи. Погашение займа будет производиться за счет продажи залогового имущества. Заем обеспечен ипотекой первого ранга. Член правления заемщика предоставляет личное поручительство на полную сумму ипотеки. Lumina предоставляет бонусы к годовому проценту:",
          <div key="1">+0.5% за инвестиции от €1,000.<br /> +1% за инвестиции от €5,000.<br /> +1.5% за инвестиции от €25,000.<br /> +2% за инвестиции от €50,000.<br /> Данная жилая недвижимость расположена по адресу:<br /> улица Риешес 49C-1, Линдинишкес, район Авижений,<br /> Вильнюсский район</div>,
          "Современный дуплекс площадью 116.40 кв. м, построенный в период с 2021 по 2024 год, предназначенный для комфортного проживания.",
          <div key="1">Участок 497/1000 от 0.1 га, зона для индивидуального или двухквартирного жилого строительства.
            <br /> Объект имеет отличное расположение в развивающемся пригороде, с удобным доступом к инфраструктуре, транспорту и основным услугам, сохраняя при этом спокойную жилую атмосферу.
            <br /> С учетом высокого спроса на качественное жилье, объект сочетает современный дизайн, функциональность и долгосрочный инвестиционный потенциал.</div>,
        ]}
      />
    </Box>

  </Box>
);
