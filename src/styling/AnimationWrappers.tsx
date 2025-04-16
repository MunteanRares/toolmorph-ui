import { motion } from "motion/react";
import { durationAmount } from "./constants";

export const MotionSlide = ({
    children,
    x,
    y,
    duration = durationAmount.transformQuick,
    className = "",
}: {
    children: React.ReactElement;
    x?: number;
    y?: number;
    duration?: number;
    className?: string;
}) => {
    const initial: { x?: number; y?: number; opacity: number } = { opacity: 0 };
    if (x !== undefined) initial.x = x;
    if (y !== undefined) initial.y = y;

    return (
        <motion.div
            initial={initial}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration, type: "spring" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const SplitTextWrapper = ({
    children,
    className = "",
}: {
    children: string;
    className?: string;
}) => {
    const words = children.split(" ");
    return (
        <span className={className}>
            {words.map((word, wordIndex) => (
                <span
                    style={{
                        display: "inline-block",
                        wordBreak: "break-word",
                    }}
                    className={className}
                    key={wordIndex}
                >
                    {word.split("").map((letter, indexLetter) => (
                        <motion.span
                            key={`${wordIndex}-${indexLetter}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: durationAmount.transformQuick,
                                type: "spring",
                                delay: wordIndex * 0.15 + indexLetter * 0.02,
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                    <span>{"\u00A0"}</span>
                </span>
            ))}
        </span>
    );
};
