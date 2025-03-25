import { Stack, Text, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionText = withMotion(Text);
const MotionVStack = withMotion(VStack);

interface AboutProps {
  title: string;
  content: ReactNode[];  // изменен тип на ReactNode[]
}

export const AboutSection: FC<AboutProps> = ({ title, content }) => {
  return (
    <Stack direction={{base: "column", md:"row"}} gap={7} align="start" w={"100%"}>
      <MotionText
        {...fadeInFrom("left")}
        textStyle="h2"
        width={{base:"100%", md: "65%"}}
        textTransform={"uppercase"}
      >
        {title}
      </MotionText>

      <MotionVStack
        {...fadeInFrom("left")}
        textStyle="t1"
        gap={7}
        width={{base:"100%", md: "35%"}}
      >
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </MotionVStack>
    </Stack>
  );
};
