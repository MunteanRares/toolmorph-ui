import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <AnimatedRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
