import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BtnComponent.scss";
import clsx from "clsx";

interface Props {
    children: string;
    btnType: "primary" | "accent";
    icon?: IconDefinition;
}

const Primarybtn = ({ children, btnType, icon }: Props) => {
    const btnClass = clsx({
        "btn-primary": btnType === "primary",
        "btn-secondary": btnType === "accent",
    });

    return (
        <>
            <button className={btnClass}>
                <div className="btn-contents">
                    {icon && (
                        <FontAwesomeIcon className="fa-icon-btn" icon={icon} />
                    )}
                    {children}
                </div>
            </button>
        </>
    );
};

export default Primarybtn;
