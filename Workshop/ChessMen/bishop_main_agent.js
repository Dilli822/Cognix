import { bishopMaster } from "./bishop_agent.js";

import { generateSquare, pieces, squares } from "./chess.js";

export function bishopAgent(event){
    const clickedSquare = event.target;
    const clickedSquareId = parseInt(clickedSquare.id);
    console.log(clickedSquareId);

    let bishopNode = document.getElementById(clickedSquareId);
    let isBishop = bishopNode.getInnerHTML();
  
    // Get the piece on the clicked square from the pieces array
    // alert(isRook)
  
    // Remove border from previously clicked square
    document.querySelectorAll(".bordered").forEach((square) => {
      square.style.border = "";
      square.classList.remove("bordered");
    });
  

    document.querySelectorAll(".queenDiagonalUp").forEach((square) => {
        square.classList.remove("queenDiagonalUp");
      });
    
      document.querySelectorAll(".greenDiagonalDown").forEach((square) => {
        square.classList.remove("greenDiagonalDown");
      });

      
    // Check if the clicked square contains a queen or king
    if (isBishop === "♝" || isBishop === "♗") {
      localStorage.setItem("clicked_id", clickedSquareId);
  
      // Add border to clicked square
      clickedSquare.style.border = "2px solid red";
      clickedSquare.classList.add("bordered");
  
      bishopMaster(clickedSquareId);
    }

}