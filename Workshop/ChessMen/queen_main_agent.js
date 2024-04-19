import { queenMaster } from "./queen_agent.js";

import { generateSquare, pieces, squares } from "./chess.js";

export function queenAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);

  let quuenNode = document.getElementById(clickedSquareId);
  let isQueen = quuenNode.getInnerHTML();

  // Get the piece on the clicked square from the pieces array
  const piece = pieces[clickedSquareId];
  // alert(clickedSquareId.innerHTML())

  // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });


    document.querySelectorAll(".queenDiagonalRight").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenDiagonalRight");
    });

    document.querySelectorAll(".queenDiagonalDown").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenDiagonalDown");
    });

    document.querySelectorAll(".queenDown").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenDown");
    });

    document.querySelectorAll(".queenDiagonalUp").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenDiagonalUp");
    });


    document.querySelectorAll(".queenUp").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenUp");
    });

    document.querySelectorAll(".queenLeft").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenLeft");
    });

    document.querySelectorAll(".queenTopRightDiagonal").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenTopRightDiagonal");
    });

    document.querySelectorAll(".queenDownLeftDiagonal").forEach((square) => {
      square.style.border = "";
      square.classList.remove("queenDownLeftDiagonal");
    });


  // Check if the clicked square contains a queen or king
  if (isQueen === "♔" || isQueen === "♚") {
    localStorage.setItem("clicked_id", clickedSquareId);

    // Add border to clicked square
    clickedSquare.style.border = "2px solid red";
    clickedSquare.classList.add("bordered");

    queenMaster(clickedSquareId);
  }
}
