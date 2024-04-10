const whiteBoxes = [
  "wbox1",
  "bbox1",
  "wbox2",
  "bbox2",
  "wbox3",
  "bbox3",
  "wbox4",
  "bbox4",
];
const blackBoxes = [
  "bbox29",
  "wbox29",
  "bbox30",
  "wbox30",
  "bbox31",
  "wbox31",
  "bbox32",
  "wbox32",
];

const chessboardLayout = [
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
    "wbox17",
    "bbox17",
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

// Function to retrieve the content of the IDs in the chessboard layout
function retrieveChessboardContent(layout) {
  const chessboardContent = [];
  const blackBoxIds = [];
  const whiteBoxIds = [];

  for (let i = 0; i < layout.length; i++) {
    const row = [];
    for (let j = 0; j < layout[i].length; j++) {
      const cellId = layout[i][j];
      const cellContent = document.getElementById(cellId).textContent.trim();
      row.push(cellContent);

      if (cellContent === "♟") {
        blackBoxIds.push(cellId);
      }
      if(cellContent == "♙"){
        whiteBoxIds.push(cellId)
      }
      
    }
    
    chessboardContent.push(row);
  }
  return { chessboardContent, blackBoxIds, whiteBoxIds };
}

// Usage example:
const { chessboardContent, blackBoxIds ,whiteBoxIds} = retrieveChessboardContent(chessboardLayout);
console.log("Chessboard Content:", chessboardContent);
console.log("Black Box IDs:", blackBoxIds);
console.log("White Box IDs:", whiteBoxIds);
// Log the current chessboard content
console.log("CURRENTCHESSBOAR", chessboardLayout);

// Define the sets of boxes
// Function to calculate the destination box for a white pawn
function calculateDestinationBox(currentBoxId) {
  // Check if the current box is a black box
  const isBlackBox = currentBoxId.startsWith("bbox");
  // If it's a black box, return the corresponding white box 4 steps ahead
  if (isBlackBox) {
    const currentBoxNumber = parseInt(currentBoxId.slice(4));
    return `wbox${currentBoxNumber + 4}`;
  } else {
    // If it's a white box, return the corresponding black box 4 steps ahead
    const currentBoxNumber = parseInt(currentBoxId.slice(4));
    return `bbox${currentBoxNumber + 4}`;
  }
}

// Test the function with a starting position
const destinationBox0 = calculateDestinationBox("bbox5"); // Expected: wbox9
const destinationBox1 = calculateDestinationBox("wbox9"); // Expected: bbox13
const destinationBox2 = calculateDestinationBox("bbox13"); // Expected: wbox17
const destinationBox3 = calculateDestinationBox("wbox17"); // Expected: bbox21

console.log("Destination for bbox5:", destinationBox0);
console.log("Destination for wbox9:", destinationBox1);
console.log("Destination for bbox13:", destinationBox2);
console.log("Destination for wbox17:", destinationBox3);

// Function to alert the value of the "current_chessboard" item in localStorage
function alertCurrentChessboard() {
  const currentChessboard = localStorage.getItem("current_chessboard");
  if (currentChessboard !== null) {
    console.log(`From agent pawn Current Chessboard:\n${currentChessboard}`);
  } else {
    alert("FROM AGENT PAWN Current chessboard not found in localStorage.");
  }
}

// Call the function to alert the value of "current_chessboard" in localStorage
alertCurrentChessboard();

// Define the function to check if a set of boxes contains any white pawns
function checkWhitePawnsInBoxes(boxes) {
  const hasWhitePawns = boxes.some((boxId) => {
    const boxContent = document.getElementById(boxId).textContent.trim();
    return boxContent === "♙";
  });

  if (hasWhitePawns) {
    alert("White pawns detected in the white boxes set!");
  }

  return hasWhitePawns;
}

// Define the function to check if a set of boxes contains any black pawns
function checkBlackPawnsInBoxes(boxes) {
  const hasBlackPawns = boxes.some((boxId) => {
    const boxContent = document.getElementById(boxId).textContent.trim();
    return boxContent === "♟";
  });

  if (hasBlackPawns) {
    alert("Black pawns detected in the black boxes set!");
  }

  return hasBlackPawns;
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationsList, observer) => {
  // Whenever there's a change in the DOM, check for white and black pawns
  const whitePawnsDetected = checkWhitePawnsInBoxes(whiteBoxes);
  const blackPawnsDetected = checkBlackPawnsInBoxes(blackBoxes);
  alertCurrentChessboard();
  // Retrieve the content of the chessboard IDs
  const currentChessboard = retrieveChessboardContent(chessboardLayout);
  console.log("CURRENTCHESSBOAR", chessboardLayout);
  console.log("CURRENTCHESSBOAR", currentChessboard);
  const { chessboardContent, blackBoxIds, whiteBoxIds } = retrieveChessboardContent(chessboardLayout);
console.log("Chessboard Content:", chessboardContent);
console.log("Black Box IDs:", blackBoxIds);
console.log("White Box IDs:", whiteBoxIds);


  // Test the function with a starting position
  // input will be from the user input
  // const destinationBox0 = calculateDestinationBox("bbox5"); // Expected: wbox9
  // const destinationBox1 = calculateDestinationBox("wbox9"); // Expected: bbox13
  // const destinationBox2 = calculateDestinationBox("bbox13"); // Expected: wbox17
  // const destinationBox3 = calculateDestinationBox("wbox17"); // Expected: bbox21

  // console.log("Destination for bbox5:", destinationBox0);
  // console.log("Destination for wbox9:", destinationBox1);
  // console.log("Destination for bbox13:", destinationBox2);
  // console.log("Destination for wbox17:", destinationBox3);
});

// Configuration of the observer:
const config = {
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
};

// Start observing the target node for configured mutations
observer.observe(document.body, config); // Observing changes in the entire body of the document
