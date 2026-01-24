import React from "react";

export default function Pad(props) {
    const [isOn, setIsOn] = React.useState(props.on);

    const togglePad = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return (
        <button
            style={{ backgroundColor: props.color }}
            className={isOn ? "on" : undefined}
            onClick={togglePad}
        ></button>
    );
}
