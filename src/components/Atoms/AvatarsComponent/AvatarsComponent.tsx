import { Avatar } from "@chakra-ui/react";

const avatars = [
  { src: "/avatars/1.png" },
  { src: "/avatars/2.png" },
  { src: "/avatars/3.png" },
  { src: "/avatars/4.png" },
];

export const AvatarGroup = () => (
    avatars.map(({ src }) => (
      <Avatar.Root size="2xl">
        <Avatar.Image key={src} src={src} />
      </Avatar.Root>
    ))
);
