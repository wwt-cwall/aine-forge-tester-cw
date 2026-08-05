# Tic Tac Toe Game

**Concept:** [Application Architecture](../application-architecture.md)

## Overview

The Tic Tac Toe page implements a fully functional tic-tac-toe game with two modes: Player vs Player and Player vs Computer. The computer opponent uses the minimax algorithm to play optimally, making it unbeatable.

## Implementation

### Page Component
`src/pages/TicTacToe.tsx`

### Route
`/tic-tac-toe`

## Game Modes

### Player vs Player (PvP)
- Two human players take turns
- X always goes first
- Players alternate clicking cells
- Game ends when someone wins or board is full

### Player vs Computer (PvC)
- Human plays as X (goes first)
- Computer plays as O
- Computer uses minimax algorithm for optimal moves
- Computer "thinks" for 500ms before moving (UX delay)

## User Interface

### Page Layout
- Title: "🎮 Tic Tac Toe"
- Mode selector buttons (PvP / PvC)
- Status message showing current game state
- 3x3 game board grid
- "New Game" button to reset

### Mode Selector
Two buttons to choose game mode:
- 👥 Player vs Player
- 🤖 Player vs Computer

Active mode is highlighted with `.mode-button--active` class.

### Game Board
- 3x3 grid of clickable cells
- Each cell displays X, O, or is empty
- Cells have visual states:
  - Empty: clickable
  - Filled: shows X or O with color coding
  - Disabled: during computer's turn or game over

### Status Messages
Dynamic status based on game state:
- **Playing (PvP):** "Player X's turn" or "Player O's turn"
- **Playing (PvC):** "Your turn (X)" or "Computer's turn (O)"
- **Computer thinking:** "Computer is thinking... 🤔"
- **Win (PvP):** "Player X wins! 🎉" or "Player O wins! 🎉"
- **Win (PvC):** "You win! 🎉" or "Computer wins! 🤖"
- **Draw:** "It's a draw! 🤝"

## Game Logic

### State Management
```tsx
const [board, setBoard] = useState<Board>(Array(9).fill(null))
const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
const [gameMode, setGameMode] = useState<GameMode>('pvp')
const [isComputerThinking, setIsComputerThinking] = useState(false)
```

### Type Definitions
```typescript
type Player = 'X' | 'O'
type Cell = Player | null
type Board = Cell[]
type GameMode = 'pvp' | 'pvc'
```

### Win Detection
`calculateWinner(board: Board): Player | null`

Checks all 8 possible winning combinations:
- 3 rows (horizontal)
- 3 columns (vertical)
- 2 diagonals

Returns the winning player ('X' or 'O') or null if no winner.

### Draw Detection
```tsx
const isDraw = !winner && board.every((cell) => cell !== null)
```

Game is a draw when board is full and no winner exists.

## Computer AI

### Minimax Algorithm
The computer uses the minimax algorithm to evaluate all possible moves and choose the optimal one.

#### Algorithm Function
```typescript
function minimax(board: Board, depth: number, isMaximizing: boolean): number
```

**Terminal States:**
- Computer wins (O): Returns `10 - depth` (prefer faster wins)
- Human wins (X): Returns `depth - 10` (delay losses)
- Draw: Returns `0`

