import { Box, Heading, VStack, Text, Stack } from "@chakra-ui/react";
import { DetailsImage } from "../../components/Molecules/DetailsImage";
import { LoanTerms } from "./LoanTerms";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";
import { images } from "./images";
import useZoom from "../../zoom";

export const ImmovablesDetailsPage = () => {
  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;

  return (
    <Box mt={{ base: "80px", md: "200px" }} zoom={adjustedZoom}>
      <VStack align="start">
        <VStack gap="10px" mb="20px">
          <Heading textStyle="h1">#69646431 Bridge loan - 1.stage (Lithuania)</Heading>
          <Text fontSize={{ base: "18px", md: "22px" }}>Подробное описание проекта</Text>
        </VStack>

        <Stack direction={{ base: "column", md: "row" }} gap="30px" w="100%" h="auto">
          <DetailsImage images={images} />

          <VStack align="start" w="100%">
            <Heading textStyle="h1" mt="10px" mb="20px">
              Условия займа
            </Heading>
            <LoanTerms />
          </VStack>
        </Stack>

        <Box w={{ base: "100%", md: "514px" }} mt="40px">
          <BlueButton title="Инвестировать в недвижимость" />
        </Box>
      </VStack>

      <Box mt={{base:"50px", md:"150px"}}>
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
};
