import { motion } from "motion/react";
import "./Loader.scss";

const Loader = () => {
    return (
        <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, type: "tween" }}
        ></motion.div>
    );
};

export default Loader;
