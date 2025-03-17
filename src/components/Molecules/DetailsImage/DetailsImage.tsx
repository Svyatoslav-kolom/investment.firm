import React, { useState, useMemo } from "react";
import { Box, Image, Flex, VStack } from "@chakra-ui/react";
import { CarouselArrowButton } from "../../Atoms/CarouselArrowButton";

interface ImageGalleryProps {
  images: string[];
}

export const DetailsImage: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const previewOffset = 3;

  const visiblePreviews = useMemo(() => {
    return Array.from({ length: previewOffset }, (_, i) => (currentImage + i + 1) % images.length)
      .filter((index) => index !== currentImage);
  }, [currentImage, images]);

  const handleSelectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <VStack>
      <Box position="relative" w="100%">
        <Image
          src={images[currentImage]}
          alt="Main Image"
          borderRadius="lg"
          w="100%"
          h="auto"
        />

        {/* Стрелки внутри изображения */}
        <Box position="absolute" top="50%" left="10%" transform="translateY(-50%)">
          <CarouselArrowButton direction="prev" onClick={handlePrevImage} />
        </Box>
        <Box position="absolute" top="50%" right="10%" transform="translateY(-50%)">
          <CarouselArrowButton direction="next" onClick={handleNextImage} />
        </Box>
      </Box>

      {/* Превью изображений */}
      <Flex mt={4} justify="center" gap={2} w="100%">
        {visiblePreviews.map((index) => (
          <Box key={index} w="calc(33.33% - 8px)" h="auto">
            <Image
              src={images[index]}
              borderRadius="md"
              cursor="pointer"
              w="100%"
              h="auto"
              objectFit="cover"
              onClick={() => handleSelectImage(index)}
            />
          </Box>
        ))}
      </Flex>
    </VStack>
  );
};
