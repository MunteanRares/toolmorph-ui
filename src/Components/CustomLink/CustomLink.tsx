import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import "./CustomLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    href: string;
    children?: string;
    icon?: IconDefinition;
    iconPosition?: "before" | "after";
}

const Link = ({ href, children, icon, iconPosition = "before" }: Props) => {
    return (
        <>
            <a className="link" href={href}>
                {icon && iconPosition == "before" && (
                    <FontAwesomeIcon className="fa-icon" icon={icon} />
                )}
                {children}
                {icon && iconPosition == "after" && (
                    <FontAwesomeIcon className="fa-icon" icon={icon} />
                )}
            </a>
        </>
    );
};

export default Link;
