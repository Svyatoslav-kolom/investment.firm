import { Heading, VStack, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projects } from "../../../ConstInfo/Projects";
import { ProjectComponent } from "../../Molecules/ProjectComponent";

const MotionGridItem = motion(GridItem);

export const Projects = () => {
  return (
    <VStack textAlign="center" py={10} w="100%" align="center">
      <Heading
        textTransform="uppercase"
        fontWeight={400}
        fontSize="48px"
        alignSelf="start"
        pb={11}
        ml={10}
      >
        проекты
      </Heading>

      <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6} w="100%">
        {projects.slice(0, 6).map((project, index) => {
          const isEvenRow = index >= 3;
          const animationDirection = isEvenRow ? -100 : 100;
          return (
            <MotionGridItem
              key={index}
              initial={{ x: animationDirection, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectComponent project={project} />
            </MotionGridItem>
          );
        })}

        <MotionGridItem
          colSpan={3}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectComponent project={projects[6]} aspectRatio={1598 / 358} />
        </MotionGridItem>
      </Grid>
    </VStack>
  );
};
