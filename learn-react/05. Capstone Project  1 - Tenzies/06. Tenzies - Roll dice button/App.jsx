import { useState } from "react";
import Die from "./Die";

export default function App() {
    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     *
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

    const [dice, setDice] = useState(generateDice());

    function generateDice() {
        return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
    }

    const diceElements = dice.map((value, index) => (
        <Die key={index} value={value} />
    ));

    return (
        <main>
            <div className="dice-container">{diceElements}</div>

            {/*New button here*/}

            <button
                className="roll-dice"
                onClick={() => setDice(generateDice())}
            >
                Roll Dice
            </button>
        </main>
    );
}
