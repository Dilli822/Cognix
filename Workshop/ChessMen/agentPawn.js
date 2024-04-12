const whiteBoxes = ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"];
const blackBoxes = ["bbox29", "wbox29", "bbox30", "wbox30", "bbox31", "wbox31", "bbox32", "wbox32"];

const chessboardLayout = [
    ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
    ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
    ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12"],
    ["bbox13", "wbox13", "bbox14", "wbox14", "bbox15", "wbox15", "bbox16", "wbox16"],
    ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20"],
    ["bbox21", "wbox21", "bbox22", "wbox22", "bbox23", "wbox23", "bbox24", "wbox24"],
    ["wbox25", "bbox25", "wbox26", "bbox26", "wbox27", "bbox27", "wbox28", "bbox28"],
    ["bbox29", "wbox29", "bbox30", "wbox30", "bbox31", "wbox31", "bbox32", "wbox32"],
];


// VISUALIZE THE CHESSBOARD
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
            if (cellContent == "♙") {
                whiteBoxIds.push(cellId);
            }
        }

        chessboardContent.push(row);
    }
    return { chessboardContent, blackBoxIds, whiteBoxIds };
}

// Usage example:
const { chessboardContent, blackBoxIds, whiteBoxIds } = retrieveChessboardContent(chessboardLayout);
console.log("Chessboard Content:", chessboardContent);
console.log("Black Box IDs:", blackBoxIds);
console.log("White Box IDs:", whiteBoxIds);
// Log the current chessboard content
console.log("initial chessboard ids ", chessboardLayout);



// #### extracting the id of every clicks
// Function to handle clicks on chessboard squares
function handleClick(event) {
  // Extract the content and ID of the clicked square
   const squareContent = event.target.textContent.trim();
    const squareId = event.target.id;
    localStorage.setItem("latestClicked_Id", squareId);
   console.log("Clicked square content:", squareContent);
   console.log("Clicked square ID:", squareId);
}

// Iterate over the chessboard layout and add event listeners to each square
for (let i = 0; i < chessboardLayout.length; i++) {
  for (let j = 0; j < chessboardLayout[i].length; j++) {
    const squareId = chessboardLayout[i][j];
    const squareElement = document.getElementById(squareId);
      // Add event listener to the square
      squareElement.addEventListener("click", handleClick);
  }
}

// PAWN POSSIBLE MOVING POSITIONS
// Function to calculate the destination box for a white pawn
function calculateDestinationBox(currentBoxId) {
// Check if the current box is a black box
const isBlackBox = currentBoxId.startsWith("bbox");

  // If it's a black box, return the corresponding white box 4 steps ahead
  if (isBlackBox) {
      const currentBoxNumber = parseInt(currentBoxId.slice(4));
      const possibleStep = currentBoxNumber + 4;
      const destinationBoxId = `wbox${possibleStep}`;
    
      const destinationBoxContent = document.getElementById(destinationBoxId).textContent.trim();
      if (destinationBoxContent === "") {
          console.log("Yes, Black pawn can move");
          alert(destinationBoxId)
      } else {
          console.log("Destination box is occupied");
      }
      return destinationBoxId;
  } else {
      // If it's a white box, return the corresponding black box 4 steps ahead
      const currentBoxNumber = parseInt(currentBoxId.slice(4));
      const possibleStep = currentBoxNumber + 4;
      const destinationBoxId = `bbox${possibleStep}`;
      const destinationBoxContent = document.getElementById(destinationBoxId).textContent.trim();
      if (destinationBoxContent === "") {
          console.log("Yes, white pawn can move");
      } else {
          console.log("Destination box is occupied");
      }
      return destinationBoxId;
  }
}

// Test the function with a starting position
let  latestId =  localStorage.getItem("latestClicked_Id");
const destinationBox0 = calculateDestinationBox(latestId); // Expected: wbox9 for bbox5
console.log("Destination for " + latestId + " is"  + destinationBox0);

// LATEST CHESSBOARD
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

// REVIVAL SPECIAL CASE FOR WHITE PAWN
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

// REVIVAL SPECIAL CASE FOR WHITE PAWN
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
    console.log("chesslayout", chessboardLayout);
    console.log("current chessboard", currentChessboard);

    const { chessboardContent, blackBoxIds, whiteBoxIds } = retrieveChessboardContent(chessboardLayout);
    console.log("Chessboard Content:", chessboardContent);

    console.log("Black Box IDs:", blackBoxIds);
    console.log("White Box IDs:", whiteBoxIds);

    const destinationBox0 = calculateDestinationBox(latestId);

    console.log("Next Destination for pawn:" + latestId+ " is "+ destinationBox0);
    localStorage.setItem("pawnmoved", destinationBox0)

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

