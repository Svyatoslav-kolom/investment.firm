import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { CarouselArrowButton } from "../../Atoms/CarouselArrowButton";

interface PropertySliderProps {
  properties: Array<any>;
  CustomSlideComponent: React.FC<any>;
}

export const PropertySlider: React.FC<PropertySliderProps> = ({ properties, CustomSlideComponent }) => {
  const slideWidth = useBreakpointValue({ base: "90%", sm: "85%", md: "80%", lg: "32%", xl: "32%", "2xl": "32%" });
  const slideSpacing = useBreakpointValue({ base: 5, sm: 5, md: 8, lg: 10, xl: 12, "2xl": 14 });

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: slideSpacing,
    },
  });


  const zoom = useBreakpointValue({
    base: 0.8,
    sm: 0.85,
    md: 0.9,
    lg: 0.6,
    xl: 0.7,
    "2xl": 1,
  });

  return (
    <Box width="100%" mx="auto" position="relative" zoom={zoom}>
      <div ref={sliderRef} className="keen-slider">
        {properties.map((property, index) => (
          <div key={index} className="keen-slider__slide" style={{ width: slideWidth }}>
            <CustomSlideComponent {...property} />
          </div>
        ))}
      </div>

      <CarouselArrowButton direction="prev" onClick={() => instanceRef.current?.prev()} />
      <CarouselArrowButton direction="next" onClick={() => instanceRef.current?.next()} />
    </Box>
  );
};
