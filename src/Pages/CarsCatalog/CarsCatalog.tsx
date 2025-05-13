import {
  Box,
  Heading,
  SimpleGrid,
  HStack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useZoom from "../../zoom";
import { CarCatalogCard } from "../../components/Molecules/CarCatalogCard";
// import { MobileFilter } from "../../components/Molecules/MobileFilter";
// import { DesktopFilter } from "../../components/Molecules/DesktopFilter";
// import FilterIcon from "../../assets/icons/filterIcon.svg";
import { fetchInvestCars } from "../../api/cars";
import { CarType } from "../../Types/CarType";

export const CarsCatalog = () => {
  const zoom = useZoom();
  const adjustedZoom = zoom ? zoom - 0.1 : 1;

  const [cars, setCars] = useState<CarType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      setIsLoading(true);
      const fetchedCars = await fetchInvestCars();
      setCars(fetchedCars);
      setIsLoading(false);
    };

    loadCars();
  }, []);

  return (
    <Box zoom={adjustedZoom} position="relative">
      <HStack mb={{ base: "30px", md: "80px" }} justifyContent="space-between">
        <Heading textStyle="h1">наш автопарк</Heading>
        {/*
        <Image
          src={FilterIcon}
          display={{ base: "block", md: "none" }}
          onClick={openMobileFilter}
          cursor="pointer"
          alt="Open Filter"
        />
        */}
      </HStack>

      {/* <MobileFilter isOpen={isMobileFilterOpen} onClose={closeMobileFilter} />
      <Box display={{ base: "none", md: "flex" }} mb="40px">
        <DesktopFilter />
      </Box> */}

      {isLoading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="30px" w="100%">
          {cars.map((car) => (
            <CarCatalogCard
              key={car.id}
              id={car.id}
              title={`${car.mark} ${car.model}`}
              price={car.price}
              imageUrl={car.image}
              horsePower={car.horsepower}
              volume={car.motor}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
