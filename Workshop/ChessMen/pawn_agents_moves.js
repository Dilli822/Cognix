
function enableAllPawns() {
    // Iterate through each cell in the chessboard layout
    chessboardLayout.forEach((row) => {
      row.forEach((cellId) => {
        // Find the element with the cellId
        const element = document.getElementById(cellId);
        // If the element contains the content "♙", add event listeners
        if (element.innerHTML.trim() === "♙" || element.innerHTML.trim() === "♟" ) {
          element.addEventListener("click", handlePawnPositionClick);
        }
      });
    });
  }

// Function to handle clicks on chessboard squares
 function handleClick(event) {
    enableAllPawns();
  // Extract the ID of the clicked square
  const squareId = event.target.id;
  const squareContent = event.target.textContent.trim();
  localStorage.setItem("clicked_box", squareId); // Save clicked box ID to local storage
  console.log(squareId);

  const isBlackBox = squareId.startsWith("bbox");
  const isWhiteBox = squareId.startsWith("wbox");

  // If it's a black box, handle black pawn logic
  if (isBlackBox) {
    const currentBoxNumber = parseInt(squareId.slice(4));
    let possibleStep;
    if (squareContent === "♙") {
      possibleStep = currentBoxNumber - 4;
    } else {
      possibleStep = currentBoxNumber + 4;
    }

    const destinationBoxId = `wbox${possibleStep}`;

    const destinationBoxContent = document
      .getElementById(destinationBoxId)
      .textContent.trim();
    if (destinationBoxContent === "") {
      console.log("Yes, Black pawn can move" + destinationBoxId);
      localStorage.setItem("destination", destinationBoxId);
      const destinationBox = localStorage.getItem("destination");
      // Remove the active class from the previously clicked box
      const activeBox = document.querySelector(".active");
      if (activeBox) {
        activeBox.classList.remove("active");
      }

      // Add the active class to the new box
      document.getElementById(destinationBox).classList.add("active");
    } else {
      console.log("Destination box is occupied");
    }
  }

  // If it's a white box, handle white pawn logic
  if (isWhiteBox) {
    const currentBoxNumber = parseInt(squareId.slice(4));
    let possibleStep;
    if (squareContent === "♟") {
      possibleStep = currentBoxNumber + 4;
    } else {
      possibleStep = currentBoxNumber - 4;
    }

    const destinationBoxId = `bbox${possibleStep}`;

    const destinationBoxContent = document
      .getElementById(destinationBoxId)
      .textContent.trim();
    if (destinationBoxContent === "") {
      console.log("Yes, White pawn can move" + destinationBoxId);
      localStorage.setItem("destination", destinationBoxId);
      const destinationBox = localStorage.getItem("destination");
      // Remove the active class from the previously clicked box
      const activeBox = document.querySelector(".active");
      if (activeBox) {
        activeBox.classList.remove("active");
      }

      // Add the active class to the new box
      document.getElementById(destinationBox).classList.add("active");
    } else {
      console.log("Destination box is occupied");
    }
  }
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
