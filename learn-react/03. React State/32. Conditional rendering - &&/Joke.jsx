import { useState } from "react";

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown((prevIsShown) => !prevIsShown);
    }

    console.log(isShown);

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isShown && props.punchline}</p>
            <button onClick={toggleShown}>
                {isShown ? "Hide" : "Show"} Punchline
            </button>
            <hr />
        </div>
    );
}
