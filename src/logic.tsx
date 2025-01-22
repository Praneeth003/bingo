// This file contains the common functions that the computer player will use to play the game. The functions are:

export const autoGenereateBoard = (rows: number) => {
    const tempArray = [];
    for (let i = 1; i <= rows * rows; i++){
        tempArray.push(i.toString());
    }
    const shuffledArray = tempArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
}

// Function to pick the best cell value such that the computer player can score.
export const pickBestNumber = (rows: number, cells: string[], markedCells: string[]) => {
  const grid = Array.from({ length: rows }, (_, i) =>
    cells.slice(i * rows, i * rows + rows)
  );

  const unmarkedCells = cells.filter(cell => !markedCells.includes(cell));

  // Helper to check if a move completes a row, column, or diagonal
  const isWinningMove = (cell: string) => {
    const index = cells.indexOf(cell);
    const row = Math.floor(index / rows);
    const col = index % rows;

    // Check row
    if (grid[row].every(c => markedCells.includes(c) || c === cell)) return true;

    // Check column
    if (grid.every(r => markedCells.includes(r[col]) || r[col] === cell)) return true;

    // Check diagonals
    if (row === col && grid.every((r, i) => markedCells.includes(r[i]) || r[i] === cell)) return true;
    if (row + col === rows - 1 && grid.every((r, i) => markedCells.includes(r[rows - 1 - i]) || r[rows - 1 - i] === cell)) return true;

    return false;
  };

  // Evaluate each cell
  let bestMove: string = "";
  let bestScore = -Infinity;

  for (const cell of unmarkedCells) {
    let score = 0;

    // Simulate marking the cell
    const newMarkedCells = [...markedCells, cell];

    // Check how many lines are close to completion
    const index = cells.indexOf(cell);
    const row = Math.floor(index / rows);
    const col = index % rows;

    // Row score
    const rowCompletion = grid[row].filter(c => !newMarkedCells.includes(c)).length;
    if (rowCompletion === 0) score += 1;

    // Column score
    const colCompletion = grid.map(r => r[col]).filter(c => !newMarkedCells.includes(c)).length;
    if (colCompletion === 0) score += 1;

    // Diagonal scores
    if (row === col) {
      const diagCompletion = grid.filter((_, i) => !newMarkedCells.includes(grid[i][i])).length;
      if (diagCompletion === 0) score += 1;
    }

    if (row + col === rows - 1) {
      const antiDiagCompletion = grid.filter((_, i) => !newMarkedCells.includes(grid[i][rows - 1 - i])).length;
      if (antiDiagCompletion === 0) score += 1;
    }

    // If it's a winning move, return it immediately
    if (isWinningMove(cell)) return cell;

    // Otherwise, rank based on potential score
    if (score > bestScore) {
      bestScore = score;
      bestMove = cell;
    }
  }

  return bestMove == "" ? unmarkedCells[0] : bestMove;
};

// This function calculates the number of rows, columns and diagonals that are completely marked.
export const calculateScore = (cells: string[], markedCells: string[], rows: number) => {
    const grid = Array.from({ length: rows }, (_, i) =>
        cells.slice(i * rows, i * rows + rows)
    );

    let score = 0;

    for (const row of grid) {
        if (row.every(cell => markedCells.includes(cell))) score++;
    }

    for (let i = 0; i < rows; i++) {
        const col = grid.map(row => row[i]);
        if (col.every(cell => markedCells.includes(cell))) score++;
    }

    const diag1 = grid.map((row, i) => row[i]);
    if (diag1.every(cell => markedCells.includes(cell))) score++;

    const diag2 = grid.map((row, i) => row[rows - 1 - i]);
    if (diag2.every(cell => markedCells.includes(cell))) score++;

    return score;   
}

