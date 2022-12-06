import "./styles.css";

import { emptyBoard, toggleCell, isAlive, stepGame } from "./life.js";

const w = 10;
const h = 10;

let board = emptyBoard(w, h);

function render() {
  let gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";

  for (let y = 0; y < h; y++) {
    let row = document.createElement("div");
    gameDiv.append(row);

    for (let x = 0; x < w; x++) {
      let cell = document.createElement("button");
      cell.classList.add("gamecell");

      if (isAlive(x, y, board)) {
        cell.classList.add("alive");
      }

      function handler(evt) {
        toggleCell(x, y, board);
        render();
      }

      cell.onclick = handler;
      row.append(cell);

      row.append(cell);
    }
  }

  let stepButton = document.createElement("button");
  stepButton.innerText = "Step";
  stepButton.onclick = (evt) => {
    board = stepGame(board);
    render();
  };
  gameDiv.append(stepButton);
}
render();
