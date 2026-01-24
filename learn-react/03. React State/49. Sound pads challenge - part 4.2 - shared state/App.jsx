import React from "react";
import padsData from "./pads";
import Pad from "./Pad";

export default function App() {
    const [pads, setPads] = React.useState(padsData);

    function toggle(id) {
        setPads((prevPads) =>
            prevPads.map((pad) =>
                pad.id === id ? { ...pad, on: !pad.on } : pad,
            ),
        );
    }

    const buttonElements = pads.map((pad) => (
        <Pad
            key={pad.id}
            color={pad.color}
            on={pad.on}
            toggle={() => toggle(pad.id)}
        />
    ));

    return (
        <main>
            <div className="pad-container">{buttonElements}</div>
        </main>
    );
}
