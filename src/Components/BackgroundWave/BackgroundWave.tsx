import { motion, Variants } from "motion/react";
import wave1 from "../../assets/Images/BackgroundVector/vector1.svg";
import wave2 from "../../assets/Images/BackgroundVector/vector2.svg";
import wave3 from "../../assets/Images/BackgroundVector/vector3.svg";
import { transformAmount } from "../../styling/constants";
import "./BackgroundWaves.scss";

const BackgroundWave = () => {
    const containerVariants: Variants = {
        initial: {},
        animate: { transition: { staggerChildren: 0.3 } },
    };

    const waveVariants: Variants = {
        initial: { opacity: 0, y: transformAmount.slideSmallBottom },
        animate: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="background-container"
        >
            <motion.img
                className="wave wave1"
                src={wave1}
                alt=""
                variants={waveVariants}
            />
            <motion.img
                className="wave wave2"
                src={wave2}
                alt=""
                variants={waveVariants}
            />
            <motion.img
                className="wave wave3"
                src={wave3}
                alt=""
                variants={waveVariants}
            />
        </motion.div>
    );
};

export default BackgroundWave;
