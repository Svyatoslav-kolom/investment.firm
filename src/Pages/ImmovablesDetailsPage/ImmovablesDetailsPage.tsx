import {
  Box,
  Heading,
  VStack,
  Text,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HouseType } from "../../Types/HouseType";
import { DetailsImage } from "../../components/Molecules/DetailsImage";
import { LoanTerms } from "./LoanTerms";
import { BlueButton } from "../../components/Atoms/BlueButton";
import { AboutSection } from "../../components/Organisms/AboutSection/AboutSection";
import useZoom from "../../zoom";
import { fetchInvestPropertyById } from "../../api/house";

export const ImmovablesDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<HouseType | null>(null);
  const [loading, setLoading] = useState(true);

  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchInvestPropertyById(id)
        .then((data) => setProperty(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const images = property
    ? [property.image, property.image2, property.image3].filter(
        (image): image is string => typeof image === "string"
      )
    : [];

  return (
    <Box zoom={adjustedZoom} mt={{ base: "80px", md: "100px" }} px="20px">
      {loading ? (
        <Spinner size="xl" />
      ) : property ? (
        <VStack align="start" gap="40px">
          {/* Заголовок і опис */}
          <VStack align="start" gap="10px">
            <Heading textStyle="h1">{property.name}</Heading>
            <Text fontSize={{ base: "18px", md: "22px" }}>
              {property.description || "Подробное описание проекта"}
            </Text>
          </VStack>

          {/* Головна секція з фото та умовами */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap="30px"
            w="100%"
            h="auto"
          >
            <DetailsImage images={images} />

            <VStack align="start" maxW={{ md: "530px" }} w="100%">
              <Heading textStyle="h1" mt="10px" mb="20px">
                Условия займа
              </Heading>
              <LoanTerms property={property} />
            </VStack>
          </Stack>

          {/* Кнопка */}
          <Box w={{ base: "100%", md: "514px" }}>
            <BlueButton title="Инвестировать в недвижимость" />
          </Box>

          {/* Опис з AboutSection */}
          <Box mt={{ base: "50px", md: "150px" }} w="100%">
            <AboutSection
              title="Этот проект представляет собой уникальную возможность инвестирования в недвижимость с гарантией возврата и высокой доходностью. Каждый объект оценивается индивидуально, что позволяет учитывать все особенности и предлагать максимально выгодные условия."
              content={[
                "Заем используется для высвобождения капитала в период продажи. Погашение займа будет производиться за счет продажи залогового имущества. Заем обеспечен ипотекой первого ранга. Член правления заемщика предоставляет личное поручительство на полную сумму ипотеки. Lumina предоставляет бонусы к годовому проценту:",
                <div key="1">
                  +0.5% за инвестиции от €1,000.<br /> +1% за инвестиции от
                  €5,000.<br /> +1.5% за инвестиции от €25,000.<br /> +2% за
                  инвестиции от €50,000.<br />
                  Данная жилая недвижимость расположена в {property.city},{" "}
                  {property.country}.
                </div>,
                property.square
                  ? `Современный дуплекс площадью ${property.square} кв. м.`
                  : "",
              ]}
            />
          </Box>
        </VStack>
      ) : (
        <Text>Объект не знайдено</Text>
      )}
    </Box>
  );
};
