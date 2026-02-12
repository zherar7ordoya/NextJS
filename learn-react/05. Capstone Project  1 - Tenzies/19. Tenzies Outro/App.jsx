import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

/**
 * Add a timer and a roll counter to the game.
 */

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice());
    const [seconds, setSeconds] = useState(0);
    const buttonRef = useRef(null);

    const gameWon =
        dice.every((die) => die.isHeld) &&
        dice.every((die) => die.value === dice[0].value);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus();
        }
    }, [gameWon]);

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        }));
    }

    function rollDice() {
        if (!gameWon) {
            if (!isRunning) setIsRunning(true); // ¡Arrancamos si no ha empezado!
            setDice((oldDice) =>
                oldDice.map((die) =>
                    die.isHeld
                        ? die
                        : { ...die, value: Math.ceil(Math.random() * 6) },
                ),
            );
        } else {
            setDice(generateAllNewDice());
        }
    }

    function hold(id) {
        if (!isRunning) setIsRunning(true); // ¡Arrancamos!
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

    useEffect(() => {
        let interval = null;

        if (isRunning && !gameWon) {
            // Iniciamos el sistema externo (el reloj del navegador)
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            // Si el juego se detiene o se gana, limpiamos el intervalo
            clearInterval(interval);
        }

        // FUNCIÓN DE LIMPIEZA: Se ejecuta si el componente se desmonta
        // o antes de que el efecto se vuelva a ejecutar
        return () => clearInterval(interval);
    }, [isRunning, gameWon]); // Se activa cuando empiezas o cuando ganas

    return (
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && (
                    <p>
                        Congratulations! You won! Press "New Game" to start
                        again.
                    </p>
                )}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
            <div className="stats">
                <p>
                    Time: {seconds} second{seconds !== 1 ? "s" : ""}
                </p>
            </div>
        </main>
    );
}
