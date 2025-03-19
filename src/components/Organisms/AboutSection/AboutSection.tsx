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
    <Stack direction="row" gap={7} align="start" overflow="hidden">
      <MotionText
        {...fadeInFrom("left")}
        textStyle="h2"
        width="65%"
        textTransform={"uppercase"}
      >
        {title}
      </MotionText>

      <MotionVStack
        {...fadeInFrom("right")}
        textStyle="t2"
        gap={7}
        width="35%"
      >
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </MotionVStack>
    </Stack>
  );
};
