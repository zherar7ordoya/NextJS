import React from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const watchWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", watchWindowWidth);

        return () => {
            window.removeEventListener("resize", watchWindowWidth);
        };
    }, []);

    return <h1>Window width: {windowWidth}</h1>;
}
