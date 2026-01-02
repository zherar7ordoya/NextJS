import createRoot from "react-dom/client";
import { Header } from "./components/layout/Header.jsx";
import { MainContent } from "./components/ui/MainContent.jsx";
import { Footer } from "./components/layout/Footer.jsx";

const root = createRoot.createRoot(document.getElementById("root"));

root.render(
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
);
