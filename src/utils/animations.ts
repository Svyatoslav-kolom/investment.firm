import { motion } from "framer-motion";
import { ComponentType } from "react";

export const fadeInFrom = (direction: "left" | "right") => ({
  initial: { x: direction === "left" ? -100 : 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
});

export const withMotion = <P extends object>(Component: ComponentType<P>) =>
  motion(Component);
