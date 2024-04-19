import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let pawnNode = document.getElementById(clickedSquareId);
  let isPawn = pawnNode.innerHTML;

  //     // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });

  document.querySelectorAll(".highlightedPawn").forEach((square) => {
    square.style.border = "";
    square.classList.remove("highlightedPawn");
  });

  // Check if the clicked square contains a pawn
  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  if (isPawn === "♙" && whiteTurn) {
    // Perform actions for white pawn
    alert("from white pawn");

    localStorage.setItem("pawn_clicked_id", clickedSquareId);
    console.log("pawn clicked");

    // Add border to clicked square
    clickedSquare.style.border = "2px solid red";
    clickedSquare.classList.add("bordered");

    // Calculate the square ahead of the pawn and diagonal square
    const forward = clickedSquareId - 8;

    console.log("white pawn forward: " + forward);
    localStorage.setItem("iwhiteTurn", "false");
  }

  if (isPawn === "♟" && !whiteTurn) {
    // Perform actions for black pawn
    alert("from black pawn");

    localStorage.setItem("iwhiteTurn", "true");
  }
}

//     if (isPawn === "♙") {

//       if (isPawn === "♟" && whiteTurn) {
//         // Check if the piece is a black pawn

//         // localStorage.setItem("pawn_clicked_id", clickedSquareId);
//         // console.log("pawn clicked");

//         // Add border to clicked square
//         clickedSquare.style.border = "2px solid red";
//         clickedSquare.classList.add("bordered");

//         // Calculate the square ahead of the pawn and diagonal square
//         const forward = clickedSquareId - 8;

//         console.log("black pawn forward: " + forward);

//         // Check if the square ahead exists and add a class to style it
//         if (forward >= 1 && forward <= 64) {
//             const forwardSquare = document.getElementById(forward.toString());
//             if (forwardSquare) {
//                 forwardSquare.classList.add("highlightedPawn");
//             }
//         }

//         if (
//             clickedSquareId !== 1 &&
//             clickedSquareId !== 8 &&
//             clickedSquareId !== 9 &&
//             clickedSquareId !== 16 &&
//             clickedSquareId !== 17 &&
//             clickedSquareId !== 24 &&
//             clickedSquareId !== 25 &&
//             clickedSquareId !== 32 &&
//             clickedSquareId !== 33 &&
//             clickedSquareId !== 40 &&
//             clickedSquareId !== 41 &&
//             clickedSquareId !== 48 &&
//             clickedSquareId !== 49 &&
//             clickedSquareId !== 56 &&
//             clickedSquareId !== 57 &&
//             clickedSquareId !== 64
//         ) {
//             const forwardDiagonalRight = clickedSquareId - 7;
//             const forwardDiagonalLeft = clickedSquareId - 9;
//             console.log("black pawn diagonal Right: " + forwardDiagonalRight);
//             console.log("black pawn diagonal Left: " + forwardDiagonalLeft);
//             let forwardiagonalleftcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
//             console.log(forwardiagonalleftcontent);

//             let forwardiagonalRightcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
//             console.log(forwardiagonalRightcontent);

//             if (
//                 forwardiagonalleftcontent === "♟" ||
//                 forwardiagonalleftcontent === "♜" ||
//                 forwardiagonalleftcontent === "♝" ||
//                 forwardiagonalleftcontent === "♞" ||
//                 forwardiagonalleftcontent === "♛" ||
//                 forwardiagonalleftcontent === "♚" ||
//                 forwardiagonalRightcontent === "♟" ||
//                 forwardiagonalRightcontent === "♜" ||
//                 forwardiagonalRightcontent === "♝" ||
//                 forwardiagonalRightcontent === "♞" ||
//                 forwardiagonalRightcontent === "♛" ||
//                 forwardiagonalRightcontent === "♚"
//             ) {
//                 // Check if the diagonal square exists and add a class to style it
//                 if (forwardDiagonalRight >= 1 && forwardDiagonalRight <= 64) {
//                     const forwardDiagonalSQ = document.getElementById(forwardDiagonalRight.toString());
//                     if (forwardDiagonalSQ) {
//                         forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
//                     }
//                 }

//                 // Check if the diagonal square exists and add a class to style it
//                 if (forwardDiagonalLeft >= 1 && forwardDiagonalLeft <= 64) {
//                     const forwardDiagonalSQ = document.getElementById(forwardDiagonalLeft.toString());
//                     if (forwardDiagonalSQ) {
//                         forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
//                     }
//                 }
//             }
//         }

//         if (clickedSquareId == 1 || clickedSquareId == 9 || clickedSquareId == 17 || clickedSquareId == 25 || clickedSquareId == 33 || clickedSquareId == 41 || clickedSquareId == 49 || clickedSquareId == 57) {
//             const forward = clickedSquareId - 8;

//             console.log("black pawn forward: " + forward);

//             // Check if the square ahead exists and add a class to style it
//             if (forward >= 1 && forward <= 64) {
//                 const forwardSquare = document.getElementById(forward.toString());
//                 if (forwardSquare) {
//                     forwardSquare.classList.add("highlightedPawn");
//                 }
//             }

