export function bishopMaster(clickedSquareId) {
    if (!clickedSquareId) {
      console.error("clickedSquareId is not defined");
      return;
    }
    let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

    let bishopNode = document.getElementById(clickedSquareId);
    let isBishop = bishopNode.innerHTML;
  

    // if (whiteTurn && isBishop === "♗") {
      if ( isBishop === "♗") {
      console.log("white turn")

    if (
      clickedSquareId !== 8 &&
      clickedSquareId !== 16 &&
      clickedSquareId !== 24 &&
      clickedSquareId !== 32 &&
      clickedSquareId !== 40 &&
      clickedSquareId !== 48
    ) {
      // Diagonal Down sequence
      const sequenceDiagonalDown = [];
      const sequenceDiagonalUp = [];
      const sequenceTopRightDiagonal = [];
      const sequenceDownLeftDiagonal = [];
  
      for (let i = 1; i < 9; i++) {
        const nextSquareIdDown = clickedSquareId + i * 9;
  
        if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
          sequenceDiagonalDown.push(nextSquareIdDown);
          console.log(nextSquareIdDown); // Log the square ID to the console
        }
  
        if ([8, 16, 24, 32, 40, 48, 56].includes(nextSquareIdDown)) {
          break; // Break out of the loop
        }
      }
  
      // Diagonal Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdUp = clickedSquareId - i * 9;
        if (nextSquareIdUp >= 1 && nextSquareIdUp <= 64) {
          sequenceDiagonalUp.push(nextSquareIdUp);
          console.log(nextSquareIdUp); // Log the square ID to the console
  
          if ([1, 9, 17, 25, 33, 41, 49, 57].includes(nextSquareIdUp)) {
            break; // Break out of the loop
          }
        }
      }
  
      // sequence Top Right Diagonal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId - i * 7;
  
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 64) {
          sequenceTopRightDiagonal.push(nextSquareIdRight);
          console.log(nextSquareIdRight); // Log the square ID to the console
  
          // Check if the nextSquareIdRight matches the stopping IDs
          // Check if the nextSquareIdRight matches the stopping IDs
          if (
            nextSquareIdRight === 8 ||
            nextSquareIdRight === 16 ||
            nextSquareIdRight === 24 ||
            nextSquareIdRight === 32 ||
            nextSquareIdRight === 40 ||
            nextSquareIdRight === 48 ||
            nextSquareIdRight === 56 ||
            nextSquareIdRight === 64
          ) {
            break; // Break out of the loop
          }
        }
      }
  
      // sequence Down Left Diagonal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i * 7;
  
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 65) {
          sequenceDownLeftDiagonal.push(nextSquareIdRight);
          console.log("nexss" + nextSquareIdRight); // Log the square ID to the console
        }
  
        if (
          nextSquareIdRight === 1 ||
          nextSquareIdRight === 9 ||
          nextSquareIdRight === 17 ||
          nextSquareIdRight === 25 ||
          nextSquareIdRight === 33 ||
          nextSquareIdRight === 41 ||
          nextSquareIdRight === 49 ||
          nextSquareIdRight === 57 ||
          nextSquareIdRight === 64
        ) {
          break; // Break out of the loop
        }
      }
  
      // Add green border class to all squares in the sequenceDiagonalDown
      sequenceDiagonalDown.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDiagonalDown");
        }
      });
  
      sequenceDiagonalUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDiagonalUp");
        }
      });
  
      sequenceTopRightDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopTopRightDiagonal");
        }
      });
  
      sequenceDownLeftDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDownLeftDiagonal");
        }
      });
    }
  
    if (
      clickedSquareId === 8 ||
      clickedSquareId === 16 ||
      clickedSquareId === 24 ||
      clickedSquareId === 32 ||
      clickedSquareId === 40 ||
      clickedSquareId === 48
    ) {
      const sequenceDownLeftDiagonal = [];
      const sequenceDiagonalUp = [];
      // sequence Down Left Diagonal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i * 7;
  
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 65) {
          sequenceDownLeftDiagonal.push(nextSquareIdRight);
          console.log("nexss" + nextSquareIdRight); // Log the square ID to the console
        }
  
        if (
          nextSquareIdRight === 1 ||
          nextSquareIdRight === 9 ||
          nextSquareIdRight === 17 ||
          nextSquareIdRight === 25 ||
          nextSquareIdRight === 33 ||
          nextSquareIdRight === 41 ||
          nextSquareIdRight === 49 ||
          nextSquareIdRight === 57 ||
          nextSquareIdRight === 64
        ) {
          break; // Break out of the loop
        }
      }
  
      // Diagonal Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdUp = clickedSquareId - i * 9;
        if (nextSquareIdUp >= 1 && nextSquareIdUp <= 64) {
          sequenceDiagonalUp.push(nextSquareIdUp);
          console.log(nextSquareIdUp); // Log the square ID to the console
  
          if ([1, 9, 17, 25, 33, 41, 49, 57].includes(nextSquareIdUp)) {
            break; // Break out of the loop
          }
        }
      }
  
      sequenceDiagonalUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDiagonalUp");
        }
      });
  
      // Add green border class to all squares in the sequenceDiagonalDown
      sequenceDownLeftDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDownLeftDiagonal");
        }
      });


    }

    // localStorage.setItem("iwhiteTurn", "false");
    // let a  =   localStorage.getItem("iwhiteTurn");
    // document.getElementById("turn").innerHTML = a;
    // if(a === "false"){
    //  document.getElementById("turn").innerHTML = "<p> Black Turn: True <br> White Turn: False </p>" ;
    // }
  }


  // if (!whiteTurn && isBishop === "♝") {
    if (isBishop === "♝") {
    console.log("black turn")
    if (
      clickedSquareId !== 8 &&
      clickedSquareId !== 16 &&
      clickedSquareId !== 24 &&
      clickedSquareId !== 32 &&
      clickedSquareId !== 40 &&
      clickedSquareId !== 48
    ) {
      // Diagonal Down sequence
      const sequenceDiagonalDown = [];
      const sequenceDiagonalUp = [];
      const sequenceTopRightDiagonal = [];
      const sequenceDownLeftDiagonal = [];
  
      for (let i = 1; i < 9; i++) {
        const nextSquareIdDown = clickedSquareId + i * 9;
  
        if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
          sequenceDiagonalDown.push(nextSquareIdDown);
          console.log(nextSquareIdDown); // Log the square ID to the console
        }
  
        if ([8, 16, 24, 32, 40, 48, 56].includes(nextSquareIdDown)) {
          break; // Break out of the loop
        }
      }
  
      // Diagonal Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdUp = clickedSquareId - i * 9;
        if (nextSquareIdUp >= 1 && nextSquareIdUp <= 64) {
          sequenceDiagonalUp.push(nextSquareIdUp);
          console.log(nextSquareIdUp); // Log the square ID to the console
  
          if ([1, 9, 17, 25, 33, 41, 49, 57].includes(nextSquareIdUp)) {
            break; // Break out of the loop
          }
        }
      }
  
      // sequence Top Right Diagonal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId - i * 7;
  
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 64) {
          sequenceTopRightDiagonal.push(nextSquareIdRight);
          console.log(nextSquareIdRight); // Log the square ID to the console
  
          // Check if the nextSquareIdRight matches the stopping IDs
          // Check if the nextSquareIdRight matches the stopping IDs
          if (
            nextSquareIdRight === 8 ||
            nextSquareIdRight === 16 ||
            nextSquareIdRight === 24 ||
            nextSquareIdRight === 32 ||
            nextSquareIdRight === 40 ||
            nextSquareIdRight === 48 ||
            nextSquareIdRight === 56 ||
            nextSquareIdRight === 64
          ) {
            break; // Break out of the loop
          }
        }
      }
  
      // sequence Down Left Diagonal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i * 7;
  
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 65) {
          sequenceDownLeftDiagonal.push(nextSquareIdRight);
          console.log("nexss" + nextSquareIdRight); // Log the square ID to the console
        }
  
        if (
          nextSquareIdRight === 1 ||
          nextSquareIdRight === 9 ||
          nextSquareIdRight === 17 ||
          nextSquareIdRight === 25 ||
          nextSquareIdRight === 33 ||
          nextSquareIdRight === 41 ||
          nextSquareIdRight === 49 ||
          nextSquareIdRight === 57 ||
          nextSquareIdRight === 64
        ) {
          break; // Break out of the loop
        }
      }
  
      // Add green border class to all squares in the sequenceDiagonalDown
      sequenceDiagonalDown.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDiagonalDown");
        }
      });
  
      sequenceDiagonalUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDiagonalUp");
        }
      });
  
      sequenceTopRightDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopTopRightDiagonal");
        }
      });
  
      sequenceDownLeftDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDownLeftDiagonal");
        }
      });
    }
  
    if (
      clickedSquareId === 8 ||
      clickedSquareId === 16 ||
      clickedSquareId === 24 ||
      clickedSquareId === 32 ||
      clickedSquareId === 40 ||
      clickedSquareId === 48
    ) {
      const sequenceDownLeftDiagonal = [];
      const sequenceDiagonalUp = [];
      // sequence Down Left Diagonal Right sequence
      for (let i = 0; i < 8; i++) {
        const nextSquareIdRight = clickedSquareId + i * 7;
  
        if (nextSquareIdRight >= 1 && nextSquareIdRight <= 65) {
          sequenceDownLeftDiagonal.push(nextSquareIdRight);
          console.log("nexss" + nextSquareIdRight); // Log the square ID to the console
        }
  
        if (
          nextSquareIdRight === 1 ||
          nextSquareIdRight === 9 ||
          nextSquareIdRight === 17 ||
          nextSquareIdRight === 25 ||
          nextSquareIdRight === 33 ||
          nextSquareIdRight === 41 ||
          nextSquareIdRight === 49 ||
          nextSquareIdRight === 57 ||
          nextSquareIdRight === 64
        ) {
          break; // Break out of the loop
        }
      }
  
      // Diagonal Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdUp = clickedSquareId - i * 9;
        if (nextSquareIdUp >= 1 && nextSquareIdUp <= 64) {
          sequenceDiagonalUp.push(nextSquareIdUp);
          console.log(nextSquareIdUp); // Log the square ID to the console
  
          if ([1, 9, 17, 25, 33, 41, 49, 57].includes(nextSquareIdUp)) {
            break; // Break out of the loop
          }
        }
      }
  
      sequenceDiagonalUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDiagonalUp");
        }
      });
  
      // Add green border class to all squares in the sequenceDiagonalDown
      sequenceDownLeftDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("bishopDownLeftDiagonal");
        }
      });

 
    }
    // localStorage.setItem("iwhiteTurn", "true");

    // let a  =   localStorage.getItem("iwhiteTurn");
    // document.getElementById("turn").innerHTML = a;
    // if(a === "true"){
    //  document.getElementById("turn").innerHTML = "<p> Black Turn: False <br> White Turn: True </p>" ;
    // }

  }




  }
  