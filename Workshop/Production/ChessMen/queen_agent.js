export function queenMaster(clickedSquareId) {
  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let queenNode = document.getElementById(clickedSquareId);
  let isQueen = queenNode.innerHTML;


  // if (whiteTurn && isQueen === "♔") {
    if (isQueen === "♔") {

    if (clickedSquareId) {
    const sequenceDiagonalDown = [];
    const sequenceRight = [];
    const sequenceDown = [];

    const sequenceUp = [];
    const sequenceDiagonalUp = [];
    const sequenceLeft = [];
    const sequenceTopRightDiagonal = [];

    //  Up sequence
    for (let i = 0; i < 9; i++) {
      const nextSquareIdDown = clickedSquareId - i * 8;
      if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
        sequenceUp.push(nextSquareIdDown);
        console.log(nextSquareIdDown); // Log the square ID to the console
      }
    }

    // Diagonal Down sequence
    for (let i = 0; i < 9; i++) {
      const nextSquareIdDown = clickedSquareId + i * 9;
      if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
        sequenceDiagonalDown.push(nextSquareIdDown);
        console.log(nextSquareIdDown); // Log the square ID to the console
      }

      if ([8, 16, 24, 32, 40, 48, 56, 63].includes(nextSquareIdDown)) {
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

    // Add green border class to all squares in the sequenceRight
    sequenceRight.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDiagonalRight");
      }
    });

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
          nextSquareIdRight === 56
        ) {
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

    // Add green border class to all squares in the sequenceDown
    sequenceDiagonalDown.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDiagonalDown");
      }
    });

    sequenceDown.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDown");
      }
    });

    sequenceDiagonalUp.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDiagonalUp");
      }
    });

    sequenceUp.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenUp");
      }
    });

    sequenceLeft.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenLeft");
      }
    });

    sequenceTopRightDiagonal.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenTopRightDiagonal");
      }
    });

    const sequenceDownLeftDiagonal = [];
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
        nextSquareIdRight === 57
      ) {
        break; // Break out of the loop
      }
    }

    sequenceDownLeftDiagonal.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDownLeftDiagonal");
      }
    });
    // localStorage.setItem("iwhiteTurn", "false");
    // let a  =   localStorage.getItem("iwhiteTurn");
    // document.getElementById("turn").innerHTML = a;

    // if(a === "false"){
    //  document.getElementById("turn").innerHTML = "<p> Black Turn: True <br> White Turn: False </p>" ;
    // }
    return {
      sequenceDiagonalDown: sequenceDiagonalDown,
      sequenceRight: sequenceRight,
      sequenceDown: sequenceDown,
      sequenceUp: sequenceUp,
      sequenceLeft: sequenceLeft,
      sequenceDiagonalUp: sequenceDiagonalUp,
      sequenceTopRightDiagonal: sequenceTopRightDiagonal,
      sequenceDownLeftDiagonal: sequenceDownLeftDiagonal,
    };
    }

    
  }


  // if (!whiteTurn && isQueen === "♚") {
    if ( isQueen === "♚") {

    if (clickedSquareId) {
      const sequenceDiagonalDown = [];
      const sequenceRight = [];
      const sequenceDown = [];
  
      const sequenceUp = [];
      const sequenceDiagonalUp = [];
      const sequenceLeft = [];
      const sequenceTopRightDiagonal = [];
  
      //  Up sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdDown = clickedSquareId - i * 8;
        if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
          sequenceUp.push(nextSquareIdDown);
          console.log(nextSquareIdDown); // Log the square ID to the console
        }
      }
  
      // Diagonal Down sequence
      for (let i = 0; i < 9; i++) {
        const nextSquareIdDown = clickedSquareId + i * 9;
        if (nextSquareIdDown >= 1 && nextSquareIdDown <= 64) {
          sequenceDiagonalDown.push(nextSquareIdDown);
          console.log(nextSquareIdDown); // Log the square ID to the console
        }
  
        if ([8, 16, 24, 32, 40, 48, 56, 63].includes(nextSquareIdDown)) {
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
  
      // Add green border class to all squares in the sequenceRight
      sequenceRight.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenDiagonalRight");
        }
      });
  
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
            nextSquareIdRight === 56
          ) {
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
  
      // Add green border class to all squares in the sequenceDown
      sequenceDiagonalDown.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenDiagonalDown");
        }
      });
  
      sequenceDown.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenDown");
        }
      });
  
      sequenceDiagonalUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenDiagonalUp");
        }
      });
  
      sequenceUp.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenUp");
        }
      });
  
      sequenceLeft.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenLeft");
        }
      });
  
      sequenceTopRightDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenTopRightDiagonal");
        }
      });
  
      const sequenceDownLeftDiagonal = [];
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
          nextSquareIdRight === 57
        ) {
          break; // Break out of the loop
        }
      }
  
      sequenceDownLeftDiagonal.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("queenDownLeftDiagonal");
        }
      });
      // localStorage.setItem("iwhiteTurn", "true");
      // let a  =   localStorage.getItem("iwhiteTurn");
      // if(a === "true"){
      //  document.getElementById("turn").innerHTML = "Black Turn: False <br> White Turn: True" ;
      // }
  
      return {
        sequenceDiagonalDown: sequenceDiagonalDown,
        sequenceRight: sequenceRight,
        sequenceDown: sequenceDown,
        sequenceUp: sequenceUp,
        sequenceLeft: sequenceLeft,
        sequenceDiagonalUp: sequenceDiagonalUp,
        sequenceTopRightDiagonal: sequenceTopRightDiagonal,
        sequenceDownLeftDiagonal: sequenceDownLeftDiagonal,
      };

    }

  }
  


}




