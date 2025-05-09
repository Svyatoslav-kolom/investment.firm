import { Image, Box, Text, Heading, HStack, VStack } from "@chakra-ui/react";
import useZoom from "../../../zoom";
import { services } from "./services";
import HowItWorksImg from "../../../assets/howItWorks.svg";
import SwipeIcon from "../../../assets/swipeIcon.svg";

export const HowItWorks = () => {
  const zoom = useZoom();
  const totalWidth = `${services.length * 300}px`; // ширина на кожен блок по 300px

  return (
    <Box zoom={zoom} overflowX="hidden">
      <HStack justifyContent="space-between" px={4}>
        <Heading textStyle="h1" alignSelf="start" pb={11}>
          Как это работает
        </Heading>

        <Image
          src={SwipeIcon}
          boxSize="40px"
          display={{ base: "block", md: "none" }}
        />
      </HStack>

      <Box
        overflowX="auto"
        px={4}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        mt="60px"
        mx={"auto"}
      >
        <VStack align="start" gap="40px" minW={totalWidth}>
          <Image
            src={HowItWorksImg}
            userSelect="none"
            pointerEvents="none"
            draggable="false"
            width={totalWidth}
          />

          <HStack gap="10px" width={totalWidth} alignItems="flex-start">
            {services.map((section) => (
              <Box key={section.title} flex="1" minWidth="265px">
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
