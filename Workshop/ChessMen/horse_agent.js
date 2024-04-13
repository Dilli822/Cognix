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
let squareString;
let squareNumber;
let squareId;
let squareNum;

let horseLeftForwardDeadEnd = ["wbox1", "bbox29"];
let horseRightForwardDeadEnd = ["bbox4", "wbox32"];

let horseInitialForwardCase = ["bbox1","wbox4" ];

// Function to handle clicks on chessboard squares
function handleClick(event) {
  // Extract the content and ID of the clicked square
  const squareContent = event.target.textContent.trim();
  squareId = event.target.id;

  currentHorsePosition = squareId;
  currentHorseType = squareContent;

  [, squareString, squareNumber] = squareId.match(/([a-zA-Z]+)(\d+)/);
  squareNum = squareNumber;

  console.log(squareNumber);
  console.log(squareString);
  // Check if the content is a horse and its color
  if ((squareContent === "♞" && squareId.startsWith("b")) || (squareContent === "♞" && squareId.startsWith("w"))) {
   
    // If a black horse is found, update the dead-end arrays
    if (squareId === "wbox1" || squareId === "bbox29") {
      restrictForwardLeftMove(squareId);
    } else if (squareId === "bbox4" || squareId === "wbox32") {
      restrictForwardRightMove(squareId);
    }
  } else if ((squareContent === "♘" && squareId.startsWith("w")) || (squareContent === "♘" && squareId.startsWith("b"))) {
   
    // If a white horse is found, update the dead-end arrays
    if (squareId === "wbox1" || squareId === "bbox29") {
      restrictForwardLeftMove(squareId);
    } else if (squareId === "bbox4" || squareId === "wbox32") {
      restrictForwardRightMove(squareId);
    }
    console.log("You clicked a white horse!");
  }

  if ((squareContent === "♞" && squareId.startsWith("b")) || (squareContent === "♞" && squareId.startsWith("w"))) {
   
    // If a black horse is found, update the dead-end arrays
    if (squareId === "wbox1"){
      moveForward4StepForFirst(squareId)
    }else if( squareId === "wbox4" && squareId !== "wbox1" && squareId !== "bbox1" && squareId !== "wbox2"&& squareId !== "bbox2" && squareId !== "wbox3"&& squareId !== "bbox3"
    && squareId !== "bbox4")
   {
    moveForward4wBOX4Step(squareId)
    } 

    else if (squareId == "wbox2" || squareId == "bbox2"){
      moveForwardWhite4Step(squareId);
    }
    
    else {
      moveForward4Step(squareId)
    }
    
  }
}

function moveForward4StepForFirst(squareId){
  // Separate string and number
const stringPart = squareId.match(/[a-zA-Z]+/)[0]; // Extracts alphabetic characters
const numberPart = parseInt(squareId.match(/\d+/)[0]); // Extracts numeric characters

console.log("String part: " + stringPart);
console.log("Number part: " + numberPart);

// Calculate forward 8 position
const forward8 = numberPart + 8;
// alert("forward step is: " + forward8)

// Determine the opposite color of the string part
const forward8str = stringPart === "wbox" ? "wbox" : "bbox";
// alert("forward str middle is: " + forward8str)

// Calculate the left forward position
const finalforward8str = stringPart === "wbox" ? "bbox" : "wbox";



const rightForward8int = forward8 + 1;
const leftForward8int = forward8 + 1;
const leftForward8final = finalforward8str + leftForward8int;
const rightForward8final = finalforward8str + rightForward8int;


// alert("final left is : " + leftForward8final);
// alert("final right is : " + rightForward8final);
document.getElementById(rightForward8final).classList.add("LeftHorse")

document.getElementById(leftForward8final).classList.add("RightHorse")

}



