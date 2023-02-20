// import { React, Fragment } from 'react';
import { Fragment, useState } from "react";
import React from 'react';
function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function Board({ xIsNext, squares, onPlay }) {


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
  let boardSquares = [];
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

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascending, setAscending] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const winner = calculateWinner(currentSquares);
  console.log(winner);
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
