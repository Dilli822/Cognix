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

// Define an array of black pawn IDs
let iblackPawns = ["black-pawn1", "black-pawn2", "black-pawn3", "black-pawn4", "black-pawn5", "black-pawn6", "black-pawn7", "black-pawn8"];
let iwhitePawns = ["white-pawn1", "white-pawn2", "white-pawn3", "white-pawn4", "white-pawn5", "white-pawn6", "white-pawn7", "white-pawn8"];

console.log(iwhitePawns);

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

// Iterate over each black pawn ID and set its innerHTML to "&#9823;"
iblackPawns.forEach((pawnId) => {
  document.getElementById(pawnId).innerHTML = "&#9823;";
});

iwhitePawns.forEach((pawnId) => {
  document.getElementById(pawnId).innerHTML = "&#9817;";
});

// Get the span element with the ID 'b9'
const spanElement = document.getElementById("white-pawn1");

// Check if the span element has any text content
if (spanElement.textContent.trim() !== "") {
  // Trigger an alert if there is text content
  console.log("There is a value inside the span element with ID ", spanElement);
}

// Create a 2D array without using loops
// Function to create div elements with spans inside

let containerIDs = [
  ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
  ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
  ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12"],
  ["bbox13", "wbox13", "bbox14", "wbox14", "bbox15", "wbox15", "bbox16", "wbox16"],
  ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20"],
  ["bbox21", "wbox21", "bbox22", "wbox22", "bbox23", "wbox23", "bbox24", "wbox24"],
  ["wbox25", "bbox25", "wbox26", "bbox26", "wbox27", "bbox27", "wbox28", "bbox28"],
  ["bbox29", "wbox29", "bbox30", "wbox30", "bbox31", "wbox31", "bbox32", "wbox32"],
];

let chessboard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(chessboard);
console.log(typeof chessboard);

// Print indices and values of each element in the 2D array
for (let i = 0; i < chessboard.length; i++) {
  for (let j = 0; j < chessboard[i].length; j++) {
      // console.log(`Index (${i}, ${j}): ${chessboard[i][j]}`);
  }
}

// Function to print the values residing inside HTML nodes with given IDs
function printNodeValues(containerIDs) {
  containerIDs.forEach((rowIDs) => {
      rowIDs.forEach((id) => {
          const node = document.getElementById(id);
          if (node) {
              // console.log(node.innerText);
          }
      });
  });
}

// Call the function with the containerIDs array
printNodeValues(containerIDs);

const blackPieces = [
  "&#9820;", // Black Rook
  "&#9822;", // Black Knight
  "&#9821;", // Black Bishop
  "&#9819;", // Black Queen
  "&#9818;", // Black King
  "&#9821;", // Black Bishop
  "&#9822;", // Black Knight
  "&#9820;", // Black Rook
  "&#9823;", // Black Pawn
];

const whitePieces = [
  "&#9814;", // White Rook
  "&#9816;", // White Knight
  "&#9815;", // White Bishop
  "&#9813;", // White Queen
  "&#9812;", // White King
  "&#9815;", // White Bishop
  "&#9816;", // White Knight
  "&#9814;", // White Rook
  "&#9817;", // White Pawn
];

const blackPiecesValues = [
  { piece: "&#9820;", priority: 0.9 }, // Black Rook
  { piece: "&#9822;", priority: 0.7 }, // Black Knight
  { piece: "&#9821;", priority: 0.7 }, // Black Bishop
  { piece: "&#9819;", priority: 0.8 }, // Black Queen
  { piece: "&#9818;", priority: 1.0 }, // Black King
  { piece: "&#9821;", priority: 0.7 }, // Black Bishop
  { piece: "&#9822;", priority: 0.7 }, // Black Knight
  { piece: "&#9820;", priority: 0.9 }, // Black Rook
  { piece: "&#9823;", priority: 0.5 }, // Black Pawn
];

const whitePiecesValues = [
  { piece: "&#9814;", priority: 0.9 }, // White Rook
  { piece: "&#9816;", priority: 0.7 }, // White Knight
  { piece: "&#9815;", priority: 0.7 }, // White Bishop
  { piece: "&#9813;", priority: 0.8 }, // White Queen
  { piece: "&#9812;", priority: 1.0 }, // White King
  { piece: "&#9815;", priority: 0.7 }, // White Bishop
  { piece: "&#9816;", priority: 0.7 }, // White Knight
  { piece: "&#9814;", priority: 0.9 }, // White Rook
  { piece: "&#9817;", priority: 0.5 }, // White Pawn
];

