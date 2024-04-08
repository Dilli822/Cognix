import { initial_Black_Pawn_Position, initial_White_Pawn_Position,initial_box_mapping_for_white_pawns ,initial_box_mapping_for_black_pawns} from "./script.js";

export let clickedWhitePawn = false;
export let clickedBlackPawn = false;
export let blackTurn = false;

// Function to add click event listeners to black pawns
export function show_Step_For_Pawn_Initially(pawnIds) {
  if (pawnIds === initial_White_Pawn_Position) {
    // alert("white one called");
    pawnIds.forEach(function (pawnId) {
      var pawnElement = document.getElementById(pawnId);
      if (pawnElement) {
        pawnElement.addEventListener("click", function () {
          if (blackTurn) {
            console.log("It's black's turn. White cannot move now.");
            return; // Exit the function if it's not white's turn
          }
          if (clickedWhitePawn) {
            console.log("Another white pawn cannot be clicked");
            return; // Exit the function if a white pawn has already been clicked
          }
          // Show alert when a white pawn is clicked
          // alert("White pawn showing steps: " + pawnId);
          let matchedValues;
          if (initial_box_mapping_for_white_pawns.hasOwnProperty(pawnId)) {
            matchedValues = initial_box_mapping_for_white_pawns[pawnId];
            console.log("for white pawns steps1-->", matchedValues);
            firstMove(matchedValues, pawnId, matchedValues);
          } else {
            // alert("No match found for pawn ID: " + pawnId);
            return; // Exit the function if no match is found
          }
          clickedWhitePawn = true;
          blackTurn = true; // Set blackTurn to true for black's turn
        });
      } else {
        console.error("Pawn element not found with ID: " + pawnId);
      }
    });
  } else {
    console.error("Invalid pawnIds");
  }
}

// Function to add click event listeners to black pawns
export function show_Step_For_PawnBlack_Initially(pawnIds) {
  if (pawnIds === initial_Black_Pawn_Position) {
    // alert("black one called");
    pawnIds.forEach(function (pawnId) {
      var pawnElement = document.getElementById(pawnId);
      if (pawnElement) {
        pawnElement.addEventListener("click", function () {
          if (!blackTurn) {
            console.log("It's white's turn. Black cannot move now.");
            return; // Exit the function if it's not black's turn
          }
          if (clickedBlackPawn) {
            console.log("Another black pawn cannot be clicked");
            return; // Exit the function if a black pawn has already been clicked
          }
          // Show alert when a black pawn is clicked
          // alert("Black pawn showing steps: " + pawnId);
          let matchedValues;
          if (initial_box_mapping_for_black_pawns.hasOwnProperty(pawnId)) {
            matchedValues = initial_box_mapping_for_black_pawns[pawnId];
            console.log("for black pawns steps1-->", matchedValues);
            firstBlackMove(matchedValues, pawnId, matchedValues);
          } else {
            // alert("No match found for pawn ID: " + pawnId);
            return; // Exit the function if no match is found
          }
          clickedBlackPawn = true; // Set clickedBlackPawn to true for black's turn
        });
      } else {
        console.error("Pawn element not found with ID: " + pawnId);
      }
    });
  } else {
    console.error("Invalid pawnIds");
  }
}

// Function for white's first move
function firstMove(possibleMove, currentPawnPosition, stepsArray) {
  // Highlight the squares where the pawn can move
  possibleMove.forEach(function (value) {
    let element = document.getElementById(value);
    let currentSpan = document.getElementById(currentPawnPosition);
    const span = currentSpan.querySelector("span");
    const spanValue = span.innerHTML; // Use innerHTML to get the content of the span

    if (element) {
      element.classList.add("highLightPawn");

      // Add click event listener to highlighted squares
      element.addEventListener("click", function () {
        console.log("Square clicked: " + value);

        if (currentSpan) {
          if (span) {
            span.innerHTML = ""; // Remove the content of the span
            span.removeAttribute("id"); // Remove the id attribute of the span
          } else {
            console.error("Span element not found inside currentSpan");
          }
        } else {
          console.error("currentSpan element not found");
        }

        document.getElementById(value).innerHTML = spanValue; // Set the content of the clicked square to the span value
        document.getElementById(value).classList.remove("highLightPawn");
        // Loop through stepsArray and remove the 'highLightPawn' class from corresponding elements
        stepsArray.forEach(function (id) {
          const element = document.getElementById(id);
          if (element) {
            // Remove the 'highLightPawn' class
            element.classList.remove("highLightPawn");

            // Remove event listeners
            const clonedElement = element.cloneNode(true);
            element.parentNode.replaceChild(clonedElement, element);
            console.log("White move is completed");
          } else {
            console.error("Element not found with ID:", id);
          }
        });
      });
    } else {
      console.error("Element not found with ID: " + value);
    }
  });
  clickedWhitePawn = true;
  blackTurn = true;
}

// Function for black's first move
function firstBlackMove(possibleMove, currentPawnPosition, stepsArray) {
  // Highlight the squares where the pawn can move
  possibleMove.forEach(function (value) {
    let element = document.getElementById(value);
    let currentSpan = document.getElementById(currentPawnPosition);
    const span = currentSpan.querySelector("span");
    const spanValue = span.innerHTML;

    if (element) {
      element.classList.add("highLightPawn");
      element.addEventListener("click", function () {
        console.log("Square clicked: " + value);
        if (currentSpan) {
          if (span) {
            span.innerHTML = "";
            span.removeAttribute("id");
          } else {
            console.error("Span element not found inside currentSpan");
          }
        } else {
          console.error("currentSpan element not found");
        }
        document.getElementById(value).innerHTML = spanValue;
        document.getElementById(value).classList.remove("highLightPawn");
        stepsArray.forEach(function (id) {
          const element = document.getElementById(id);
          if (element) {
            element.classList.remove("highLightPawn");
            const clonedElement = element.cloneNode(true);
            element.parentNode.replaceChild(clonedElement, element);
            console.log("Black move is completed");
          } else {
            console.error("Element not found with ID:", id);
          }
        });
      });
    } else {
      console.error("Element not found with ID: " + value);
    }
  });
  clickedBlackPawn = true;
  blackTurn = false;
}

// Call the function for initializing click event listeners for white and black pawns
show_Step_For_Pawn_Initially(initial_White_Pawn_Position);
show_Step_For_PawnBlack_Initially(initial_Black_Pawn_Position);
