
export function kingMaster(clickedSquareId) {
  if (!clickedSquareId) {
    console.error("clickedSquareId is not defined");
    return;
  }

  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let kingNode = document.getElementById(clickedSquareId);
  let isKing = kingNode.innerHTML;

  // if (whiteTurn && isKing === "♕") {
    if (isKing === "♕") {
    if (
      clickedSquareId === 2 ||
      clickedSquareId === 10 ||
      clickedSquareId === 18 ||
      clickedSquareId === 26 ||
      clickedSquareId === 34 ||
      clickedSquareId === 42 ||
      clickedSquareId === 50
    ) {
      const possibleMoves = []; // Array to store possible move IDs

      // // Check if the king can move to the left
      const leftMove = clickedSquareId - 1;
      if (leftMove >= 1 && leftMove <= 64) {
        possibleMoves.push(leftMove);
        console.log("King can move left to:", leftMove);
      }

      // // Check if the king can move to the top
      const TopMove = clickedSquareId - 8;
      if (TopMove >= 1 && TopMove <= 64) {
        possibleMoves.push(TopMove);
        console.log("King can move top to:", TopMove);
      }

      // // Check if the king can move to the down
      const DownMove = clickedSquareId + 8;
      if (DownMove >= 1 && DownMove <= 64) {
        possibleMoves.push(DownMove);
        console.log("King can move down to:", DownMove);
      }

      // // Check if the king can move to the  top right
      const TopLeftMove = clickedSquareId - 9;
      if (TopLeftMove >= 1 && TopLeftMove <= 64) {
        possibleMoves.push(TopLeftMove);
        console.log("King can move down to:", TopLeftMove);
      }

      // // Check if the king can move to the  top right
      const TopRightMove = clickedSquareId - 8;
      const finalTopRightMove = TopRightMove + 1;

      if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
        possibleMoves.push(finalTopRightMove);
        console.log("King can move down to:", finalTopRightMove);
      }

      // // // Check if the king can move to the down left
      const DownLefMove = clickedSquareId + 8;
      const finalDownLeftMove = DownLefMove - 1;
      if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
        possibleMoves.push(finalDownLeftMove);
        console.log("King can move top to:", finalDownLeftMove);
      }

      // // // Check if the king can move to the down left
      const MidLefMove = clickedSquareId + 0;
      const finalMidLeftMove = MidLefMove + 1;
      if (finalMidLeftMove >= 1 && finalMidLeftMove <= 64) {
        possibleMoves.push(finalMidLeftMove);
        console.log("King can move top to:", finalMidLeftMove);
      }

      const DownRightMove = clickedSquareId + 8;
      const finalDownRightMove = DownRightMove + 1;
      if (finalDownRightMove >= 1 && finalDownRightMove <= 64) {
        possibleMoves.push(finalDownRightMove);
        console.log("King can move top to:", finalDownRightMove);
      }

      // Add green border class to all squares in the possibleMoves
      possibleMoves.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("greenKingMove");
        }

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
      });
    }

    // Assuming clickedSquareId is initialized somewhere above this code
    if (clickedSquareId === 1) {
      const possibleMoves = []; // Array to store possible move IDs

      // Check if the king can move to the right
      const rightMove = clickedSquareId + 1;
      const rightMoveDom = document.getElementById(rightMove.toString());

      if (rightMove >= 1 && rightMove <= 64) {
        possibleMoves.push(rightMove);
        console.log("King can move right to:", rightMove);
      }

      // Check if the king can move down
      const DownMove = clickedSquareId + 8;
      const downMoveDom = document.getElementById(DownMove.toString());

      if (DownMove >= 1 && DownMove <= 64) {
        possibleMoves.push(DownMove);
        console.log("King can move down to:", DownMove);
      }

      // Check if the king can move down-right
      const DownRightMove = clickedSquareId + 9;
      const DownRightMoveDom = document.getElementById(
        DownRightMove.toString()
      );

      if (DownRightMove >= 1 && DownRightMove <= 64) {
        possibleMoves.push(DownRightMove);
        console.log("King can move down-right to:", DownRightMove);
      }

      // Add green border class to all squares in the possibleMoves
      possibleMoves.forEach((id) => {
        const squareElement = document.getElementById(id.toString());

        if (squareElement) {
          squareElement.classList.add("greenKingMove");
        }

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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
        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
      });
    }
    if (
      clickedSquareId === 2 ||
      clickedSquareId === 3 ||
      clickedSquareId === 4 ||
      clickedSquareId === 5 ||
      clickedSquareId === 6 ||
      clickedSquareId === 7 ||
      clickedSquareId === 8 ||


      clickedSquareId === 9 ||
      clickedSquareId === 10 ||
      clickedSquareId === 11 ||
      clickedSquareId === 12 ||
      clickedSquareId === 13 ||
      clickedSquareId === 14 ||
      clickedSquareId === 15 ||
      clickedSquareId === 16 ||
      clickedSquareId === 17 ||
      clickedSquareId === 18 ||


      clickedSquareId === 19 ||
      clickedSquareId === 20 ||
      clickedSquareId === 21 ||
      clickedSquareId === 22 ||
      clickedSquareId === 23 ||
      clickedSquareId === 24 ||
      clickedSquareId === 25 ||
      clickedSquareId === 26 ||

      clickedSquareId === 27 ||
      clickedSquareId === 28 ||
      clickedSquareId === 29 ||
      clickedSquareId === 30 ||
      clickedSquareId === 31 ||

      clickedSquareId === 34 ||
      clickedSquareId === 35 ||
      clickedSquareId === 36 ||
      clickedSquareId === 37 ||
      clickedSquareId === 38 ||
      clickedSquareId === 39 ||
      clickedSquareId === 40 ||
      clickedSquareId === 41 ||

      clickedSquareId === 42 ||
      clickedSquareId === 43 ||
      clickedSquareId === 44 ||
      clickedSquareId === 45 ||
      clickedSquareId === 46 ||
      clickedSquareId === 47 ||
      clickedSquareId === 48 ||
      clickedSquareId === 49 ||


      clickedSquareId === 50 ||
      clickedSquareId === 51 ||
      clickedSquareId === 52 ||
      clickedSquareId === 53 ||
      clickedSquareId === 54 ||
      clickedSquareId === 55 ||


      clickedSquareId === 57 ||
      clickedSquareId === 58 ||
      clickedSquareId === 59 ||
      clickedSquareId === 60 ||
      clickedSquareId === 61 ||
      clickedSquareId === 62 ||
      clickedSquareId === 63 
    ) {
      const possibleMoves = []; // Array to store possible move IDs

      // // Check if the king can move to the left
      const leftMove = clickedSquareId - 1;
      if (leftMove >= 1 && leftMove <= 64) {
        possibleMoves.push(leftMove);
        console.log("King can move left to:", leftMove);
      }

      // // Check if the king can move to the top
      const TopMove = clickedSquareId - 8;
      if (TopMove >= 1 && TopMove <= 64) {
        possibleMoves.push(TopMove);
        console.log("King can move top to:", TopMove);
      }

      // // Check if the king can move to the down
      const DownMove = clickedSquareId + 8;
      if (DownMove >= 1 && DownMove <= 64) {
        possibleMoves.push(DownMove);
        console.log("King can move down to:", DownMove);
      }

      // // Check if the king can move to the  top right
      const TopLeftMove = clickedSquareId - 9;
      if (TopLeftMove >= 1 && TopLeftMove <= 64) {
        possibleMoves.push(TopLeftMove);
        console.log("King can move down to:", TopLeftMove);
      }

      // // Check if the king can move to the  top right
      const TopRightMove = clickedSquareId - 8;
      const finalTopRightMove = TopRightMove + 1;

      if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
        possibleMoves.push(finalTopRightMove);
        console.log("King can move down to:", finalTopRightMove);
      }

      // // // Check if the king can move to the down left
      const DownLefMove = clickedSquareId + 8;
      const finalDownLeftMove = DownLefMove - 1;
      if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
        possibleMoves.push(finalDownLeftMove);
        console.log("King can move top to:", finalDownLeftMove);
      }

      // // // Check if the king can move to the down left
      const MidLefMove = clickedSquareId + 0;
      const finalMidLeftMove = MidLefMove + 1;
      if (finalMidLeftMove >= 1 && finalMidLeftMove <= 64) {
        possibleMoves.push(finalMidLeftMove);
        console.log("King can move top to:", finalMidLeftMove);
      }

      const DownRightMove = clickedSquareId + 8;
      const finalDownRightMove = DownRightMove + 1;
      if (finalDownRightMove >= 1 && finalDownRightMove <= 64) {
        possibleMoves.push(finalDownRightMove);
        console.log("King can move top to:", finalDownRightMove);
      }

      // Add green border class to all squares in the possibleMoves
      possibleMoves.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("greenKingMove");
        }

        // squareElement.addEventListener("click", function () {
        //   const clickedId = id;
        //   const clickedElement = document.getElementById(clickedId.toString());
        //   const clickedContent = clickedElement.innerHTML;
      
        //   console.log(`You clicked on square with ID: ${clickedId}`);
      
        //   if (clickedContent === "") {
        //       // Clear the content of the previously clicked square
        //       document.getElementById(clickedSquareId.toString()).innerHTML = "";
        //       // Setting innerHTML to "♛" for the clicked square
        //       squareElement.innerHTML = "♕";
        //   } 

        //   if (
        //     ["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
        //     !["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
        //   ) {
        //     // Clear the content of the previously clicked square
        //     document.getElementById(clickedSquareId.toString()).innerHTML = "";
        //     // Setting innerHTML to "♛" for the clicked square
        //     squareElement.innerHTML = "♕";
        //     localStorage.setItem("iwhiteTurn", "true"); // Change turn to the current player
          
        //     // Update turn display
        //     const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
        //     const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
        //     document.getElementById("turn").innerHTML = turnDisplay;

        //     return; // Exit the function early to allow another move
        //   }
        //   else {
        //       console.log("King move not allowed");
        //       return; // Exit the function early if the move is not allowed
        //   }

      });
      // });

      // localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player
          
      // // Update turn display
      // const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
      // const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
      // document.getElementById("turn").innerHTML = turnDisplay;
    }
  }


  // if (!whiteTurn && isKing === "♛") {
    if (isKing === "♛") {
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
      });
    }

    if (
      clickedSquareId === 16 ||
      clickedSquareId === 24 ||
      clickedSquareId === 32 ||
      clickedSquareId === 40 ||
      clickedSquareId === 48 ||
      clickedSquareId === 56
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

        squareElement.addEventListener("click", function () {
          console.log(`You clicked on square with ID: ${id}`);
        });
      });
    }

    if (
      clickedSquareId === 2 ||
      clickedSquareId === 3 ||
      clickedSquareId === 4 ||
      clickedSquareId === 5 ||
      clickedSquareId === 6 ||
      clickedSquareId === 7 ||
      clickedSquareId === 8 ||


      clickedSquareId === 9 ||
      clickedSquareId === 10 ||
      clickedSquareId === 11 ||
      clickedSquareId === 12 ||
      clickedSquareId === 13 ||
      clickedSquareId === 14 ||
      clickedSquareId === 15 ||
      clickedSquareId === 16 ||
      clickedSquareId === 17 ||
      clickedSquareId === 18 ||


      clickedSquareId === 19 ||
      clickedSquareId === 20 ||
      clickedSquareId === 21 ||
      clickedSquareId === 22 ||
      clickedSquareId === 23 ||
      clickedSquareId === 24 ||
      clickedSquareId === 25 ||
      clickedSquareId === 26 ||

      clickedSquareId === 27 ||
      clickedSquareId === 28 ||
      clickedSquareId === 29 ||
      clickedSquareId === 30 ||
      clickedSquareId === 31 ||

      clickedSquareId === 34 ||
      clickedSquareId === 35 ||
      clickedSquareId === 36 ||
      clickedSquareId === 37 ||
      clickedSquareId === 38 ||
      clickedSquareId === 39 ||
      clickedSquareId === 40 ||
      clickedSquareId === 41 ||

      clickedSquareId === 42 ||
      clickedSquareId === 43 ||
      clickedSquareId === 44 ||
      clickedSquareId === 45 ||
      clickedSquareId === 46 ||
      clickedSquareId === 47 ||
      clickedSquareId === 48 ||
      clickedSquareId === 49 ||


      clickedSquareId === 50 ||
      clickedSquareId === 51 ||
      clickedSquareId === 52 ||
      clickedSquareId === 53 ||
      clickedSquareId === 54 ||
      clickedSquareId === 55 ||


      clickedSquareId === 57 ||
      clickedSquareId === 58 ||
      clickedSquareId === 59 ||
      clickedSquareId === 60 ||
      clickedSquareId === 61 ||
      clickedSquareId === 62 ||
      clickedSquareId === 63 
    ) {
      const possibleMoves = []; // Array to store possible move IDs

      // // Check if the king can move to the left
      const leftMove = clickedSquareId - 1;
      if (leftMove >= 1 && leftMove <= 64) {
        possibleMoves.push(leftMove);
        console.log("King can move left to:", leftMove);
      }

      // // Check if the king can move to the top
      const TopMove = clickedSquareId - 8;
      if (TopMove >= 1 && TopMove <= 64) {
        possibleMoves.push(TopMove);
        console.log("King can move top to:", TopMove);
      }

      // // Check if the king can move to the down
      const DownMove = clickedSquareId + 8;
      if (DownMove >= 1 && DownMove <= 64) {
        possibleMoves.push(DownMove);
        console.log("King can move down to:", DownMove);
      }

      // // Check if the king can move to the  top right
      const TopLeftMove = clickedSquareId - 9;
      if (TopLeftMove >= 1 && TopLeftMove <= 64) {
        possibleMoves.push(TopLeftMove);
        console.log("King can move down to:", TopLeftMove);
      }

      // // Check if the king can move to the  top right
      const TopRightMove = clickedSquareId - 8;
      const finalTopRightMove = TopRightMove + 1;

      if (finalTopRightMove >= 1 && finalTopRightMove <= 64) {
        possibleMoves.push(finalTopRightMove);
        console.log("King can move down to:", finalTopRightMove);
      }

      // // // Check if the king can move to the down left
      const DownLefMove = clickedSquareId + 8;
      const finalDownLeftMove = DownLefMove - 1;
      if (finalDownLeftMove >= 1 && finalDownLeftMove <= 64) {
        possibleMoves.push(finalDownLeftMove);
        console.log("King can move top to:", finalDownLeftMove);
      }

      // // // Check if the king can move to the down left
      const MidLefMove = clickedSquareId + 0;
      const finalMidLeftMove = MidLefMove + 1;
      if (finalMidLeftMove >= 1 && finalMidLeftMove <= 64) {
        possibleMoves.push(finalMidLeftMove);
        console.log("King can move top to:", finalMidLeftMove);
      }

      const DownRightMove = clickedSquareId + 8;
      const finalDownRightMove = DownRightMove + 1;
      if (finalDownRightMove >= 1 && finalDownRightMove <= 64) {
        possibleMoves.push(finalDownRightMove);
        console.log("King can move top to:", finalDownRightMove);
      }

      // Add green border class to all squares in the possibleMoves
      possibleMoves.forEach((id) => {
        const squareElement = document.getElementById(id.toString());
        if (squareElement) {
          squareElement.classList.add("greenKingMove");
        }

        squareElement.addEventListener("click", function () {
          const clickedId = id;
          const clickedElement = document.getElementById(clickedId.toString());
          const clickedContent = clickedElement.innerHTML;
      
          console.log(`You clicked on square with ID: ${clickedId}`);
      
          if (clickedContent === "") {
              // Clear the content of the previously clicked square
              document.getElementById(clickedSquareId.toString()).innerHTML = "";
              // Setting innerHTML to "♛" for the clicked square
              squareElement.innerHTML = "♛";
          } 

          if (
            !["♟", "♜", "♞", "♝", "♛", "♚"].includes(clickedContent) &&
            ["♙", "♖", "♘", "♗", "♕", "♔"].includes(clickedContent)
          ) {
            // Clear the content of the previously clicked square
            document.getElementById(clickedSquareId.toString()).innerHTML = "";
            // Setting innerHTML to "♛" for the clicked square
            squareElement.innerHTML = "♛";
            localStorage.setItem("iwhiteTurn", "false"); // Change turn to the current player
          
            // Update turn display
            const isWhiteTurn = localStorage.getItem("iwhiteTurn") === "true";
            const turnDisplay = `<p> Black Turn: ${!isWhiteTurn} <br> White Turn: ${isWhiteTurn} </p>`;
            document.getElementById("turn").innerHTML = turnDisplay;

            return; // Exit the function early to allow another move
          }
          else {
              console.log("King move not allowed");
              return; // Exit the function early if the move is not allowed
          }

      });
      });
    }

    // localStorage.setItem("iwhiteTurn", "true");

    // let a = localStorage.getItem("iwhiteTurn");
    // document.getElementById("turn").innerHTML = a;
    // if (a === "true") {
    //   document.getElementById("turn").innerHTML =
    //     "<p> Black Turn: False <br> White Turn: True </p>";
    // }
  }
}