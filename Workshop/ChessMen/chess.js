import {
  RestrictHorseBackward8step,
  RestrictHorseBackward16step,
} from "./horse_backward.js";

import {
  HorseForward,
  HorseForwardLeftEnd,
  HorseForwardRightEnd,
  forward8StepLeftLeft,
  forward8StepRightRight,
} from "./horse_forward.js";
// Function to generate a square with a piece
function generateSquare(id, isDark, piece) {
  const squareClass = isDark ? "bg-dark" : "bg-white";
  const square = document.createElement("div");
  square.className = `square ${squareClass}`;
  square.id = id;
  square.textContent = piece;
  document.getElementById("chessboard").appendChild(square);
}

const pieces = [
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
  "♞",
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
function handleClick(event) {
  document
    .querySelectorAll(".horse, .Lefthorse, .Righthorse")
    .forEach((square) => {
      square.classList.remove("horse", "Lefthorse", "Righthorse");
    });

  // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });

  // Remove border from previously clicked square
  document.querySelectorAll(".forwardLeftLefthorse").forEach((square) => {
    square.style.border = "";
    square.classList.remove("forwardLeftLefthorse");
  });

  document.querySelectorAll(".forwardRightRighthorse").forEach((square) => {
    square.style.border = "";
    square.classList.remove("forwardRightRighthorse");
  });


  const clickedSquare = event.target;
  const piece = clickedSquare.textContent;
  const clickedSquareId = parseInt(clickedSquare.id);
  localStorage.setItem("clicked_id", clickedSquareId);
  // Add border to clicked square
  clickedSquare.style.border = "2px solid red";
  clickedSquare.classList.add("bordered");

  // Check if the piece is a white or black horse
  piece === "♞"
    ? console.log("Dark Horse clicked!")
    : console.log("White Horse clicked!");
  if (
    clickedSquareId === 1 ||
    clickedSquareId === 2 ||
    clickedSquareId === 3 ||
    clickedSquareId === 4 ||
    clickedSquareId === 5 ||
    clickedSquareId === 6 ||
    clickedSquareId === 7 ||
    clickedSquareId === 8 ||
    clickedSquareId === 57 ||
    clickedSquareId === 58 ||
    clickedSquareId === 59 ||
    clickedSquareId === 60 ||
    clickedSquareId === 61 ||
    clickedSquareId === 62 ||
    clickedSquareId === 63 ||
    clickedSquareId === 64
  ) {
    RestrictHorseBackward8step(clickedSquareId);
  }
  if (
    clickedSquareId === 8 ||
    clickedSquareId === 16 ||
    clickedSquareId === 24 ||
    clickedSquareId === 32 ||
    clickedSquareId === 40 ||
    clickedSquareId === 48 ||
    clickedSquareId === 56 ||
    clickedSquareId === 64
  ) {
    HorseForwardRightEnd(clickedSquareId);
  }

  if (
    clickedSquareId === 1 ||
    clickedSquareId === 9 ||
    clickedSquareId === 17 ||
    clickedSquareId === 25 ||
    clickedSquareId === 33 ||
    clickedSquareId === 41 ||
    clickedSquareId === 49 ||
    clickedSquareId === 57
  ) {
    HorseForwardLeftEnd(clickedSquareId);
  }
  if (
    clickedSquareId === 1 ||
    clickedSquareId !== 9 ||
    clickedSquareId !== 17 ||
    clickedSquareId !== 25 ||
    clickedSquareId !== 33 ||
    clickedSquareId !== 41 ||
    clickedSquareId !== 49 ||
    clickedSquareId !== 57 ||
    clickedSquareId !== 1 ||
    clickedSquareId !== 9 ||
    clickedSquareId !== 17 ||
    clickedSquareId !== 25 ||
    clickedSquareId !== 33 ||
    clickedSquareId !== 41 ||
    clickedSquareId !== 49 ||
    clickedSquareId !== 57
  ) {
    HorseForward(clickedSquareId);
  }

  if (
    clickedSquareId === 9 ||
    clickedSquareId === 10 ||
    clickedSquareId === 11 ||
    clickedSquareId === 12 ||
    clickedSquareId === 13 ||
    clickedSquareId === 14 ||
    clickedSquareId === 15 ||
    clickedSquareId === 16 ||
    clickedSquareId === 56 ||
    clickedSquareId === 55 ||
    clickedSquareId === 54 ||
    clickedSquareId === 53 ||
    clickedSquareId === 52 ||
    clickedSquareId === 51 ||
    clickedSquareId === 50 ||
    clickedSquareId === 49
  ) {
    RestrictHorseBackward16step(clickedSquareId);
  }


  if(  (clickedSquareId >= 1 && clickedSquareId <= 64)){
    forward8StepLeftLeft(clickedSquareId);
  }

  if(clickedSquareId >= 1 && clickedSquareId <= 64){
    forward8StepRightRight(clickedSquareId);
  }
}

// Add event listener to each square
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});
