import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import "./CustomLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { motion, Variants } from "motion/react";
import { durationAmount } from "../../styling/constants";

interface Props {
    href: string;
    children?: string;
    icon?: IconDefinition;
    iconPosition?: "before" | "after";
    filled?: "accent" | "primary";
}

const Link = ({
    href,
    children,
    icon,
    iconPosition = "before",
    filled,
}: Props) => {
    const linkClass = clsx({
        link: !filled,
        "filled-link--accent": filled === "accent",
        "filled-link--primary": filled === "primary",
    });

    const iconClass = clsx({
        "fa-icon": !filled,
        "fa-icon--light": filled,
    });

    const variants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: durationAmount.transformLong },
        },
        tap: {
            scale: 0.97,
            transition: { duration: 0.2 },
        },
        hoverFilled: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        hoverBasic: {
            scale: 1.05,
            transition: { duration: 0.2 },
            color: "#5f3dc4",
        },
    };

    return (
        <>
            <motion.a
                variants={variants}
                initial="initial"
                animate="animate"
                whileTap="tap"
                {...(!filled
                    ? { whileHover: "hoverBasic" }
                    : { whileHover: "hoverFilled" })}
                className={linkClass}
                href={href}
            >
                {icon && iconPosition == "before" && (
                    <FontAwesomeIcon className={iconClass} icon={icon} />
                )}
                {children}
                {icon && iconPosition == "after" && (
                    <FontAwesomeIcon className={iconClass} icon={icon} />
                )}
            </motion.a>
        </>
    );
};

export default Link;
