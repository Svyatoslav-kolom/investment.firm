import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@chakra-ui/react";
import { CarouselArrowButton } from "../../Atoms/CarouselArrowButton";

interface PropertySliderProps {
  properties: Array<any>;
  CustomSlideComponent: React.FC<any>;
}

export const PropertySlider: React.FC<PropertySliderProps> = ({ properties, CustomSlideComponent }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 2 } },
      "(max-width: 480px)": { slides: { perView: 1 } },
    },
  });

  return (
    <Box width="100%" mx="auto" position="relative">
      <div ref={sliderRef} className="keen-slider">
        {properties.map((property, index) => (
          <div key={index} className="keen-slider__slide">
            <CustomSlideComponent {...property} />
          </div>
        ))}
      </div>

      <CarouselArrowButton direction="prev" onClick={() => instanceRef.current?.prev()} />
      <CarouselArrowButton direction="next" onClick={() => instanceRef.current?.next()} />
    </Box>
  );
};