function moveForward4Step(squareId){
  // Separate string and number
const stringPart = squareId.match(/[a-zA-Z]+/)[0]; // Extracts alphabetic characters
const numberPart = parseInt(squareId.match(/\d+/)[0]); // Extracts numeric characters

console.log("String part: " + stringPart);
console.log("Number part: " + numberPart);

// Calculate forward 8 position
const forward8 = numberPart + 8;
alert("forward step is: " + forward8)

// Determine the opposite color of the string part
const forward8str = stringPart === "wbox" ? "wbox" : "bbox";
alert("forward str middle is: " + forward8str)

// Calculate the left forward position
const finalforward8str = stringPart === "wbox" ? "bbox" : "wbox";



const rightForward8int = forward8 + 1;
const leftForward8final = finalforward8str + forward8;
const rightForward8final = finalforward8str + rightForward8int;
document.getElementById(rightForward8final).classList.add("LeftHorse")

document.getElementById(leftForward8final).classList.add("RightHorse")

alert("final left is : " + leftForward8final);
alert("final right is : " + rightForward8final);
}



function moveForwardWhite4Step(squareId){
  // Separate string and number
const stringPart = squareId.match(/[a-zA-Z]+/)[0]; // Extracts alphabetic characters
const numberPart = parseInt(squareId.match(/\d+/)[0]); // Extracts numeric characters

console.log("String part: " + stringPart);
console.log("Number part: " + numberPart);

// Calculate forward 8 position
const forward8 = numberPart + 8;
alert("forward step is: " + forward8)

// Determine the opposite color of the string part
const forward8str = stringPart === "wbox" ? "wbox" : "bbox";
alert("forward str middle is: " + forward8str)

// Calculate the left forward position
const finalforward8str = stringPart === "wbox" ? "bbox" : "wbox";



const rightForward8int = forward8 - 1;
const leftForward8final = finalforward8str + forward8;
const rightForward8final = finalforward8str + rightForward8int;

document.getElementById(rightForward8final).classList.add("LeftHorse")

document.getElementById(leftForward8final).classList.add("RightHorse")

alert("final left is : " + leftForward8final);
alert("final right is : " + rightForward8final);
}


function  moveForward4wBOX4Step(squareId){
  // Separate string and number
const stringPart = squareId.match(/[a-zA-Z]+/)[0]; // Extracts alphabetic characters
const numberPart = parseInt(squareId.match(/\d+/)[0]); // Extracts numeric characters

console.log("String part: " + stringPart);
console.log("Number part: " + numberPart);

// Calculate forward 8 position
const forward8 = numberPart + 8;
alert("forward step is: " + forward8)

// Determine the opposite color of the string part
const forward8str = stringPart === "wbox" ? "wbox" : "bbox";
alert("forward str middle is: " + forward8str)

// Calculate the left forward position
const finalforward8str = stringPart === "wbox" ? "bbox" : "wbox";



const rightForward8int = forward8;
const lefForward8int = forward8 - 1;
const leftForward8final = finalforward8str + lefForward8int;
const rightForward8final = finalforward8str + rightForward8int;
document.getElementById(rightForward8final).classList.add("LeftHorse")

document.getElementById(leftForward8final).classList.add("RightHorse")

alert("final left is : " + leftForward8final);
alert("final right is : " + rightForward8final);
}

function moveForward8StepLeft(id){
}

function moveForward8StepRight(id){
}

function restrictForwardLeftMove(id) {
  // Implement logic to restrict left forward moves
  if (horseLeftForwardDeadEnd.includes(id)) {
    console.log("Restricting left forward move for horse at " + id);
    moveForward8StepRight(id);
  }
}

function restrictForwardRightMove(id) {
  // Implement logic to restrict right forward moves
  if (horseRightForwardDeadEnd.includes(id)) {
    console.log("Restricting right forward move for horse at " + id);
    moveForward8StepLeft(id);
  }
}

function restrictForwardLeftMove(id) {
  alert("horse cannot move left");
}

function restrictForwardRightMove(id) {
  alert("horse cannot move right");
}

// Iterate over the chessboard layout and add event listeners to each square
for (let i = 0; i < chessboardLayoutForHorse.length; i++) {
    for (let j = 0; j < chessboardLayoutForHorse[i].length; j++) {
        const squareId = chessboardLayoutForHorse[i][j];
        const squareElement = document.getElementById(squareId);
        // Add event listener to the square
        squareElement.addEventListener("click", handleClick);
    }
}
