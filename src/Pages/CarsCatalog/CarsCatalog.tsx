// CarsCatalog.js
import { Box, Heading, SimpleGrid, Image, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { carList } from "./carList";
import useZoom from "../../zoom";
import { CarCatalogCard } from "../../components/Molecules/CarCatalogCard";
import { MobileFilter } from "../../components/Molecules/MobileFilter";
import { DesktopFilter } from "../../components/Molecules/DesktopFilter";
import FilterIcon from "../../assets/icons/filterIcon.svg";

export const CarsCatalog = () => {
  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;

  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);

  const openMobileFilter = () => setMobileFilterOpen(true);
  const closeMobileFilter = () => setMobileFilterOpen(false);

  return (
    <Box zoom={adjustedZoom} position="relative">
      <HStack
        mb={{ base: "30px", md: "80px" }}
        justifyContent="space-between"
      >
        <Heading textStyle="h1">наш автопарк</Heading>

        <Image
          src={FilterIcon}
          display={{ base: "block", md: "none" }}
          onClick={openMobileFilter}
          cursor="pointer"
          alt="Open Filter"
        />

      </HStack>
      
      <MobileFilter isOpen={isMobileFilterOpen} onClose={closeMobileFilter} />

      <Box display={{ base: "none", md: "flex" }} mb="40px">
        <DesktopFilter />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="30px" w="100%">
        {carList.map((car, idx) => (
          <CarCatalogCard
            key={idx}
            title={car.title}
            price={car.price}
            imageUrl={car.imageUrl}
            horsePower={car.horsePower}
            volume={car.volume}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};