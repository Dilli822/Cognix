import { horseAgent } from "./horse_main_agent.js";
import {queenAgent} from "./queen_main_agent.js";
import {rookAgent} from "./rook_main_agent.js";
import { bishopAgent } from "./bishop_main_agent.js";
import { kingAgent } from "./king_main_agent.js";
import {pawnAgent} from "./pawn_agent.js";

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

export const pieces = [
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",

  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",
  "♟", "♙", "♟", "♙",   "♟", "♙", "♟", "♙",

];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const id = row * 8 + col + 1;
    const isDark = (row + col) % 2 === 1;
    const piece = pieces[id - 1];
    generateSquare(id, isDark, piece);
  }
}

// Function to handle click events
export function handleClick(event) {
  horseAgent(event);
  queenAgent(event);
  rookAgent(event);
  bishopAgent(event);
  kingAgent(event);
  pawnAgent(event);
}

// Add event listener to each square
export const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});
