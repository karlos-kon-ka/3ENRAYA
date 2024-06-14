import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

import Footer from './components/Footer';

const TURNS = {
  X: 'X',
  O: 'O',
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [0, 3, 6],
  [0, 4, 8],
  [6, 7, 8],
  [2, 4, 6],
  [2, 5, 8],
  [1, 4, 7],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Empate
    }
  };

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]; // Retorna el ganador
      }
    }
    return null; // No hay ganador aún
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  return (
    <main className="board">
      <h1>3 En Rayas</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        {board.map((value, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            isSelected={false} // Aquí puedes ajustar isSelected según sea necesario
          >
            {value}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.O}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.X}>{TURNS.O}</Square>
      </section>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? 'Empate' : `Ha GANADO ${winner}`}</h2>
            {winner && <Square>{winner}</Square>}
            <footer>
              <button onClick={resetGame}>Jugar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}

export default App;
