
function calculateValidMoves(chessboard) {
    let updatedChessboard = chessboard.map((row) => [...row]); // Create a copy of the chessboard
  
    // Initialize an array to store the positions of reached pawns
    let reachedPositions = [];
  
    // Loop through the chessboard
    for (let row = 0; row < chessboard.length; row++) {
      for (let col = 0; col < chessboard[row].length; col++) {
        let piece = chessboard[row][col];
        if (piece === "♟") {
          // Black pawn
          // Check if the square in front is empty
          try {
            if (row + 1 < 8 && chessboard[row + 1][col] === "") {
              updatedChessboard[row + 1][col] = "o";
            } else {
              updatedChessboard[row + 1][col] = "X"; // Unavailable state
            }
          } catch (error) {
            console.error("Error:", error.message);
            if (error.message.includes("Cannot set properties of undefined")) {
              // If the error is due to setting properties of undefined, it means the pawn reached the end
              reachedPositions.push({ row: row + 1, col });
            }
          }
          // Check if facing white pawns are present
          try {
            if (row + 1 < 8 && col < 7 && chessboard[row + 1][col + 1] === "♙") {
              console.log(
                "Black pawn is facing a white pawn diagonally to the right"
              );
            }
          } catch (error) {
            console.error("Error:", error.message);
          }
          try {
            if (row + 1 < 8 && col > 0 && chessboard[row + 1][col - 1] === "♙") {
              console.log(
                "Black pawn is facing a white pawn diagonally to the left"
              );
            }
          } catch (error) {
            console.error("Error:", error.message);
          }
        } else if (piece === "♙") {
          // White pawn
          // Check if the square in front is empty
          try {
            if (row - 1 >= 0 && chessboard[row - 1][col] === "") {
              updatedChessboard[row - 1][col] = "o";
            } else {
              updatedChessboard[row - 1][col] = "X"; // Unavailable state
            }
          } catch (error) {
            console.error("Error:", error.message);
            if (error.message.includes("Cannot set properties of undefined")) {
              // If the error is due to setting properties of undefined, it means the pawn reached the end
              reachedPositions.push({ row: row - 1, col });
            }
          }
          // Check if facing black pawns are present
          try {
            if (row - 1 >= 0 && col < 7 && chessboard[row - 1][col + 1] === "♟") {
              console.log(
                "White pawn is facing a black pawn diagonally to the right"
              );
            }
          } catch (error) {
            console.error("Error:", error.message);
          }
          try {
            if (row - 1 >= 0 && col > 0 && chessboard[row - 1][col - 1] === "♟") {
              console.log(
                "White pawn is facing a black pawn diagonally to the left"
              );
            }
          } catch (error) {
            console.error("Error:", error.message);
          }
        }
      }
    }
  
    // Alert if pawns reached the opposite side
    
    if (reachedPositions.length > 0) {
      alert("Your pawn reached enemy top state")
      document.getElementById("rival").style.display = "block";
  
  
      // Render died characters for white
      const whiteDiedHTML = whiteDied
        .map((piece) => `<div>${piece}</div>`)
        .join("");
      document.getElementById("whiteDied").innerHTML = `<h3 style="display: flex;"> White Died Characters: ${whiteDiedHTML}</h3>`;
      document.getElementById("whiteDied").style.display = "block";
  
      // Render died characters for black
      const blackDiedHTML = blackDied
        .map((piece) => `<div >${piece}</div>`)
        .join("");
      document.getElementById("blackDied").innerHTML = `<h3 style="display: flex;">Black Died Characters: ${blackDiedHTML} </h3>`;
      document.getElementById("blackDied").style.display = "block";
  
      // Combine both arrays and store in localStorage
      const allDiedCharacters = {
        white: whiteDied,
        black: blackDied,
      };
  
      // Store in localStorage
      localStorage.setItem("diedCharacters", JSON.stringify(allDiedCharacters));
  
      // Retrieve from localStorage
      const retrievedDiedCharacters = JSON.parse(
        localStorage.getItem("diedCharacters")
      );
      console.log(retrievedDiedCharacters);
  }
  
  
  
    return updatedChessboard;
  }
  