import { chessboard } from "./script.js";

let containerIDs = [
  ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
  ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
  [
    "wbox9",
    "bbox9",
    "wbox10",
    "bbox10",
    "wbox11",
    "bbox11",
    "wbox12",
    "bbox12",
  ],
  [
    "bbox13",
    "wbox13",
    "bbox14",
    "wbox14",
    "bbox15",
    "wbox15",
    "bbox16",
    "wbox16",
  ],
  [
    "bbox17",
    "wbox17",
    "bbox18",
    "wbox18",
    "bbox19",
    "wbox19",
    "bbox20",
    "wbox20",
  ],
  [
    "bbox21",
    "wbox21",
    "bbox22",
    "wbox22",
    "bbox23",
    "wbox23",
    "bbox24",
    "wbox24",
  ],
  [
    "wbox25",
    "bbox25",
    "wbox26",
    "bbox26",
    "wbox27",
    "bbox27",
    "wbox28",
    "bbox28",
  ],
  [
    "bbox29",
    "wbox29",
    "bbox30",
    "wbox30",
    "bbox31",
    "wbox31",
    "bbox32",
    "wbox32",
  ],
];

const targetNode = document.body;

// Store the initial chessboard state
let oldChessboard = JSON.parse(JSON.stringify(chessboard));

// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationsList, observer) => {
  // Iterate over each row and column in containerIDs
  containerIDs.forEach((row, rowIndex) => {
    row.forEach((id, colIndex) => {
      // Find the corresponding element in the DOM
      const element = document.getElementById(id);
      if (element) {
        // Retrieve the value of the element and store it in the chessboard array
        chessboard[rowIndex][colIndex] = element.innerText.trim();
      }
    });
  });

  // Log the updated chessboard array with the extracted values
  console.log("Extracted values from DOM:", chessboard);
  // Log both the old and new chessboard states
  localStorage.setItem("previous_chessboard", oldChessboard);
  localStorage.setItem("current_chessboard", chessboard);
  console.log("Old chessboard state:", oldChessboard);
  console.log("New chessboard state:", chessboard);

  // Compare old and new chessboard states
  if (!arraysEqual(oldChessboard, chessboard)) {
    console.log("Chessboard state has changed!");
  }

  // Update oldChessboard with the current state
  oldChessboard = JSON.parse(JSON.stringify(chessboard));

  // Use the mutationsList to process each mutation
  for (let mutation of mutationsList) {
    // Handle mutations here if needed
  }
});

// Configuration of the observer:
const config = {
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
};

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Function to compare two arrays for equality
function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Print indices and values of each element in the 2D array
for (let i = 0; i < chessboard.length; i++) {
  for (let j = 0; j < chessboard[i].length; j++) {
    // console.log(`Index (${i}, ${j}): ${chessboard[i][j]}`);
  }
}

// Add the 'export' keyword to export the variables
export { oldChessboard, chessboard };
