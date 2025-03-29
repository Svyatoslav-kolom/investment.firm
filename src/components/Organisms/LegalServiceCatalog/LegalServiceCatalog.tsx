import { Box, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { LegalServiceItem } from "../../Molecules/LegalServiceItem";
import { ServiceItem } from "../../../ConstInfo/LegalServicesServices";
import { fadeInFrom, withMotion } from "../../../utils/animations";

interface Props {
  services: ServiceItem[];
}

const MotionBox = withMotion(Box);

export const LegalServiceCatalog: FC<Props> = ({ services }) => (
  <Grid
    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
    columnGap="30px"
    rowGap="70px"
  >
    {services.map((service, index) => {
      const isEvenRow = Math.floor(index / 3) % 2 === 0;

      return (
        <MotionBox key={index}  {...fadeInFrom(isEvenRow ? "left" : "right")} w={{ base: "350px", md: "100%" }}>
          <LegalServiceItem  service={service} />
        </MotionBox>
      )
    })}
  </Grid>
);
