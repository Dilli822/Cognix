

import { generateSquare, pieces, squares } from "./chess.js";
import { kingMaster } from "./king_agent.js";

export function kingAgent(event){
    const clickedSquare = event.target;
    const clickedSquareId = parseInt(clickedSquare.id);
    console.log(clickedSquareId);

    let kingNode = document.getElementById(clickedSquareId);
    let isKing = kingNode.getInnerHTML();
  
    // Get the piece on the clicked square from the pieces array
    // alert(isRook)
  
    // Remove border from previously clicked square
    document.querySelectorAll(".bordered").forEach((square) => {
      square.style.border = "";
      square.classList.remove("bordered");
    });


    document.querySelectorAll(".greenKingMove").forEach((square) => {
        square.style.border = "";
        square.classList.remove("greenKingMove");
      });

      
    // Check if the clicked square contains a queen or king
    if (isKing === "♛" || isKing === "♕") {
      localStorage.setItem("clicked_id", clickedSquareId);
  
      // Add border to clicked square
      clickedSquare.style.border = "2px solid red";
      clickedSquare.classList.add("bordered");
  
      kingMaster(clickedSquareId);
    }

}