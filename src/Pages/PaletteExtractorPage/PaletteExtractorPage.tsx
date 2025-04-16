import { LuImageUp } from "react-icons/lu";
import wave1 from "../../assets/Images/BackgroundVector/vector1.svg";
import wave2 from "../../assets/Images/BackgroundVector/vector2.svg";
import wave3 from "../../assets/Images/BackgroundVector/vector3.svg";
import "./PaletteExtractorPage.scss";
import { motion, Variants } from "motion/react";
import {
    basicOpacityAnimation,
    transformAmount,
} from "../../styling/constants";
import { SplitTextWrapper } from "../../styling/AnimationWrappers";

const PaletteExtractorPage = () => {
    const containerVariants: Variants = {
        initial: {},
        animate: { transition: { staggerChildren: 0.3 } },
    };

    const waveVariants: Variants = {
        initial: { opacity: 0, y: transformAmount.slideSmallBottom },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <>
            <section className="section-colorextract">
                <div className="title-container">
                    <SplitTextWrapper className="colorextract-title">
                        Color Palette Extractor
                    </SplitTextWrapper>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="colorextract-description"
                    >
                        Easily extract stunning color palettes from any image to
                        use in your projects
                    </motion.p>

                    <div className="upload-card">
                        <div className="upload-area">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <LuImageUp className="icon-img" />
                            </motion.div>

                            <motion.p
                                variants={basicOpacityAnimation}
                                initial="initial"
                                animate="animate"
                            >
                                Drag and Drop Your Image Here
                            </motion.p>
                            <motion.p
                                variants={basicOpacityAnimation}
                                initial="initial"
                                animate="animate"
                                className="select-image-text"
                            >
                                or <span>select an image</span> from your
                                computer
                            </motion.p>
                        </div>
                        <div className="palette-result">
                            <motion.p
                                variants={basicOpacityAnimation}
                                initial="initial"
                                animate="animate"
                            >
                                Palette
                            </motion.p>
                        </div>
                    </div>
                </div>

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
            </section>
        </>
    );
};

export default PaletteExtractorPage;
