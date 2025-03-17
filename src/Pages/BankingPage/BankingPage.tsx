import { Box, Text, Image, VStack, HStack } from "@chakra-ui/react";
import { Head } from "../../components/Organisms/Head";
import BankingTop from "../../assets/PageBackgrounds/BankingPage.png";
import Banking from "../../assets/Banking.svg";
import { services } from "./services";
import { fadeInFrom, withMotion } from "../../utils/animations"; // путь к motion утилитам

const MotionImage = withMotion(Image);
const MotionVStack = withMotion(VStack);
const MotionText = withMotion(Text);

export const BankingPage = () => (
  <Box mb="180px">
    <Head backgroundImage={BankingTop} hasOverlay={false} heightPercentage={72}>
      <Box />
    </Head>

    <Box mx="158px" mt="60px">
      <Text maxW="620px" fontSize={18} fontWeight={400} lineHeight="140%" justifySelf="end">
        Мы предлагаем удобные, безопасные и выгодные решения для всех ваших финансовых потребностей. С нами вы сможете быстро обменивать валюту, покупать криптовалюту и отправлять деньги по всему миру с минимальными комиссиями.
      </Text>

      <HStack mt="50px" gap="40px" height="1200px" align="start">
        {/* Анимация изображения слева */}
        <MotionImage
          src={Banking}
          userSelect="none"
          pointerEvents="none"
          draggable="false"
          {...fadeInFrom("left")}
        />

        {/* Анимация секций с задержкой */}
        <MotionVStack
          align="start"
          justifyContent="space-around"
          height="100%"
          {...fadeInFrom("right")}
        >
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

              {/* Анимация пунктов списка с задержкой */}
              <VStack align="start" gap={2}>
                {items.map((item, index) => (
                  <MotionText
                    key={index}
                    fontSize={16}
                    {...fadeInFrom("right")}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.3 + index * 0.15, // поочередная задержка
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
    </Box>
  </Box>
);
