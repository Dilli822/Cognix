import { horseAgent } from "./horse_main_agent.js";
import { queenAgent } from "./queen_main_agent.js";
import { rookAgent } from "./rook_main_agent.js";
import { bishopAgent } from "./bishop_main_agent.js";
import { kingAgent } from "./king_main_agent.js";
import { pawnAgent } from "./pawn_agent.js";
// Function to generate a square with a piece
export function generateSquare(id, isDark, piece) {
  const squareClass = isDark ? "bg-dark" : "bg-white";
  const square = document.createElement("div");
  square.className = `square ${squareClass}`;
  square.id = id;
  square.textContent = piece;
  document.getElementById("chessboard").appendChild(square);
}

// export const pieces = [
//   "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
//   "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
//   "", "", "", "", "", "", "", "",
//   "", "", "", "", "", "", "", "",
//   "", "", "", "", "", "", "", "",
//   "", "", "", "", "", "", "", "",
//   "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
//   "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
// ];

// export const pieces = [
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞",
//   "♞", "♞", "♞", "♞", "♞", "♞", "♞", "♞"
// ];

export const pieces = [
  "♜",
  "♞",
  "♝",
  "♛",
  "♚",
  "♝",
  "♞",
  "♜",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",

  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",

  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♖",
  "♘",
  "♗",
  "♕",
  "♔",
  "♗",
  "♘",
  "♖",
];

// export const pieces = [
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",

//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
//   "♗", "♗", "♝", "♗",  "♗", "♝", "♗", "♝",
// ];

// export const pieces = [
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",

//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",
//   "♜", "♖", "♜", "♖", "♜", "♖", "♜", "♜",

// ];

// export const pieces = [
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",

//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",
//   "♛", "♕", "♕", "♛", "♕", "♛", "♕", "♕",

// ];

// export const pieces = [
// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",
// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",
// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",
// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",

// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",
// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",
// "♙", "♟", "♟", "♟",    "♙", "♙", "♟", "♙",
// "♙", "♟", "♟", "♟",   "♟", "♟", "♟", "♙",

// "♟", "", "♟", "♟",   "♟", "♟", "♟", "♟",
// "♟", "♟", "♟", "♟",   "♟", "♟", "♟", "♟",
// "♙", "♟", "♙", "♟",   "♟", "♟", "♟", "♟",
// "♟", "♟", "♟", "♟",   "♟", "♟", "♟", "♟",

// "♟", "", "♟", "♟",   "♟", "♟", "♟", "♟",
// "♟", "♟", "♟", "♟",   "♟", "♟", "♟", "♟",
// "♟", "♟", "♟", "♟",   "♟", "♟", "♟", "♟",
// "♟", "♟", "♟", "♟",   "♙", "♟", "♙", "♟",

// ];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const id = row * 8 + col + 1;
    const isDark = (row + col) % 2 === 1;
    const piece = pieces[id - 1];
    generateSquare(id, isDark, piece);
  }
}

// Initialize localStorage
localStorage.setItem("blackTurn", "false");
localStorage.setItem("whiteTurn", "true");

let whiteTurn = localStorage.getItem("whiteTurn");
let blackTurn = localStorage.getItem("blackTurn");

// Function to handle click events
export function handleClick(event) {
  if (
    localStorage.getItem("blackTurn") !== "false" ||
    localStorage.getItem("whiteTurn") !== "false"
  ) {
    const clickedSquare = event.target;
    const isPawn = clickedSquare.textContent;

    if (isPawn === "♟" && localStorage.getItem("blackTurn") === "false") {
      console.log("black turn is not enabled");
      console.log("black turn not allowed");
      return;
    }

    if (isPawn === "♙" && localStorage.getItem("whiteTurn") === "true") {
      console.log("white turn  allowed");
      console.log("white pawn clicked");
      const forwardPawn = clickedSquare.id + 8;
      const forward16Pawn = clickedSquare.id + 16;

      

      console.log(forward16Pawn);
      console.log(forwardPawn);

      localStorage.setItem("blackTurn", "true");
      localStorage.setItem("whiteTurn", "false");
    }

    if (isPawn === "♟" && localStorage.getItem("blackTurn") === "true") {
      alert("black turn  allowed");
      const forwardPawn = parseInt(clickedSquare.id) + 8;
      const forward16Pawn = parseInt(clickedSquare.id) + 16;

      console.log(forward16Pawn);
      console.log(forwardPawn);

      localStorage.setItem("blackTurn", "false");
      localStorage.setItem("whiteTurn", "false");
    }
  }

  whiteTurn = localStorage.getItem("whiteTurn");
  blackTurn = localStorage.getItem("blackTurn");

  if (blackTurn === "false" && whiteTurn === "false") {
    console.log("GAME IS STARTED!");
    pawnAgent(event);
    rookAgent(event);
    horseAgent(event);
    bishopAgent(event);
    queenAgent(event);
    kingAgent(event);

  }
}

// Add event listener to each square
export const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});
