import { Stack, Text, Box, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { BlueRectangleType } from "../../../Types/BlueRectangleType";
import { BlueRectangle } from "../../Atoms/BlueRectangle";
import { fadeInFrom, withMotion } from "../../../utils/animations";
import firstCard from "../../../assets/blueRectangleFirst.svg";

const MotionStack = withMotion(Stack);

interface Props {
  info: BlueRectangleType[]
}

export const InvestmentPoints: FC<Props> = ({ info }) => {
  const zoom = useBreakpointValue({
    base: 0.7,
    md: 1,
  });

  return (
    <VStack gap="30px" alignItems="center" justify="center" maxW={{ base: "350px", md: "none" }}>

      <MotionStack gap="30px" {...fadeInFrom("left")} direction={{ base: "column", md: "row" }}>
        <Box
          w={{ base: "100%", md: "510px" }}
          h="350px"
          bgImage={`url(${firstCard})`}
          bgSize="cover"
          borderRadius="3xl" 
          p="40px"
          gap="50px"
          color="#0D0D0D"
          zoom={zoom}
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
      </MotionStack>

      <MotionStack gap="30px" {...fadeInFrom("left")} direction={{ base: "column", md: "row" }}>
        {info.slice(2).map((item, index) => (
          <BlueRectangle key={index} {...item} />
        ))}
      </MotionStack>

    </VStack>
  );
}