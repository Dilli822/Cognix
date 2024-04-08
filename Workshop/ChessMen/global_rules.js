
let whiteTurn = true; // Flag to indicate white player's turn

// Function to add click event listeners to pawns based on the player's turn
function playersTurn() {
    let pawnIds = whiteTurn ? iwhitePawns : iblackPawns;
    let initialPositions = whiteTurn ? initial_White_Pawn_Position : initial_Black_Pawn_Position;

    pawnIds.forEach(function (pawnId) {
        var pawnElement = document.getElementById(pawnId);
        if (pawnElement) {
            pawnElement.addEventListener("click", function () {
                if ((whiteTurn && pawnId.startsWith("white")) || (!whiteTurn && pawnId.startsWith("black"))) {
                    // Show alert when a pawn is clicked
                    alert("Pawn ID: " + pawnId);

                    let matchedValues;

                    // Check if the clicked pawnId matches with any keys in the mappings
                    if (whiteTurn && initial_box_mapping_for_white_pawns.hasOwnProperty(pawnId)) {
                        matchedValues = initial_box_mapping_for_white_pawns[pawnId];
                        console.log("for white pawns steps1-->", matchedValues);
                    } else if (!whiteTurn && initial_box_mapping_for_black_pawns.hasOwnProperty(pawnId)) {
                        matchedValues = initial_box_mapping_for_black_pawns[pawnId];
                        console.log("for black pawns steps1-->", matchedValues);
                    } else {
                        alert("No match found for pawn ID: " + pawnId);
                        return; // Exit the function if no match is found
                    }
                    matchedValues.forEach(function (value) {
                        let element = document.getElementById(value);
                        if (element) {
                            element.classList.add("highLightPawn");
                        } else {
                            console.error("Element not found with ID: " + value);
                        }
                    });
                    // Alert the matched values
                    alert("Match found for pawn ID: " + pawnId + ", Values: " + matchedValues.join(", "));
                } else {
                    alert("It's not your turn to move this pawn.");
                }
            });
        } else {
            console.error("Pawn element not found with ID: " + pawnId);
        }
    });
}

// Call the function to add click event listeners initially
playersTurn();
