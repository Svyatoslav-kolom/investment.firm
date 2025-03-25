import { Heading, VStack, Grid, GridItem, Box } from "@chakra-ui/react";
import { projects } from "../../../ConstInfo/Projects";
import { ProjectComponent } from "../../Molecules/ProjectComponent";
import { fadeInFrom, withMotion } from "../../../utils/animations";

const MotionGridItem = withMotion(GridItem);
const MotionBox = withMotion(Box);

export const Projects = () => {
  return (
    <VStack textAlign="center" py={10} width="100%" align="center">
      <Heading textStyle="h1" alignSelf="start" pb={11}>
        проекты
      </Heading>

      <VStack
        display={{ base: "flex", md: "none" }} // Show VStack only on mobile (base, i.e., small screens)
        gap={6}
        width="100%"
        align="center"
      >
        {projects.slice(0, 7).map((project, index) => {
          const isEvenRow = index >= 3;
          const direction = isEvenRow ? "left" : "right"; // Determine animation direction

          return (
            <MotionBox
              key={index}
              {...fadeInFrom(direction)} // Apply fadeInFrom animation
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              w={"100%"}
            >
              <ProjectComponent project={project} />
            </MotionBox>
          );
        })}

        <MotionBox
          {...fadeInFrom("right")} // Apply fadeInFrom animation
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // Adjust delay if needed
          w={"100%"}
        >
          <ProjectComponent
            project={{
              ...projects[6],
              image: "/images/ProjectsImg/wide-project-mobile.png"
            }}
          />
        </MotionBox>
      </VStack>


      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // Grid layout for larger screens
        gap={6}
        w="100%"
        display={{ base: "none", md: "grid" }} // Hide Grid on mobile, show on larger screens
      >
        {projects.slice(0, 6).map((project, index) => {
          const isEvenRow = index >= 3;
          const direction = isEvenRow ? "left" : "right"; // Determine animation direction

          return (
            <MotionGridItem
              key={index}
              {...fadeInFrom(direction)} // Apply fadeInFrom animation
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <ProjectComponent project={project} />
            </MotionGridItem>
          );
        })}

        <MotionGridItem
          colSpan={1}
          {...fadeInFrom("right")} // Assuming you want a 'bottom' animation for the last item
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <ProjectComponent project={projects[6]} />
        </MotionGridItem>

        <MotionGridItem
          colSpan={2}
          {...fadeInFrom("right")} // Assuming you want a 'bottom' animation for the last item
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <ProjectComponent project={projects[7]} aspectRatio={1058 / 358} />
        </MotionGridItem>
      </Grid>
    </VStack>
  );
};
