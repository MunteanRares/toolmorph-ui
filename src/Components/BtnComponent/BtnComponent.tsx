import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BtnComponents.scss";

interface Props {
    children: string;
    btnType: "btn-primary" | "btn-secondary";
    icon?: IconDefinition;
}

const Primarybtn = ({ children, btnType, icon }: Props) => {
    return (
        <>
            <button className={btnType}>
                <div className="btn-contents">
                    {icon && (
                        <FontAwesomeIcon className="fa-icon" icon={icon} />
                    )}
                    {children}
                </div>
            </button>
        </>
    );
};

export default Primarybtn;
