import { horseAgent } from "./horse_main_agent.js";
import { queenAgent } from "./queen_main_agent.js";
import { rookAgent } from "./rook_main_agent.js";
import { bishopAgent } from "./bishop_main_agent.js";
import { kingAgent } from "./king_main_agent.js";
import { pawnAgent } from "./pawn_agent.js";



// Initialize localStorage
localStorage.setItem("initial_blackTurn", false);
localStorage.setItem("initial_whiteTurn", false);

let initial_whiteTurn = localStorage.getItem("initial_whiteTurn");
let initial_blackTurn = localStorage.getItem("initial_blackTurn");

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
//  "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
// "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
// "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
// "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
//   "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
//   "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
//   "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘",
//   "♞", "♘", "♘", "♞", "♘", "♞", "♞", "♘"
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


export const pieces = [
  "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
  "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
  "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
];

// export const pieces = [
  // "", "", "", "", "", "", "", "",

  // "♟", "♟", "♟", "♟", "♟", "♟", "♟", "",
  // // "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
  // // "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
  // // "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",

  // // "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
  // // // "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",

  // "", "", "♙", "♟", "", "", "", "",
  // "", "♙", "", "", "", "", "", "",


  // // "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
  // "♟", "", "", "", "", "", "", "",
  // "♙", "♟", "♙", "", "", "", "", "",

  // "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",

  // "", "", "", "", "", "", "", "",
  // "", "", "♟", "♖", "", "♛", "", "",
  // "♟", "♙", "", "", "", "", "","♟",
  // "", "", "", "", "", "", "", "",
  // "", "", "", "", "", "", "", "",
  // "", "♜", "", "", "", "", "", "",

  // "♟", "", "♙", "", "", "", "",  "♟",
  // "♖", "♙", "", "", "", "", "","♟",
  
  //   "♖", "♘", "♗", "♕", "", "", "", "♖"
