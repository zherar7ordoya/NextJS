import { useState } from "react";
import Die from "./Die";

export default function App() {
    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     *
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */

    const [dice, setDice] = useState(generateAllNewDice());

    function generateAllNewDice() {
        return Array.from({ length: 10 }, () => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
        }));
    }

    function rollDice() {
        setDice(generateAllNewDice());
    }

    const diceElements = dice.map((value, key) => (
        <Die value={value.value} isHeld={value.isHeld} key={key} />
    ));

    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    );
}
