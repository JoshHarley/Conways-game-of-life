//Conway's game of life

//this creates an empty board as an array or rows
function emptyBoard(w, h) {
  let board = [];
  for (let y = 0; y < h; y++) {
    let row = [];
    board[y] = row;

    for (let x = 0; x < w; x++) {
      row[x] = false;
    }
  }
  return board;
}

function toggleCell(x, y, board) {
  board[y][x] = !board[y][x];
}

//this will deal with range checks
function isAlive(x, y, board) {
  return (
    y > 0 && y < board.length && x > 0 && x < board[y].length && board[y][x]
  );
}

function liveNeighbours(x, y, board) {
  let count = 0;
  for (let [xx, yy] of [
    [+x - 1, +y - 1],
    [+x, +y - 1],
    [+x + 1, +y - 1],
    [+x - 1, +y],
    [+x + 1, +y],
    [+x - 1, +y + 1],
    [+x, +y + 1],
    [+x + 1, +y + 1]
  ]) {
    if (isAlive(xx, yy, board)) {
      count++;
    }
  }
  return count;
}

function stepGame(board) {
  let newBoard = [];
  for (let y = 0; y < board.length; y++) {
    newBoard[y] = [];
    for (let x = 0; x < board.length; x++) {
      let neighbours = liveNeighbours(x, y, board);
      let alive = isAlive(x, y, board);

      if (alive) {
        newBoard[y][x] = neighbours === 2 || neighbours === 3;
      } else {
        newBoard[y][x] = neighbours === 3;
      }
    }
  }
  return newBoard;
}

export { emptyBoard, toggleCell, isAlive, stepGame };
