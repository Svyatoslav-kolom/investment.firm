import { Box, Text, Progress, Stack, Flex } from "@chakra-ui/react";

// Кастомный компонент для строки
const Row = ({ label, value, isLongText = false }: { label: string; value: string; isLongText?: boolean }) => (
  <Flex justify="space-between" align={isLongText ? "flex-start" : "center"}>
    <Text whiteSpace="nowrap">{label}</Text>
    <Text fontWeight="medium" ml={isLongText ? 1 : 0}>
      {value}
    </Text>
  </Flex>
);

export const LoanTerms = () => {
  // Данные для отображения
  const terms = [
    { label: "Страна:", value: "Турция" },
    { label: "Инвесторов:", value: "1,033" },
    { label: "Целевая сумма:", value: "€120,900" },
    { label: "Минимальная сумма:", value: "€50,000" },
    { label: "Процент заемщика:", value: "10.5%" },
    { label: "Процент инвестора:", value: "9%" },
    { label: "Надбавка Lumina:", value: "1.5%" },
    { label: "Срок займа:", value: "12 месяцев" },
    { label: "Тип погашения:", value: "Единовременный платеж в конце срока займа", isLongText: true },
    { label: "Выплата процентов:", value: "Регулярные выплаты согласно графику", isLongText: true },
    { label: "Частота выплат:", value: "Ежеквартально" },
    { label: "Мин. период процентов:", value: "0 месяцев" },
    { label: "Уровень возврата:", value: "Минимальная доходность рассчитывается на основе общей площади продаваемых единиц", isLongText: true },
    { label: "LTV (отношение займа к стоимости):", value: "65%" },
    { label: "Прогнозируемое LTV:", value: "до 65%" },
    { label: "Цель займа:", value: "Используется для высвобождения капитала на период продажи.", isLongText: true },
  ];

  return (
    <Box height="100%" textStyle="t2" maxH="1000px">
      {/* Готовность проекта */}
      <Text mb={2} fontWeight="bold">
        Готовность проекта: 55%
      </Text>

      {/* Прогресс бар */}
      <Progress.Root value={55} w="100%" shape="rounded">
        <Progress.Track>
          <Progress.Range style={{ backgroundColor: "#0048B4" }} />
        </Progress.Track>
      </Progress.Root>

      {/* Контент */}
      <Stack gap={4} h="100%" mt={3}>
        {terms.map((item, idx) => (
          <Row key={idx} label={item.label} value={item.value} isLongText={item.isLongText} />
        ))}
      </Stack>
    </Box>
  );
};
