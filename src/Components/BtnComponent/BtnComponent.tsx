import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BtnComponent.scss";
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
    onClick?: () => void;
    isEnabled?: boolean;
    children: string;
    btnType: "primary" | "accent";
    icon?: IconDefinition;
}

const Primarybtn = ({
    onClick,
    isEnabled = true,
    children,
    btnType,
    icon,
}: Props) => {
    const btnClass = clsx({
        "btn-primary": btnType === "primary",
        "btn-secondary": btnType === "accent",
    });

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
            >
                <button
                    disabled={isEnabled}
                    onClick={onClick}
                    className={btnClass}
                >
                    <div className="btn-contents">
                        {icon && (
                            <FontAwesomeIcon
                                className="fa-icon-btn"
                                icon={icon}
                            />
                        )}
                        <p>{children}</p>
                    </div>
                </button>
            </motion.div>
        </>
    );
};

export default Primarybtn;
