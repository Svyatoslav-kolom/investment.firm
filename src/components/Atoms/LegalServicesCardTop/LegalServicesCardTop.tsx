import { Box, HStack, Text, Image } from "@chakra-ui/react";

interface InfoCardProps {
  text: string;
  icon: string; // путь до иконки или base64
}

export const LegalServicesCardTop: React.FC<InfoCardProps> = ({ text, icon }) => {
  return (
    <HStack
      borderBottom="2px solid #0048B4"
      align="center"
      justify="space-between"
      gap="20px"
      paddingBottom="12px"
      width="100%"
      maxW="600px"
    >
      {/* Текстовая часть */}
      <Text textStyle="t2" color="#0048B4">
        {text}
      </Text>

      {/* Иконка в кружке */}
      <Box
        border="2px solid #0048B4"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="64px"
        height="64px"
        minW="64px"
        minH="64px"
      >
        <Image src={icon} alt="icon" boxSize="40px" objectFit="contain" />
      </Box>
    </HStack>
  );
};
