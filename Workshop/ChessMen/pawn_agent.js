import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event) {
    const clickedSquare = event.target;
    const clickedSquareId = parseInt(clickedSquare.id);
    console.log(clickedSquareId);

    let pawnNode = document.getElementById(clickedSquareId);
    let isPawn = pawnNode.getInnerHTML();

    // Remove border from previously clicked square
    document.querySelectorAll(".bordered").forEach((square) => {
        square.style.border = "";
        square.classList.remove("bordered");
    });

    document.querySelectorAll(".highlightedPawn").forEach((square) => {
        square.style.border = "";
        square.classList.remove("highlightedPawn");
    });

    document.querySelectorAll(".highlightedDiagonalPawn").forEach((square) => {
        square.style.border = "";
        square.classList.remove("highlightedDiagonalPawn");
    });

// Resetting background colors and styles for each class individually

// .horse
document.querySelectorAll(".horse")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .Lefthorse
document.querySelectorAll(".Lefthorse")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .Righthorse
document.querySelectorAll(".Righthorse")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .horse8step
document.querySelectorAll(".horse8step")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .forwardLeftLefthorse
document.querySelectorAll(".forwardLeftLefthorse")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .forwardRightRighthorse
document.querySelectorAll(".forwardRightRighthorse")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .rightEndLeftLeft
document.querySelectorAll(".rightEndLeftLeft")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .backward8LeftLeft
document.querySelectorAll(".backward8LeftLeft")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalBackWar16LeftLeft
document.querySelectorAll(".finalBackWar16LeftLeft")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .backward8RightRight
document.querySelectorAll(".backward8RightRight")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .backward16RightRight
document.querySelectorAll(".backward16RightRight")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .secondLast56Forward
document.querySelectorAll(".secondLast56Forward")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .secondLast56Backward
document.querySelectorAll(".secondLast56Backward")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .backward16stepLeft
document.querySelectorAll(".backward16stepLeft")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .horseEndLef8step
document.querySelectorAll(".horseEndLef8step")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .horseforward16Left
document.querySelectorAll(".horseforward16Left")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .horseforward8left
document.querySelectorAll(".horseforward8left")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .horseforward8right
document.querySelectorAll(".horseforward8right")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalforward16Right
document.querySelectorAll(".finalforward16Right")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalBackward16Right
document.querySelectorAll(".finalBackward16Right")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalBackward16Left
document.querySelectorAll(".finalBackward16Left")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalBackward8Right
document.querySelectorAll(".finalBackward8Right")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalBackward8Left
document.querySelectorAll(".finalBackward8Left")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalForward8Left
document.querySelectorAll(".finalForward8Left")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .finalforward8Left
document.querySelectorAll(".finalforward8Left")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .greenDiagonalDown
document.querySelectorAll(".greenDiagonalDown")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .queenDiagonalRight
document.querySelectorAll(".queenDiagonalRight")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .queenDiagonalDown
document.querySelectorAll(".queenDiagonalDown")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .queenDiagonalUp
document.querySelectorAll(".queenDiagonalUp")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .queenUp
document.querySelectorAll(".queenUp")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .queenLeft
document.querySelectorAll(".queenLeft")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .sequenceTopRightDiagonal
document.querySelectorAll(".sequenceTopRightDiagonal")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .sequenceDownLeftDiagonal
document.querySelectorAll(".sequenceDownLeftDiagonal")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .greenKingMove
document.querySelectorAll(".greenKingMove")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .highlightedPawn
document.querySelectorAll(".highlightedPawn")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });

