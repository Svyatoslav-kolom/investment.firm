import { Box, Flex, Heading, Image, List, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface ServiceItem {
  title: string;
  icon: string;
  descriptionTitle: string;
  description: string[];
}

interface LegalServiceItemProps {
  service: ServiceItem;
}

export const LegalServiceItem: FC<LegalServiceItemProps> = ({ service }) => (
  <Box>
    {/* Заголовок и иконка */}
    <Flex align="center" justify="space-between" gap="20px">
      
      {/* Текстовая часть */}
      <Box>
        <Heading
          fontSize="28px"
          fontWeight="400"
          color="#0048B4"
          lineHeight="1.4"
          w="350px"
        >
          {service.title}
        </Heading>

        {/* Подчеркивание */}
        <Box
          h="2px"
          w="120%"
          bg="#0048B4"
          mt="8px"
        />
      </Box>

      {/* Иконка */}
      <Flex
        position="relative"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        alignSelf="end"
      >
        <Flex
          border="2px solid #0048B4"
          borderRadius="full"
          maxW="100%"
          maxH="100%"
          bg="white"
          aspectRatio="1 / 1" // Ровный круг
          align="center"
          justify="center"
        >
          <Image
            src={service.icon}
            w="70%"
            h="70%"
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </Flex>

    {/* Описание */}
    <VStack gap="18px" mt="35px" fontSize="18px" fontWeight="400" align="start">
      <Text>{service.descriptionTitle}</Text>

      <List.Root gap={3} pl="22px">
        {service.description.map((item, index) => (
          <List.Item key={index} _marker={{ color: "#0048B4" }}>
            {item}
          </List.Item>
        ))}
      </List.Root>
    </VStack>
  </Box>
);
