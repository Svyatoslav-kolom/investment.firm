import { Box, Flex, Heading, Image, Text, VStack, List } from "@chakra-ui/react";
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
  <Box maxW="500px" bg="white" p="20px">
    {/* Заголовок и иконка */}
    <Flex align="end" justify="space-between" gap={0}>
      {/* Текстовая часть */}
      <Box flex="1">
        <Heading
          textStyle="h3"
          color="#0048B4"
          w="100%"
          textTransform="uppercase"
        >
          {service.title}
        </Heading>

        {/* Подчеркивание */}
        <Box h="1px" w="115%" bg="#0048B4" mt="6px" zIndex={-1}/>
      </Box>

      {/* Иконка */}
      <Flex
        w="80px"
        h="80px"
        border="2px solid #0048B4"
        borderRadius="full"
        align="center"
        justify="center"
        backgroundColor={"white"}
        flexShrink={0}
        zIndex={1}
      >
        <Image src={service.icon} w="50%" h="50%" objectFit="contain" />
      </Flex>
    </Flex>

    {/* Описание */}
    <VStack align="start" mt="20px" gap="15px">
      <Text fontSize="16px">{service.descriptionTitle}</Text>

      <List.Root gap="10px" pl="20px">
        {service.description.map((item, index) => (
          <List.Item key={index} _marker={{ color: "#0048B4" }} fontSize="14px">
            {item}
          </List.Item>
        ))}
      </List.Root>
    </VStack>
  </Box>
);
