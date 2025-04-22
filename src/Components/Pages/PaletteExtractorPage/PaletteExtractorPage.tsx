import "./PaletteExtractorPage.scss";
import { AnimatePresence, motion, Variants } from "motion/react";
import { transformAmount } from "../../../styling/constants";
import { SplitTextWrapper } from "../../../styling/AnimationWrappers";
import BackgroundWave from "../../BackgroundWave/BackgroundWave";
import UploadImageArea from "../../UploadImageArea/UploadImageArea";
import useExtractPalette from "../../../hooks/useExtractPalette";
import BtnComponent from "../../BtnComponent/BtnComponent";
import {
    basicOpacityVariant,
    paletteColorsVariant,
    paletteColorVariant,
} from "../../../styling/animationVariants";
import Loader from "../../Loader/Loader";
import { useEffect, useRef, useState } from "react";

const PaletteExtractorPage = () => {
    const {
        data: paletteData,
        error: paletteError,
        isLoading: isLoadingPalette,
        fetchExtractPalette,
    } = useExtractPalette();

    const timeoutRef = useRef<number | null>(null);

    const [copiedColor, setcopiedColor] = useState<string | null>(null);

    const handleCopyHex = (colorHex: string) => {
        navigator.clipboard.writeText(colorHex);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setcopiedColor(colorHex);

        timeoutRef.current = window.setTimeout(() => {
            setcopiedColor(null);
        }, 1000);
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
                        <UploadImageArea fetchData={fetchExtractPalette} />
                        <div className="palette-result">
                            <div className="palette-top-div">
                                <motion.p
                                    className="palette-title"
                                    variants={basicOpacityVariant}
                                    initial="initial"
                                    animate="animate"
                                >
                                    Palette
                                </motion.p>

                                {isLoadingPalette ? (
                                    <Loader />
                                ) : (
                                    paletteData && (
                                        <motion.div
                                            className="palette-colors"
                                            variants={paletteColorsVariant}
                                            transition={{ delay: 0.4 }}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            {paletteData.palettes.map(
                                                (color, index) => (
                                                    <motion.div
                                                        key={color + index}
                                                    >
                                                        <motion.div
                                                            whileHover={{
                                                                scale: 1.1,
                                                            }}
                                                            variants={
                                                                paletteColorVariant
                                                            }
                                                            className="palette-color"
                                                            onClick={() =>
                                                                handleCopyHex(
                                                                    color
                                                                )
                                                            }
                                                            style={{
                                                                backgroundColor:
                                                                    color,
                                                                padding: "12px",
                                                            }}
                                                        />
                                                        <AnimatePresence>
                                                            <motion.p
                                                                key={color}
                                                                variants={
                                                                    basicOpacityVariant
                                                                }
                                                                transition={{
                                                                    delay: 0.4,
                                                                }}
                                                                className="color-hex"
                                                            >
                                                                {copiedColor ===
                                                                color
                                                                    ? "Copied!"
                                                                    : color}
                                                            </motion.p>
                                                        </AnimatePresence>
                                                    </motion.div>
                                                )
                                            )}
                                        </motion.div>
                                    )
                                )}
                            </div>

                            <div className="palette-bottom-div">
                                <BtnComponent btnType="primary">
                                    Retake
                                </BtnComponent>
                            </div>
                        </div>
                    </div>
                </div>

                <BackgroundWave />
            </section>
        </>
    );
};

export default PaletteExtractorPage;
