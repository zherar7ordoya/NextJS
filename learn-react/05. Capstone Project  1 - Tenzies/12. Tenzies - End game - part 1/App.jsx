import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice());

    /**
     * Critical thinking time!
     *
     * We want to indicate to the user that the game is over
     * if (1) all the dice are held, and (2) all the dice have
     * the same value.
     *
     * How might we do this? Some questions to consider:
     *
     * 1. Do we need to save a `gameWon` value in state? If so, why?
     *    If not, why not?
     *    No, we do not need to save a `gameWon` value in state. The game being
     *    won can be derived from the current state of the dice. We can check if
     *    all dice are held and have the same value directly in the render
     *    method or in a function that is called whenever the dice state
     *    changes. This way, we can determine if the game is won without needing
     *    to manage an additional piece of state, which would be redundant and
     *    could lead to unnecessary re-renders.
     *
     *
     * 2. Do we need to create a side effect to synchronize the `gameWon`
     *    value (whether it's in state or not) with the current state of
     *    the dice?
     *    Since we do not need to save a `gameWon` value in state, we also do
     *    not need to create a side effect to synchronize it with the current
     *    state of the dice. The win condition can be checked directly based on
     *    the current state of the dice.
     *
     * Conclusion:
     * We can derive the game won condition directly from the state of the dice
     * without needing to manage an additional `gameWon` state variable. This
     * simplifies our state management and avoids unnecessary complexity in our
     * component.
     */

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        }));
    }

    function rollDice() {
        setDice((oldDice) =>
            oldDice.map((die) =>
                die.isHeld
                    ? die
                    : { ...die, value: Math.ceil(Math.random() * 6) },
            ),
        );
    }

    function hold(id) {
        setDice((oldDice) =>
            oldDice.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die,
            ),
        );
    }

    const diceElements = dice.map((dieObj) => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ));

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    );
}
