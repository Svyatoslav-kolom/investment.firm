import React, { useState } from "react";
import { Box, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import { CarouselArrowButton } from "../../Atoms/CarouselArrowButton";

interface ImageGalleryProps {
  images: string[];
}

export const DetailsImage: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleNextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <VStack w="100%">
      <Box position="relative" w="100%">
        <Image src={images[currentImage]} alt="Main Image" borderRadius="lg" w="100%" h="auto" />

        <Box position="absolute" top="50%" left="10%" transform="translateY(-50%)">
          <CarouselArrowButton direction="prev" onClick={handlePrevImage} />
        </Box>
        <Box position="absolute" top="50%" right="10%" transform="translateY(-50%)">
          <CarouselArrowButton direction="next" onClick={handleNextImage} />
        </Box>
      </Box>

      {!isMobile && (
        <Box mt={4} display="flex" justifyContent="center" gap={2} w="100%">
          {images.map((image, index) => (
            index !== currentImage && ( // Исключаем текущее изображение
              <Image
                key={index}
                src={image}
                borderRadius="md"
                cursor="pointer"
                w="calc(33.33% - 8px)"
                objectFit="cover"
                onClick={() => setCurrentImage(index)}
                _hover={{ opacity: 1 }}
              />
            )
          ))}
        </Box>
      )}
    </VStack>
  );
};
