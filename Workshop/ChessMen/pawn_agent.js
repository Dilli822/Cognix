import { generateSquare, pieces, squares } from "./chess.js";

export function pawnAgent(event){
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
  
    // Check if the clicked square contains a pawn

 

    if (isPawn === "♙") { // Check if the piece is a black pawn
  
        // localStorage.setItem("pawn_clicked_id", clickedSquareId);
        // console.log("pawn clicked");
      
        // Add border to clicked square
        clickedSquare.style.border = "2px solid red";
        clickedSquare.classList.add("bordered");
    
        // Calculate the square ahead of the pawn and diagonal square
        const forward = clickedSquareId - 8;
        const forwardDiagonalRight = clickedSquareId - 7;
        const forwardDiagonalLeft = clickedSquareId - 9;


        console.log("black pawn forward: " + forward);
        console.log("black pawn diagonal Right: " + forwardDiagonalRight);
        console.log("black pawn diagonal Left: " + forwardDiagonalLeft);

        // Check if the square ahead exists and add a class to style it
        if (forward >= 1 && forward <= 64) {
            const forwardSquare = document.getElementById(forward.toString());
            if (forwardSquare) {
                forwardSquare.classList.add("highlightedPawn");
            }
        }

       let forwardiagonalleftcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
       console.log(forwardiagonalleftcontent)

       let forwardiagonalRightcontent = document.getElementById(forwardDiagonalLeft).getInnerHTML();
       console.log(forwardiagonalRightcontent)

        if(forwardiagonalleftcontent === "♟" || forwardiagonalRightcontent === "♟"){
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

    
    if(isPawn ===  "♟" ){
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
