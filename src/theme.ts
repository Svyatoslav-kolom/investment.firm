"use client";

import { createSystem, defaultConfig, defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  h1: {
    description: "Заголовок первого уровня",
    value: {
      fontSize: { base: "24px", md: "26px", lg: "28px", xl: "30px", "2xl": "38px" },
      fontWeight: "400",
      lineHeight: "140%",
      textTransform: "uppercase",
    },
  },
  h2: {
    description: "Заголовок второго уровня",
    value: {
      fontSize: { base: "22px", md: "24px", lg: "26px", xl: "28px", "2xl": "32px" },
      fontWeight: "400",
      lineHeight: "140%",
    },
  },
  h3: {
    description: "Заголовок третьего уровня",
    value: {
      fontSize: { base: "18px", md: "20px", lg: "22px", xl: "24px", "2xl": "28px" },
      fontWeight: "400",
      lineHeight: "140%",
    },
  },
  t1: {
    description: "Текст первого уровня",
    value: {
      fontSize: { base: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "22px" },
      fontWeight: "400",
      lineHeight: "140%",
    },
  },
  t2: {
    description: "Текст второго уровня",
    value: {
      fontSize: { base: "14px", md: "12px", lg: "14px", xl: "16px", "2xl": "18px" },
      fontWeight: "400",
      lineHeight: "140%",
      letterSpacing: "2%",
    },
  },
  t3: {
    description: "Текст третьего уровня",
    value: {
      fontSize: { base: "10px", md: "8px", lg: "10px", xl: "12px", "2xl": "14px" },
      fontWeight: "400",
      lineHeight: "110%",
    },
  },
});


export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Gilroy', sans-serif" },
      },
    },
    textStyles,
  },
});

