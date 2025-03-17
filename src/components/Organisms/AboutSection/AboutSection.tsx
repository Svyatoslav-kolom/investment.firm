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
        fontWeight={400}
        fontSize={32}
        lineHeight="45px"
        maxWidth="1000px"
        textTransform={"uppercase"}
      >
        {title}
      </MotionText>

      <MotionVStack
        {...fadeInFrom("right")}
        fontWeight={400}
        fontSize={18}
        lineHeight="24px"
        gap={7}
        maxWidth="500px"
      >
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </MotionVStack>
    </Stack>
  );
};
