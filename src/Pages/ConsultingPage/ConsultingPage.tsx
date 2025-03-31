import { Box, Text, Image, VStack, HStack } from "@chakra-ui/react";
import Consulting from "../../assets/Consulting.svg";
import { services } from "./services";
import useZoom from "../../zoom";
import SwipeIcon from "../../assets/swipeIcon.svg";

export const ConsultingPage = () => {
  const zoom = useZoom();

  return (
    <Box mb="180px"zoom={zoom}>
      <Text maxW="620px" fontSize="t2" fontWeight={400} lineHeight="140%" mx={{ base: "20px", md: "none" }}>
        Мы поможем вам открыть, развить и успешно вести бизнес в Турции. Наша команда предложит индивидуальные решения, обеспечит профессиональную юридическую, финансовую и аналитическую поддержку, а также окажет экспертное сопровождение на каждом этапе вашего бизнеса.
      </Text>

      {/* Общий контейнер для прокрутки на мобильных устройствах */}
      <Box
        overflowX={{ base: "auto", md: "visible" }} // Прокрутка только на мобильных устройствах
        maxW="100vw"
        px={4}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        mt="60px"
      >
        {/* Внутренний контейнер для синхронного скролла */}
        <VStack
          width={{ base: "fit-content", md: "100%" }} // На ПК занимает всю ширину
          gap="40px"
          align="start"
        >
          {/* Изображение */}
          <Image
            src={Consulting}
            userSelect="none"
            pointerEvents="none"
            draggable="false"
            w={{ base: `${services.length * 320}px`, md: "100%" }} // Полная ширина на ПК
          />

          {/* Карточки с текстами */}
          <HStack
            gap="20px"
            width={{ base: "fit-content", md: "100%" }}
            justify={{ base: "start", md: "space-between" }}
            alignItems={"flex-start"}
          >
            {services.map((section) => (
              <Box
                key={section.title}
                w={{ base: "300px", md: "auto" }} // Фиксированная ширина на мобильных, авто-растяжение на ПК
                flexShrink={0} // Не сжимается при нехватке места
                flex={{ base: "0 0 auto", md: "1" }} // Растягивается на ПК, фиксирован на мобильных
              >
                <Text fontSize="28px" fontWeight={400} lineHeight="140%" mb="16px">
                  {section.title}
                </Text>
                {section.items.map((item, index) => (
                  <Text key={index} mb="8px">• {item}</Text>
                ))}
              </Box>

            ))}
          </HStack>
        </VStack>
      </Box>
      <Image
        display={{ base: "block", md: "none" }}
        src={SwipeIcon}
        boxSize="40px"
        mt={5}
        mr={3}
        justifySelf={"flex-end"}
      />
    </Box>
  );
};