// .highlightedDiagonalPawn
document.querySelectorAll(".highlightedDiagonalPawn")
    .forEach((element) => {
        element.style.backgroundColor = "";
        element.style.background = "";
    });



    // Check if the clicked square contains a pawn

    if (isPawn === "♙") {
        // Check if the piece is a black pawn

        // localStorage.setItem("pawn_clicked_id", clickedSquareId);
        // console.log("pawn clicked");

        // Add border to clicked square
        clickedSquare.style.border = "2px solid red";
        clickedSquare.classList.add("bordered");

        // Calculate the square ahead of the pawn and diagonal square
        const forward = clickedSquareId - 8;

        console.log("black pawn forward: " + forward);

        // Check if the square ahead exists and add a class to style it
        if (forward >= 1 && forward <= 64) {
            const forwardSquare = document.getElementById(forward.toString());
            if (forwardSquare) {
                forwardSquare.classList.add("highlightedPawn");
            }
        }

        if (
            clickedSquareId !== 1 &&
            clickedSquareId !== 8 &&
            clickedSquareId !== 9 &&
            clickedSquareId !== 16 &&
            clickedSquareId !== 17 &&
            clickedSquareId !== 24 &&
            clickedSquareId !== 25 &&
            clickedSquareId !== 32 &&
            clickedSquareId !== 33 &&
            clickedSquareId !== 40 &&
            clickedSquareId !== 41 &&
            clickedSquareId !== 48 &&
            clickedSquareId !== 49 &&
            clickedSquareId !== 56 &&
            clickedSquareId !== 57 &&
            clickedSquareId !== 64
        ) {
            const forwardDiagonalRight = clickedSquareId - 7;
            const forwardDiagonalLeft = clickedSquareId - 9;
            console.log("black pawn diagonal Right: " + forwardDiagonalRight);
            console.log("black pawn diagonal Left: " + forwardDiagonalLeft);
            let forwardiagonalleftcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
            console.log(forwardiagonalleftcontent);

            let forwardiagonalRightcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
            console.log(forwardiagonalRightcontent);

            if (
                forwardiagonalleftcontent === "♟" ||
                forwardiagonalleftcontent === "♜" ||
                forwardiagonalleftcontent === "♝" ||
                forwardiagonalleftcontent === "♞" ||
                forwardiagonalleftcontent === "♛" ||
                forwardiagonalleftcontent === "♚" ||
                forwardiagonalRightcontent === "♟" ||
                forwardiagonalRightcontent === "♜" ||
                forwardiagonalRightcontent === "♝" ||
                forwardiagonalRightcontent === "♞" ||
                forwardiagonalRightcontent === "♛" ||
                forwardiagonalRightcontent === "♚"
            ) {
                // Check if the diagonal square exists and add a class to style it
                if (forwardDiagonalRight >= 1 && forwardDiagonalRight <= 64) {
                    const forwardDiagonalSQ = document.getElementById(forwardDiagonalRight.toString());
                    if (forwardDiagonalSQ) {
                        forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
                    }
                }

                // Check if the diagonal square exists and add a class to style it
                if (forwardDiagonalLeft >= 1 && forwardDiagonalLeft <= 64) {
                    const forwardDiagonalSQ = document.getElementById(forwardDiagonalLeft.toString());
                    if (forwardDiagonalSQ) {
                        forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
                    }
                }
            }
        }

        if (clickedSquareId == 1 || clickedSquareId == 9 || clickedSquareId == 17 || clickedSquareId == 25 || clickedSquareId == 33 || clickedSquareId == 41 || clickedSquareId == 49 || clickedSquareId == 57) {
            const forward = clickedSquareId - 8;

            console.log("black pawn forward: " + forward);

            // Check if the square ahead exists and add a class to style it
            if (forward >= 1 && forward <= 64) {
                const forwardSquare = document.getElementById(forward.toString());
                if (forwardSquare) {
                    forwardSquare.classList.add("highlightedPawn");
                }
            }

            const forwardDiagonalRight = clickedSquareId - 7;

            console.log("black pawn diagonal Right: " + forwardDiagonalRight);

            let forwardiagonalRightcontent = document.getElementById(forwardDiagonalRight).getInnerHTML();
            console.log(forwardiagonalRightcontent);

            if (
                forwardiagonalRightcontent === "♟" ||
                forwardiagonalRightcontent === "♜" ||
                forwardiagonalRightcontent === "♝" ||
                forwardiagonalRightcontent === "♞" ||
                forwardiagonalRightcontent === "♛" ||
                forwardiagonalRightcontent === "♚"
            ) {
                // Check if the diagonal square exists and add a class to style it
                if (forwardDiagonalRight >= 1 && forwardDiagonalRight <= 64) {
                    const forwardDiagonalSQ = document.getElementById(forwardDiagonalRight.toString());
                    if (forwardDiagonalSQ) {
                        forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
                    }
                }
            }
        }

        if (clickedSquareId == 8 || clickedSquareId == 16 || clickedSquareId == 24 || clickedSquareId == 32 || clickedSquareId == 40 || clickedSquareId == 48 || clickedSquareId == 56 || clickedSquareId == 64) {
            const forward = clickedSquareId - 8;

            console.log("black pawn forward: " + forward);

            // Check if the square ahead exists and add a class to style it
            if (forward >= 1 && forward <= 64) {
                const forwardSquare = document.getElementById(forward.toString());
                if (forwardSquare) {
                    forwardSquare.classList.add("highlightedPawn");
                }
            }
            const forwardDiagonalLeft = clickedSquareId - 8;
            const finalForwardDiagonalLeft = forwardDiagonalLeft - 1;
            console.log("black pawn diagonal Right: " + finalForwardDiagonalLeft);

            let forwardiagonalleftcontent = document.getElementById(finalForwardDiagonalLeft).getInnerHTML();
            console.log(forwardiagonalleftcontent);

            if (forwardiagonalleftcontent === "♟" || forwardiagonalleftcontent === "♜" || forwardiagonalleftcontent === "♝" || forwardiagonalleftcontent === "♞" || forwardiagonalleftcontent === "♛" || forwardiagonalleftcontent === "♚") {
                // Check if the diagonal square exists and add a class to style it
                if (finalForwardDiagonalLeft >= 1 && finalForwardDiagonalLeft <= 64) {
                    const forwardDiagonalSQ = document.getElementById(finalForwardDiagonalLeft.toString());
                    if (forwardDiagonalSQ) {
                        forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
                    }
                }
            }
        }
    }

    if (isPawn === "♟") {
        // localStorage.setItem("pawn_clicked_id", clickedSquareId);
        // console.log("pawn clicked");

        // Add border to clicked square
        clickedSquare.style.border = "2px solid red";
        clickedSquare.classList.add("bordered");
        // Calculate the square ahead of the pawn
        const backward = clickedSquareId + 8;
        const forwardDiagonalRight = clickedSquareId + 7;
        const forwardDiagonalLeft = clickedSquareId + 9;

        // Check if the square ahead exists and add a class to style it
        if (backward >= 1 && backward <= 64) {
            const forwardSquare = document.getElementById(backward.toString());
            if (forwardSquare) {
                forwardSquare.classList.add("highlightedPawn");
            }
        }

        let forwardiagonalRightcontent = document.getElementById(forwardDiagonalRight).getInnerHTML();
        console.log(forwardiagonalRightcontent);

        let forwardiagonalLeftcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
        console.log(forwardiagonalLeftcontent);

        if (forwardiagonalRightcontent === "♙" || forwardiagonalRightcontent === "♖" || forwardiagonalRightcontent === "♗" || forwardiagonalRightcontent === "♘" || forwardiagonalRightcontent === "♔" || forwardiagonalRightcontent === "♕") {
            // Check if the diagonal square exists and add a class to style it
            if (forwardDiagonalRight >= 1 && forwardDiagonalRight <= 64) {
                const forwardDiagonalSQ = document.getElementById(forwardDiagonalRight.toString());
                if (forwardDiagonalSQ) {
                    forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
                }
            }

            // Check if the diagonal square exists and add a class to style it
            if (forwardDiagonalLeft >= 1 && forwardDiagonalLeft <= 64) {
                const forwardDiagonalSQ = document.getElementById(forwardDiagonalLeft.toString());
                if (forwardDiagonalSQ) {
                    forwardDiagonalSQ.classList.add("highlightedDiagonalPawn");
                }
            }
        }
    }
}
