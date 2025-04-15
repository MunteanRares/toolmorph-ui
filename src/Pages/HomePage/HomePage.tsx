import ButtonComponent from "../../Components/BtnComponent/BtnComponent.tsx";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./HomePage.scss";
import layeredWaves from "../../assets/Images/layered-waves-haikei (1).webp";
import { faMendeley } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { durationAmount, transformAmount } from "../../styling/constants.ts";
import {
    MotionSlide,
    SplitTextWrapper,
} from "../../styling/AnimationWrappers.tsx";

const HomePage = () => {
    return (
        <>
            <section className="home-section">
                <div className="home-contents-div">
                    <div className="home-title-div">
                        <div className="accent-div">
                            <MotionSlide
                                x={transformAmount.slideSmallLeft}
                                duration={durationAmount.transformLong}
                            >
                                <FontAwesomeIcon
                                    className="accent-text"
                                    icon={faMendeley}
                                />
                            </MotionSlide>

                            <MotionSlide
                                x={transformAmount.slideMediumLeft}
                                duration={durationAmount.transformLong}
                                className="accent-text"
                            >
                                <p>Morph your flow</p>
                            </MotionSlide>
                        </div>

                        <SplitTextWrapper className="home-header">
                            Effortless Tools for Inspired Minds
                        </SplitTextWrapper>

                        <MotionSlide
                            duration={durationAmount.transformLong}
                            y={transformAmount.slideSmallBottom}
                        >
                            <div className="home-description">
                                Fast, powerful tools for color picking,
                                background removal, keyword generation, and more
                                - all in one place with{" "}
                                <span className="accent-text">ToolMorph</span>.
                            </div>
                        </MotionSlide>
                    </div>
                    <div className="home-btns-div">
                        <MotionSlide
                            duration={durationAmount.transformQuick}
                            x={transformAmount.slideSmallLeft}
                        >
                            <ButtonComponent btnType="primary">
                                Get Started For Free
                            </ButtonComponent>
                        </MotionSlide>

                        <MotionSlide
                            duration={durationAmount.transformLong}
                            x={transformAmount.slideMediumLeft}
                        >
                            <ButtonComponent icon={faGithub} btnType="accent">
                                GitHub Repository
                            </ButtonComponent>
                        </MotionSlide>
                    </div>
                </div>

                <img
                    className="layered-waves-img"
                    src={layeredWaves}
                    alt="layered-waves"
                />
            </section>
        </>
    );
};

export default HomePage;
