// Define pawn positions for both black and white sides

let pawnPositions = [
  // BLACK SIDE PAWNS COLLECTIONS
  ["5", "6", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
  // WHITE SIDE PAWNS COLLECTIONS
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
];

let black_start = [
  ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
];

let white_start = [
  // whitePieces
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

let blackPieces = [
  "&#9820;", // Black Rook
  "&#9822;", // Black Knight
  "&#9821;", // Black Bishop
  "&#9819;", // Black Queen
  "&#9818;", // Black King
  "&#9821;", // Black Bishop
  "&#9822;", // Black Knight
  "&#9820;", // Black Rook
];

let whitePieces = [
  "&#9814;", // White Rook
  "&#9816;", // White Knight
  "&#9815;", // White Bishop
  "&#9813;", // White Queen
  "&#9812;", // White King
  "&#9815;", // White Bishop
  "&#9816;", // White Knight
  "&#9814;", // White Rook
];

// Loop through each set of pawn positions
for (let j = 0; j < pawnPositions.length; j++) {
  let positions = pawnPositions[j];
  let pawnSymbol = j === 0 ? "&#9823;" : "&#9817;"; // Unicode for black or white pawn

  // Loop through the div IDs and set innerHTML for each div to the appropriate pawn Unicode character
  for (let i = 0; i < positions.length; i++) {
    let div = document.getElementById(positions[i]);
    div.innerHTML = pawnSymbol;
  }
}

// Map black_start to blackPieces and set innerHTML for each div
black_start.forEach((pieceSet, setIndex) => {
  pieceSet.forEach((divID, pieceIndex) => {
    let div = document.getElementById(divID);
    if (div) {
      div.innerHTML = blackPieces[pieceIndex];
    }
  });
});

// Map black_start to blackPieces and set innerHTML for each div
white_start.forEach((pieceSet, setIndex) => {
  pieceSet.forEach((divID, pieceIndex) => {
    let div = document.getElementById(divID);
    if (div) {
      div.innerHTML = whitePieces[pieceIndex];
    }
  });
});

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
const { chessboardContent, blackBoxIds, whiteBoxIds } =
  retrieveChessboardContent(chessboardLayout);

// Define the initial box mapping for black pawns
let initial_box_mapping_for_black_pawns = {
  bbox5: ["wbox9", "bbox13"],
  wbox5: ["bbox9", "wbox13"],
  bbox6: ["wbox10", "bbox14"],
  wbox6: ["bbox10", "wbox14"],
  bbox7: ["wbox11", "bbox15"],
  wbox7: ["bbox11", "wbox15"],
  bbox8: ["wbox12", "bbox16"],
  wbox8: ["bbox12", "wbox16"],
  // Add more mappings as needed
};

let initial_box_mapping_for_white_pawns = {
  wbox25: ["bbox21", "wbox17"],
  bbox25: ["wbox21", "bbox17"],
  wbox26: ["bbox22", "wbox18"],
  bbox26: ["wbox22", "bbox18"],
  wbox27: ["bbox23", "wbox19"],
  bbox27: ["wbox23", "bbox19"],
  wbox28: ["bbox24", "wbox20"],
  bbox28: ["wbox24", "bbox20"],
};

let black_flag = false;
let white_flag = true;
let mapping;
let clickedPosition;

// Loop through each set of pawn positions
for (let j = 0; j < pawnPositions.length; j++) {
  let positions = pawnPositions[j];
  let pawnSymbol = j === 0 ? "&#9823;" : "&#9817;"; // Unicode for black or white pawn

  // Loop through the div IDs and set innerHTML for each div to the appropriate pawn Unicode character
  for (let i = 0; i < positions.length; i++) {
    let div = document.getElementById(positions[i]);
    div.innerHTML = pawnSymbol;

    div.addEventListener("click", handlePawnPositionClick);
  }
}

// Function to handle pawn position click
function handlePawnPositionClick(event) {
  // Retrieve the ID of the clicked pawn position
  const clickedPosition = event.target.id;

  // Assign the clickedPosition to the global variable
  let clicked = clickedPosition;
  if (!white_flag && black_flag) {
    // If it's white player's turn
    // Retrieve the mapping from the initial box mapping for black pawns
    mapping = initial_box_mapping_for_black_pawns[clickedPosition];
    handleHigBlacklightedPositionClick(mapping, clicked);
  } else if (white_flag && !black_flag) {
    // Retrieve the mapping from the initial box mapping for white pawns
    mapping = initial_box_mapping_for_white_pawns[clickedPosition];
    // Call handleHighlightedPositionClick with the updated mapping and element
    handleHighWhitelightedPositionClick(mapping, clicked);
  } else if (!white_flag && !black_flag) {
    return;
  }

  // Remove the "active" class from all other elements
  const allPositions = document.querySelectorAll(".col.square");
  allPositions.forEach((element) => {
    if (element.id !== clickedPosition) {
      element.classList.remove("active");
    }
  });

  // Add the "active" class to each ID in the mapping
  if (mapping) {
    mapping.forEach((id) => {
      element = document.getElementById(id);
      if (element) {
        element.classList.add("active");
      }
    });
  }
}

// Function to handle highlighted position click
// Function to handle highlighted position click
function handleHigBlacklightedPositionClick(ids, clicked_id) {
  // Add click event listeners to each corresponding ID
  console.log(clicked_id);
  const content = document.getElementById(clicked_id).innerHTML;
  console.log(content);
  ids.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => {
        console.log(`You clicked on ${id}`);
        document.getElementById(clicked_id).innerHTML = "";
        document.getElementById(id).innerHTML = content;
        document.querySelectorAll(".active").forEach((el) => {
          el.classList.remove("active");
        });
        // Store the ID of the recently moved pawn in localStorage
        localStorage.setItem("recently_moved_black_pawn", id);
        // Disable event listener for the recently moved pawn
        element.removeEventListener("click", handlePawnPositionClick);
        // Call the function to disable event listeners for white pawns
        disableBlackPawnsEventListeners(id);
      });
    }
  });
}

