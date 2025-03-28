import { Box, Text, Image, VStack, HStack, useBreakpointValue, Stack } from "@chakra-ui/react";
import Banking from "../../assets/Banking.svg";
import BankingMobile from "../../assets/Banking-mobile.png";
import { services } from "./services";
import useZoom from "../../zoom";
import SwipeIcon from "../../assets/swipeIcon.svg";
import { fadeInFrom, withMotion } from "../../utils/animations";

// Motion components for animations
const MotionImage = withMotion(Image);
const MotionVStack = withMotion(VStack);
const MotionText = withMotion(Text);

export const BankingPage = () => {
  const zoom = useZoom();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box mb="180px" mt="60px" zoom={zoom}>
      {/* Shared Text */}
      <Text
        maxW="620px"
        textStyle="t2"
        lineHeight="140%"
        justifySelf="end"
        mx={{ base: "20px", md: "none" }}
      >
        Мы предлагаем удобные, безопасные и выгодные решения для всех ваших финансовых потребностей. С нами вы сможете быстро обменивать валюту, покупать криптовалюту и отправлять деньги по всему миру с минимальными комиссиями.
      </Text>

      {/* Conditionally Render Mobile or Desktop */}
      {isDesktop ? (
        // Desktop Version
        <HStack mt="50px" gap="40px" height="1200px" align="start">
          {/* Desktop Image Animation */}
          <MotionImage
            src={Banking}
            userSelect="none"
            pointerEvents="none"
            draggable="false"
            {...fadeInFrom("left")}
          />

          {/* Desktop Content */}
          <MotionVStack align="start" justifyContent="space-around" height="100%" {...fadeInFrom("left")}>
            {services.map(({ title, description, items }) => (
              <HStack key={title} align="start" gap="40px">
                <VStack align="start">
                  <Text fontSize={22} fontWeight={400} color="#0048B4">
                    {title}
                  </Text>
                  <Text fontSize={16} fontWeight={400}>
                    {description}
                  </Text>
                </VStack>

                {/* Animation for list items */}
                <VStack align="start" gap={2}>
                  {items.map((item, index) => (
                    <MotionText
                      key={index}
                      fontSize={16}
                      {...fadeInFrom("left")}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.3 + index * 0.15, // staggered delay
                      }}
                    >
                      <Text as="span" color="#0048B4" mr="8px">
                        •
                      </Text>
                      {item}
                    </MotionText>
                  ))}
                </VStack>
              </HStack>
            ))}
          </MotionVStack>
        </HStack>
      ) : (
        // Mobile Version
        <Box overflowX="auto" maxW="100vw" px={4} mt="60px"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}>
          <VStack width="fit-content" gap="40px" align="start">
            <Image
              src={BankingMobile}
              userSelect="none"
              pointerEvents="none"
              draggable="false"
              w={`${services.length * 320}px`}
            />

            {/* Mobile Content */}
            <HStack gap="20px" width="fit-content" justify="start" alignItems={"flex-start"}>
              {services.map(({ title, description, items }) => (
                <Box key={title} w="300px" flexShrink={0} flex="0 0 auto">
                  <Text fontSize="28px" fontWeight={400} lineHeight="140%" mb="16px">
                    {title}
                  </Text>
                  <Text fontSize={16} fontWeight={400} mb="8px">
                    {description}
                  </Text>
                  {items.map((item, index) => (
                    <Text key={index} mb="8px">
                      • {item}
                    </Text>
                  ))}
                </Box>
              ))}
            </HStack>
          </VStack>

        </Box>
      )}

      {/* Mobile Swipe Icon */}
      <Image
        display={{ base: "block", md: "none" }}
        src={SwipeIcon}
        boxSize="40px"
        mt={5}
        mr={3}
        justifySelf={"flex-end"}
      />

      <Box height={{ base: "auto", md: "140px" }} width={"66%"} ml={"auto"}>
        <Stack direction={{ base: "column", md: "row" }} gap={7} align="start" w={"100%"}>
          <MotionText
            {...fadeInFrom("left")}
            textStyle="h2"
            width={{ base: "100%", md: "65%" }}
            textTransform={"uppercase"}
          >
            Начните сегодня!
          </MotionText>

          <MotionText
            {...fadeInFrom("left")}
            textStyle="t1"
            gap={7}
            width="100%"
          >
            Откройте для себя удобство и безопасность современных финансовых услуг. Присоединяйтесь к нам и используйте наши выгодные предложения уже сегодня!
          </MotionText>
        </Stack>
      </Box>
    </Box>
  );
};
