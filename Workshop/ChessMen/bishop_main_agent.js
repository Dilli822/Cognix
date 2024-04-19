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
  



        document.querySelectorAll(".bishopDiagonalDown").forEach((square) => {
            square.style.border = "";
            square.classList.remove("bishopDiagonalDown");
          });
  
          
          document.querySelectorAll(".bishopDiagonalUp").forEach((square) => {
            square.style.border = "";
            square.classList.remove("bishopDiagonalUp");
          });
  
          
          document.querySelectorAll(".bishopTopRightDiagonal").forEach((square) => {
            square.style.border = "";
            square.classList.remove("bishopTopRightDiagonal");
          });
  
          
          document.querySelectorAll(".bishopDownLeftDiagonal").forEach((square) => {
            square.style.border = "";
            square.classList.remove("bishopDownLeftDiagonal");
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