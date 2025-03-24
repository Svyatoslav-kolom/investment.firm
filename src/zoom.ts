import { useBreakpointValue } from "@chakra-ui/react";

const useZoom = () => {
  const zoom = useBreakpointValue({
    base: 1,
    sm: 0.85,
    md: 0.9,
    lg: 0.6,
    xl: 0.8,
    "2xl": 1,
  });

  return zoom;
};

export default useZoom;
