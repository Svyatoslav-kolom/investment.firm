import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import { FC } from "react";
import { BlueButton } from "../../Atoms/BlueButton";
import { ClientComponent } from "../../Molecules/ClientComponent";

interface CustomTopProps {
  title: string;
  description: string;
}

export const CustomTop: FC<CustomTopProps> = ({ title, description }) => (
  <VStack align="start" gap={13} color="#F3F3F3">
    <VStack align="start" gap="10px">
      <Heading textStyle="h1">{title}</Heading>
    </VStack>

    <VStack align="start" gap="12px" w="100%">
      <BlueButton title="Зарегестрироваться" />
      <Text textStyle="t3" alignSelf="center" >
        {description}
      </Text>
    </VStack>
    <Box w={"100%"}>
      <ClientComponent />
    </Box>
  </VStack>
);