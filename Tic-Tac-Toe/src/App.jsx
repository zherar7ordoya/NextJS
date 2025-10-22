import { useState } from 'react';


export default function Game() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null), lastMove: null }]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);

    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove].squares;

    function handlePlay(nextSquares, squareIndex) {
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            { squares: nextSquares, lastMove: squareIndex }
        ];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((step, move) => {

        if (move === currentMove) { // If current move -> show text
            return (
                <li key={move}>
                    <span>You are at move: {move}</span>
                </li>
            );
        }

        let description;

        if (move > 0) {
            const row = Math.floor(step.lastMove / 3) + 1;
            const col = (step.lastMove % 3) + 1;
            description = `Go to move #${move} (${row}, ${col})`;
        }
        else description = 'Go to game start';

        return ( // else -> show button
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    const sortedMoves = isAscending ? moves : [...moves].reverse();

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <button onClick={() => setIsAscending(!isAscending)}>
                    Sort {isAscending ? "Descending" : "Ascending"}
                </button>
                <ul>{sortedMoves}</ul>
            </div>
        </div>
    );
}


function Board({ xIsNext, squares, onPlay }) {

    const result = calculateWinner(squares);
    const winner = result?.winner;
    const winningLine = result?.line || [];

    let status;

    if (winner) status = "Winner: " + winner;
    else if (squares.every(Boolean)) status = "It's a draw!";
    else status = "Next player: " + (xIsNext ? "X" : "O");

    function handleClick(i) {
        if (squares[i] || winner) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares, i);
    }

    function renderSquare(i) {
        const isWinningSquare = winningLine.includes(i);
        return (
            <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                isWinning={isWinningSquare}
            />
        );
    }

    const size = 3;

    const board = Array(size)
        .fill(null)
        .map((_, row) => (
            <div key={row} className="board-row">
                {Array(size)
                    .fill(null)
                    .map((_, col) => {
                        const index = row * size + col;
                        return renderSquare(index);
                    })}
            </div>
        ));

    return (
        <>
            <div className="status">{status}</div>
            {board}
        </>
    );
}


function Square({ value, onSquareClick, isWinning }) {
    return (
        <button
            className={`square ${isWinning ? "highlight" : ""}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}


// Helper function to determine the winner

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6],            // diagonals
    ];

    const line = lines.find(([a, b, c]) =>
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
    );

    return line
        ? { winner: squares[line[0]], line }
        : { winner: null, line: [] };
}
