import { HStack, Text, Avatar } from "@chakra-ui/react";

export const ClientComponent = () => {
  const avatars = [
    { src: "/avatars/1.svg" },
    { src: "/avatars/2.svg" },
    { src: "/avatars/3.svg" },
    { src: "/avatars/4.svg" },
  ];

  return (
    <HStack
      borderRadius="full"
      background="linear-gradient(180deg, rgba(255,255,255,0.2), rgba(0,0,0,0.1))"
      backdropFilter="blur(10px)"
      justifyContent="space-between"
      maxW={{base:"1000px", md:"390px", "2xl":"480px"}}
      w={"100%"}
      px={10}
      py={3}
      color="black"
    >
      <HStack >
        {avatars.map(({ src }, index) => (
          <Avatar.Root
            key={src}
            ml={index === 0 ? 0 : -5}
            zIndex={avatars.length + index}
            border="1px solid #F3F3F3"
            size={{ base: "sm", md: "sm", lg: "sm", xl: "md", "2xl": "xl" }}
          >
            <Avatar.Image src={src}/>
          </Avatar.Root>
        ))}
      </HStack>

      {/* Текстовый блок */}
      <HStack gap={4}>
        <Text textStyle="t3">наши клиенты</Text>
        <Text textStyle="h1" fontWeight={600}>50K +</Text>
      </HStack>
    </HStack>
  );
};
