import "./Navbar.scss";
import logo from "../../assets/Images/HardLogo.png";
import CustomLink from "../CustomLink/CustomLink";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { durationAmount, transformAmount } from "../../styling/constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <>
            <nav className="navbar">
                <motion.div
                    onClick={handleGoHome}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="logo-div"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: durationAmount.transformLong,
                            type: "spring",
                            delay: 0.4,
                        }}
                    >
                        <img src={logo} className="logo-image" />
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: transformAmount.slideSmallLeft,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: durationAmount.transformLong,
                            type: "spring",
                        }}
                    >
                        <h2 className="logo-name">ToolMorph</h2>
                    </motion.div>
                </motion.div>

                <div className="links-div">
                    <div className="default-links">
                        <CustomLink navigateTo="/">Home</CustomLink>
                        <CustomLink
                            isExternalLink={true}
                            navigateTo="https://github.com/MunteanRares/ToolMorphUI"
                        >
                            GitHub
                        </CustomLink>
                        <CustomLink navigateTo="/colorPicker">
                            Color Picker
                        </CustomLink>
                    </div>

                    <CustomLink
                        navigateTo="/"
                        filled="accent"
                        icon={faChevronRight}
                        iconPosition="after"
                    >
                        Get Started
                    </CustomLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
