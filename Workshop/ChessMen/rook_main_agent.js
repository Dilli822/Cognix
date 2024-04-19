import { rookMaster } from "./rook_agent.js";

import { generateSquare, pieces, squares } from "./chess.js";

export function rookAgent(event) {
  const clickedSquare = event.target;
  const clickedSquareId = parseInt(clickedSquare.id);
  console.log(clickedSquareId);

  let rookNode = document.getElementById(clickedSquareId);
  let isRook = rookNode.getInnerHTML();

  // Get the piece on the clicked square from the pieces array
  // alert(isRook)

  // Remove border from previously clicked square
  document.querySelectorAll(".bordered").forEach((square) => {
    square.style.border = "";
    square.classList.remove("bordered");
  });

  // Resetting background colors and styles for each class individually

  // .horse
  document.querySelectorAll(".horse").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .Lefthorse
  document.querySelectorAll(".Lefthorse").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .Righthorse
  document.querySelectorAll(".Righthorse").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .horse8step
  document.querySelectorAll(".horse8step").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .forwardLeftLefthorse
  document.querySelectorAll(".forwardLeftLefthorse").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .forwardRightRighthorse
  document.querySelectorAll(".forwardRightRighthorse").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .rightEndLeftLeft
  document.querySelectorAll(".rightEndLeftLeft").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .backward8LeftLeft
  document.querySelectorAll(".backward8LeftLeft").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalBackWar16LeftLeft
  document.querySelectorAll(".finalBackWar16LeftLeft").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .backward8RightRight
  document.querySelectorAll(".backward8RightRight").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .backward16RightRight
  document.querySelectorAll(".backward16RightRight").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .secondLast56Forward
  document.querySelectorAll(".secondLast56Forward").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .secondLast56Backward
  document.querySelectorAll(".secondLast56Backward").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .backward16stepLeft
  document.querySelectorAll(".backward16stepLeft").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .horseEndLef8step
  document.querySelectorAll(".horseEndLef8step").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .horseforward16Left
  document.querySelectorAll(".horseforward16Left").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .horseforward8left
  document.querySelectorAll(".horseforward8left").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .horseforward8right
  document.querySelectorAll(".horseforward8right").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalforward16Right
  document.querySelectorAll(".finalforward16Right").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalBackward16Right
  document.querySelectorAll(".finalBackward16Right").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalBackward16Left
  document.querySelectorAll(".finalBackward16Left").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalBackward8Right
  document.querySelectorAll(".finalBackward8Right").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalBackward8Left
  document.querySelectorAll(".finalBackward8Left").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalForward8Left
  document.querySelectorAll(".finalForward8Left").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .finalforward8Left
  document.querySelectorAll(".finalforward8Left").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .greenDiagonalDown
  document.querySelectorAll(".greenDiagonalDown").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .queenDiagonalRight
  document.querySelectorAll(".queenDiagonalRight").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .queenDiagonalDown
  document.querySelectorAll(".queenDiagonalDown").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .queenDiagonalUp
  document.querySelectorAll(".queenDiagonalUp").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .queenUp
  document.querySelectorAll(".queenUp").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .queenLeft
  document.querySelectorAll(".queenLeft").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .sequenceTopRightDiagonal
  document.querySelectorAll(".sequenceTopRightDiagonal").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .sequenceDownLeftDiagonal
  document.querySelectorAll(".sequenceDownLeftDiagonal").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .greenKingMove
  document.querySelectorAll(".greenKingMove").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .highlightedPawn
  document.querySelectorAll(".highlightedPawn").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // .highlightedDiagonalPawn
  document.querySelectorAll(".highlightedDiagonalPawn").forEach((element) => {
    element.style.backgroundColor = "";
    element.style.background = "";
  });

  // Check if the clicked square contains a queen or king
  if (isRook === "♖" || isRook === "♜") {
    localStorage.setItem("clicked_id_rook", clickedSquareId);

    // Add border to clicked square
    clickedSquare.style.border = "2px solid red";
    clickedSquare.classList.add("bordered");
    rookMaster(clickedSquareId);
  }
}
