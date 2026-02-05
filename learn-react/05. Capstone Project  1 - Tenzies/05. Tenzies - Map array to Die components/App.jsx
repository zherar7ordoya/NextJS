import { useState } from "react";
import Die from "./Die";

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

export default function App() {
    function generateAllNewDice() {
        return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
    }

    /** map over dice here */
    const [dice, setDice] = useState(generateAllNewDice());

    const diceElements = dice.map((value, index) => (
        <Die key={index} value={value} />
    ));

    return (
        <main>
            <div className="dice-container">{diceElements}</div>
        </main>
    );
}
