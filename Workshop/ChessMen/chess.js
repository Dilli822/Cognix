
import {
  HorseMaster,
  HorseForwardLeftEnd,
  HorseForwardRightEnd,
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


  document.querySelectorAll(".rightEndLeftLeft").forEach((square) => {
    square.style.border = "";
    square.classList.remove("rightEndLeftLeft");


  });

  document.querySelectorAll(".backward8LeftLeft").forEach((square) => {
    square.style.border = "";
    square.classList.remove("backward8LeftLeft");


  });
  document.querySelectorAll(".finalBackWar16LeftLeft").forEach((square) => {
    square.style.border = "";
    square.classList.remove("finalBackWar16LeftLeft");


  });


  document.querySelectorAll(".backward8RightRight").forEach((square) => {
    square.style.border = "";
    square.classList.remove("backward8RightRight");


  });



  document.querySelectorAll(".backward16RightRight").forEach((square) => {
    square.style.border = "";
    square.classList.remove("backward16RightRight");


  });

  document.querySelectorAll(".secondLast56Forward").forEach((square) => {
    square.style.border = "";
    square.classList.remove("secondLast56Forward");
  });

    document.querySelectorAll(".secondLast56Backward").forEach((square) => {
      square.style.border = "";
      square.classList.remove("secondLast56Backward");
    });
      

  document.querySelectorAll(".backward16stepLeft").forEach((square) => {
    square.style.border = "";
    square.classList.remove("backward16stepLeft");

  });


  // Remove classes for elements with added classes
document.querySelectorAll(".horseforward16Left").forEach((square) => {
  square.classList.remove("horseforward16Left");
});
document.querySelectorAll(".horseforward8left").forEach((square) => {
  square.classList.remove("horseforward8left");
});
document.querySelectorAll(".horseforward8right").forEach((square) => {
  square.classList.remove("horseforward8right");
});
document.querySelectorAll(".finalforward16Right").forEach((square) => {
  square.classList.remove("finalforward16Right");
});
document.querySelectorAll(".finalBackward16Left").forEach((square) => {
  square.classList.remove("finalBackward16Left");
});
document.querySelectorAll(".finalBackward16Right").forEach((square) => {
  square.classList.remove("finalBackward16Right");
});
document.querySelectorAll(".finalBackward8Left").forEach((square) => {
  square.classList.remove("finalBackward8Left");
});
document.querySelectorAll(".finalBackward8Right").forEach((square) => {
  square.classList.remove("finalBackward8Right");
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

  if(
    clickedSquareId >= 11 && clickedSquareId <= 16 || 
    clickedSquareId >= 19 &&  clickedSquareId <= 22 || 
    clickedSquareId >= 27 &&  clickedSquareId <= 30 || 
    clickedSquareId  >= 33 && clickedSquareId <= 38 ||
    clickedSquareId >= 41 && clickedSquareId <= 46 ||
    clickedSquareId === 51 
  ){
    HorseMaster(clickedSquareId)
  }



}

// Add event listener to each square
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});
