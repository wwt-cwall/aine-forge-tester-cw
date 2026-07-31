import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TicTacToe from './TicTacToe'

describe('TicTacToe', () => {
  it('renders the page heading', () => {
    render(<TicTacToe />)
    expect(screen.getByText('🎮 Tic Tac Toe')).toBeInTheDocument()
  })

  it('renders mode selector with both options', () => {
    render(<TicTacToe />)
    expect(screen.getByTestId('mode-pvp')).toBeInTheDocument()
    expect(screen.getByTestId('mode-pvc')).toBeInTheDocument()
  })

  it('starts in player vs player mode', () => {
    render(<TicTacToe />)
    expect(screen.getByTestId('mode-pvp')).toHaveClass('mode-button--active')
  })

  it('shows player X turn status initially', () => {
    render(<TicTacToe />)
    expect(screen.getByTestId('game-status')).toHaveTextContent("Player X's turn")
  })

  it('renders 9 cells', () => {
    render(<TicTacToe />)
    const board = screen.getByTestId('game-board')
    expect(board.querySelectorAll('button')).toHaveLength(9)
  })

  describe('Player vs Player mode', () => {
    it('places X on first click', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('cell-0'))
      expect(screen.getByTestId('cell-0')).toHaveTextContent('X')
    })

    it('alternates between X and O', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('cell-0'))
      expect(screen.getByTestId('game-status')).toHaveTextContent("Player O's turn")
      fireEvent.click(screen.getByTestId('cell-1'))
      expect(screen.getByTestId('game-status')).toHaveTextContent("Player X's turn")
    })

    it('does not overwrite an already-filled cell', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('cell-0'))
      fireEvent.click(screen.getByTestId('cell-0'))
      expect(screen.getByTestId('cell-0')).toHaveTextContent('X')
      expect(screen.getByTestId('game-status')).toHaveTextContent("Player O's turn")
    })

    it('detects a winner', () => {
      render(<TicTacToe />)
      // X: 0, 1, 2  O: 3, 4
      fireEvent.click(screen.getByTestId('cell-0')) // X
      fireEvent.click(screen.getByTestId('cell-3')) // O
      fireEvent.click(screen.getByTestId('cell-1')) // X
      fireEvent.click(screen.getByTestId('cell-4')) // O
      fireEvent.click(screen.getByTestId('cell-2')) // X wins
      expect(screen.getByTestId('game-status')).toHaveTextContent('Player X wins!')
    })

    it('detects a draw', () => {
      render(<TicTacToe />)
      // Fill board with no winner: X O X / O X X / O X O
      const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8]
      moves.forEach((index) => fireEvent.click(screen.getByTestId(`cell-${index}`)))
      expect(screen.getByTestId('game-status')).toHaveTextContent("It's a draw!")
    })

    it('does not allow moves after game is won', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('cell-0')) // X
      fireEvent.click(screen.getByTestId('cell-3')) // O
      fireEvent.click(screen.getByTestId('cell-1')) // X
      fireEvent.click(screen.getByTestId('cell-4')) // O
      fireEvent.click(screen.getByTestId('cell-2')) // X wins
      fireEvent.click(screen.getByTestId('cell-5')) // should be ignored
      expect(screen.getByTestId('cell-5')).toHaveTextContent('')
    })
  })

  describe('Player vs Computer mode', () => {
    it('switches to computer mode when button is clicked', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('mode-pvc'))
      expect(screen.getByTestId('mode-pvc')).toHaveClass('mode-button--active')
      expect(screen.getByTestId('mode-pvp')).not.toHaveClass('mode-button--active')
    })

    it('resets the board when switching modes', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('cell-0'))
      expect(screen.getByTestId('cell-0')).toHaveTextContent('X')
      fireEvent.click(screen.getByTestId('mode-pvc'))
      expect(screen.getByTestId('cell-0')).toHaveTextContent('')
    })

    it('shows appropriate status messages in computer mode', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('mode-pvc'))
      expect(screen.getByTestId('game-status')).toHaveTextContent('Your turn (X)')
    })

    it('allows player to make a move in computer mode', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('mode-pvc'))
      
      // Player makes a move
      fireEvent.click(screen.getByTestId('cell-0'))
      expect(screen.getByTestId('cell-0')).toHaveTextContent('X')
      
      // Status should indicate computer's turn or thinking
      const status = screen.getByTestId('game-status').textContent
      expect(status).toMatch(/Computer/)
    })

    it('disables cells during computer turn', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('mode-pvc'))
      fireEvent.click(screen.getByTestId('cell-0'))
      
      // All cells should be disabled during computer's turn
      const cell1 = screen.getByTestId('cell-1')
      expect(cell1).toBeDisabled()
    })
  })

  describe('Game reset', () => {
    it('resets the game when New Game is clicked', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('cell-0'))
      fireEvent.click(screen.getByTestId('reset-button'))
      expect(screen.getByTestId('cell-0')).toHaveTextContent('')
      expect(screen.getByTestId('game-status')).toHaveTextContent("Player X's turn")
    })

    it('resets to current mode', () => {
      render(<TicTacToe />)
      fireEvent.click(screen.getByTestId('mode-pvc'))
      fireEvent.click(screen.getByTestId('cell-0'))
      fireEvent.click(screen.getByTestId('reset-button'))
      expect(screen.getByTestId('mode-pvc')).toHaveClass('mode-button--active')
    })
  })
})