//             const forwardDiagonalRight = clickedSquareId - 7;

//             console.log("black pawn diagonal Right: " + forwardDiagonalRight);

//             let forwardiagonalRightcontent = document.getElementById(forwardDiagonalRight).getInnerHTML();
//             console.log(forwardiagonalRightcontent);

//             if (
//                 forwardiagonalRightcontent === "♟" ||
//                 forwardiagonalRightcontent === "♜" ||
//                 forwardiagonalRightcontent === "♝" ||
//                 forwardiagonalRightcontent === "♞" ||
//                 forwardiagonalRightcontent === "♛" ||
//                 forwardiagonalRightcontent === "♚"
//             ) {
//                 // Check if the diagonal square exists and add a class to style it
//                 if (forwardDiagonalRight >= 1 && forwardDiagonalRight <= 64) {
//                     const forwardDiagonalSQ = document.getElementById(forwardDiagonalRight.toString());
//                     if (forwardDiagonalSQ) {
//                         forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
//                     }
//                 }
//             }
//         }

//         if (clickedSquareId == 8 || clickedSquareId == 16 || clickedSquareId == 24 || clickedSquareId == 32 || clickedSquareId == 40 || clickedSquareId == 48 || clickedSquareId == 56 || clickedSquareId == 64) {
//             const forward = clickedSquareId - 8;

//             console.log("black pawn forward: " + forward);

//             // Check if the square ahead exists and add a class to style it
//             if (forward >= 1 && forward <= 64) {
//                 const forwardSquare = document.getElementById(forward.toString());
//                 if (forwardSquare) {
//                     forwardSquare.classList.add("highlightedPawn");
//                 }
//             }
//             const forwardDiagonalLeft = clickedSquareId - 8;
//             const finalForwardDiagonalLeft = forwardDiagonalLeft - 1;
//             console.log("black pawn diagonal Right: " + finalForwardDiagonalLeft);

//             let forwardiagonalleftcontent = document.getElementById(finalForwardDiagonalLeft).getInnerHTML();
//             console.log(forwardiagonalleftcontent);

//             if (forwardiagonalleftcontent === "♟" || forwardiagonalleftcontent === "♜" || forwardiagonalleftcontent === "♝" || forwardiagonalleftcontent === "♞" || forwardiagonalleftcontent === "♛" || forwardiagonalleftcontent === "♚") {
//                 // Check if the diagonal square exists and add a class to style it
//                 if (finalForwardDiagonalLeft >= 1 && finalForwardDiagonalLeft <= 64) {
//                     const forwardDiagonalSQ = document.getElementById(finalForwardDiagonalLeft.toString());
//                     if (forwardDiagonalSQ) {
//                         forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
//                     }
//                 }
//             }
//         }
//     }

//     localStorage.setItem("iwhiteTurn", "false");

//   }

//     if (isPawn === "♟") {
//       if (isPawn === "♙" && !whiteTurn) {
//         // localStorage.setItem("pawn_clicked_id", clickedSquareId);
//         // console.log("pawn clicked");

//         // Add border to clicked square
//         clickedSquare.style.border = "2px solid red";
//         clickedSquare.classList.add("bordered");
//         // Calculate the square ahead of the pawn
//         const backward = clickedSquareId + 8;
//         const forwardDiagonalRight = clickedSquareId + 7;
//         const forwardDiagonalLeft = clickedSquareId + 9;

//         // Check if the square ahead exists and add a class to style it
//         if (backward >= 1 && backward <= 64) {
//             const forwardSquare = document.getElementById(backward.toString());
//             if (forwardSquare) {
//                 forwardSquare.classList.add("highlightedPawn");
//             }
//         }

//         let forwardiagonalRightcontent = document.getElementById(forwardDiagonalRight).getInnerHTML();
//         console.log(forwardiagonalRightcontent);

//         let forwardiagonalLeftcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
//         console.log(forwardiagonalLeftcontent);

//         if (forwardiagonalRightcontent === "♙" || forwardiagonalRightcontent === "♖" || forwardiagonalRightcontent === "♗" || forwardiagonalRightcontent === "♘" || forwardiagonalRightcontent === "♔" || forwardiagonalRightcontent === "♕") {
//             // Check if the diagonal square exists and add a class to style it
//             if (forwardDiagonalRight >= 1 && forwardDiagonalRight <= 64) {
//                 const forwardDiagonalSQ = document.getElementById(forwardDiagonalRight.toString());
//                 if (forwardDiagonalSQ) {
//                     forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
//                 }
//             }

//             // Check if the diagonal square exists and add a class to style it
//             if (forwardDiagonalLeft >= 1 && forwardDiagonalLeft <= 64) {
//                 const forwardDiagonalSQ = document.getElementById(forwardDiagonalLeft.toString());
//                 if (forwardDiagonalSQ) {
//                     forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
//                 }
//             }
//         }
//     }

//     localStorage.setItem("iwhiteTurn", "true");
//   }
// }
