import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import "./CustomLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

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

    return (
        <>
            <a className={linkClass} href={href}>
                {icon && iconPosition == "before" && (
                    <FontAwesomeIcon className={iconClass} icon={icon} />
                )}
                {children}
                {icon && iconPosition == "after" && (
                    <FontAwesomeIcon className={iconClass} icon={icon} />
                )}
            </a>
        </>
    );
};

export default Link;
