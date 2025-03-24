import { HStack } from "@chakra-ui/react";
import { BlueButton } from "../../../components/Atoms/BlueButton";

const filterOptions = [
  { label: "Все", count: 39 },
  { label: "СпортКар", count: 9 },
  { label: "Бизнес", count: 10 },
  { label: "Внедорожники", count: 12 },
  { label: "Комфорт", count: 8 },
];

export const DesktopFilter = () => {
  return (
    <HStack gap="30px" w="100%">
      {filterOptions.map((filter) => (
        <BlueButton
          key={filter.label}
          title={`${filter.label} (${filter.count})`}
          variant={filter.label === "Все" ? "light" : "solid"}
        />
      ))}
    </HStack>
  );
};