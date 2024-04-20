


export function kingMaster(clickedSquareId) {
  if (!clickedSquareId) {
    console.error("clickedSquareId is not defined");
    return;
  }

  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  // const clickedSquare = event.target;
  // const clickedSquareId = parseInt(clickedSquare.id);
  // console.log(clickedSquareId);

  let kingNode = document.getElementById(clickedSquareId);
  let isKing = kingNode.innerHTML;



  if (whiteTurn && isKing === "♕") {
  if (
    clickedSquareId !== 1 &&
    clickedSquareId !== 8 &&
    clickedSquareId !== 9 &&
    clickedSquareId !== 16 &&
    clickedSquareId !== 17 &&
    clickedSquareId !== 24 &&
    clickedSquareId !== 25 &&
    clickedSquareId !== 32 &&
    clickedSquareId !== 33 &&
    clickedSquareId !== 40 &&
    clickedSquareId !== 41 &&
    clickedSquareId !== 48 &&
    clickedSquareId !== 49 &&
    clickedSquareId !== 56 &&
    clickedSquareId !== 57 &&
    clickedSquareId !== 64
  ) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // Check if the king can move to the  top right
    const TopLeftMove = clickedSquareId - 9;
    if (TopLeftMove >= 1 && TopLeftMove <= 64) {
      possibleMoves.push(TopLeftMove);
      console.log("King can move down to:", TopLeftMove);
    }

    // Check if the king can move to the top left
    const TopRightMove = clickedSquareId - 8;
    const finalTopRightMove = TopRightMove + 1;
    if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
      possibleMoves.push(finalTopRightMove);
      console.log("King can move top to:", finalTopRightMove);
    }

    //     // Check if the king can move to the  down right
    const DownRightMove = clickedSquareId + 9;
    if (DownRightMove >= 1 && DownRightMove <= 64) {
      possibleMoves.push(DownRightMove);
      console.log("King can move down to:", DownRightMove);
    }

    // // Check if the king can move to the down left
    const DownLefMove = clickedSquareId + 8;
    const finalDownLeftMove = DownLefMove - 1;
    if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
      possibleMoves.push(finalDownLeftMove);
      console.log("King can move top to:", finalDownLeftMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 1) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    //     // Check if the king can move to the  down right
    const DownRightMove = clickedSquareId + 9;
    if (DownRightMove >= 1 && DownRightMove <= 64) {
      possibleMoves.push(DownRightMove);
      console.log("King can move down to:", DownRightMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 8) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // // Check if the king can move to the down left
    const DownLefMove = clickedSquareId + 8;
    const finalDownLeftMove = DownLefMove - 1;
    if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
      possibleMoves.push(finalDownLeftMove);
      console.log("King can move top to:", finalDownLeftMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 57) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the top left
    const TopRightMove = clickedSquareId - 8;
    const finalTopRightMove = TopRightMove + 1;
    if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
      possibleMoves.push(finalTopRightMove);
      console.log("King can move top to:", finalTopRightMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 64) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    // Check if the king can move to the  top right
    const TopLeftMove = clickedSquareId - 9;
    if (TopLeftMove >= 1 && TopLeftMove <= 64) {
      possibleMoves.push(TopLeftMove);
      console.log("King can move down to:", TopLeftMove);
    }

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (
    clickedSquareId === 16 ||
    clickedSquareId === 24 ||
    clickedSquareId === 32 ||
    clickedSquareId === 40 ||
    clickedSquareId === 48 ||
    clickedSquareId === 56 ||
    clickedSquareId === 64
  ) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // Check if the king can move to the  top right
    const TopLeftMove = clickedSquareId - 9;
    if (TopLeftMove >= 1 && TopLeftMove <= 64) {
      possibleMoves.push(TopLeftMove);
      console.log("King can move down to:", TopLeftMove);
    }

    // // Check if the king can move to the down left
    const DownLefMove = clickedSquareId + 8;
    const finalDownLeftMove = DownLefMove - 1;
    if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
      possibleMoves.push(finalDownLeftMove);
      console.log("King can move top to:", finalDownLeftMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (
    clickedSquareId === 9 ||
    clickedSquareId === 17 ||
    clickedSquareId === 25 ||
    clickedSquareId === 33 ||
    clickedSquareId === 41 ||
    clickedSquareId === 49
  ) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // Check if the king can move to the top left
    const TopRightMove = clickedSquareId - 8;
    const finalTopRightMove = TopRightMove + 1;
    if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
      possibleMoves.push(finalTopRightMove);
      console.log("King can move top to:", finalTopRightMove);
    }

    // Check if the king can move to the  down right
    const DownRightMove = clickedSquareId + 9;
    if (DownRightMove >= 1 && DownRightMove <= 64) {
      possibleMoves.push(DownRightMove);
      console.log("King can move down to:", DownRightMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }
  localStorage.setItem("iwhiteTurn", "false");
}



if (!whiteTurn && isKing === "♛") {
  if (
    clickedSquareId !== 1 &&
    clickedSquareId !== 8 &&
    clickedSquareId !== 9 &&
    clickedSquareId !== 16 &&
    clickedSquareId !== 17 &&
    clickedSquareId !== 24 &&
    clickedSquareId !== 25 &&
    clickedSquareId !== 32 &&
    clickedSquareId !== 33 &&
    clickedSquareId !== 40 &&
    clickedSquareId !== 41 &&
    clickedSquareId !== 48 &&
    clickedSquareId !== 49 &&
    clickedSquareId !== 56 &&
    clickedSquareId !== 57 &&
    clickedSquareId !== 64
  ) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // Check if the king can move to the  top right
    const TopLeftMove = clickedSquareId - 9;
    if (TopLeftMove >= 1 && TopLeftMove <= 64) {
      possibleMoves.push(TopLeftMove);
      console.log("King can move down to:", TopLeftMove);
    }

    // Check if the king can move to the top left
    const TopRightMove = clickedSquareId - 8;
    const finalTopRightMove = TopRightMove + 1;
    if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
      possibleMoves.push(finalTopRightMove);
      console.log("King can move top to:", finalTopRightMove);
    }

    //     // Check if the king can move to the  down right
    const DownRightMove = clickedSquareId + 9;
    if (DownRightMove >= 1 && DownRightMove <= 64) {
      possibleMoves.push(DownRightMove);
      console.log("King can move down to:", DownRightMove);
    }

    // // Check if the king can move to the down left
    const DownLefMove = clickedSquareId + 8;
    const finalDownLeftMove = DownLefMove - 1;
    if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
      possibleMoves.push(finalDownLeftMove);
      console.log("King can move top to:", finalDownLeftMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 1) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    //     // Check if the king can move to the  down right
    const DownRightMove = clickedSquareId + 9;
    if (DownRightMove >= 1 && DownRightMove <= 64) {
      possibleMoves.push(DownRightMove);
      console.log("King can move down to:", DownRightMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 8) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // // Check if the king can move to the down left
    const DownLefMove = clickedSquareId + 8;
    const finalDownLeftMove = DownLefMove - 1;
    if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
      possibleMoves.push(finalDownLeftMove);
      console.log("King can move top to:", finalDownLeftMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 57) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the top left
    const TopRightMove = clickedSquareId - 8;
    const finalTopRightMove = TopRightMove + 1;
    if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
      possibleMoves.push(finalTopRightMove);
      console.log("King can move top to:", finalTopRightMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (clickedSquareId === 64) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    // Check if the king can move to the  top right
    const TopLeftMove = clickedSquareId - 9;
    if (TopLeftMove >= 1 && TopLeftMove <= 64) {
      possibleMoves.push(TopLeftMove);
      console.log("King can move down to:", TopLeftMove);
    }

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (
    clickedSquareId === 16 ||
    clickedSquareId === 24 ||
    clickedSquareId === 32 ||
    clickedSquareId === 40 ||
    clickedSquareId === 48 ||
    clickedSquareId === 56 ||
    clickedSquareId === 64
  ) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the left
    const leftMove = clickedSquareId - 1;
    if (leftMove >= 1 && leftMove <= 64) {
      possibleMoves.push(leftMove);
      console.log("King can move left to:", leftMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // Check if the king can move to the  top right
    const TopLeftMove = clickedSquareId - 9;
    if (TopLeftMove >= 1 && TopLeftMove <= 64) {
      possibleMoves.push(TopLeftMove);
      console.log("King can move down to:", TopLeftMove);
    }

    // // Check if the king can move to the down left
    const DownLefMove = clickedSquareId + 8;
    const finalDownLeftMove = DownLefMove - 1;
    if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
      possibleMoves.push(finalDownLeftMove);
      console.log("King can move top to:", finalDownLeftMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  if (
    clickedSquareId === 9 ||
    clickedSquareId === 17 ||
    clickedSquareId === 25 ||
    clickedSquareId === 33 ||
    clickedSquareId === 41 ||
    clickedSquareId === 49
  ) {
    const possibleMoves = []; // Array to store possible move IDs

    // Check if the king can move to the right
    const rightMove = clickedSquareId + 1;
    if (rightMove >= 1 && rightMove <= 64) {
      possibleMoves.push(rightMove);
      console.log("King can move right to:", rightMove);
    }

    // Check if the king can move to the top
    const TopMove = clickedSquareId - 8;
    if (TopMove >= 1 && TopMove <= 64) {
      possibleMoves.push(TopMove);
      console.log("King can move top to:", TopMove);
    }

    // Check if the king can move to the down
    const DownMove = clickedSquareId + 8;
    if (DownMove >= 1 && DownMove <= 64) {
      possibleMoves.push(DownMove);
      console.log("King can move down to:", DownMove);
    }

    // Check if the king can move to the top left
    const TopRightMove = clickedSquareId - 8;
    const finalTopRightMove = TopRightMove + 1;
    if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
      possibleMoves.push(finalTopRightMove);
      console.log("King can move top to:", finalTopRightMove);
    }

    // Check if the king can move to the  down right
    const DownRightMove = clickedSquareId + 9;
    if (DownRightMove >= 1 && DownRightMove <= 64) {
      possibleMoves.push(DownRightMove);
      console.log("King can move down to:", DownRightMove);
    }

    // Add green border class to all squares in the possibleMoves
    possibleMoves.forEach((id) => {
      const squareElement = document.getElementById(id.toString());
      if (squareElement) {
        squareElement.classList.add("greenKingMove");
      }
    });
  }

  localStorage.setItem("iwhiteTurn", "true");
  
}




}
