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
      w="500px"
      px={10}
      h="70px"
    >
      <HStack>
        {avatars.map(({ src }, index) => (
          <Avatar.Root
            key={src}
            ml={index === 0 ? 0 : -5}
            zIndex={avatars.length + index}
            border="1px solid #F3F3F3"
          >
            <Avatar.Image src={src} />
            <Avatar.Fallback>?</Avatar.Fallback>
          </Avatar.Root>
        ))}
      </HStack>

      {/* Текстовый блок */}
      <HStack gap={4}>
        <Text fontSize="18px" fontWeight={400}>наши клиенты</Text>
        <Text fontSize="38px" fontWeight={600}>50K +</Text>
      </HStack>
    </HStack>
  );
};
