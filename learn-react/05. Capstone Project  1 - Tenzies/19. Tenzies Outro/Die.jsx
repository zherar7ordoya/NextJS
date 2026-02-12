export default function Die(props) {
    const pipLayouts = {
        1: ["center"],
        2: ["top-left", "bottom-right"],
        3: ["top-left", "center", "bottom-right"],
        4: ["top-left", "top-right", "bottom-left", "bottom-right"],
        5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
        6: [
            "top-left",
            "top-right",
            "middle-left",
            "middle-right",
            "bottom-left",
            "bottom-right",
        ],
    };

    const pipElements = pipLayouts[props.value].map((position) => (
        <span key={position} className={`pip ${position}`}></span>
    ));

    return (
        <button
            className={`die ${props.isHeld ? "held" : ""}`}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >
            <span className="die-face">{pipElements}</span>
        </button>
    );
}
