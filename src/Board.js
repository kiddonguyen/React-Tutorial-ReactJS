import React from 'react'
import { Fragment } from "react";
import { calculateWinner } from './utils/utils';
import Square from './Square';
export default function Board({ xIsNext, squares, onPlay }) {
    let boardSquares = [];
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) { return; }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    for (let row = 0; row < 3; row++) {
        let boardRows = [];
        for (let col = 0; col < 3; col++) {
            let i = row * 3 + col;
            boardRows.push(
                <Fragment key={i}>
                    <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
                </Fragment>
            );
        }
        boardSquares.push(
            <div className="board-row" key={row}>{boardRows}</div>
        )
    }
    return (
        <div>
            {boardSquares}
        </div >
    )
}
