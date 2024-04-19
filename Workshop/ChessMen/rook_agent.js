export function rookMaster(clickedSquareId) {
  if (!clickedSquareId) {
    console.error("clickedSquareId is not defined");
    return;
  }
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
        squareElement.classList.add("queenUp");
      }
    });

    sequenceDown.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDiagonalDown");
      }
    });

    sequenceLeft.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenLeft");
      }
    });

    // Add green border class to all squares in the sequenceRight
    sequenceRight.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("queenDiagonalRight");
      }
    });
  }
}
