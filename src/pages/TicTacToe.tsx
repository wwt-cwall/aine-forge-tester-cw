import { useState, useEffect } from 'react'
import './TicTacToe.css'

type Player = 'X' | 'O'
type Cell = Player | null
type Board = Cell[]
type GameMode = 'pvp' | 'pvc'

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

function getAvailableMoves(board: Board): number[] {
  return board.map((cell, index) => (cell === null ? index : -1)).filter((i) => i !== -1)
}

function minimax(board: Board, depth: number, isMaximizing: boolean): number {
  const winner = calculateWinner(board)
  
  // Terminal states
  if (winner === 'O') return 10 - depth // Computer wins (O)
  if (winner === 'X') return depth - 10 // Human wins (X)
  if (getAvailableMoves(board).length === 0) return 0 // Draw
  
  if (isMaximizing) {
    let bestScore = -Infinity
    for (const move of getAvailableMoves(board)) {
      board[move] = 'O'
      const score = minimax(board, depth + 1, false)
      board[move] = null
      bestScore = Math.max(score, bestScore)
    }
    return bestScore
  } else {
    let bestScore = Infinity
    for (const move of getAvailableMoves(board)) {
      board[move] = 'X'
      const score = minimax(board, depth + 1, true)
      board[move] = null
      bestScore = Math.min(score, bestScore)
    }
    return bestScore
  }
}

function getBestMove(board: Board): number {
  let bestScore = -Infinity
  let bestMove = -1
  
  for (const move of getAvailableMoves(board)) {
    board[move] = 'O'
    const score = minimax(board, 0, false)
    board[move] = null
    
    if (score > bestScore) {
      bestScore = score
      bestMove = move
    }
  }
  
  return bestMove
}

function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [gameMode, setGameMode] = useState<GameMode>('pvp')
  const [isComputerThinking, setIsComputerThinking] = useState(false)

  const winner = calculateWinner(board)
  const isDraw = !winner && board.every((cell) => cell !== null)
  const isGameOver = winner !== null || isDraw

  // Computer move effect
  useEffect(() => {
    if (gameMode === 'pvc' && currentPlayer === 'O' && !isGameOver && !isComputerThinking) {
      setIsComputerThinking(true)
      
      // Add a small delay to make it feel more natural
      const timer = setTimeout(() => {
        const bestMove = getBestMove([...board])
        if (bestMove !== -1) {
          const nextBoard = [...board]
          nextBoard[bestMove] = 'O'
          setBoard(nextBoard)
          setCurrentPlayer('X')
        }
        setIsComputerThinking(false)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [board, currentPlayer, gameMode, isGameOver, isComputerThinking])

  function handleCellClick(index: number) {
    if (board[index] || winner || isComputerThinking) return
    if (gameMode === 'pvc' && currentPlayer === 'O') return // Don't allow clicking during computer's turn

    const nextBoard = [...board]
    nextBoard[index] = currentPlayer
    setBoard(nextBoard)
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  function handleReset() {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
    setIsComputerThinking(false)
  }

  function handleModeChange(mode: GameMode) {
    setGameMode(mode)
    handleReset()
  }

  function getStatusMessage() {
    if (winner) {
      if (gameMode === 'pvc') {
        return winner === 'X' ? 'You win! 🎉' : 'Computer wins! 🤖'
      }
      return `Player ${winner} wins! 🎉`
    }
    if (isDraw) return "It's a draw! 🤝"
    if (isComputerThinking) return 'Computer is thinking... 🤔'
    if (gameMode === 'pvc') {
      return currentPlayer === 'X' ? 'Your turn (X)' : "Computer's turn (O)"
    }
    return `Player ${currentPlayer}'s turn`
  }

  return (
    <main className="tic-tac-toe">
      <h1 className="tic-tac-toe-title">🎮 Tic Tac Toe</h1>

      <div className="tic-tac-toe-mode-selector" data-testid="mode-selector">
        <button
          className={`mode-button ${gameMode === 'pvp' ? 'mode-button--active' : ''}`}
          onClick={() => handleModeChange('pvp')}
          data-testid="mode-pvp"
        >
          👥 Player vs Player
        </button>
        <button
          className={`mode-button ${gameMode === 'pvc' ? 'mode-button--active' : ''}`}
          onClick={() => handleModeChange('pvc')}
          data-testid="mode-pvc"
        >
          🤖 Player vs Computer
        </button>
      </div>

      <p className="tic-tac-toe-status" data-testid="game-status">
        {getStatusMessage()}
      </p>

      <div className="tic-tac-toe-board" data-testid="game-board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`tic-tac-toe-cell${cell ? ` tic-tac-toe-cell--${cell.toLowerCase()}` : ''}${isGameOver || isComputerThinking ? ' tic-tac-toe-cell--disabled' : ''}`}
            onClick={() => handleCellClick(index)}
            aria-label={`Cell ${index + 1}${cell ? `, ${cell}` : ', empty'}`}
            data-testid={`cell-${index}`}
            disabled={isComputerThinking}
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
