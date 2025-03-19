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
    gap="20px"
    color="#0D0D0D"
  >
    <HStack height="special1" justifyContent="space-between" w="100%">
      <Text
        fontWeight={100}
        fontSize={150}
        lineHeight="150px"
        textTransform={"uppercase"}
        color={"#0048B4"}
      >
        {number}
      </Text>
      <Image src={img} />
    </HStack>

    <VStack gap="10px" justifySelf="start">
      <Text fontWeight={600} fontSize="22px" lineHeight="110%" w="100%" letterSpacing="1%">
        {title}
      </Text>
      <Text fontWeight={400} fontSize="18px" lineHeight="21px" >
        {description}
      </Text>
    </VStack>
  </VStack>
);
