import { forwardRef } from "react";
import { IconButton, Image } from "@chakra-ui/react";
import rightArrow from "../../../assets/icons/right-arrow.svg";

interface CarouselArrowButtonProps {
  direction: "next" | "prev";
  onClick?: () => void;
}

// Используем forwardRef для корректной работы с Swiper
export const CarouselArrowButton = forwardRef<HTMLButtonElement, CarouselArrowButtonProps>(
  ({ direction, onClick }, ref) => {
    return (
      <IconButton
        ref={ref}
        onClick={onClick}
        aria-label={direction === "next" ? "Next" : "Previous"}
        position="absolute"
        {...(direction === "next" ? { right: {base:"-20px", md:"-70px"} } : { left: {base:"-20px", md:"-70px"}  })}
        top="50%"
        transform="translateY(-50%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ base: "40px", md: "60px" }}
        height={{ base: "40px", md: "60px" }}
        borderRadius="50%"
        backgroundColor="#F9FAFF80"
        boxShadow="md"
        alignSelf="end"
        className={`carousel-arrow-button ${direction}-arrow`}
        _hover={{ cursor: "pointer" }}
      >
        <Image
          src={rightArrow}
          width={{ base: "15px", md: "35px" }}
          height={{ base: "15px", md: "35px" }}
          transform={direction === "prev" ? "scaleX(-1)" : "none"}
        />
      </IconButton>
    );
  }
);

CarouselArrowButton.displayName = "CarouselArrowButton";
