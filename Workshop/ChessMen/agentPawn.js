let chessboard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", ""],
  ["", "♟", "♟", "♟", "♟", "♟", "♟", "♙"],

  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],

  ["♙", "♙", "♙", "♙", "♙", "♙", "", "♟"],
  ["", "♘", "♗", "♕", "♔", "♗", "♘", ""],
];

// Died characters arrays for white and black
let whiteDied = ["♜", "♞", "♝", "♛"];
let blackDied = ["♗", "♘", "♖"];

function calculateValidMoves(chessboard) {
  let updatedChessboard = chessboard.map((row) => [...row]); // Create a copy of the chessboard

  // Loop through the chessboard
  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {
      let piece = chessboard[row][col];
      if (piece === "♟") {
        // Black pawn
        let pawnLabel = "bp-position" + (row * 8 + col); // Dynamically assign label based on position
        // Check if the square in front is empty
        if (row + 1 < 8 && chessboard[row + 1][col] === "") {
          updatedChessboard[row + 1][col] = "o";
        } else {
          alert("YOUR black PAWN REACHED TO THE ENEMY white TOP STATE");
          Revive();
          updatedChessboard[row + 1][col] = "X"; // Unavailable state
        }
        // Check if facing white pawns are present
        if (row + 1 < 8 && chessboard[row + 1][col] === "♙") {
          console.log(`${pawnLabel}  is facing a wp`);
        }
        // Check if diagonal squares have white pawns
        if (
          row + 1 < 8 &&
          col - 1 >= 0 &&
          chessboard[row + 1][col - 1] === "♙"
        ) {
          console.log(`${pawnLabel}  is facing a wp diagonally to the left`);
        }
        if (
          row + 1 < 8 &&
          col + 1 < 8 &&
          chessboard[row + 1][col + 1] === "♙"
        ) {
          console.log(`${pawnLabel}  is facing a wp diagonally to the right`);
        }
      } else if (piece === "♙") {
        // White pawn
        let pawnLabel = "wp" + (row * 8 + col); // Dynamically assign label based on position
        // Check if the square in front is empty
        if (row - 1 >= 0 && chessboard[row - 1][col] === "") {
          updatedChessboard[row - 1][col] = "o";
        } else {
          alert("your state white pawn reached to the top black state");
          Revive();
          updatedChessboard[row - 1][col] = "X"; // Unavailable state
        }
        // Check if facing black pawns are present
        if (row - 1 >= 0 && chessboard[row - 1][col] === "♟") {
          console.log(`${pawnLabel} is facing a bp`);
        }
        // Check if diagonal squares have black pawns
        if (
          row - 1 >= 0 &&
          col - 1 >= 0 &&
          chessboard[row - 1][col - 1] === "♟"
        ) {
          console.log(`${pawnLabel} is facing a bp diagonally to the left`);
        }
        if (
          row - 1 >= 0 &&
          col + 1 < 8 &&
          chessboard[row - 1][col + 1] === "♟"
        ) {
          console.log(`${pawnLabel} is facing a bp diagonally to the right`);
        }
      }
    }
  }

  return updatedChessboard;
}

// Function to print the chessboard
function printChessboard(chessboard) {
  for (let row of chessboard) {
    console.log(row.map((cell) => (cell === "" ? "“”" : cell)).join(" "));
  }
}

// Print the initial chessboard
console.log("Initial Chessboard:");
printChessboard(chessboard);

// Calculate valid moves and update the chessboard
let updatedChessboard = calculateValidMoves(chessboard);

// Print the updated chessboard
console.log("Chessboard with available spaces marked:");
printChessboard(updatedChessboard);

function observeDOMChanges() {
  const targetNode = document.body;

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver((mutationsList, observer) => {
    // Call calculateValidMoves when there are changes in the DOM
    let updatedChessboard = calculateValidMoves(chessboard);
    // Print the updated chessboard
    console.log("Chessboard with available spaces marked after DOM change:");
    printChessboard(updatedChessboard);
  });

  // Configuration of the observer:
  const config = {
    childList: true,
    subtree: true,
    characterData: true,
    characterDataOldValue: true,
  };

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}

// Print the initial chessboard
console.log("Initial Chessboard:");
printChessboard(chessboard);

// Call the function to start observing DOM changes
observeDOMChanges();

function Revive() {
  // Render died characters for white
  document.getElementById("rival").style.display = "block";

  // Render died characters for white
  const whiteDiedHTML = whiteDied
    .map((piece) => `<div>${piece}</div>`)
    .join("");
  document.getElementById(
    "whiteDied"
  ).innerHTML = `<h3 style="display: flex;"> White Died Characters: ${whiteDiedHTML}</h3>`;
  document.getElementById("whiteDied").style.display = "block";

  // Render died characters for black
  const blackDiedHTML = blackDied
    .map((piece) => `<div >${piece}</div>`)
    .join("");
  document.getElementById(
    "blackDied"
  ).innerHTML = `<h3 style="display: flex;">Black Died Characters: ${blackDiedHTML} </h3>`;
  document.getElementById("blackDied").style.display = "block";

  // Combine both arrays and store in localStorage
  const allDiedCharacters = {
    white: whiteDied,
    black: blackDied,
  };

  // Store in localStorage
  localStorage.setItem("diedCharacters", JSON.stringify(allDiedCharacters));

  // Retrieve from localStorage
  const retrievedDiedCharacters = JSON.parse(
    localStorage.getItem("diedCharacters")
  );
  console.log(retrievedDiedCharacters);
}
