let chessboard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];
// import { oldChessboard, chessboard } from "./DOM_Monitor.js";

// Function to ensure all rows have the same length
function ensureRowsLength(chessboard) {
    const maxLength = Math.max(...chessboard.map(row => row.length));
    for (let row of chessboard) {
        while (row.length < maxLength) {
            row.push("");
        }
    }
}

ensureRowsLength(chessboard); // Ensure all rows have the same length

function calculateValidMoves(chessboard) {
    let updatedChessboard = chessboard.map(row => [...row]); // Create a copy of the chessboard

    // Loop through the chessboard
    for (let row = 0; row < chessboard.length; row++) {
        for (let col = 0; col < chessboard[row].length; col++) {
            let piece = chessboard[row][col];
            if (piece === '♟') { // Black pawn
                // Check if the square in front is empty
                if (row + 1 < 8 && chessboard[row + 1][col] === '') {
                    updatedChessboard[row + 1][col] = 'o';
                } else {
                    updatedChessboard[row + 1][col] = 'X'; // Unreached state
                }
            } else if (piece === '♙') { // White pawn
                // Check if the square in front is empty
                if (row - 1 >= 0 && chessboard[row - 1][col] === '') {
                    updatedChessboard[row - 1][col] = 'o';
                } else {
                    updatedChessboard[row - 1][col] = 'X'; // Unreached state
                }
            }
        }
    }

    return updatedChessboard;
}

// Function to print the chessboard
function printChessboard(chessboard) {
    for (let row of chessboard) {
        console.log(row.join(' '));
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

// Function to create MutationObserver
function observeDOMChanges() {
    const targetNode = document.body;

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver((mutationsList, observer) => {
        // Call calculateValidMoves when there are changes in the DOM
        updatedChessboard = calculateValidMoves(chessboard);
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

// Call the function to start observing DOM changes
observeDOMChanges();
