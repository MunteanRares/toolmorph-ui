import "./PaletteExtractorPage.scss";
import { motion } from "motion/react";
import { basicOpacityAnimation } from "../../../styling/constants";
import { SplitTextWrapper } from "../../../styling/AnimationWrappers";
import BackgroundWave from "../../BackgroundWave/BackgroundWave";
import UploadImageArea from "../../UploadImageArea/UploadImageArea";

const PaletteExtractorPage = () => {
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
                        <UploadImageArea />
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

                <BackgroundWave />
            </section>
        </>
    );
};

export default PaletteExtractorPage;
