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
            w={{ base: "22px", md: "26px", lg: "30px", xl: "40px", "2xl": "60px" }}
            h={{ base: "22px", md: "26px", lg: "30px", xl: "40px", "2xl": "60px" }}
            borderRadius="full"
            bg="#F3F3F3"
            boxShadow="md"
            alignSelf="end"
            mt="auto"
          >
            <Image src={arrowRight} boxSize={{ base: "14px", md: "16px", lg: "20px", xl: "30px", "2xl": "40px" }}/>
          </Box>
        </VStack>
      </Link>
    </Box>

    <Text
      textStyle="t2"
      fontWeight={600}
      color="#0048B4"
      textTransform="uppercase"
      mt={2}
    >
      {project.title}
    </Text>
  </Box>
);
