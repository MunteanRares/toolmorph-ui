import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BtnComponent.scss";
import clsx from "clsx";
import { motion } from "motion/react";
import { durationAmount } from "../../styling/constants";

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
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
            >
                <button className={btnClass}>
                    <div className="btn-contents">
                        {icon && (
                            <FontAwesomeIcon
                                className="fa-icon-btn"
                                icon={icon}
                            />
                        )}
                        {children}
                    </div>
                </button>
            </motion.div>
        </>
    );
};

export default Primarybtn;
