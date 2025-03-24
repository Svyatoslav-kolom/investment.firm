import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { CarouselArrowButton } from "../../Atoms/CarouselArrowButton";
import { useState } from "react";

interface PropertySliderProps {
  properties: Array<any>;
  CustomSlideComponent: React.FC<any>;
}

export const PropertySlider: React.FC<PropertySliderProps> = ({ properties, CustomSlideComponent }) => {
  const slideWidth = useBreakpointValue({ base: "90%", sm: "85%", md: "80%", lg: "32%", xl: "32%", "2xl": "32%" });
  const slideSpacing = useBreakpointValue({ base: 5, sm: 5, md: 8, lg: 10, xl: 12, "2xl": 14 });
  const slidesPerView = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 3, "2xl": 3 });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: slidesPerView,
      spacing: slideSpacing,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
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

      <Box display={{ base: "none", md: "block" }}>
        <CarouselArrowButton direction="prev" onClick={() => instanceRef.current?.prev()} />
        <CarouselArrowButton direction="next" onClick={() => instanceRef.current?.next()} />
      </Box>

      {isMobile && (
        <Box display="flex" justifyContent="center" mt={3}>
          {properties.map((_, idx) => (
            <Box
              key={idx}
              w={2}
              h={2}
              mx={1}
              borderRadius="50%"
              bg={currentSlide === idx ? "blue.500" : "gray.300"}
              transition="background 0.3s"
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
