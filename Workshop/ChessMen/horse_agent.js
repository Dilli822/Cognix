const chessboardLayoutForHorse = [
    ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
    ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
    ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12"],
    ["bbox13", "wbox13", "bbox14", "wbox14", "bbox15", "wbox15", "bbox16", "wbox16"],
    ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20"],
    ["bbox21", "wbox21", "bbox22", "wbox22", "bbox23", "wbox23", "bbox24", "wbox24"],
    ["wbox25", "bbox25", "wbox26", "bbox26", "wbox27", "bbox27", "wbox28", "bbox28"],
    ["bbox29", "wbox29", "bbox30", "wbox30", "bbox31", "wbox31", "bbox32", "wbox32"],
];


let currentHorsePosition;
let currentHorseType;
let squareString = "";
let squareNumber = 0;

let horseLeftForwardDeadEnd = ["wbox1", "bbox29"];
let horseRightForwardDeadEnd = ["bbox4", "wbox32"];

// Function to handle clicks on chessboard squares
function handleClick(event) {
  // Extract the content and ID of the clicked square
  const squareContent = event.target.textContent.trim();
  const squareId = event.target.id;

  currentHorsePosition = squareId;
  currentHorseType = squareContent;

  [, squareString, squareNumber] = squareId.match(/([a-zA-Z]+)(\d+)/);
  
  console.log(squareNumber);
  console.log(squareString);

  // Check if the content is a horse and its color
  if ((squareContent === "♞" && squareId.startsWith("b")) || (squareContent === "♞" && squareId.startsWith("w"))) {
    moveForward4Step(squareString, squareNumber);
    // If a black horse is found, update the dead-end arrays
    if (squareId === "wbox1" || squareId === "bbox29") {
      restrictForwardLeftMove(squareId);
    } else if (squareId === "bbox4" || squareId === "wbox32") {
      restrictForwardRightMove(squareId);
    }
  } else if ((squareContent === "♘" && squareId.startsWith("w")) || (squareContent === "♘" && squareId.startsWith("b"))) {
    moveForward4Step(squareString, squareNumber);
    // If a white horse is found, update the dead-end arrays
    if (squareId === "wbox1" || squareId === "bbox29") {
      restrictForwardLeftMove(squareId);
    } else if (squareId === "bbox4" || squareId === "wbox32") {
      restrictForwardRightMove(squareId);
    }
    console.log("You clicked a white horse!");
  }
}

function moveForward4Step(squareString, squareNumber) {
  const horseForward4step = 4 + parseInt(squareNumber);
  const oppositeSquareString = squareString.startsWith("b") ? squareString.replace("b", "w") : squareString.replace("w", "b");
  const moveForward4Step = oppositeSquareString + horseForward4step;
  console.log("Forward 4 step: " + moveForward4Step);
  
  // Flatten the chessboardLayoutForHorse array
  const flatChessboardLayout = chessboardLayoutForHorse.flat();
  
  if (flatChessboardLayout.includes(moveForward4Step)) {
    console.log("Yes, Horse can move 4 steps ahead");
    moveForward8Step(horseForward4step)
    moveForward8StepLeft(horseForward4step)
    moveForward8StepRight(horseForward4step)
  } else {
    console.log("No, Horse cannot move 4 steps ahead");
  }
}

function moveForward8Step(id){
  const horseForward8step= 4 + parseInt(id);
  let oppositeSquareString = squareString.startsWith("b")
  ? squareString.replace("b", "b")
  : squareString.replace("w", "w");
  let finalStep = oppositeSquareString + horseForward8step;
  console.log("Yes, Horse can move 8 steps ahead ");
  console.log("forward 8 step" + oppositeSquareString + horseForward8step)
  // document.getElementById(oppositeSquareString).classList.add("LeftHorse");


}



function moveForward8StepLeft(id){
  const horseForward8step= 4 + parseInt(id);
  let oppositeSquareString = squareString.startsWith("b")
  ? squareString.replace("b", "b")
  : squareString.replace("w", "w");
  let finalStep = oppositeSquareString + horseForward8step;
  console.log("Yes, Horse can move 8 steps ahead and take 1 left");
  console.log("forward 8 step and taking left " + oppositeSquareString + horseForward8step)
  // document.getElementById(oppositeSquareString).classList.add("LeftHorse");


}


function restrictForwardLeftMove(squareId) {
  // Implement logic to restrict left forward moves
  if (horseLeftForwardDeadEnd.includes(squareId)) {
    console.log("Restricting left forward move for horse at " + squareId);
    moveForward8StepRight(id)
  }
}


function moveForward8StepRight(id){
  const horseForward8step= 5 + parseInt(id);
  let oppositeSquareString = squareString.startsWith("b")
  ? squareString.replace("b", "w")
  : squareString.replace("w", "b");
  let finalStep = oppositeSquareString + horseForward8step;

  console.log("Yes, Horse can move 8 steps ahead and take 1 right");
  console.log("forward 8 step and taking right " + oppositeSquareString + horseForward8step)
  // document.getElementById(finalStep).classList.add("RightHorse");


}





function restrictForwardRightMove(squareId) {
  // Implement logic to restrict right forward moves
  if (horseRightForwardDeadEnd.includes(squareId)) {
    console.log("Restricting right forward move for horse at " + squareId);
    moveForward8StepLeft(id)
  }
}




function restrictForwardLeftMove(id){
  alert("horse cannot move left");
}


function restrictForwardRightMove(id){
  alert("horse cannot move right");
}


// function horseLeft_ForwardDeadEnd(currentHorsePosition){
//   console.log("currentHorsePosition in horseleftdeadend ", currentHorsePosition)

// }

// function horseRight_ForwardDeadEnd(currentHorsePosition){
//   console.log("currentHorsePosition in horsrightdeadend ", currentHorsePosition)
//   console.log(currentHorsePosition)
//   if(horseRightForwardDeadEnd.includes(currentHorsePosition)){
//     alert("Horse Cannot go move forward Right")
//   }
// }


// Iterate over the chessboard layout and add event listeners to each square
for (let i = 0; i < chessboardLayoutForHorse.length; i++) {
    for (let j = 0; j < chessboardLayoutForHorse[i].length; j++) {
        const squareId = chessboardLayoutForHorse[i][j];
        const squareElement = document.getElementById(squareId);
        // Add event listener to the square
        squareElement.addEventListener("click", handleClick);
    }
}
