import * as scriptContent from "./script.js";
import {
    containerIDs,
    show_Step_For_Pawn_Initially,
    first_white_pawn_clicking,
    initial_Black_Pawn_Position,
    idBlackCharPairs,
    idWhiteCharValuePairs,
    iblackPawns,
    iwhitePawns,
    chessboard,
    blackPieces,
    whitePieces,
    blackPiecesValues,
    whitePiecesValues,
    initial_box_mapping_for_black_pawns,
    initial_box_mapping_for_white_pawns,
    initial_White_Pawn_Position,
    initial_BlackSideOne_GapForPawns,
    initial_BlackSide_TwoGapForPawns,
    initial_WhiteSideOne_GapForPawns,
    initial_WhiteSide_TwoGapForPawns,
    clickedBlackPawnId,
    clickedWhitePawnId,
    printNodeValues,
    printSpanValues,
} from "./script.js";

document.addEventListener("DOMContentLoaded", async function () {
    // Initialize an empty 8x8 array
    let containerValues = Array.from({ length: 8 }, () => Array(8).fill(0));
    // Function to retrieve the values from spans inside container elements
    async function retrieveContainerValues(containerIDs) {
        await Promise.all(
            containerIDs.map(async (rowIDs, rowIndex) => {
                await Promise.all(
                    rowIDs.map(async (id, colIndex) => {
                        const node = document.getElementById(id);
                        if (node) {
                            const span = node.querySelector("span");
                            if (span) {
                                const spanContent = span.innerText.trim();
                                // Assign the span content to the corresponding position in the array
                                containerValues[rowIndex][colIndex] = spanContent;
                            }
                        }
                    })
                );
            })
        );
    }

    // Call the function to retrieve values initially
    await retrieveContainerValues(containerIDs);
    // Usage example
    show_Step_For_Pawn_Initially(initial_White_Pawn_Position);
    show_Step_For_Pawn_Initially(initial_Black_Pawn_Position);
    // Call the function to add click event listeners to white pawns
    first_white_pawn_clicking(iwhitePawns);
    first_white_pawn_clicking(iblackPawns);
    // Print the retrieved values initially
    console.log("After Character Movement in a chess ", containerValues);
});
