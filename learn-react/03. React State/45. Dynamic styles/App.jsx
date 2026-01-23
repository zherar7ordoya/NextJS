import React from "react";
import padsData from "./pads";

export default function App(props) {
    const [pads, setPads] = React.useState(padsData);

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    };

    const buttonElements = pads.map((pad) => (
        <button key={pad.id} style={styles}></button>
    ));

    return (
        <main>
            <div className="pad-container">{buttonElements}</div>
        </main>
    );
}
