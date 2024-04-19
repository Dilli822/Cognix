


import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let pawnNode = document.getElementById(clickedSquareId);
  let isPawn = pawnNode.innerHTML;

  // Check if the clicked square contains a pawn
  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";
    // Remove border from previously clicked square
    document.querySelectorAll(".bordered").forEach((square) => {
      square.style.border = "";
      square.classList.remove("bordered");
    });
  
    // Remove border from previously clicked square
    document.querySelectorAll(".highlightedPawn").forEach((square) => {
      square.style.border = "";
      square.classList.remove("highlightedPawn");
    });
    

  if (isPawn === "♙") {
    // Perform actions for white pawn
    if (whiteTurn) {


      alert("from white pawn");
      let forward8Pawn = clickedSquareId - 8;
      let forward8DiagonalLeft = clickedSquareId - 8;
      let finalForward8DiagonalLeft = forward8DiagonalLeft - 1;
      let forward8DiagonalRight = clickedSquareId - 8;
      let finalForward8DiagonalRight = forward8DiagonalRight + 1;

      // alert(typeof(forward8Pawn))

      console.log("white forward---> " + forward8Pawn)


      document.getElementById(forward8Pawn.toString()).classList.add("highlightedPawn");
      document.getElementById(finalForward8DiagonalLeft.toString()).classList.add("highlightedPawn");
      document.getElementById(finalForward8DiagonalRight.toString()).classList.add("highlightedPawn");



      localStorage.setItem("iwhiteTurn", "false");
    }
  } 

  if (isPawn === "♟") {
     // Add border to clicked square

    // Perform actions for black pawn
    if (!whiteTurn) {
  
  

      alert("from black pawn");
      // alert(clickedSquareId);
      let forward8Pawn = clickedSquareId + 8;
      let forward8DiagonalLeft = clickedSquareId + 8;
      let finalForward8DiagonalLeft = forward8DiagonalLeft - 1;
      let forward8DiagonalRight = clickedSquareId + 8;
      let finalForward8DiagonalRight = forward8DiagonalRight + 1;



      document.getElementById(forward8Pawn.toString()).classList.add("highlightedPawn");
      document.getElementById(finalForward8DiagonalLeft.toString()).classList.add("highlightedPawn");
      document.getElementById(finalForward8DiagonalRight.toString()).classList.add("highlightedPawn");


      console.log("black forward---> " + forward8Pawn)
      localStorage.setItem("iwhiteTurn", "true");
    }
  }

  

}