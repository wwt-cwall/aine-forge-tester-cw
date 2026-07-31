import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TicTacToe from './TicTacToe'

describe('TicTacToe', () => {
  it('renders the page heading', () => {
    render(<TicTacToe />)
    expect(screen.getByText('🎮 Tic Tac Toe')).toBeInTheDocument()
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

  it('resets the game when New Game is clicked', () => {
    render(<TicTacToe />)
    fireEvent.click(screen.getByTestId('cell-0'))
    fireEvent.click(screen.getByTestId('reset-button'))
    expect(screen.getByTestId('cell-0')).toHaveTextContent('')
    expect(screen.getByTestId('game-status')).toHaveTextContent("Player X's turn")
  })
})
