import { Box, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { CommunityItem } from "../../Molecules/CommunityItem";
import { fadeInFrom, withMotion } from "../../../utils/animations";

interface CommunityCatalogProps {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const MotionBox = withMotion(Box);

export const CommunityCatalog: FC<CommunityCatalogProps> = ({ items }) => (
  <Grid
    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
    rowGap="60px"
    columnGap="30px"
  >
    {items.map((item, index) => {
      const isEvenRow = Math.floor(index / 3) % 2 === 0;
      
      return (
        <MotionBox key={index}  {...fadeInFrom(isEvenRow ? "left" : "right")}>
          <CommunityItem  {...item} />
        </MotionBox>
      )
    })}
  </Grid>
);
