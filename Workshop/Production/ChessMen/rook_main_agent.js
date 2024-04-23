import { rookMaster } from "./rook_agent.js";

import { generateSquare, pieces, squares } from "./chess.js";

export function rookAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let rookNode = document.getElementById(clickedSquareId);
  let isRook = rookNode.getInnerHTML();

  // Get the piece on the clicked square from the pieces array
  // alert(isRook)

  // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });

  document.querySelectorAll(".rookUp").forEach((square) => {
    square.style.border = "";
    square.classList.remove("rookUp");
  });

  document.querySelectorAll(".rookDiagonalDown").forEach((square) => {
    square.style.border = "";
    square.classList.remove("rookDiagonalDown");
  });

  document.querySelectorAll(".rookLeft").forEach((square) => {
    square.style.border = "";
    square.classList.remove("rookLeft");
  });

  document.querySelectorAll(".rookDiagonalRight").forEach((square) => {
    square.style.border = "";
    square.classList.remove("rookDiagonalRight");
  });


  // Check if the clicked square contains a queen or king
  if (isRook === "♖" || isRook === "♜") {
    localStorage.setItem("clicked_id_rook", clickedSquareId);

    // Add border to clicked square
    clickedSquare.style.border = "2px solid red";
    clickedSquare.classList.add("bordered");
    rookMaster(clickedSquareId);
  }
}
