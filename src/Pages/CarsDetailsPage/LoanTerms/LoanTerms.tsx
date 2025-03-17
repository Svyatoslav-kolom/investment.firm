import { Box, Text, Stack, Flex } from "@chakra-ui/react";

// Кастомный компонент для строки
const Row = ({ label, value }: { label: string; value: string; isLongText?: boolean }) => (
  <Flex justify="space-between">
    <Text whiteSpace="nowrap">{label}</Text>
    <Text fontWeight="medium">
      {value}
    </Text>
  </Flex>
);

export const LoanTerms = () => {
  // Данные для отображения
  const terms = [
    { label: "Страна:", value: "Турция" },
    { label: "Год:", value: "2019" },
    { label: "Марка:", value: "Mercedes" },
    { label: "Модель:", value: "AMG C43 W205" },
    { label: "Тип:", value: "AMG C43 W205" },
    { label: "Пробег:", value: "64 000 км" },
    { label: "Двигатель:", value: "2 л" },
    { label: "Трансмиссия:", value: "Автомат" },
    { label: "Кузов:", value: "Седан" },
    { label: "Цвет:", value: "Голубой" },
    { label: "VIN:", value: "3KPF4LA76HE016713" },
    { label: "Стоимость авто:", value: "65 000 $" },
    { label: "Стоимость аренды 1 штуки:", value: "80 $" },
  ];

  return (
    <Box height="100%" fontSize="18px" maxH="1000px" w={"100%"}>
      <Stack gap={4} h="100%" mt={3}>
        {terms.map((item, idx) => (
          <Row key={idx} label={item.label} value={item.value} />
        ))}
      </Stack>
    </Box>
  );
};
