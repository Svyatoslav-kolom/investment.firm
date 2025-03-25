import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { withMotion, fadeInFrom } from "../../../utils/animations";
import firstStep from "../../../assets/HowToInvest/1.svg";
import secondStep from "../../../assets/HowToInvest/2.svg";
import thirdStep from "../../../assets/HowToInvest/3.svg";
import thirdStepMobile from "../../../assets/HowToInvest/3-mobile.svg";
import phoneMockup from "../../../assets/HowToInvest/phone.svg";

const MotionBox = withMotion(Box);

export const HowToInvest = () => {
  const thirdStepSrc = useBreakpointValue({ base: thirdStepMobile, md: thirdStep });

  return (
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
            <Image src={thirdStepSrc} userSelect="none" pointerEvents="none" draggable="false" />
          </MotionBox>

          <MotionBox
            {...fadeInFrom("right")}
            transition={{ duration: 0.8, delay: 1.2 }}
            position="absolute"
            top={{ base: "40%", md: "5%" }}
            left={{ base: 0, md: "50%" }}

          >
            <Image
              src={phoneMockup}
              userSelect="none"
              pointerEvents="none"
              draggable="false"
              w={{base:"265px", md:"100%"}}
            />
          </MotionBox>
        </Flex>
      </Flex>
    </Box>
  );
}