import {
  HorseMaster,
  HorseForwardLeftEnd,
  HorseForwardRightEnd,
  DeadEndMaster,
  subDeadEnd,
} from "./horse_agent.js";

import { generateSquare, pieces, squares } from "./chess.js";

export function horseAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);

  let horseNode = document.getElementById(clickedSquareId);
  let isHorse = horseNode.getInnerHTML();
 
  if (isHorse === "♞" || isHorse === "♘") {

    const clickedSquare = event.target;
    const piece = clickedSquare.textContent;
    const clickedSquareId = parseInt(clickedSquare.id);
    localStorage.setItem("clicked_id", clickedSquareId);
 // Add border to clicked square
 clickedSquare.style.border = "2px solid red";
 clickedSquare.classList.add("bordered");


    // Remove border from previously clicked square
    document.querySelectorAll(".bordered").forEach((square) => {
      square.style.border = "";
      square.classList.remove("bordered");
    });

    document.querySelectorAll(".finalBackward8Left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalBackward8Left");
    });


    document.querySelectorAll(".Lefthorse").forEach((square) => {
      square.style.border = "";
      square.classList.remove("Lefthorse");
    });

    


    document.querySelectorAll(".rightEndLeftLeft").forEach((square) => {
      square.style.border = "";
      square.classList.remove("rightEndLeftLeft");
    });

    

    document.querySelectorAll(".backward8LeftLeft").forEach((square) => {
      square.style.border = "";
      square.classList.remove("backward8LeftLeft");
    });

    

    // 


    document.querySelectorAll(".finalBackWar16LeftLeft").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalBackWar16LeftLeft");
    });

    


    document.querySelectorAll(".secondLast56Forward").forEach((square) => {
      square.style.border = "";
      square.classList.remove("secondLast56Forward");
    });

    

    document.querySelectorAll(".secondLast56Backward").forEach((square) => {
      square.style.border = "";
      square.classList.remove("secondLast56Backward");
    });
    
    // 

    document.querySelectorAll(".backward16stepLeft").forEach((square) => {
      square.style.border = "";
      square.classList.remove("backward16stepLeft");
    });

    


    document.querySelectorAll(".horse8step").forEach((square) => {
      square.style.border = "";
      square.classList.remove("horse8step");
    });

    

    document.querySelectorAll(".forwardLeftLefthorse").forEach((square) => {
      square.style.border = "";
      square.classList.remove("forwardLeftLefthorse");
    });

    // 

    document.querySelectorAll(".horses").forEach((square) => {
      square.style.border = "";
      square.classList.remove("horses");
    });

    


    document.querySelectorAll(".Righthorse").forEach((square) => {
      square.style.border = "";
      square.classList.remove("Righthorse");
    });

    

    document.querySelectorAll(".backward8RightRight").forEach((square) => {
      square.style.border = "";
      square.classList.remove("backward8RightRight");
    });

    // 



    document.querySelectorAll(".backward16RightRight").forEach((square) => {
      square.style.border = "";
      square.classList.remove("backward16RightRight");
    });

    


    document.querySelectorAll(".finalforward8Left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalforward8Left");
    });

    

    document.querySelectorAll(".finalBackward8Right").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalBackward8Right");
    });

    //


    document.querySelectorAll(".finalforward16Right").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalforward16Right");
    });

    


    document.querySelectorAll(".finalBackward16Left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalBackward16Left");
    });

    

    document.querySelectorAll(".finalBackward16Right").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalBackward16Right");
    });

    

    //

    document.querySelectorAll(".finalBackward8Left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalBackward8Left");
    });

    


    document.querySelectorAll(".horseforward16Left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("horseforward16Left");
    });

    

    document.querySelectorAll(".horseforward8left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("horseforward8left");
    });

    


    document.querySelectorAll(".horseforward8right").forEach((square) => {
      square.style.border = "";
      square.classList.remove("horseforward8right");
    });

    

    document.querySelectorAll(".finalForward8Left").forEach((square) => {
      square.style.border = "";
      square.classList.remove("finalForward8Left");
    });

   

    // Check if the piece is a white or black horse

    if (
      clickedSquareId === 8 ||
      clickedSquareId === 16 ||
      clickedSquareId === 24 ||
      clickedSquareId === 32 ||
      clickedSquareId === 40 ||
      clickedSquareId === 48 ||
      clickedSquareId === 56 ||
      clickedSquareId === 64
    ) {
      HorseForwardRightEnd(clickedSquareId);
    }

    if (
      clickedSquareId === 1 ||
      clickedSquareId === 9 ||
      clickedSquareId === 17 ||
      clickedSquareId === 25 ||
      clickedSquareId === 33 ||
      clickedSquareId === 41 ||
      clickedSquareId === 49 ||
      clickedSquareId === 57
    ) {
      HorseForwardLeftEnd(clickedSquareId);
    }

    if (
      clickedSquareId == 16 ||
      (clickedSquareId >= 19 && clickedSquareId <= 22) ||
      (clickedSquareId >= 27 && clickedSquareId <= 30) ||
      (clickedSquareId >= 35 && clickedSquareId <= 38) ||
      (clickedSquareId >= 43 && clickedSquareId <= 46)
    ) {
      HorseMaster(clickedSquareId);
    }

    if (
      (clickedSquareId >= 2 && clickedSquareId <= 7) ||
      (clickedSquareId >= 11 && clickedSquareId <= 14) ||
      (clickedSquareId >= 51 && clickedSquareId <= 54) ||
      (clickedSquareId >= 58 && clickedSquareId <= 63)
    ) {
      DeadEndMaster(clickedSquareId);
    }

    if (
      clickedSquareId == 10 ||
      clickedSquareId == 15 ||
      clickedSquareId == 50 ||
      clickedSquareId == 55 ||
      clickedSquareId === 18 ||
      clickedSquareId === 26 ||
      clickedSquareId === 34 ||
      clickedSquareId === 42 ||
      clickedSquareId === 23 ||
      clickedSquareId === 31 ||
      clickedSquareId === 39 ||
      clickedSquareId === 47
    ) {
      subDeadEnd(clickedSquareId);
    }
  } else {
    console.log("Not a horse");
  }
}