let initialPawnPosition = [
  // BLACK SIDE PAWNS COLLECTIONS
  "wbox9",
  "bbox9",
  "wbox10",
  "bbox10",
  "wbox11",
  "bbox11",
  "wbox12",
  "bbox12",

  // WHITE SIDE PAWNS COLLECTIONS
  "wbox25",
  "bbox25",
  "wbox26",
  "bbox26",
  "wbox27",
  "bbox27",
  "wbox28",
  "bbox28",
];

let initial_BlackSideOne_GapForPawns = ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12"];

let initial_BlackSide_TwoGapForPawns = ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12", "bbox13", "wbox13", "bbox14", "wbox14", "bbox15", "wbox15", "bbox16", "wbox16"];

let initial_WhiteSideOne_GapForPawns = ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20"];

let initial_WhiteSide_TwoGapForPawns = ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20", "bbox21", "wbox21", "bbox22", "wbox22", "bbox23", "wbox23", "bbox24", "wbox24"];

// Function to print the values residing inside HTML nodes with spans
function printSpanValues(containerIDs) {
  containerIDs.forEach((rowIDs) => {
      rowIDs.forEach((id) => {
          const node = document.getElementById(id);
          if (node) {
              const span = node.querySelector("span");
              if (span) {
                  // console.log(`Value inside ${id}: ${span.innerText}`);
              }
          }
      });
  });
}

// Function to add click event listeners to pawns
function addPawnClickListeners(pawnIds) {
  pawnIds.forEach(function (pawnId) {
      var pawnElement = document.getElementById(pawnId);
      if (pawnElement) {
          pawnElement.addEventListener("click", function () {
              // Show alert when the pawn is clicked
              alert("Pawn clicked: " + pawnId);
          });
      } else {
          console.error("Pawn element not found with ID: " + pawnId);
      }
  });
}

// Function to add click event listeners to black pawns
// Function to add click event listeners to black pawns
function addBlackPawnClickListeners(pawnIds, boxToBeColored, boxTwoColored) {
  pawnIds.forEach(function (pawnId) {
      var pawnElement = document.getElementById(pawnId);
      if (pawnElement) {
          pawnElement.addEventListener("click", function () {
              // Show alert when a black pawn is clicked
              alert("Black pawn clicked: " + pawnId);

              // Change the border color of the specified box to red
              var boxElement = document.getElementById(boxToBeColored);
              var boxElements = document.getElementById(boxTwoColored);

              if (boxElement && boxElements) {
                  boxElement.classList.add("highlighted-box-step1");
                  boxElements.classList.add("highlighted-box-step2");
              } else {
                  console.error("Box element not found with ID: " + boxToBeColored);
              }
          });
      } else {
          console.error("Pawn element not found with ID: " + pawnId);
      }
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  // Initialize an empty 8x8 array
  let containerValues = Array.from({ length: 8 }, () => Array(8).fill(0));

  // Function to retrieve the values from spans inside container elements
  async function retrieveContainerValues(containerIDs) {
      await Promise.all(
          containerIDs.map(async (rowIDs, rowIndex) => {
              await Promise.all(
                  rowIDs.map(async (id, colIndex) => {
                      const node = document.getElementById(id);
                      if (node) {
                          const span = node.querySelector("span");
                          if (span) {
                              const spanContent = span.innerText.trim();
                              // Assign the span content to the corresponding position in the array
                              containerValues[rowIndex][colIndex] = spanContent;
                          }
                      }
                  })
              );
          })
      );
  }

  // Call the function to retrieve values initially
  await retrieveContainerValues(containerIDs);
  // Usage example
  addBlackPawnClickListeners(iblackPawns, "wbox9", "bbox13");
  // Call the function to add click event listeners to black pawns
  addPawnClickListeners(iblackPawns);

  // Call the function to add click event listeners to white pawns
  addPawnClickListeners(iwhitePawns);

  // Print the retrieved values initially
  console.log(containerValues);
});
