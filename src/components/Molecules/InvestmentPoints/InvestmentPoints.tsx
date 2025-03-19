import { HStack, Text, Box, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { BlueRectangleType } from "../../../Types/BlueRectangleType";
import { BlueRectangle } from "../../Atoms/BlueRectangle";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionHStack = withMotion(HStack);

interface Props {
  info: BlueRectangleType[]
}

export const InvestmentPoints: FC<Props> = ({ info }) => (
  <VStack gap="30px" alignItems="center" justify="center">

    <MotionHStack gap="30px" {...fadeInFrom("left")}>
      <Box
        w="510px"
        h="350px"
        bg="#DDEAFF"
        borderRadius="3xl"
        p="40px"
        gap="50px"
        color="#0D0D0D"
      >
        <Text
          textStyle="h2"
          textTransform="uppercase"
          w="390px"
        >
          Простая и эффективная схема инвестиций
        </Text>
      </Box>

      {info.slice(0, 2).map((item, index) => (
        <BlueRectangle key={index} {...item} />
      ))}
    </MotionHStack>

    <MotionHStack gap="30px" {...fadeInFrom("right")}>
      {info.slice(2).map((item, index) => (
        <BlueRectangle key={index} {...item} />
      ))}
    </MotionHStack>

  </VStack>
);
