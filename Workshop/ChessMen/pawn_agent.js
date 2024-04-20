import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let pawnNode = document.getElementById(clickedSquareId);
  let isPawn = pawnNode.innerHTML;

  let validator;

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

  if (isPawn === "♙") {
    // Perform actions for white pawn
    if (whiteTurn) {
      console.log("from white pawn");
      let forward8Pawn = clickedSquareId - 8;
      let forward8DiagonalLeft = clickedSquareId - 8;
      let finalForward8DiagonalLeft = forward8DiagonalLeft - 1;
      let forward8DiagonalRight = clickedSquareId - 8;
      let finalForward8DiagonalRight = forward8DiagonalRight + 1;

      // alert(typeof(forward8Pawn))

      console.log("white forward---> " + forward8Pawn);

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

      // Check conditions
      if (
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "" && (
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "♟" ||
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "♜" ||
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "♞" ||
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "♝" ||
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "♚" ||
        document.getElementById(finalForward8DiagonalLeft.toString())
          .textContent === "♛")
      ) {
        alert("no one or opponent is at the diagonal side left");

        // Get the DOM elements
        let pawnDiagonalLeftElement = document.getElementById(
          finalForward8DiagonalLeft.toString()
        );
        let originalPawnPlace = document.getElementById(
          clickedSquareId.toString()
        );
        let pawnDiagonalLeftContent = pawnDiagonalLeftElement.innerHTML;
        // Add event listener to the DOM element
        pawnDiagonalLeftElement.addEventListener("click", function () {
          // Set the innerHTML of the DOM elements
          originalPawnPlace.innerHTML = "";
          pawnDiagonalLeftElement.innerHTML = "♙";

          // Get the eliminated pawn from localStorage
          let eliminatedPawns =
            JSON.parse(localStorage.getItem("eliminatedBlacks")) || [];

          // Push the eliminated pawn to the array
          eliminatedPawns.push(pawnDiagonalLeftContent);

          // Store the updated eliminatedPawns array back to localStorage
          localStorage.setItem(
            "eliminatedBlacks",
            JSON.stringify(eliminatedPawns)
          );
          alert("Pawn moved and eliminated pawn stored!");
        });

        localStorage.setItem("iwhiteTurn", "false");
        let a = localStorage.getItem("iwhiteTurn");
        document.getElementById("turn").innerHTML = a;
    
        if (a === "false") {
          document.getElementById("turn").innerHTML =
            "Black Turn: True <br> White Turn: False";
        }
      }

      if (
        document.getElementById(forward8Pawn.toString())
          .textContent === "" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "♟" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "♜" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "♞" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "♝" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "♚" ||
        document.getElementById(forward8Pawn.toString())
          .textContent === "♛"
      ) {
        alert("no one or opponent is at the diagonal side right");
        let originalPawnPlace = document.getElementById(
          clickedSquareId.toString()
        );
        let pawnDiagonalForwardElement = document.getElementById(
          forward8Pawn.toString()
        );

        pawnDiagonalForwardElement.addEventListener("click", function () {
          // Set the innerHTML of the DOM element

          originalPawnPlace.innerHTML = "";
          pawnDiagonalForwardElement.innerHTML = "♙";

          let eliminatedPawns =
          JSON.parse(localStorage.getItem("eliminatedBlacks")) || [];

        // Push the eliminated pawn to the array
        eliminatedPawns.push(pawnDiagonalForwardElement);

        // Store the updated eliminatedPawns array back to localStorage
        localStorage.setItem(
          "eliminatedBlacks",
          JSON.stringify(eliminatedPawns)
        );
        
        alert("Pawn moved and eliminated pawn stored!");
      });

      

      localStorage.setItem("iwhiteTurn", "false");
      let a = localStorage.getItem("iwhiteTurn");
      document.getElementById("turn").innerHTML = a;
  
      if (a === "false") {
        document.getElementById("turn").innerHTML =
          "Black Turn: True <br> White Turn: False";
      }
    }


      if (
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "" && (
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "" ||
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "♟" ||
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "♜" ||
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "♞" ||
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "♝" ||
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "♚" ||
        document.getElementById(finalForward8DiagonalRight.toString())
          .textContent === "♛"
          )
      ) {

        let finalForward8DiagonalRightElement = document.getElementById(
          forward8Pawn.toString()
        );

        alert("no one or opponent is at the diagonal side right");
        let originalPawnPlace = document.getElementById(
          clickedSquareId.toString()
        );
        let pawnDiagonalRightElement = document.getElementById(
          finalForward8DiagonalRightElement.toString()
        );

        pawnDiagonalRightElement.addEventListener("click", function () {
          // Set the innerHTML of the DOM element

          originalPawnPlace.innerHTML = "";
          pawnDiagonalRightElement.innerHTML = "♙";
          let eliminatedPawns =
          JSON.parse(localStorage.getItem("eliminatedBlacks")) || [];
  
        // Push the eliminated pawn to the array
        eliminatedPawns.push(finalForward8DiagonalRightElement);

          alert();
        });

        if(validator){
          localStorage.setItem("iwhiteTurn", "false");
          let a = localStorage.getItem("iwhiteTurn");
          document.getElementById("turn").innerHTML = a;
      
          if (a === "false") {
            document.getElementById("turn").innerHTML =
              "Black Turn: True <br> White Turn: False";
          }
        }

      }
    }

  }

  if (isPawn === "♟") {
    // Add border to clicked square

    // Perform actions for black pawn
    if (!whiteTurn) {
      console.log("from black pawn");
      // alert(clickedSquareId);
      let forward8Pawn = clickedSquareId + 8;
      let forward8DiagonalLeft = clickedSquareId + 8;
      let finalForward8DiagonalLeft = forward8DiagonalLeft - 1;
      let forward8DiagonalRight = clickedSquareId + 8;
      let finalForward8DiagonalRight = forward8DiagonalRight + 1;

      document
        .getElementById(forward8Pawn.toString())
        .classList.add("highlightedPawn");
      document
        .getElementById(finalForward8DiagonalLeft.toString())
        .classList.add("highlightedPawn");
      document
        .getElementById(finalForward8DiagonalRight.toString())
        .classList.add("highlightedPawn");

      console.log("black forward---> " + forward8Pawn);
      localStorage.setItem("iwhiteTurn", "true");
      let a = localStorage.getItem("iwhiteTurn");
      if (a === "true") {
        document.getElementById("turn").innerHTML =
          "Black Turn: False <br> White Turn: True";
      }
    }
  }
}