// ];

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

      // Remove border from previously clicked square
      document.querySelectorAll(".pawn8step").forEach((square) => {
        square.style.border = "";
        square.classList.remove("pawn8step");
      });

            // Remove border from previously clicked square
            document.querySelectorAll(".forward16Pawn").forEach((square) => {
              square.style.border = "";
              square.classList.remove("forward16Pawn");
            });

            
  if (
    localStorage.getItem("initial_blackTurn") !== "false" ||
    localStorage.getItem("initial_whiteTurn") !== "false"
  ) {
    const clickedSquare = event.target;
    const isPawn = clickedSquare.textContent;

    if (isPawn === "♟" && localStorage.getItem("initial_blackTurn") === "false") {
      console.log("black turn is not enabled");
      console.log("black turn not allowed");
      return;
    }

    if (isPawn === "♙" && localStorage.getItem("initial_whiteTurn") === "true") {

      let whitePawnsClickable = true; 

      let storeFirstClickedId = clickedSquare;
      console.log("white turn allowed");
      console.log("white pawn clicked");
      
      const forwardPawn = parseInt(clickedSquare.id) - 8; 
      const forward16Pawn = parseInt(clickedSquare.id) - 16;
    
      console.log(forward16Pawn);
      console.log(forwardPawn);
    
      // Add classes to the destination squares
      if (document.getElementById(forwardPawn.toString())) {
        document.getElementById(forwardPawn.toString()).classList.add("pawn8step");
      }
    
      if (document.getElementById(forward16Pawn.toString())) {
        document.getElementById(forward16Pawn.toString()).classList.add("forward16Pawn");
      }
    
      // Add click event to the destination squares /// binding the event listener here
      if (document.getElementById(forwardPawn.toString())) {
        document.getElementById(forwardPawn.toString()).addEventListener("click", function() {
          // Your click event logic here
          if (whitePawnsClickable) {
          console.log("Clicked on forwardPawn");
          storeFirstClickedId.innerHTML = "";
          document.getElementById(forwardPawn.toString()).innerHTML = "♙";
          }         whitePawnsClickable = false;
          // Add your logic for this click event
        });
      }
    
      if (document.getElementById(forward16Pawn.toString())) {
        document.getElementById(forward16Pawn.toString()).addEventListener("click", function() {
          // Your click event logic here
          console.log("Clicked on forward16Pawn");
                        if (whitePawnsClickable) {
              storeFirstClickedId.innerHTML = "";
              document.getElementById(forward16Pawn.toString()).innerHTML = "♙";
                        }
                        whitePawnsClickable = false;
          // Add your logic for this click event
        });

        
      }
    
      localStorage.setItem("initial_blackTurn", "true");
      localStorage.setItem("initial_whiteTurn", "false");
    }
    

    if (isPawn === "♟" && localStorage.getItem("initial_blackTurn") === "true") {
      let storeFirstClickedId = clickedSquare;
      console.log("black turn  allowed");
      const forwardPawn = parseInt(clickedSquare.id) + 8;
      const forward16Pawn = parseInt(clickedSquare.id) + 16;

      console.log(forward16Pawn);
      console.log(forwardPawn);

      document.getElementById(forwardPawn.toString()).classList.add("pawn8step");
      document.getElementById(forward16Pawn.toString()).classList.add("forward16Pawn");


      localStorage.setItem("initial_blackTurn", "false");
      localStorage.setItem("initial_whiteTurn", "false");
      let whitePawnsClickable = true; 

            // Add click event to the destination squares /// binding the event listener here
            if (document.getElementById(forwardPawn.toString())) {
              document.getElementById(forwardPawn.toString()).addEventListener("click", function() {
                // Your click event logic here
                if (whitePawnsClickable) {
                  // Your click event logic here
                  console.log("Clicked on forward16Pawn");
                  storeFirstClickedId.innerHTML = "";
                  document.getElementById(forwardPawn.toString()).innerHTML = "♟";
                  
                  // Set white pawns to not clickable anymore
                  whitePawnsClickable = false;
              }
                // Add your logic for this click event
              });
            }
          

            if (document.getElementById(forward16Pawn.toString())) {
              document.getElementById(forward16Pawn.toString()).addEventListener("click", function() {
                // Your click event logic here
                if (whitePawnsClickable) {
                console.log("Clicked on forward16Pawn");
               
                    storeFirstClickedId.innerHTML = "";
                    document.getElementById(forward16Pawn.toString()).innerHTML = "♟";
                    whitePawnsClickable = false;
                }
                // Add your logic for this click event
              });
            }

    }
  }


  initial_whiteTurn = localStorage.getItem("initial_whiteTurn");
  initial_blackTurn = localStorage.getItem("initial_blackTurn");


  if (initial_blackTurn === "false" && initial_whiteTurn === "false") {

    console.log("GAME IS STARTED!");
    
    pawnAgent(event);
    rookAgent(event);
    horseAgent(event);
    bishopAgent(event);
    queenAgent(event);
    kingAgent(event);

    // Call printLayout to print the current layout after each move
    printLayout();

  }
}

// Add event listener to each square
export const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});


// Initialize old and new chessboard layouts
let oldChessboardLayout = [];
let newChessboardLayout = [];

// Function to print the current layout and save to localStorage

export function printLayout() {
    const chessboard = document.getElementById("chessboard");
    const squares = chessboard.querySelectorAll(".square");
    let layout = [];
    let row = [];

    // Iterate through each square to build the layout
    squares.forEach((square) => {
        const piece = square.textContent || " ";
        row.push(`"${piece}"`);

        // Check if it's the end of a row
        if ((square.id - 1) % 8 === 7) {
            layout.push(`[${row.join(', ')}]`);
            row = [];
        }
    });

    // Save old layout
    oldChessboardLayout.push(newChessboardLayout.join(',\n'));

    // Update new layout
    newChessboardLayout = layout;

    // Store layouts in localStorage
    localStorage.setItem("oldChessboardLayout", JSON.stringify(oldChessboardLayout));
    localStorage.setItem("newChessboardLayout", JSON.stringify(newChessboardLayout));

    // Log old and new layouts
    console.log(`Old Chessboard Layout ${oldChessboardLayout.length}:`);
    console.log(oldChessboardLayout[oldChessboardLayout.length - 1]);

    console.log(`New Chessboard Layout ${oldChessboardLayout.length}:`);
    console.log(newChessboardLayout.join(',\n'));
}

// Create a new observer to track changes in the chessboard
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // Check if nodes are added or removed from the chessboard
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
            printLayout();
        }
    });
});

// Configuration for the observer
const config = {
    childList: true, // Listen for changes to child elements
    subtree: true   // Listen for changes to the whole subtree
};

// Start observing the chessboard container
observer.observe(document.getElementById("chessboard"), config);
