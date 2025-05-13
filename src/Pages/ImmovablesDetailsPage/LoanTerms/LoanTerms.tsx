import { Box, Text, Progress, Stack, Flex } from "@chakra-ui/react";
import { HouseType } from "../../../Types/HouseType";

const Row = ({ label, value }: { label: string; value: string }) => (
  <Flex justify="space-between" align="flex-start">
    <Text whiteSpace="nowrap">{label}</Text>
    <Text fontWeight="medium">{value}</Text>
  </Flex>
);

export const LoanTerms = ({ property }: { property: HouseType }) => {
  const {
    country,
    investors = 0,
    price, // цільова сума
    priceforinvest, // мінімальна сума
    procentza,
    procentin,
    procentlumina,
    term,
    ready,
  } = property;

  const formattedInvestors = investors.toLocaleString("ru-RU");
  const formattedTarget = price ? `€${price.toLocaleString("ru-RU")}` : "—";
  const formattedMin = priceforinvest ? `€${priceforinvest.toLocaleString("ru-RU")}` : "—";
  const formattedBorrower = procentza ? `${procentza}%` : "—";
  const formattedInvestor = procentin ? `${procentin}%` : "—";
  const formattedBonus = procentlumina ? `${procentlumina}%` : "—";
  const formattedTerm = term ? `${term} месяцев` : "—";
  const formattedLTV = "до 65%"; // якщо LTV динамічне — замінимо

  const progressPercent = ready ? Math.round(ready * 100) : 0;

  const terms = [
    { label: "Страна:", value: country || "—" },
    { label: "Инвесторов:", value: formattedInvestors },
    { label: "Целевая сумма:", value: formattedTarget },
    { label: "Минимальная сумма:", value: formattedMin },
    { label: "Процент заемщика:", value: formattedBorrower },
    { label: "Процент инвестора:", value: formattedInvestor },
    { label: "Надбавка Lumina:", value: formattedBonus },
    { label: "Срок займа:", value: formattedTerm },
    { label: "Частота выплат:", value: "Ежеквартально" }, // якщо буде з бекенду — замінимо
    { label: "Прогнозируемое LTV:", value: formattedLTV },
  ];

  return (
    <Box height="100%" textStyle="t2" maxH="1000px" w="100%">
      <Text mb={2}>Готовность проекта: {progressPercent}%</Text>

      <Progress.Root value={progressPercent} w="100%" borderRadius="full" colorScheme="blue">
        <Progress.Track borderRadius="full">
          <Progress.Range style={{ backgroundColor: "#0048B4", borderRadius: "full" }} />
        </Progress.Track>
      </Progress.Root>

      <Stack gap={4} h="100%" mt={3} w="100%">
        {terms.map((item, idx) => (
          <Row key={idx} label={item.label} value={item.value} />
        ))}
      </Stack>
    </Box>
  );
};
