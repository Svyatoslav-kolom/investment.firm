import { Box, HStack, VStack, Image, Text, Stack, Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionText = withMotion(Heading);
const MotionStack = withMotion(Stack);

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
    <Stack
      justifyContent="space-between"
      h="100%"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "stretch" }}
      gap={5}
    >
      <MotionText
        {...fadeInFrom("left")}
        textAlign={"left"}
        alignSelf={"start"}
        textStyle="h2"
        textTransform="uppercase"
      >
        {title}
      </MotionText>


      <VStack
        alignItems="flex-start"
        justifyContent="center"
        maxW={{base:"350px", md:"100%"}}
        display={{ base: "flex", md: "none" }}
      >
        {info.map((problem, index) => (
          <HStack key={index} gap="34px" w={{ md: "520px" }}>
            <Image src={problem.img} boxSize="50px" alt={problem.title} />
            <Box>
              <Text textStyle="t2">{problem.title} {problem.description}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      <MotionStack
        alignSelf={{ base: "center", md: "end" }}
        display={{ base: "none", md: "flex" }}
        {...fadeInFrom("left")}
        flexDirection={{ base: "column", md: "row" }} // Вертикально на мобилке
        alignItems="center"
      >
        <VStack alignItems="center" justifyContent="center" >
          {info.slice(0, wrapId).map((problem, index) => (
            <HStack key={index} gap="34px" w={{ base: "100%", md: "520px" }}>
              <Image src={problem.img} boxSize="100px" alt={problem.title} />
              <Box>
                <Text textStyle="t2">{problem.title} {problem.description}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>

        <VStack alignSelf={{ base: "center", md: "end" }}>
          {info.slice(wrapId).map((problem, index) => (
            <HStack key={index} gap="34px" w={{ base: "100%", md: "520px" }}>
              <Image src={problem.img} boxSize="100px" alt={problem.title} />
              <Box>
                <Text textStyle="t2">{problem.title} {problem.description}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </MotionStack>
    </Stack>
  );
};
