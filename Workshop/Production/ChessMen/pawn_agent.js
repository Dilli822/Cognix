import { generateSquare, pieces, squares, printLayout } from "./chess.js";

export function pawnAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let pawnNode = document.getElementById(clickedSquareId);
  let isPawn = pawnNode.innerHTML;

  let initialLength;
  let newLength;

  console.log("initial length at first " + initialLength);
  console.log("new length at first " + newLength);

  // Check if the clicked square contains a pawn
  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";
  // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });

  // Remove border from previously clicked square
  document.querySelectorAll(".highlightedPawn").forEach((square) => {
    square.style.border = "";
    square.classList.remove("highlightedPawn");
  });

  document.querySelectorAll(".highlightedPawn16").forEach((square) => {
    square.style.border = "";
    square.classList.remove("highlightedPawn16");
  });

  if (isPawn === "♙") {
    // Perform actions for white pawn
    // if (whiteTurn) {
      console.log("from white pawn");
      let forward8Pawn = clickedSquareId - 8;
      let forward16Pawn = clickedSquareId - 16;
      let forward8DiagonalLeft = clickedSquareId - 8;
      let finalForward8DiagonalLeft = forward8DiagonalLeft - 1;
      let forward8DiagonalRight = clickedSquareId - 8;
      let finalForward8DiagonalRight = forward8DiagonalRight + 1;

      // alert(typeof(forward8Pawn))
      document
        .getElementById(forward8Pawn.toString())
        .classList.add("highlightedPawn");
      document
        .getElementById(finalForward8DiagonalLeft.toString())
        .classList.add("highlightedPawnLeft");
      document
        .getElementById(finalForward8DiagonalRight.toString())
        .classList.add("highlightedPawnRight");


        

        if ([51, 52, 53, 54, 55, 56, 57, 58].includes(clickedSquareId)) {
          document.getElementById(forward16Pawn.toString()).classList.add("highlightedPawn16");
      }
      
      // Add event listeners

      // Check conditions
      // if (
      //   document.getElementById(finalForward8DiagonalLeft.toString())
      //     .textContent === "♟" ||
      //   document.getElementById(finalForward8DiagonalLeft.toString())
      //     .textContent === "♜" ||
      //   document.getElementById(finalForward8DiagonalLeft.toString())
      //     .textContent === "♞" ||
      //   document.getElementById(finalForward8DiagonalLeft.toString())
      //     .textContent === "♝" ||
      //   document.getElementById(finalForward8DiagonalLeft.toString())
      //     .textContent === "♚" ||
      //   document.getElementById(finalForward8DiagonalLeft.toString())
      //     .textContent === "♛"
      // ) {
      //   console.log("enemies at the left side");

      //   // Get the DOM elements
      //   let pawnDiagonalLeftElement = document.getElementById(
      //     finalForward8DiagonalLeft.toString()
      //   );
      //   let originalPawnPlace = document.getElementById(
      //     clickedSquareId.toString()
      //   );
      //   let pawnDiagonalLeftContent = pawnDiagonalLeftElement.innerHTML;
      //   // Add event listener to the DOM element
      //   pawnDiagonalLeftElement.addEventListener("click", function () {
      //     // Set the innerHTML of the DOM elements
      //     originalPawnPlace.innerHTML = "";
      //     pawnDiagonalLeftElement.innerHTML = "♙";

      //     // Check for layout change
      //     var oldChess = localStorage.getItem("newChessboardLayout");

      //     // Update the layout on the chessboard
      //     printLayout();

      //     var newChess = localStorage.getItem("newChessboardLayout");
      //   });
      // }

      // if (
      //   document.getElementById(forward8Pawn.toString()).textContent === "" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♟" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♜" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♞" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♝" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♚" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♛" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♙" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♔" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♘" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♖" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♗" &&
      //   document.getElementById(forward8Pawn.toString()).textContent !== "♕"
      // ) {
      //   let originalPawnPlace = document.getElementById(
      //     clickedSquareId.toString()
      //   );
      //   let pawnDiagonalForwardElement = document.getElementById(
      //     forward8Pawn.toString()
      //   );

      //   pawnDiagonalForwardElement.addEventListener("click", function () {
      //     // Clear the original pawn place and set the diagonal pawn to "♙"
      //     originalPawnPlace.innerHTML = "";
      //     pawnDiagonalForwardElement.innerHTML = "♙";

      //     // Get the current and previous chessboard layouts from localStorage
      //     let oldChess = localStorage.getItem("newChessboardLayout");

      //     // Update the layout on the chessboard
      //     printLayout();

      //     let newChess = localStorage.getItem("newChessboardLayout");

      //     // Check if the layout has changed
      //     if (oldChess === newChess) {
      //       alert("No layout change, something went wrong!");
      //       return; // Exit the function if no layout change
      //     }

      //     // Get the eliminated pawns from localStorage
      //     let eliminatedPawns =
      //       JSON.parse(localStorage.getItem("eliminatedBlacks")) || [];

      //     // Count the number of black pawns in the new chess layout
      //     let blackPawnCount = (newChess.match(/♟/g) || []).length;

      //     // If eliminatedPawns length is greater than blackPawnCount, balance it
      //     if (eliminatedPawns.length > blackPawnCount) {
      //       // Calculate the excess eliminated pawns
      //       let excessEliminated = eliminatedPawns.length - blackPawnCount;

      //       // Remove excess eliminated pawns from the beginning of the array
      //       eliminatedPawns.splice(0, excessEliminated);

      //       // Save the balanced eliminatedPawns array back to localStorage
      //       localStorage.setItem(
      //         "eliminatedBlacks",
      //         JSON.stringify(eliminatedPawns)
      //       );
      //     }

      //     // Push the eliminated pawn to the eliminatedPawns array
      //     eliminatedPawns.push(originalPawnPlace.innerHTML);

      //     // Save the updated eliminatedPawns array back to localStorage
      //     localStorage.setItem(
      //       "eliminatedBlacks",
      //       JSON.stringify(eliminatedPawns)
      //     );

      //     // Check if the layout change indicates it's white's turn
      //     if (oldChess !== newChess) {
      //       alert("Pawn moved and layout changed, it's black's turn.");
      //       localStorage.setItem("iwhiteTurn", "false");
      //     } else {
      //       alert("Pawn moved but layout didn't change, something went wrong!");
      //       localStorage.setItem("iwhiteTurn", "true");
      //     }
      //   });
      // }

      // if (
      //   document.getElementById(finalForward8DiagonalRight.toString())
      //     .textContent === "♟" ||
      //   document.getElementById(finalForward8DiagonalRight.toString())
      //     .textContent === "♜" ||
      //   document.getElementById(finalForward8DiagonalRight.toString())
      //     .textContent === "♞" ||
      //   document.getElementById(finalForward8DiagonalRight.toString())
      //     .textContent === "♝" ||
      //   document.getElementById(finalForward8DiagonalRight.toString())
      //     .textContent === "♚" ||
      //   document.getElementById(finalForward8DiagonalRight.toString())
      //     .textContent === "♛"
      // ) {
      //   alert("no one or opponent is at the diagonal side right");

      //   let pawnDiagonalRightElement = document.getElementById(
      //     finalForward8DiagonalRight.toString()
      //   );
      //   let originalPawnPlace = document.getElementById(
      //     clickedSquareId.toString()
      //   );

      //   let pawnDiagonalRightContent = pawnDiagonalRightElement.innerHTML;
      //   pawnDiagonalRightElement.addEventListener("click", function () {
      //     // Clear the original pawn place and set the diagonal pawn to "♙"
      //     originalPawnPlace.innerHTML = "";
      //     pawnDiagonalRightElement.innerHTML = "♟";

      //     // Get the current and previous chessboard layouts from localStorage
      //     let oldChess = localStorage.getItem("newChessboardLayout");

      //     // Update the layout on the chessboard
      //     printLayout();

      //     let newChess = localStorage.getItem("newChessboardLayout");

      //     // Check if the layout has changed
      //     if (oldChess === newChess) {
      //       alert("No layout change, something went wrong!");
      //       return; // Exit the function if no layout change
      //     }

      //     // Get the eliminated pawns from localStorage
      //     let eliminatedPawns =
      //       JSON.parse(localStorage.getItem("eliminatedBlacks")) || [];

      //     // Count the number of black pawns in the new chess layout
      //     let blackPawnCount = (newChess.match(/♟/g) || []).length;

      //     // If eliminatedPawns length is greater than blackPawnCount, balance it
      //     if (eliminatedPawns.length > blackPawnCount) {
      //       // Calculate the excess eliminated pawns
      //       let excessEliminated = eliminatedPawns.length - blackPawnCount;

      //       // Remove excess eliminated pawns from the beginning of the array
      //       eliminatedPawns.splice(0, excessEliminated);

      //       // Save the balanced eliminatedPawns array back to localStorage
      //       localStorage.setItem(
      //         "eliminatedBlacks",
      //         JSON.stringify(eliminatedPawns)
      //       );
      //     }

      //     // Push the eliminated pawn to the eliminatedPawns array
      //     eliminatedPawns.push(originalPawnPlace.innerHTML);

      //     // Save the updated eliminatedPawns array back to localStorage
      //     localStorage.setItem(
      //       "eliminatedBlacks",
      //       JSON.stringify(eliminatedPawns)
      //     );

      //     // Check if the layout change indicates it's white's turn
      //     if (oldChess !== newChess) {
      //       alert("Pawn moved and layout changed, it's black's turn.");
      //       localStorage.setItem("iwhiteTurn", "false");
      //     } else {
      //       alert("Pawn moved but layout didn't change, something went wrong!");
      //       localStorage.setItem("iwhiteTurn", "true");
      //     }
      //   });
      // }
    // }
  }

  if (isPawn === "♟") {
    // Perform actions for white pawn
    // if (!whiteTurn) {
      console.log("from white pawn");
      let forward8Pawn = clickedSquareId + 8;
      let forward16Pawn = clickedSquareId + 16;
      let forward8DiagonalLeft = clickedSquareId + 8;
      let finalForward8DiagonalLeft = forward8DiagonalLeft - 1;
      let forward8DiagonalRight = clickedSquareId + 8;
      let finalForward8DiagonalRight = forward8DiagonalRight + 1;

      // alert(typeof(forward8Pawn))

      document
        .getElementById(forward8Pawn.toString())
        .classList.add("highlightedPawn");
      document
        .getElementById(finalForward8DiagonalLeft.toString())
        .classList.add("highlightedPawnLeft");
      document
        .getElementById(finalForward8DiagonalRight.toString())
        .classList.add("highlightedPawnRight");
      // Add event listeners

      if ([9,10, 11, 12, 13, 14, 15, 16].includes(clickedSquareId)) {
        document.getElementById(forward16Pawn.toString()).classList.add("highlightedPawn16");
    }

      // Check conditions
    //   if (
    //     document.getElementById(finalForward8DiagonalLeft.toString())
    //       .textContent === "♙" ||
    //     document.getElementById(finalForward8DiagonalLeft.toString())
    //       .textContent === "♖" ||
    //     document.getElementById(finalForward8DiagonalLeft.toString())
    //       .textContent === "♘" ||
    //     document.getElementById(finalForward8DiagonalLeft.toString())
    //       .textContent === "♗" ||
    //     document.getElementById(finalForward8DiagonalLeft.toString())
    //       .textContent === "♔" ||
    //     document.getElementById(finalForward8DiagonalLeft.toString())
    //       .textContent === "♕"
    //   ) {
    //     console.log("enemies at the left side");

    //     // Get the DOM elements
    //     let pawnDiagonalLeftElement = document.getElementById(
    //       finalForward8DiagonalLeft.toString()
    //     );
    //     let originalPawnPlace = document.getElementById(
    //       clickedSquareId.toString()
    //     );
    //     let pawnDiagonalLeftContent = pawnDiagonalLeftElement.innerHTML;
    //     // Add event listener to the DOM element
        

    //     pawnDiagonalLeftElement.addEventListener("click", function () {
    //       // Clear the original pawn place and set the diagonal pawn to "♙"
    //       originalPawnPlace.innerHTML = "";
    //       pawnDiagonalLeftElement.innerHTML = "♟";

    //       // Get the current and previous chessboard layouts from localStorage
    //       let oldChess = localStorage.getItem("newChessboardLayout");

    //       // Update the layout on the chessboard
    //       printLayout();

    //       let newChess = localStorage.getItem("newChessboardLayout");

    //       // Check if the layout has changed
    //       if (oldChess === newChess) {
    //         alert("No layout change, something went wrong!");
    //         return; // Exit the function if no layout change
    //       }

    //       // Get the eliminated pawns from localStorage
    //       let eliminatedPawns =
    //         JSON.parse(localStorage.getItem("eliminatedWhites")) || [];

    //       // Count the number of black pawns in the new chess layout
    //       let blackPawnCount = (newChess.match(/♙/g) || []).length;

    //       // If eliminatedPawns length is greater than blackPawnCount, balance it
    //       if (eliminatedPawns.length > blackPawnCount) {
    //         // Calculate the excess eliminated pawns
    //         let excessEliminated = eliminatedPawns.length - blackPawnCount;

    //         // Remove excess eliminated pawns from the beginning of the array
    //         eliminatedPawns.splice(0, excessEliminated);

    //         // Save the balanced eliminatedPawns array back to localStorage
    //         localStorage.setItem(
    //           "eliminatedWhites",
    //           JSON.stringify(eliminatedPawns)
    //         );
    //       }

    //       // Push the eliminated pawn to the eliminatedPawns array
    //       eliminatedPawns.push(originalPawnPlace.innerHTML);

    //       // Save the updated eliminatedPawns array back to localStorage
    //       localStorage.setItem(
    //         "eliminatedWhites",
    //         JSON.stringify(eliminatedPawns)
    //       );

    //       // Check if the layout change indicates it's white's turn
    //       if (oldChess !== newChess) {
    //         alert("Pawn moved and layout changed, it's black's turn.");
    //         localStorage.setItem("iwhiteTurn", "false");
    //       } else {
    //         alert("Pawn moved but layout didn't change, something went wrong!");
    //         localStorage.setItem("iwhiteTurn", "true");
    //       }
    //     });
    //   }

    //   if (
    //     document.getElementById(forward8Pawn.toString()).textContent === "" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♟" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♜" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♞" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♝" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♚" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♛" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♙" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♔" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♘" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♖" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♗" &&
    //     document.getElementById(forward8Pawn.toString()).textContent !== "♕"
    //   ) {
    //     let originalPawnPlace = document.getElementById(
    //       clickedSquareId.toString()
    //     );
    //     let pawnDiagonalForwardElement = document.getElementById(
    //       forward8Pawn.toString()
    //     );

    //     pawnDiagonalForwardElement.addEventListener("click", function () {
    //       // Clear the original pawn place and set the diagonal pawn to "♙"
    //       originalPawnPlace.innerHTML = "";
    //       pawnDiagonalForwardElement.innerHTML = "♟";

    //       // Get the current and previous chessboard layouts from localStorage
    //       let oldChess = localStorage.getItem("newChessboardLayout");

    //       // Update the layout on the chessboard
    //       printLayout();

    //       let newChess = localStorage.getItem("newChessboardLayout");

    //       // Check if the layout has changed
    //       if (oldChess === newChess) {
    //         alert("No layout change, something went wrong!");
    //         return; // Exit the function if no layout change
    //       }

    //       // Get the eliminated pawns from localStorage
    //       let eliminatedPawns =
    //         JSON.parse(localStorage.getItem("eliminatedWhites")) || [];

    //       // Count the number of black pawns in the new chess layout
    //       let blackPawnCount = (newChess.match(/♙/g) || []).length;

    //       // If eliminatedPawns length is greater than blackPawnCount, balance it
    //       if (eliminatedPawns.length > blackPawnCount) {
    //         // Calculate the excess eliminated pawns
    //         let excessEliminated = eliminatedPawns.length - blackPawnCount;

    //         // Remove excess eliminated pawns from the beginning of the array
    //         eliminatedPawns.splice(0, excessEliminated);

    //         // Save the balanced eliminatedPawns array back to localStorage
    //         localStorage.setItem(
    //           "eliminatedWhites",
    //           JSON.stringify(eliminatedPawns)
    //         );
    //       }

    //       // Push the eliminated pawn to the eliminatedPawns array
    //       eliminatedPawns.push(originalPawnPlace.innerHTML);

    //       // Save the updated eliminatedPawns array back to localStorage
    //       localStorage.setItem(
    //         "eliminatedWhites",
    //         JSON.stringify(eliminatedPawns)
    //       );

    //       // Check if the layout change indicates it's white's turn
    //       if (oldChess !== newChess) {
    //         alert("Pawn moved and layout changed, it's white's turn.");
    //         localStorage.setItem("iwhiteTurn", "true");
    //       } else {
    //         alert("Pawn moved but layout didn't change, something went wrong!");
    //         localStorage.setItem("iwhiteTurn", "false");
    //       }
    //     });
    //   }

    //   if (
    //     document.getElementById(finalForward8DiagonalRight.toString())
    //       .textContent === "♙" ||
    //     document.getElementById(finalForward8DiagonalRight.toString())
    //       .textContent === "♖" ||
    //     document.getElementById(finalForward8DiagonalRight.toString())
    //       .textContent === "♘" ||
    //     document.getElementById(finalForward8DiagonalRight.toString())
    //       .textContent === "♗" ||
    //     document.getElementById(finalForward8DiagonalRight.toString())
    //       .textContent === "♔" ||
    //     document.getElementById(finalForward8DiagonalRight.toString())
    //       .textContent === "♕"
    //   ) {
    //     alert("no one or opponent is at the diagonal side right");

    //     let pawnDiagonalRightElement = document.getElementById(
    //       finalForward8DiagonalRight.toString()
    //     );
    //     let originalPawnPlace = document.getElementById(
    //       clickedSquareId.toString()
    //     );

    //     let pawnDiagonalRightContent = pawnDiagonalRightElement.innerHTML;

    //     pawnDiagonalRightElement.addEventListener("click", function () {
    //       // Clear the original pawn place and set the diagonal pawn to "♙"
    //       originalPawnPlace.innerHTML = "";
    //       pawnDiagonalRightElement.innerHTML = "♟";

    //       // Get the current and previous chessboard layouts from localStorage
    //       let oldChess = localStorage.getItem("newChessboardLayout");

    //       // Update the layout on the chessboard
    //       printLayout();

    //       let newChess = localStorage.getItem("newChessboardLayout");

    //       // Check if the layout has changed
    //       if (oldChess === newChess) {
    //         alert("No layout change, something went wrong!");
    //         return; // Exit the function if no layout change
    //       }

    //       // Get the eliminated pawns from localStorage
    //       let eliminatedPawns =
    //         JSON.parse(localStorage.getItem("eliminatedWhites")) || [];

    //       // Count the number of black pawns in the new chess layout
    //       let blackPawnCount = (newChess.match(/♙/g) || []).length;

    //       // If eliminatedPawns length is greater than blackPawnCount, balance it
    //       if (eliminatedPawns.length > blackPawnCount) {
    //         // Calculate the excess eliminated pawns
    //         let excessEliminated = eliminatedPawns.length - blackPawnCount;

    //         // Remove excess eliminated pawns from the beginning of the array
    //         eliminatedPawns.splice(0, excessEliminated);

    //         // Save the balanced eliminatedPawns array back to localStorage
    //         localStorage.setItem(
    //           "eliminatedWhites",
    //           JSON.stringify(eliminatedPawns)
    //         );
    //       }

    //       // Push the eliminated pawn to the eliminatedPawns array
    //       eliminatedPawns.push(originalPawnPlace.innerHTML);

    //       // Save the updated eliminatedPawns array back to localStorage
    //       localStorage.setItem(
    //         "eliminatedWhites",
    //         JSON.stringify(eliminatedPawns)
    //       );

    //       // Check if the layout change indicates it's white's turn
    //       if (oldChess !== newChess) {
    //         alert("Pawn moved and layout changed, it's white's turn.");
    //         localStorage.setItem("iwhiteTurn", "true");
    //       } else {
    //         alert("Pawn moved but layout didn't change, something went wrong!");
    //         localStorage.setItem("iwhiteTurn", "false");
    //       }
    //     });
    //   }
    // }
  }

}
