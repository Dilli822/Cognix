import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let pawnNode = document.getElementById(clickedSquareId);
  let isPawn = pawnNode.innerHTML;

  // Check if the clicked square contains a pawn
  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  if (isPawn === "♙" && whiteTurn) {
    // Perform actions for white pawn
    alert("from white pawn");
    localStorage.setItem("iwhiteTurn", "false");
  } else if (isPawn === "♟" && !whiteTurn) {
    // Perform actions for black pawn
    alert("from black pawn");
    localStorage.setItem("iwhiteTurn", "true");
  }
}