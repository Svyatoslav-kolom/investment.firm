import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionText = withMotion(Text);
const MotionHStack = withMotion(HStack);

interface Problem {
  img: string;
  title: string;
  description: string;
}

interface Props {
  title: ReactNode;
  info: Problem[];
  wrapId: number;
}

export const ImmovablesInfo: FC<Props> = ({ title, info, wrapId }) => {
  return (
    <HStack justifyContent="space-between" h="100%">
      <MotionText
        {...fadeInFrom("left")}
        textStyle="h2"
        textTransform="uppercase"
        alignSelf="start"
      >
        {title}
      </MotionText>

      <MotionHStack alignSelf="end" {...fadeInFrom("right")}>
        <VStack alignItems="center" justifyContent="center">
          {info.slice(0, wrapId).map((problem, index) => (
            <HStack key={index} gap="34px" w="520px">
              <Image src={problem.img} boxSize="100px" alt={problem.title} />
              <Box>
                <Text textStyle="t2">{problem.title} {problem.description}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>

        <VStack alignSelf="end">
          {info.slice(wrapId).map((problem, index) => (
            <HStack key={index} gap="34px" w="520px">
              <Image src={problem.img} boxSize="100px" alt={problem.title} />
              <Box>
                <Text textStyle="t2">{problem.title} {problem.description}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </MotionHStack>
    </HStack>
  );
};
