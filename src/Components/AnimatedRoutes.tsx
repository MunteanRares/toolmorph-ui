import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ColorPickerPage from "../Pages/ColorPickerPage/ColorPickerPage";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/colorPicker" element={<ColorPickerPage />} />
        </Routes>
    );
};

export default AnimatedRoutes;
