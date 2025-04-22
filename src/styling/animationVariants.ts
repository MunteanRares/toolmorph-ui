import { Variants } from "motion/react";
import { transformAmount } from "./constants";

export const basicOpacityVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

export const paletteColorsVariant: Variants = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.05, type: "spring", delay: 0.2 },
    },
};

export const paletteColorVariant: Variants = {
    initial: { y: transformAmount.slideSmallBottom, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
};
