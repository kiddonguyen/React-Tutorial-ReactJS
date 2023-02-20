import React from 'react'
import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from './utils/utils';
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascending, setAscending] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  function sortHandleClick() {
    setAscending(!ascending);
  }
  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0 & move !== currentMove) {
      description = "Go to move " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        {move === currentMove ? <p>You are at move # ${currentMove}</p> : <button onClick={() => jumpTo(move)}>{description}</button>}
      </li>
    );
  })
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{ascending ? moves : moves.reverse()}</ol>
        <button onClick={sortHandleClick}>Toggle Sort Order</button>
      </div>
    </div>
  );
}