**Recursive Evaluation:**
- **Maximizing (Computer's turn):** Choose move with highest score
- **Minimizing (Human's turn):** Choose move with lowest score

#### Best Move Selection
```typescript
function getBestMove(board: Board): number
```

Evaluates all available moves and returns the index of the best move for the computer.

### AI Characteristics
- **Unbeatable:** Perfect play means computer never loses
- **Optimal:** Always makes the best possible move
- **Deterministic:** Same board state produces same move
- **Fast:** Minimax completes quickly for 3x3 board

## Behavior

### Cell Click Handling
```typescript
function handleCellClick(index: number)
```

Conditions that prevent cell click:
- Cell is already filled
- Game is over (winner or draw)
- Computer is thinking (PvC mode)
- It's computer's turn (PvC mode)

Valid click:
1. Update board with current player's mark
2. Switch to other player
3. Trigger computer move if in PvC mode

### Computer Move Effect
```tsx
useEffect(() => {
  if (gameMode === 'pvc' && currentPlayer === 'O' && !isGameOver && !isComputerThinking) {
    setIsComputerThinking(true)
    
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
```

**500ms delay** makes computer feel more natural and gives user time to see their move.

### Reset Game
```typescript
function handleReset()
```

Resets all state:
- Clear board (all cells null)
- Set current player to X
- Clear computer thinking flag

### Mode Change
```typescript
function handleModeChange(mode: GameMode)
```

Switching modes triggers a reset to start fresh game.

## Styling

### CSS Classes
- `.tic-tac-toe` - Main container
- `.tic-tac-toe-title` - Page heading
- `.tic-tac-toe-mode-selector` - Mode buttons container
- `.mode-button` - Mode button
- `.mode-button--active` - Active mode button
- `.tic-tac-toe-status` - Status message
- `.tic-tac-toe-board` - Game board grid
- `.tic-tac-toe-cell` - Individual cell
- `.tic-tac-toe-cell--x` - Cell with X
- `.tic-tac-toe-cell--o` - Cell with O
- `.tic-tac-toe-cell--disabled` - Disabled cell
- `.tic-tac-toe-reset` - Reset button

### Visual Design
- Grid layout for 3x3 board
- Color coding for X and O
- Hover effects on clickable cells
- Disabled state during computer turn
- Responsive sizing

## Testing

### Test File
`src/pages/TicTacToe.test.tsx`

### Test IDs
- `mode-selector` - Mode selection container
- `mode-pvp` - PvP mode button
- `mode-pvc` - PvC mode button
- `game-status` - Status message
- `game-board` - Game board container
- `cell-0` through `cell-8` - Individual cells
- `reset-button` - New game button

### Test Coverage
Tests verify:
- Component renders correctly
- Mode switching works
- Cell clicks update board
- Win detection works
- Draw detection works
- Computer makes moves in PvC mode
- Reset clears board
- Accessibility attributes present

## Accessibility

### Keyboard Navigation
- All buttons keyboard accessible
- Tab order follows visual order
- Focus states visible

### ARIA Attributes
```tsx
aria-label={`Cell ${index + 1}${cell ? `, ${cell}` : ', empty'}`}
```

Each cell has descriptive label for screen readers.

### Button States
- Disabled attribute on cells during computer turn
- Visual and programmatic disabled state

## Edge Cases

### Computer's First Move
- If computer goes first (not current implementation)
- Would need to trigger computer move on game start

### Rapid Clicking
- Computer thinking flag prevents multiple simultaneous moves
- Cell click checks prevent invalid moves

### Mode Switch During Game
- Automatically resets board
- Prevents inconsistent state

### Invalid Board States
- Type system prevents invalid cell values
- Board always has exactly 9 cells

## Game Theory

### Optimal Play
With perfect play from both sides:
- Game always ends in draw
- First player (X) has slight advantage
- Computer never loses in PvC mode

### Strategy
- Center control is valuable
- Corners are strong positions
- Edges are weakest positions

## Future Enhancements

### Potential Additions
- **Difficulty levels** - Easy (random), Medium (some strategy), Hard (minimax)
- **Score tracking** - Keep track of wins/losses/draws
- **Animation** - Animate moves and wins
- **Sound effects** - Audio feedback for moves and wins
- **Undo move** - Take back last move
- **Move history** - Show sequence of moves
- **AI explanation** - Show why computer chose each move
- **Multiplayer online** - Play against remote opponent
- **Board sizes** - 4x4 or 5x5 variants
- **Time limits** - Add timer for each move
- **Statistics** - Track game statistics and patterns

The Tic Tac Toe game provides an engaging, fully-functional implementation with an unbeatable AI opponent using classic game theory algorithms.
