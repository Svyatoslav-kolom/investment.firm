import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export const CommunityItem: FC<Props> = ({ title, description, icon }) => (
  <Box
    bg="white"
    borderTopRadius={"50px"}
    borderBottomRadius={"40px"}
    boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
    textAlign="center"
    mt={"60px"}
    pb={"60px"}
    height="85%"
  >
    <Flex
      bg="#0048B4"
      direction="column"
      color="white"
      justify="center"
      align="center"
      borderRadius="40px"
      height={"170px"}
      px={"20px"}
      pt={"80px"}
      pb="25px"
      position={"relative"}
      letterSpacing="1%"
    >
      <Flex
        bg="#0048B4"
        color="white"
        justify="center"
        align="center"
        borderRadius="full"
        boxSize={"150px"}
        position={"absolute"}
        top={"-50%"}
      >
        <Flex
          bg="#FFF"
          justify="center"
          align="center"
          borderRadius="full"
          p={4}
          boxSize={"82%"}
        >
          <Image src={icon} alt="icon" boxSize="75px" />
        </Flex>
      </Flex>

      <Text
        fontSize={28}
        fontWeight={200}
        color="FFF"
        textAlign="left"
        alignSelf="start"
      >
        {title}
      </Text>
    </Flex>

    <Text
      fontSize={18}
      fontWeight={400}
      lineHeight="140%"
      color="FFF"
      textAlign="left"
      mt={"35px"}
      mx="30px"
      letterSpacing="2%"
    >
      {description}
    </Text>
  </Box>
);
