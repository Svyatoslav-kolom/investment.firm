import { Image, Box, Text, Heading, HStack, VStack } from "@chakra-ui/react";
import useZoom from "../../../zoom";
import { services } from "./services";
import HowItWorksImg from "../../../assets/howItWorks.svg";
import SwipeIcon from "../../../assets/swipeIcon.svg";

export const HowItWorks = () => {
  const zoom = useZoom();

  return (
    <Box mb="180px" mt="60px" zoom={zoom} overflowX="hidden">
      <HStack justifyContent="space-between" px={4}>
        <Heading textStyle="h1" alignSelf="start" pb={11}>
          Как это работает
        </Heading>

        <Image src={SwipeIcon} boxSize="40px" display={{ base: "block", md: "none" }} />
      </HStack>

      {/* Общий контейнер для прокрутки изображения и текста */}
      <Box
        overflowX="auto"
        maxW="100vw"
        px={4}
        css={{
          "&::-webkit-scrollbar": { display: "none" }, // Скрываем скроллбар
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        mt="60px"
      >
        {/* Внутренний контейнер для синхронного скролла */}
        <VStack width="fit-content" gap="40px" align="start">
          <Image
            src={HowItWorksImg}
            userSelect="none"
            pointerEvents="none"
            draggable="false"
            w={`${services.length * 300}px`} // Ширина изображения = количеству текстовых блоков
          />

          {/* Горизонтальный контейнер с текстами */}
          <HStack gap="10px" width="fit-content">
            {services.map((section) => (
              <Box key={section.title} w="300px" flexShrink={0}>
                <Text fontSize="28px" fontWeight={400} lineHeight="140%" mb="16px">
                  {section.title}
                </Text>
                <Text>{section.description}</Text>
              </Box>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
