import {
    queenMaster
  } from "./queen_agent.js";
  
  import { generateSquare, pieces, squares } from "./chess.js";
  
  export function queenAgent(event) {
    const clickedSquare = event.target;
    const clickedSquareId = parseInt(clickedSquare.id);
  
    // Get the piece on the clicked square from the pieces array
    const piece = pieces[clickedSquareId];

      // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });

  

  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
});

document.querySelectorAll(".greenDiagonalDown").forEach((square) => {
    square.classList.remove("greenDiagonalDown");
});

document.querySelectorAll(".queenDiagonalRight").forEach((square) => {
    square.classList.remove("queenDiagonalRight");
});

document.querySelectorAll(".queenDiagonalDown").forEach((square) => {
    square.classList.remove("queenDiagonalDown");
});

document.querySelectorAll(".queenDiagonalUp").forEach((square) => {
    square.classList.remove("queenDiagonalUp");
});

document.querySelectorAll(".queenUp").forEach((square) => {
    square.classList.remove("queenUp");
});

document.querySelectorAll(".queenLeft").forEach((square) => {
    square.classList.remove("queenLeft");
});

document.querySelectorAll(".sequenceTopRightDiagonal").forEach((square) => {
    square.classList.remove("sequenceTopRightDiagonal");
});

document.querySelectorAll(".sequenceDownLeftDiagonal").forEach((square) => {
    square.classList.remove("sequenceDownLeftDiagonal");
});


  
    // Check if the clicked square contains a queen or king
    if (piece === "♕" || piece === "♚") {
      localStorage.setItem("clicked_id", clickedSquareId);
  
      // Add border to clicked square
      clickedSquare.style.border = "2px solid red";
      clickedSquare.classList.add("bordered");
  
      queenMaster(clickedSquareId);
    }

    

  }
  