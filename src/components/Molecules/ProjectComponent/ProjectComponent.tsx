import { Box, VStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FC } from "react";
import type { Project } from "../../../Types/Project";
import arrowRight from "../../../assets/icons/right-arrow.svg";

interface Props {
  project: Project;
  aspectRatio?: number; // Добавляем пропс для настройки пропорций
}

export const ProjectComponent: FC<Props> = ({ project, aspectRatio = 514 / 358 }) => (
  <Box w="100%">
    <Box
      width="100%"
      p={10}
      borderRadius="40px"
      textAlign="center"
      bgImage={`url(${project.image})`}
      bgSize="cover"
      bgPos="center"
      aspectRatio={aspectRatio} // Используем переданный aspectRatio или дефолтное значение
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.025)" }}
    >
      <Link to={project.link} style={{ textDecoration: "none", color: "inherit" }}>
        <VStack height="100%" justify="space-between">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="60px"
            h="60px"
            borderRadius="full"
            bg="#F3F3F3"
            boxShadow="md"
            alignSelf="end"
            mt="auto"
          >
            <Image src={arrowRight} w="40px" h="40px"/>
          </Box>
        </VStack>
      </Link>
    </Box>

    <Text
      fontSize="18px"
      fontWeight={600}
      color="#0048B4"
      textTransform="uppercase"
      mt={2}
    >
      {project.title}
    </Text>
  </Box>
);
