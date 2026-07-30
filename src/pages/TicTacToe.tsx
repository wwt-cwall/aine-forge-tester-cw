import { useState } from 'react'
import './TicTacToe.css'

type Player = 'X' | 'O'
type Cell = Player | null
type Board = Cell[]

function calculateWinner(board: Board): Player | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player
    }
  }
  return null
}

function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')

  const winner = calculateWinner(board)
  const isDraw = !winner && board.every((cell) => cell !== null)

  function handleCellClick(index: number) {
    if (board[index] || winner) return

    const nextBoard = [...board]
    nextBoard[index] = currentPlayer
    setBoard(nextBoard)
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  function handleReset() {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
  }

  function getStatusMessage() {
    if (winner) return `Player ${winner} wins! 🎉`
    if (isDraw) return "It's a draw! 🤝"
    return `Player ${currentPlayer}'s turn`
  }

  return (
    <main className="tic-tac-toe">
      <h1 className="tic-tac-toe-title">🎮 Tic Tac Toe</h1>

      <p className="tic-tac-toe-status" data-testid="game-status">
        {getStatusMessage()}
      </p>

      <div className="tic-tac-toe-board" data-testid="game-board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`tic-tac-toe-cell${cell ? ` tic-tac-toe-cell--${cell.toLowerCase()}` : ''}${winner || isDraw ? ' tic-tac-toe-cell--disabled' : ''}`}
            onClick={() => handleCellClick(index)}
            aria-label={`Cell ${index + 1}${cell ? `, ${cell}` : ', empty'}`}
            data-testid={`cell-${index}`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        className="tic-tac-toe-reset"
        onClick={handleReset}
        data-testid="reset-button"
      >
        New Game
      </button>
    </main>
  )
}

export default TicTacToe
