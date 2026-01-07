import "./App.css";
import HeaderContent from "./components/ui/HeaderContent";
import MainContent from "./components/ui/MainContent";
import MainSingle from "./components/ui/MainSingle";
import FooterContent from "./components/ui/FooterContent";

import Places from "../src/assets/places.js";

export default function App() {
    return (
        <>
            <HeaderContent />

            {/* <MainContent /> */}

            {Places.map((place) => (
                <MainSingle key={place.id} place={place} />
            ))}

            <FooterContent />
        </>
    );
}