// Function to handle highlighted position click
function handleHighWhitelightedPositionClick(ids, clicked_id) {
  // Add click event listeners to each corresponding ID
  console.log(clicked_id);
  const content = document.getElementById(clicked_id).innerHTML;
  console.log(content);
  ids.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => {
        console.log(`You clicked on ${id}`);
        document.getElementById(clicked_id).innerHTML = "";
        document.getElementById(id).innerHTML = content;
        document.querySelectorAll(".active").forEach((el) => {
          el.classList.remove("active");
        });
        // Call the function to disable event listeners for white pawns
        disableWhitePawnsEventListeners();
      });
    }
  });
}

// Loop through each set of pawn positions
for (let j = 0; j < pawnPositions.length; j++) {
  let positions = pawnPositions[j];
  let pawnSymbol = j === 0 ? "&#9823;" : "&#9817;"; // Unicode for black or white pawn

  // Loop through the div IDs and set innerHTML for each div to the appropriate pawn Unicode character
  for (let i = 0; i < positions.length; i++) {
    let div = document.getElementById(positions[i]);
    div.innerHTML = pawnSymbol;

    // Attach click event listener to each pawn position
    div.addEventListener("click", handlePawnPositionClick);
  }
}

// Function to remove event listeners from white pawns
function disableWhitePawnsEventListeners(id) {
  // Iterate through each cell in the chessboard layout

  chessboardLayout.forEach((row) => {
    row.forEach((cellId) => {
      // Find the element with the cellId
      const element = document.getElementById(cellId);

      // If the element contains the content "♙", remove event listeners
      if (element.innerHTML.trim() === "♙") {
        element.removeEventListener("click", handlePawnPositionClick);
        element.removeEventListener(
          "click",
          handleHighWhitelightedPositionClick
        );
        console.log("removed event listerner for whitepawn");
      }
      const allIds = [
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

      allIds.forEach((idSet) => {
        idSet.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            // Remove all event listeners from the element
            element.outerHTML = element.outerHTML;
          }
        });
      });
    });
  });

  black_flag = true;
  white_flag = false;
  localStorage.setItem("initial_black_flag", true);
  localStorage.setItem("initial_white_flag", false);
}

function disableBlackPawnsEventListeners() {
  // Iterate through each cell in the chessboard layout
  chessboardLayout.forEach((row) => {
    row.forEach((cellId) => {
      // Find the element with the cellId
      const element = document.getElementById(cellId);
      // If the element contains the content "♙", remove event listeners
      if (element.innerHTML.trim() === "♟") {
        element.removeEventListener("click", handlePawnPositionClick);
      }

      chessboardLayout.forEach((idSet) => {
        idSet.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            // Remove all event listeners from the element
            element.outerHTML = element.outerHTML;
          }
        });
      });
    });
  });

  black_flag = false;
  white_flag = false;
  localStorage.setItem("initial_black_flag", false);
  localStorage.setItem("initial_white_flag", false);

  // Load the second script after a 5-second delay
  setTimeout(function () {
    const script = document.createElement("script");
    script.src = "./pawn_agents_moves.js";
    document.body.appendChild(script);
  }, 100); // 5000 milliseconds = 5 seconds

    // Load the second script after a 5-second delay
    setTimeout(function () {
      const script = document.createElement("script");
      script.src = "./horse_agent.js";
      document.body.appendChild(script);
    }, 100); // 5000 milliseconds = 5 seconds
}
