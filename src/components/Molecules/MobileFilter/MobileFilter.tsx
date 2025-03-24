import { Box, HStack, Image, Text, Collapsible } from "@chakra-ui/react";
import CloseIcon from "../../../assets/icons/CloseIcon.svg";

const filterOptions = [
  { label: "Все", count: 39 },
  { label: "СпортКар", count: 9 },
  { label: "Бизнес", count: 10 },
  { label: "Внедорожники", count: 12 },
  { label: "Комфорт", count: 8 },
];

interface MobileFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileFilter: React.FC<MobileFilterProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(255, 255, 255, 0.5)"
          zIndex={20}
          onClick={onClose}
        />
      )}

      <Collapsible.Root open={isOpen} onOpenChange={(details) => !details.open && onClose()}>
        <Collapsible.Content>
          <Box
            position="absolute"
            top={10}
            left={0}
            right={0}
            bg="#F0F4FF"
            borderRadius="20px"
            p={4}
            boxShadow="md"
            zIndex={30}
            onClick={(e) => e.stopPropagation()}
          >
            <HStack justifyContent="space-between" mb={2}>
              <Text fontWeight="bold">Фильтры</Text>
              <Image
                src={CloseIcon}
                display={{ base: "block", md: "none" }}
                onClick={onClose}
                cursor="pointer"
              />
            </HStack>

            {filterOptions.map((filter) => (
              <HStack key={filter.label} justifyContent="space-between" py={1} borderBottom="1px solid #E2E8F0">
                <Text>{filter.label}</Text>
                <Text>{filter.count}</Text>
              </HStack>
            ))}
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
};
