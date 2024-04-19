


import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let pawnNode = document.getElementById(clickedSquareId);
  let isPawn = pawnNode.innerHTML;

  // Check if the clicked square contains a pawn
  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";


  if (isPawn === "♟") {
    // Perform actions for black pawn
    if (!whiteTurn) {
      alert("from black pawn");
      alert(clickedSquareId);
      localStorage.setItem("iwhiteTurn", "true");
    }
  }

  if (isPawn === "♙") {
    // Perform actions for white pawn
    if (whiteTurn) {
      alert("from white pawn");
      alert(clickedSquareId);
      localStorage.setItem("iwhiteTurn", "false");
    }
  } 
  

}