import ButtonComponent from "../Components/BtnComponent/BtnComponent";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
    return (
        <>
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
