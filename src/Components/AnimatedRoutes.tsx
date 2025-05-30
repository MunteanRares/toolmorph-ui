import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage/HomePage";
import PaletteExtractorPage from "../Components/Pages/PaletteExtractorPage/PaletteExtractorPage";
import BackgroundRemover from "./Pages/BackgroundRemover/BackgroundRemover";
import ObjectDetection from "./Pages/ObjectDetection/ObjectDetection";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/palette-extractor"
                element={<PaletteExtractorPage />}
            />
            <Route path="/background-remover" element={<BackgroundRemover />} />
            <Route path="/object-detection" element={<ObjectDetection />} />
        </Routes>
    );
};

export default AnimatedRoutes;
