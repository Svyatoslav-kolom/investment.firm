import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import { FC } from "react";
import { BlueRectangleType } from "../../../Types/BlueRectangleType";

export const BlueRectangle: FC<BlueRectangleType> = ({
  number,
  img,
  title,
  description,
}) => (
  <VStack
    w="510px"
    h="350px"
    bg="#DDEAFF"
    borderRadius="3xl"
    p="40px"
    gap="50px"
    color="#0D0D0D"
  >
    <HStack height="100px" justifyContent="space-between" w="100%">
      <Text fontWeight="100" fontSize={150} lineHeight="210px">
        {number}
      </Text>
      <Image src={img} />
    </HStack>

    <VStack gap="10px">
      <Text fontWeight={600} fontSize={22} lineHeight="24px" w="100%">
        {title}
      </Text>
      <Text fontWeight={400} fontSize={18} lineHeight="21px">
        {description}
      </Text>
    </VStack>
  </VStack>
);
