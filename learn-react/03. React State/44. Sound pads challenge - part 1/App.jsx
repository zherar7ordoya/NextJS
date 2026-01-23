import pads from "./pads";
import { useState } from "react";

export default function App() {
    const [padsArray, setPadsArray] = useState(pads);
    return (
        <main>
            <div className="pad-container">
                {padsArray.map((pad) => (
                    <button
                        key={pad.id}
                        color={pad.color}
                        on={pad.on}
                        className="pad"
                    >
                        {pad.id}
                    </button>
                ))}
            </div>
        </main>
    );
}
