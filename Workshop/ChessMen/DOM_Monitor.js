import { chessboard } from "./script.js";
// Select the target node

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
    "wbox18",
    "bbox18",
    "wbox19",
    "bbox19",
    "wbox20",
    "bbox20",
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

// Initialize an empty matrix with zeros
let oldMatrix = Array.from({ length: containerIDs.length }, () =>
  Array(containerIDs[0].length).fill(0)
);

// Function to update the matrix with the content of the DOM elements
function updateMatrix() {
  let newMatrix = Array.from({ length: containerIDs.length }, () =>
    Array(containerIDs[0].length).fill(0)
  );
  
  for (let i = 0; i < containerIDs.length; i++) {
    for (let j = 0; j < containerIDs[i].length; j++) {
      const element = document.getElementById(containerIDs[i][j]);
      if (element) {
        // Update the matrix with the content of the DOM element
        newMatrix[i][j] = element.innerText.trim();
      }
    }
  }

  return newMatrix;
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationsList, observer) => {
  // Use the mutationsList to process each mutation
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      // Log the added nodes
      mutation.addedNodes.forEach((node) => {
        console.log("Node added:", node);
        let newMatrix = updateMatrix();
        if (matrixChanged(oldMatrix, newMatrix)) {
          console.log("Matrix has changed!");
        }
        oldMatrix = newMatrix;
      });
    }
    if (mutation.type === "childList" && mutation.removedNodes.length > 0) {
      // Log the removed nodes
      mutation.removedNodes.forEach((node) => {
        console.log("Node removed:", node);
        let newMatrix = updateMatrix();
        if (matrixChanged(oldMatrix, newMatrix)) {
          console.log("Matrix has changed!");
        }
        oldMatrix = newMatrix;
      });
    }
    if (mutation.type === "characterData") {
      // Log the changed text content
      console.log("Text content changed:", mutation.target.textContent);
      let newMatrix = updateMatrix();
      if (matrixChanged(oldMatrix, newMatrix)) {
        console.log("Matrix has changed!");
      }
      oldMatrix = newMatrix;
    }
  }
});

// Function to check if the old and new matrices are different
function matrixChanged(oldMatrix, newMatrix) {
  for (let i = 0; i < oldMatrix.length; i++) {
    for (let j = 0; j < oldMatrix[i].length; j++) {
      if (oldMatrix[i][j] !== newMatrix[i][j]) {
        return true;
      }
    }
  }
  return false;
}

// Configuration of the observer:
const config = {
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
};

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
console.log(containerIDs);
