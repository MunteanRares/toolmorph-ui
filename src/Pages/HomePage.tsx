import ButtonComponent from "../Components/BtnComponent/BtnComponent";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <ButtonComponent btnType="btn-primary">
                Get Started For Free
            </ButtonComponent>

            <ButtonComponent icon={faGithub} btnType="btn-secondary">
                GitHub Repository
            </ButtonComponent>
        </>
    );
};

export default HomePage;
