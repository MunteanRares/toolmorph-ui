import ButtonComponent from "../../Components/BtnComponent/BtnComponent.tsx";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.scss";
import layeredWaves from "../../assets/Images/layered-waves-haikei (1).webp";
import { faMendeley } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <section className="home-section">
                <div className="home-contents-div">
                    <div className="home-title-div">
                        <div className="accent-div">
                            <FontAwesomeIcon
                                className="accent-text"
                                icon={faMendeley}
                            />
                            <p className="accent-text">Morph your flow</p>
                        </div>
                        <h1 className="home-header">
                            Effortless Tools for Inspired Minds
                        </h1>
                        <p className="home-description">
                            Fast, powerful tools for color picking, background
                            removal, keyword generation, and more - all in one
                            place with{" "}
                            <span className="accent-text">ToolMorph</span>.
                        </p>
                    </div>
                    <div className="home-btns-div">
                        <ButtonComponent btnType="btn-primary">
                            Get Started For Free
                        </ButtonComponent>

                        <ButtonComponent
                            icon={faGithub}
                            btnType="btn-secondary"
                        >
                            GitHub Repository
                        </ButtonComponent>
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
