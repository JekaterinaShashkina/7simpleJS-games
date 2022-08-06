import { winningArrays } from "./module/winnningarray.js";

const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const diisplayCurrentPlayer = document.querySelector("#current-player");
let currentPlayer = 1;

const checkBoard = () => {
  for (let y = 0; y < winningArrays.length; y++) {
    const square1 = squares[winningArrays[y][0]];
    const square2 = squares[winningArrays[y][1]];
    const square3 = squares[winningArrays[y][2]];
    const square4 = squares[winningArrays[y][3]];

    //*check those squares to see if they all have the class of player-one
    if (
      square1.classList.contains("player-one") &&
      square2.classList.contains("player-one") &&
      square3.classList.contains("player-one") &&
      square4.classList.contains("player-one")
    ) {
      result.innerHTML = "Player One Wins";
    }
    if (
      square1.classList.contains("player-two") &&
      square2.classList.contains("player-two") &&
      square3.classList.contains("player-two") &&
      square4.classList.contains("player-two")
    ) {
      result.innerHTML = "Player Two Wins";
    }
  }
};

for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    //*if the square below your current square is taken, yo can go ontop of it
    if (squares[i + 7].classList.contains("taken")) {
      if (currentPlayer == 1) {
        squares[i].classList.add("taken");
        squares[i].classList.add("player-one");
        currentPlayer = 2;
        diisplayCurrentPlayer.innerHTML = currentPlayer;
      } else if (currentPlayer == 2) {
        squares[i].classList.add("taken");
        squares[i].classList.add("player-two");
        currentPlayer = 1;
        diisplayCurrentPlayer.innerHTML = currentPlayer;
      }
    } else alert("cant go here");
    checkBoard();
  };
}
