document.getElementById("chessboardWrapper").style.display = "none";
document.getElementById("loading").style.display = "block";

// Function to move the black rook forward to the black pawn square
function PawnMove() {}

// Add event listener to the black rook
const blackRook = document.getElementById("black-pawn1");
blackRook.addEventListener("click", function () {
  alert("Black Pawn clicked!");
  PawnMove();
});

let idBlackCharPairs = [
  { id: "ibr", value: "&#9820;" },
  { id: "ibk", value: "&#9822;" },
  { id: "ibb", value: "&#9821;" },
  { id: "ibq", value: "&#9819;" },
  { id: "ibking", value: "&#9818;" },
  { id: "ibb2", value: "&#9821;" },
  { id: "ibk2", value: "&#9822;" },
  { id: "ibr2", value: "&#9820;" },
];

let idWhiteCharValuePairs = [
  { id: "iwr", value: "&#9814;" },
  { id: "iwk", value: "&#9816;" },
  { id: "iww", value: "&#9815;" },
  { id: "iwq", value: "&#9813;" },
  { id: "iwking", value: "&#9812;" },
  { id: "iww2", value: "&#9815;" },
  { id: "iwk2", value: "&#9816;" },
  { id: "iwr2", value: "&#9814;" },
];

// Iterate over each object and set ID and value for black pieces
idBlackCharPairs.forEach(function (pair) {
  let element = document.getElementById(pair.id);
  if (element) {
    element.innerHTML = pair.value;
  }
});

// Iterate over each object and set ID and value for white pieces
idWhiteCharValuePairs.forEach(function (pair) {
  let element = document.getElementById(pair.id);
  if (element) {
    element.innerHTML = pair.value;
  }
});

// Define an array of black pawn IDs
let iblackPawns = [
  "black-pawn1",
  "black-pawn2",
  "black-pawn3",
  "black-pawn4",
  "black-pawn5",
  "black-pawn6",
  "black-pawn7",
  "black-pawn8",
];
let iwhitePawns = [
  "white-pawn1",
  "white-pawn2",
  "white-pawn3",
  "white-pawn4",
  "white-pawn5",
  "white-pawn6",
  "white-pawn7",
  "white-pawn8",
];

console.log(iwhitePawns);

// Iterate over each black pawn ID and set its innerHTML to "&#9823;"
iblackPawns.forEach((pawnId) => {
  document.getElementById(pawnId).innerHTML = "&#9823;";
});

iwhitePawns.forEach((pawnId) => {
  document.getElementById(pawnId).innerHTML = "&#9817;";
});

// Initialize an array to store the IDs of each container
const containerIDs = [
  ["bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
  ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
  ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12"],
  ["bbox13", "wbox13", "bbox14", "wbox14", "bbox15", "wbox15", "bbox16", "wbox16"],
  ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20"],
  ["bbox21", "wbox21", "bbox22", "wbox22", "bbox23", "wbox23", "bbox24", "wbox24"],
  ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox28"],
  ["bbox29", "wbox29", "bbox30", "wbox30", "bbox31", "wbox31", "bbox32", "wbox32"]
];

// Get the span element with the ID 'b9'
const spanElement = document.getElementById("white-pawn1");

// Check if the span element has any text content
if (spanElement.textContent.trim() !== "") {
    // Trigger an alert if there is text content
    console.log("There is a value inside the span element with ID 'b9'");
}


document.getElementById("loading").style.display = "none";
document.getElementById("chessboardWrapper").style.display = "block";
