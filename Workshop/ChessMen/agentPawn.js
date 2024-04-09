let chessboard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],

  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],

  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

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
