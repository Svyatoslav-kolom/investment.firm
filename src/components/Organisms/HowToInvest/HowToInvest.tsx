import { Box, Flex, Image } from "@chakra-ui/react";
import { withMotion, fadeInFrom } from "../../../utils/animations";
import firstStep from "../../../assets/HowToInvest/1.svg";
import secondStep from "../../../assets/HowToInvest/2.svg";
import thirdStep from "../../../assets/HowToInvest/3.svg";
import phoneMockup from "../../../assets/HowToInvest/phone.svg";
import { BlueButton } from "../../Atoms/BlueButton";

const MotionBox = withMotion(Box);

export const HowToInvest = () => (
  <Box p="20px">
    <Flex gap="30px" align="center" flexWrap="wrap">
      <Flex direction="column" gap="20px" flex="1 1 300px">
        {[firstStep, secondStep].map((step, index) => (
          <MotionBox
            key={index}
            {...fadeInFrom("left")}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <Image src={step} userSelect="none" pointerEvents="none" draggable="false" />
          </MotionBox>
        ))}
      </Flex>

      <Flex flex="2 1 600px" justify="center" position="relative">
        <MotionBox
          {...fadeInFrom("right")}
          transition={{ duration: 0.8, delay: 0.6 }}
          position="relative"
        >
          <Image src={thirdStep} userSelect="none" pointerEvents="none" draggable="false" />
          <Box position="absolute" top="50%" left="27%" transform="translate(-50%, -50%)" width="50%">
            <BlueButton title="Инвестировать" variant="light" />
          </Box>
        </MotionBox>

        <MotionBox
          {...fadeInFrom("right")}
          transition={{ duration: 0.8, delay: 1.2 }}
          position="absolute"
          top="5%"
          left="50%"
        >
          <Image src={phoneMockup} userSelect="none" pointerEvents="none" draggable="false" />
        </MotionBox>
      </Flex>
    </Flex>
  </Box>
);
