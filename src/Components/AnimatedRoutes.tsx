import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import { AnimatePresence } from "motion/react";
import Navbar from "./Navbar/Navbar";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/colorPicker" element={<HomePage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
