export function rookMaster(clickedSquareId) {
  if (!clickedSquareId) {
    console.error("clickedSquareId is not defined");
    return;
  }

  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let rookNode = document.getElementById(clickedSquareId);
  let isRook = rookNode.innerHTML;

  // if (whiteTurn && isRook === "♖") {
    if ( isRook === "♖") {
    console.log("white turn");
    if (clickedSquareId) {
      const sequenceLeft = [];
      const sequenceUp = [];
      const sequenceDown = [];
      const sequenceRight = [];

      //  Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdDown = clickedSquareId - i * 8;
        if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
          sequenceUp.push(nextSquareIdDown);
          console.log(nextSquareIdDown); // Log the square ID to the console
        }
      }
      // Horizontal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i;

        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 64) {
          sequenceRight.push(nextSquareIdRight);
          console.log(nextSquareIdRight); // Log the square ID to the console

          // Check if the nextSquareIdRight matches the stopping IDs
          if ([8, 16, 24, 32, 40, 48, 56].includes(nextSquareIdRight)) {
            break; // Break out of the loop
          }
        }
      }

      // Horizontal Left sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdLeft = clickedSquareId - i;

        if (nextSquareIdLeft >= 1 && nextSquareIdLeft <= 64) {
          sequenceLeft.push(nextSquareIdLeft);
          console.log(nextSquareIdLeft); // Log the square ID to the console

          // // Check if the nextSquareIdRight matches the stopping IDs
          if ([1, 9, 17, 25, 33, 41, 49, 57].includes(nextSquareIdLeft)) {
            break; // Break out of the loop
          }
        }
      }

      // Horizontal Down sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i * 8;
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 65) {
          sequenceDown.push(nextSquareIdRight);
          console.log(nextSquareIdRight); // Log the square ID to the console
        }
      }

      sequenceUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♖";
          //   }

          //   if (
          //     ["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     !["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♖";
          //     localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });

      sequenceLeft.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♖";
          //   }

          //   if (
          //     ["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     !["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♖";
          //     localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });


      sequenceDown.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♖";
          //   }

          //   if (
          //     ["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     !["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♖";
          //     localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });

      // Add green border class to all squares in the sequenceRight
      sequenceRight.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♖";
          //   }

          //   if (
          //     ["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     !["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♖";
          //     localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });

    }
  }

  // if (!whiteTurn && isRook === "♜") {
    if (isRook === "♜") {
    console.log("black turn");
    if (clickedSquareId) {
      const sequenceLeft = [];
      const sequenceUp = [];
      const sequenceDown = [];
      const sequenceRight = [];
      //  Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdDown = clickedSquareId - i * 8;
        if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
          sequenceUp.push(nextSquareIdDown);
          console.log(nextSquareIdDown); // Log the square ID to the console
        }
      }
      // Horizontal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i;

        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 64) {
          sequenceRight.push(nextSquareIdRight);
          console.log(nextSquareIdRight); // Log the square ID to the console

          // Check if the nextSquareIdRight matches the stopping IDs
          if ([8, 16, 24, 32, 40, 48, 56].includes(nextSquareIdRight)) {
            break; // Break out of the loop
          }
        }
      }

      // Horizontal Left sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdLeft = clickedSquareId - i;

        if (nextSquareIdLeft >= 1 && nextSquareIdLeft <= 64) {
          sequenceLeft.push(nextSquareIdLeft);
          console.log(nextSquareIdLeft); // Log the square ID to the console

          // // Check if the nextSquareIdRight matches the stopping IDs
          if ([1, 9, 17, 25, 33, 41, 49, 57].includes(nextSquareIdLeft)) {
            break; // Break out of the loop
          }
        }
      }

      // Horizontal Down sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i * 8;
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 65) {
          sequenceDown.push(nextSquareIdRight);
          console.log(nextSquareIdRight); // Log the square ID to the console
        }
      }

      sequenceUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♜";
          //   }

          //   if (
          //     !["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     ["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♜";
          //     localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });

      sequenceDown.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♜";
          //   }

          //   if (
          //     !["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     ["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♜";
          //     localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });


      sequenceLeft.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♜";
          //   }

          //   if (
          //     !["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     ["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♜";
          //     localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });

      // Add green border class to all squares in the sequenceRight
      sequenceRight.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("rookUp");

          // squareElement.addEventListener("click", function () {
          //   const clickedId = id;
          //   const clickedElement = document.getElementById(
          //     clickedId.toString()
          //   );
          //   const clickedContent = clickedElement.innerHTML;

          //   console.log(`You clicked on square with ID: ${clickedId}`);

          //   document.getElementById(clickedSquareId).innerHTML = "";

          //   if (clickedContent === "") {
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     clickedElement.innerHTML = "♜";
          //   }

          //   if (
          //     !["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
          //     ["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          //   ) {
          //     // Clear the content of the previously clicked square
          //     document.getElementById(clickedSquareId).innerHTML = "";
          //     // Setting innerHTML to "♖" for the clicked square
          //     clickedElement.innerHTML = "♜";
          //     localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player

          //     // Update turn display
          //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          //     document.getElementById("turn").innerHTML = turnDisplay;

          //     return; // Exit the function early to allow another move
          //   } else {
          //     console.log("King move not allowed");
          //     return; // Exit the function early if the move is not allowed
          //   }
          // });

          // localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player

          // // Update turn display
          // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
          // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
          // document.getElementById("turn").innerHTML = turnDisplay;
        }
      });

      
    }
  }
}
