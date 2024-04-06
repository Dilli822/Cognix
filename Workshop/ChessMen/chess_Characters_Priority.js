// Create a 2D array without using loops
// Function to create div elements with spans inside

let containerIDs = [
    ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
    ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
    ["wbox9", "bbox9", "wbox10", "bbox10", "wbox11", "bbox11", "wbox12", "bbox12"],
    ["bbox13", "wbox13", "bbox14", "wbox14", "bbox15", "wbox15", "bbox16", "wbox16"],
    ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox20"],
    ["bbox21", "wbox21", "bbox22", "wbox22", "bbox23", "wbox23", "bbox24", "wbox24"],
    ["wbox17", "bbox17", "wbox18", "bbox18", "wbox19", "bbox19", "wbox20", "bbox28"],
    ["bbox29", "wbox29", "bbox30", "wbox30", "bbox31", "wbox31", "bbox32", "wbox32"]
  ];
  
  let chessboard = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  console.log(chessboard);
  console.log(typeof(chessboard));
  
  // Print indices and values of each element in the 2D array
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      console.log(`Index (${i}, ${j}): ${chessboard[i][j]}`);
    }
  }
  
  
  
  // Function to print the values residing inside HTML nodes with given IDs
  function printNodeValues(containerIDs) {
      containerIDs.forEach(rowIDs => {
          rowIDs.forEach(id => {
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
      "&#9823;"  // Black Pawn
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
      "&#9817;"  // White Pawn
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
      { piece: "&#9823;", priority: 0.5 }  // Black Pawn
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
      { piece: "&#9817;", priority: 0.5 }  // White Pawn
  ];
  
  // Function to print the values residing inside HTML nodes with spans
  function printSpanValues(containerIDs) {
      containerIDs.forEach(rowIDs => {
          rowIDs.forEach(id => {
              const node = document.getElementById(id);
              if (node) {
                  const span = node.querySelector('span');
                  if (span) {
                      console.log(`Value inside ${id}: ${span.innerText}`);
                  }
              }
          });
      });
  }
  
  // Call the function to print span values
  printSpanValues(containerIDs);
  
  
  // Initialize an empty 8x8 array
  let containerValues = Array.from({ length: 8 }, () => Array(8).fill(0));
  
  // Function to retrieve the values from spans inside container elements
  function retrieveContainerValues(containerIDs) {
      containerIDs.forEach((rowIDs, rowIndex) => {
          rowIDs.forEach((id, colIndex) => {
              const node = document.getElementById(id);
              if (node) {
                  const span = node.querySelector('span');
                  if (span) {
                      const spanContent = span.innerText.trim();
                      // Assign the span content to the corresponding position in the array
                      containerValues[rowIndex][colIndex] = spanContent;
                  }
              }
          });
      });
  }
  
  // Call the function to retrieve values
  retrieveContainerValues(containerIDs);
  
  // Print the retrieved values
  console.log(containerValues);
  