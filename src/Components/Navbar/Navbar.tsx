import "./Navbar.scss";
import logo from "../../assets/Images/HardLogo.png";
import CustomLink from "../CustomLink/CustomLink";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo-div">
                    <img src={logo} className="logo-image" />
                    <h2 className="logo-name">ToolMorph</h2>
                </div>

                <div className="links-div">
                    <div className="default-links">
                        <CustomLink href="#">GitHub</CustomLink>
                        <CustomLink href="#">Color Picker</CustomLink>
                    </div>

                    <CustomLink
                        icon={faChevronRight}
                        iconPosition="after"
                        href="#"
                    >
                        Get Started
                    </CustomLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
