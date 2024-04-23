
export function HorseForwardRightEnd(clickedSquareId) {
  const forward16Step = clickedSquareId + 16;
  const forward15StepLeft = clickedSquareId + 15;
  const backwar17StepRight = clickedSquareId + 0;
  const forward8StepLeftLeft = clickedSquareId + 8;
  const finalforward8StepLeftLeft = forward8StepLeftLeft - 2;
  const Bakward8StepLeftLeft = clickedSquareId - 8;
  const finalBackward8StepLeftLeft = Bakward8StepLeftLeft - 2;
  const backward16Step = clickedSquareId - 16;
  const finalBackWar16LeftLeft = backward16Step - 1;

  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let horseNode = document.getElementById(clickedSquareId);
  let isHorse = horseNode.innerHTML;


  // if (whiteTurn && isHorse === "♘") {
    if (isHorse === "♘") {
    if (
      clickedSquareId === 8 ||
      clickedSquareId === 16 ||
      clickedSquareId === 24 ||
      clickedSquareId === 32 ||
      clickedSquareId === 40 ||
      clickedSquareId === 48
    ) {
      console.log("Right side cannot be calculated");
      if (
        document.getElementById(forward16Step.toString()).classList.add("horse")
      );
      if (
        document
          .getElementById(forward15StepLeft.toString())
          .classList.add("Lefthorse")
      );
  
      if (
        document
          .getElementById(finalforward8StepLeftLeft.toString())
          .classList.add("rightEndLeftLeft")
      );
      if (
        document
          .getElementById(finalBackward8StepLeftLeft.toString())
          .classList.add("backward8LeftLeft")
      );
      if (
        document
          .getElementById(finalBackWar16LeftLeft.toString())
          .classList.add("finalBackWar16LeftLeft")
      );
    }
  
    if (clickedSquareId === 56) {
      const forward8Step = clickedSquareId + 8;
      const backward8Step = clickedSquareId - 8;
      const forward8stepLeftLeft = forward8Step - 2;
      const backward8stepLeftLeft = backward8Step - 2;
  
      const backward16Step = clickedSquareId - 16;
      const backward16stepLeft = backward16Step - 1;
  
      if (
        document
          .getElementById(forward8stepLeftLeft.toString())
          .classList.add("secondLast56Forward")
      );
      if (
        document
          .getElementById(backward8stepLeftLeft.toString())
          .classList.add("secondLast56Backward")
      );
      if (
        document
          .getElementById(backward16stepLeft.toString())
          .classList.add("backward16stepLeft")
      );
    }
  
    if (clickedSquareId === 64) {
      const forward8Step = clickedSquareId + 8;
      const backward8Step = clickedSquareId - 8;
  
      const forward8stepLeftLeft = forward8Step - 2;
      const backward8stepLeftLeft = backward8Step - 2;
  
      const backward16Step = clickedSquareId - 16;
      const backward16stepLeft = backward16Step - 1;
  
      if (
        document
          .getElementById(backward8stepLeftLeft.toString())
          .classList.add("secondLast56Forward")
      );
      if (
        document
          .getElementById(backward16stepLeft.toString())
          .classList.add("secondLast56Backward")
      );
  
      
    }
    // localStorage.setItem("iwhiteTurn", "false");
    // let a  =   localStorage.getItem("iwhiteTurn");
    // document.getElementById("turn").innerHTML = a;
    // if(a === "false"){
    //  document.getElementById("turn").innerHTML = "Black Turn: True <br> White Turn: False" ;
    // }

  }


  if (!whiteTurn && isHorse === "♞") {

    if (
      clickedSquareId === 8 ||
      clickedSquareId === 16 ||
      clickedSquareId === 24 ||
      clickedSquareId === 32 ||
      clickedSquareId === 40 ||
      clickedSquareId === 48
    ) {
      console.log("Right side cannot be calculated");
      if (
        document.getElementById(forward16Step.toString()).classList.add("horse")
      );
      if (
        document
          .getElementById(forward15StepLeft.toString())
          .classList.add("Lefthorse")
      );
  
      if (
        document
          .getElementById(finalforward8StepLeftLeft.toString())
          .classList.add("rightEndLeftLeft")
      );
      if (
        document
          .getElementById(finalBackward8StepLeftLeft.toString())
          .classList.add("backward8LeftLeft")
      );
      if (
        document
          .getElementById(finalBackWar16LeftLeft.toString())
          .classList.add("finalBackWar16LeftLeft")
      );
    }
  
    if (clickedSquareId === 56) {
      const forward8Step = clickedSquareId + 8;
      const backward8Step = clickedSquareId - 8;
      const forward8stepLeftLeft = forward8Step - 2;
      const backward8stepLeftLeft = backward8Step - 2;
  
      const backward16Step = clickedSquareId - 16;
      const backward16stepLeft = backward16Step - 1;
  
      if (
        document
          .getElementById(forward8stepLeftLeft.toString())
          .classList.add("secondLast56Forward")
      );
      if (
        document
          .getElementById(backward8stepLeftLeft.toString())
          .classList.add("secondLast56Backward")
      );
      if (
        document
          .getElementById(backward16stepLeft.toString())
          .classList.add("backward16stepLeft")
      );
    }
  
    if (clickedSquareId === 64) {
      const forward8Step = clickedSquareId + 8;
      const backward8Step = clickedSquareId - 8;
  
      const forward8stepLeftLeft = forward8Step - 2;
      const backward8stepLeftLeft = backward8Step - 2;
  
      const backward16Step = clickedSquareId - 16;
      const backward16stepLeft = backward16Step - 1;
  
      if (
        document
          .getElementById(backward8stepLeftLeft.toString())
          .classList.add("secondLast56Forward")
      );
      if (
        document
          .getElementById(backward16stepLeft.toString())
          .classList.add("secondLast56Backward")
      );
  
      
    }
    // localStorage.setItem("iwhiteTurn", "true");
    // let a  =   localStorage.getItem("iwhiteTurn");
    // document.getElementById("turn").innerHTML = a;
    // if(a === "true"){
    //  document.getElementById("turn").innerHTML = "Black Turn: False <br> White Turn: True" ;
    // }
  }


  
}

export function HorseForwardLeftEnd(clickedSquareId, miscellaneous) {

  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let horseNode = document.getElementById(clickedSquareId);
  let isHorse = horseNode.innerHTML;


  // if (whiteTurn && isHorse === "♘") {
    if (isHorse === "♘") {
  if (
    clickedSquareId === 1 ||
    clickedSquareId === 9 ||
    clickedSquareId === 17 ||
    clickedSquareId === 25 ||
    clickedSquareId === 33 ||
    clickedSquareId === 41
  ) {
    console.log("Left side cannot be calculated");
    const forward16Step = clickedSquareId + 16;
    const backwar17StepRight = clickedSquareId + 17;
    const forward15StepLeft = clickedSquareId + 0;
    const backward8 = clickedSquareId - 8;
    const backward8RightRight = backward8 + 2;
    const backward16 = clickedSquareId - 17;

    const backward16RightRight = backward16 + 2;

    const forward8Step = clickedSquareId + 8;
    const forward8int =
      parseInt(forward8Step.toString().match(/\d+/)?.[0], 10) || null;
    let backwar8StepLeftLeft;
    backwar8StepLeftLeft = forward8int + 2;

    if (
      document
        .getElementById(forward8Step.toString())
        .classList.add("horse8step")
    );

    if (
      document
        .getElementById(backwar8StepLeftLeft?.toString())
        .classList.add("forwardLeftLefthorse")
    );

    if (
      document.getElementById(forward16Step.toString()).classList.add("horses")
    );

    if (
      document
        .getElementById(backwar17StepRight.toString())
        .classList.add("Righthorse")
    );
    document.getElementById(forward15StepLeft.toString());

    if (
      document
        .getElementById(backward8RightRight.toString())
        .classList.add("backward8RightRight")
    );

    if (
      document
        .getElementById(backward16RightRight.toString())
        .classList.add("backward16RightRight")
    );
  }

  if (clickedSquareId === 49) {
    const forward8Step = clickedSquareId + 8;
    const backward8Step = clickedSquareId - 8;
    const forward8stepLeftLeft = forward8Step + 2;
    const backward8stepLeftLeft = backward8Step + 2;

    const backward16Step = clickedSquareId - 16;
    const backward16stepLeft = backward16Step + 1;

    if (
      document
        .getElementById(forward8stepLeftLeft.toString())
        .classList.add("secondLast56Forward")
    );
    if (
      document
        .getElementById(backward8stepLeftLeft.toString())
        .classList.add("secondLast56Backward")
    );
    if (
      document
        .getElementById(backward16stepLeft.toString())
        .classList.add("backward16stepLeft")
    );
  }
  if (clickedSquareId === 57) {
    const forward8Step = clickedSquareId + 8;
    const backward8Step = clickedSquareId - 8;

    const forward8stepLeftLeft = forward8Step + 2;
    const backward8stepLeftLeft = backward8Step + 2;

    const backward16Step = clickedSquareId - 16;
    const backward16stepLeft = backward16Step + 1;

    if (
      document
        .getElementById(backward8stepLeftLeft.toString())
        .classList.add("secondLast56Forward")
    );
    if (
      document
        .getElementById(backward16stepLeft.toString())
        .classList.add("secondLast56Backward")
    );
  }

  // localStorage.setItem("iwhiteTurn", "false");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "false"){
  //  document.getElementById("turn").innerHTML = "Black Turn: True <br> White Turn: False" ;
  // }

}


// if (!whiteTurn && isHorse === "♞") {
  if ( isHorse === "♞") {
  if (
    clickedSquareId === 1 ||
    clickedSquareId === 9 ||
    clickedSquareId === 17 ||
    clickedSquareId === 25 ||
    clickedSquareId === 33 ||
    clickedSquareId === 41
  ) {
    console.log("Left side cannot be calculated");
    const forward16Step = clickedSquareId + 16;
    const backwar17StepRight = clickedSquareId + 17;
    const forward15StepLeft = clickedSquareId + 0;
    const backward8 = clickedSquareId - 8;
    const backward8RightRight = backward8 + 2;
    const backward16 = clickedSquareId - 17;

    const backward16RightRight = backward16 + 2;

    const forward8Step = clickedSquareId + 8;
    const forward8int =
      parseInt(forward8Step.toString().match(/\d+/)?.[0], 10) || null;
    let backwar8StepLeftLeft;
    backwar8StepLeftLeft = forward8int + 2;

    if (
      document
        .getElementById(forward8Step.toString())
        .classList.add("horse8step")
    );

    if (
      document
        .getElementById(backwar8StepLeftLeft?.toString())
        .classList.add("forwardLeftLefthorse")
    );

    if (
      document.getElementById(forward16Step.toString()).classList.add("horses")
    );

    if (
      document
        .getElementById(backwar17StepRight.toString())
        .classList.add("Righthorse")
    );
    document.getElementById(forward15StepLeft.toString());

    if (
      document
        .getElementById(backward8RightRight.toString())
        .classList.add("backward8RightRight")
    );

    if (
      document
        .getElementById(backward16RightRight.toString())
        .classList.add("backward16RightRight")
    );
  }

  if (clickedSquareId === 49) {
    const forward8Step = clickedSquareId + 8;
    const backward8Step = clickedSquareId - 8;
    const forward8stepLeftLeft = forward8Step + 2;
    const backward8stepLeftLeft = backward8Step + 2;

    const backward16Step = clickedSquareId - 16;
    const backward16stepLeft = backward16Step + 1;

    if (
      document
        .getElementById(forward8stepLeftLeft.toString())
        .classList.add("secondLast56Forward")
    );
    if (
      document
        .getElementById(backward8stepLeftLeft.toString())
        .classList.add("secondLast56Backward")
    );
    if (
      document
        .getElementById(backward16stepLeft.toString())
        .classList.add("backward16stepLeft")
    );
  }
  if (clickedSquareId === 57) {
    const forward8Step = clickedSquareId + 8;
    const backward8Step = clickedSquareId - 8;

    const forward8stepLeftLeft = forward8Step + 2;
    const backward8stepLeftLeft = backward8Step + 2;

    const backward16Step = clickedSquareId - 16;
    const backward16stepLeft = backward16Step + 1;

    if (
      document
        .getElementById(backward8stepLeftLeft.toString())
        .classList.add("secondLast56Forward")
    );
    if (
      document
        .getElementById(backward16stepLeft.toString())
        .classList.add("secondLast56Backward")
    );
  }
  // localStorage.setItem("iwhiteTurn", "true");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "true"){
  //  document.getElementById("turn").innerHTML = "Black Turn: False <br> White Turn: True" ;
  // }
}




}



export function HorseMaster(clickedSquareId) {

  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let horseNode = document.getElementById(clickedSquareId);
  let isHorse = horseNode.innerHTML;


  // if (whiteTurn && isHorse === "♘") {
    if (isHorse === "♘") {
  const forward8Step = clickedSquareId + 8;
  const forward16Step = clickedSquareId + 16;

  const finalforward8Left = forward8Step - 2;
  const finalforward8Right = forward8Step + 2;

  const finalforward16Left = forward16Step - 1;
  const finalforward16Right = forward16Step + 1;

  const finalBackward8 = clickedSquareId - 8;
  const finalBackward16 = clickedSquareId - 16;

  const finalBackward8Left = finalBackward8 - 2;
  const finalBackward8Right = finalBackward8 + 2;

  const finalBackward16Left = finalBackward16 - 1;
  const finalBackward16Right = finalBackward16 + 1;

  if (
    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left")
  );
  if (
    document
      .getElementById(finalforward8Left.toString())
      .classList.add("horseforward8left")
  );

  if (
    document
      .getElementById(finalforward8Right.toString())
      .classList.add("horseforward8right")
  );
  if (
    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalforward16Right")
  );
  if (
    document
      .getElementById(finalBackward16Left.toString())
      .classList.add("finalBackward16Left")
  );

  if (
    document
      .getElementById(finalBackward16Right.toString())
      .classList.add("finalBackward16Right")
  );

  if (
    document
      .getElementById(finalBackward8Left.toString())
      .classList.add("finalBackward8Left")
  );

  if (
    document
      .getElementById(finalBackward8Right.toString())
      .classList.add("finalBackward8Right")
  );
  // localStorage.setItem("iwhiteTurn", "false");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "false"){
  //  document.getElementById("turn").innerHTML = "Black Turn: True <br> White Turn: False" ;
  // }

  }


  // if (!whiteTurn && isHorse === "♞") {
    if (isHorse === "♞") {
  const forward8Step = clickedSquareId + 8;
  const forward16Step = clickedSquareId + 16;

  const finalforward8Left = forward8Step - 2;
  const finalforward8Right = forward8Step + 2;

  const finalforward16Left = forward16Step - 1;
  const finalforward16Right = forward16Step + 1;

  const finalBackward8 = clickedSquareId - 8;
  const finalBackward16 = clickedSquareId - 16;

  const finalBackward8Left = finalBackward8 - 2;
  const finalBackward8Right = finalBackward8 + 2;

  const finalBackward16Left = finalBackward16 - 1;
  const finalBackward16Right = finalBackward16 + 1;

  if (
    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left")
  );
  if (
    document
      .getElementById(finalforward8Left.toString())
      .classList.add("horseforward8left")
  );

  if (
    document
      .getElementById(finalforward8Right.toString())
      .classList.add("horseforward8right")
  );
  if (
    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalforward16Right")
  );
  if (
    document
      .getElementById(finalBackward16Left.toString())
      .classList.add("finalBackward16Left")
  );

  if (
    document
      .getElementById(finalBackward16Right.toString())
      .classList.add("finalBackward16Right")
  );

  if (
    document
      .getElementById(finalBackward8Left.toString())
      .classList.add("finalBackward8Left")
  );

  if (
    document
      .getElementById(finalBackward8Right.toString())
      .classList.add("finalBackward8Right")
  );

  // localStorage.setItem("iwhiteTurn", "true");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "true"){
  //  document.getElementById("turn").innerHTML = "Black Turn: False <br> White Turn: True" ;
  // }
}
}


export function DeadEndMaster(clickedSquareId) {


  let whiteTurn = localStorage.getItem("iwhiteTurn") === "true";

  let horseNode = document.getElementById(clickedSquareId);
  let isHorse = horseNode.innerHTML;


  // if (whiteTurn && isHorse === "♘") {
    if (isHorse === "♘") {
  if (clickedSquareId == 2) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;

    const finalforward8Right = forward8Step + 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId >= 3 && clickedSquareId <= 6) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;

    const finalforward8Right = forward8Step + 2;
    const finalforward8Left = forward8Step - 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }



  if  (clickedSquareId >= 51 &&  clickedSquareId <= 54) {
    const forward8Step = clickedSquareId + 8;

    const Backward16Step = clickedSquareId - 16;
    const Backward8Step = clickedSquareId - 8;

    const finalforward8Right = forward8Step + 2;
    const finalforward8Left = forward8Step - 2;

    const finalBackward8Right = Backward8Step + 2;
    const finalBackward8Left = Backward8Step - 2;


    const finalforward16Left = Backward16Step - 1;
    const finalforward16Right = Backward16Step + 1;
  

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

      document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalforward8Left");

      document
      .getElementById(finalBackward8Right.toString())
      .classList.add("horseforward16Left");



      document
      .getElementById(finalBackward8Left.toString())
      .classList.add("horseforward16Left");


    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

  }


  if (clickedSquareId === 7) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;

    const finalforward8Left = forward8Step - 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId === 58) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;

    const finalforward8Right = forward8Step + 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId === 63) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;

    const finalforward8Right = forward8Step - 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId >= 59 && clickedSquareId <= 62) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;

    const finalforward8Right = forward8Step - 2;
    const finalforward8Left = forward8Step + 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }






  if (clickedSquareId >= 11 && clickedSquareId <= 14) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;
    const backward8Step = clickedSquareId - 8;

    const finalforward8Right = forward8Step + 2;
    const finalBackward8Right = backward8Step + 2;
    const finalBackward8Left = backward8Step - 2;
    const finalForward8Left = forward8Step - 2;


    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
    .getElementById(finalBackward8Left.toString())
    .classList.add("finalBackward8Left");


    document
    .getElementById(finalForward8Left.toString())
    .classList.add("finalForward8Left");


    
    document
      .getElementById(finalforward16Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalBackward8Right.toString())
      .classList.add("finalBackward8Right");
  
  }
  // localStorage.setItem("iwhiteTurn", "false");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "false"){
  //  document.getElementById("turn").innerHTML = "Black Turn: True <br> White Turn: False" ;
  // }
}


// if (!whiteTurn && isHorse === "♞") {
  if (isHorse === "♞") {
  if (clickedSquareId == 2) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;

    const finalforward8Right = forward8Step + 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId >= 3 && clickedSquareId <= 6) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;

    const finalforward8Right = forward8Step + 2;
    const finalforward8Left = forward8Step - 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }



  if  (clickedSquareId >= 51 &&  clickedSquareId <= 54) {
    const forward8Step = clickedSquareId + 8;

    const Backward16Step = clickedSquareId - 16;
    const Backward8Step = clickedSquareId - 8;

    const finalforward8Right = forward8Step + 2;
    const finalforward8Left = forward8Step - 2;

    const finalBackward8Right = Backward8Step + 2;
    const finalBackward8Left = Backward8Step - 2;


    const finalforward16Left = Backward16Step - 1;
    const finalforward16Right = Backward16Step + 1;
  

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

      document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalforward8Left");

      document
      .getElementById(finalBackward8Right.toString())
      .classList.add("horseforward16Left");



      document
      .getElementById(finalBackward8Left.toString())
      .classList.add("horseforward16Left");


    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

  }


  if (clickedSquareId === 7) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;

    const finalforward8Left = forward8Step - 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId === 58) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;

    const finalforward8Right = forward8Step + 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId === 63) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;

    const finalforward8Right = forward8Step - 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId >= 59 && clickedSquareId <= 62) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;

    const finalforward8Right = forward8Step - 2;
    const finalforward8Left = forward8Step + 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("secondLast56Backward");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }






  if (clickedSquareId >= 11 && clickedSquareId <= 14) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;
    const backward8Step = clickedSquareId - 8;

    const finalforward8Right = forward8Step + 2;
    const finalBackward8Right = backward8Step + 2;
    const finalBackward8Left = backward8Step - 2;
    const finalForward8Left = forward8Step - 2;


    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
    .getElementById(finalBackward8Left.toString())
    .classList.add("finalBackward8Left");


    document
    .getElementById(finalForward8Left.toString())
    .classList.add("finalForward8Left");


    
    document
      .getElementById(finalforward16Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalBackward8Right.toString())
      .classList.add("finalBackward8Right");
  
  }
  // localStorage.setItem("iwhiteTurn", "true");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "true"){
  //  document.getElementById("turn").innerHTML = "Black Turn: False <br> White Turn: True" ;
  // }

  
}


  


}



export function subDeadEnd(clickedSquareId){

  // if (whiteTurn && isHorse === "♘") {
    if (isHorse === "♘") {
  if (clickedSquareId === 10) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;
    const backward8Step = clickedSquareId - 8;

    const finalforward8Right = forward8Step + 2;
    const finalBackward8Right = backward8Step + 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward8Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalBackward8Right.toString())
      .classList.add("finalBackward8Right");
  
  }

  if (clickedSquareId === 15) {
    const forward8Step = clickedSquareId + 8;
    const forward16Step = clickedSquareId + 16;
    const backward8Step = clickedSquareId - 8;

    const finalBackward8Left = backward8Step - 2;

    const finalForwardd8Left = forward8Step - 2;

    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalBackward8Left.toString())
      .classList.add("finalforward8Left");

    document
      .getElementById(finalForwardd8Left.toString())
      .classList.add("finalBackward8Right");
  
  }




  if (clickedSquareId === 50) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;
    const backward8Step = clickedSquareId + 8;

    const finalforward8Right = forward8Step - 2;
    const finalforward8Left = forward8Step + 2;
    const finalBackward8Right = backward8Step + 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalBackward8Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");
  }

  if (clickedSquareId === 55) {
    const forward8Step = clickedSquareId - 8;
    const forward16Step = clickedSquareId - 16;
    const backward8Step = clickedSquareId + 8;

    const finalBackward8Left = backward8Step - 2;

    const finalForwardd8Left = forward8Step - 2;

    const finalforward16Left = forward16Step + 1;
    const finalforward16Right = forward16Step - 1;

    document
      .getElementById(finalforward16Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalBackward8Left.toString())
      .classList.add("finalforward8Left");

    document
      .getElementById(finalForwardd8Left.toString())
      .classList.add("finalBackward8Right");
  
  }


  if( clickedSquareId === 18 || 
      clickedSquareId === 26 || clickedSquareId === 34 || 
      clickedSquareId === 42
    
    ){

      const forward8Step = clickedSquareId + 8;

      const forward16Step = clickedSquareId + 16;

      const backward8Step = clickedSquareId - 8;
      const backward16Step = clickedSquareId - 16;
  
      const finalforward8Right = forward8Step + 2;

      const finalBackward8Right = backward8Step + 2;

  
  
      const finalforward16Left = forward16Step - 1;
      const finalforward16Right = forward16Step + 1;

      const finalBackward16Left = backward16Step + 1;

      const finalBackward16Right = backward16Step - 1;
  
 
      document
      .getElementById(finalBackward16Left.toString())
      .classList.add("finalBackward8Left");
  
  
      document
      .getElementById(finalBackward16Right.toString())
      .classList.add("finalForward8Left");
  

      document
        .getElementById(finalforward16Left.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward16Right.toString())
        .classList.add("horseforward16Left");
  
      document
        .getElementById(finalforward8Right.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalBackward8Right.toString())
        .classList.add("finalBackward8Right");
        
  }




  if( clickedSquareId === 23 || 
    clickedSquareId === 31 || clickedSquareId === 39 || 
    clickedSquareId === 47
  
  ){

    const forward8Step = clickedSquareId + 8;

    const forward16Step = clickedSquareId + 16;

    const backward8Step = clickedSquareId - 8;
    const backward16Step = clickedSquareId - 16;

    const finalforward8Left = forward8Step - 2;

    const finalBackward8Left = backward8Step - 2;



    const finalforward16Left = forward16Step - 1;
    const finalforward16Right = forward16Step + 1;

    const finalBackward16Left = backward16Step + 1;

    const finalBackward16Right = backward16Step - 1;


    document
    .getElementById(finalBackward16Left.toString())
    .classList.add("finalBackward8Left");


    document
    .getElementById(finalBackward16Right.toString())
    .classList.add("finalForward8Left");


    document
      .getElementById(finalforward16Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalforward16Right.toString())
      .classList.add("horseforward16Left");

    document
      .getElementById(finalforward8Left.toString())
      .classList.add("finalBackward8Right");

    document
      .getElementById(finalBackward8Left.toString())
      .classList.add("finalBackward8Right");
      
}

// localStorage.setItem("iwhiteTurn", "false");



// let a  =   localStorage.getItem("iwhiteTurn");
// document.getElementById("turn").innerHTML = a;
// if(a === "false"){
//  document.getElementById("turn").innerHTML = "Black Turn: True <br> White Turn: False" ;
// }

  }


  // if (!whiteTurn && isHorse === "♞") {
    if (isHorse === "♞") {
    if (clickedSquareId === 10) {
      const forward8Step = clickedSquareId + 8;
      const forward16Step = clickedSquareId + 16;
      const backward8Step = clickedSquareId - 8;
  
      const finalforward8Right = forward8Step + 2;
      const finalBackward8Right = backward8Step + 2;
  
      const finalforward16Left = forward16Step - 1;
      const finalforward16Right = forward16Step + 1;
  
      document
        .getElementById(finalforward16Left.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward16Right.toString())
        .classList.add("horseforward16Left");
  
      document
        .getElementById(finalforward8Right.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalBackward8Right.toString())
        .classList.add("finalBackward8Right");
    
    }
  
    if (clickedSquareId === 15) {
      const forward8Step = clickedSquareId + 8;
      const forward16Step = clickedSquareId + 16;
      const backward8Step = clickedSquareId - 8;
  
      const finalBackward8Left = backward8Step - 2;
  
      const finalForwardd8Left = forward8Step - 2;
  
      const finalforward16Left = forward16Step - 1;
      const finalforward16Right = forward16Step + 1;
  
      document
        .getElementById(finalforward16Left.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward16Right.toString())
        .classList.add("horseforward16Left");
  
      document
        .getElementById(finalBackward8Left.toString())
        .classList.add("finalforward8Left");
  
      document
        .getElementById(finalForwardd8Left.toString())
        .classList.add("finalBackward8Right");
    
    }
  
  
  
  
    if (clickedSquareId === 50) {
      const forward8Step = clickedSquareId - 8;
      const forward16Step = clickedSquareId - 16;
      const backward8Step = clickedSquareId + 8;
  
      const finalforward8Right = forward8Step - 2;
      const finalforward8Left = forward8Step + 2;
      const finalBackward8Right = backward8Step + 2;
  
      const finalforward16Left = forward16Step + 1;
      const finalforward16Right = forward16Step - 1;
  
      document
        .getElementById(finalBackward8Right.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward16Left.toString())
        .classList.add("horseforward16Left");
  
      document
        .getElementById(finalforward16Right.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward8Left.toString())
        .classList.add("finalBackward8Right");
    }
  
    if (clickedSquareId === 55) {
      const forward8Step = clickedSquareId - 8;
      const forward16Step = clickedSquareId - 16;
      const backward8Step = clickedSquareId + 8;
  
      const finalBackward8Left = backward8Step - 2;
  
      const finalForwardd8Left = forward8Step - 2;
  
      const finalforward16Left = forward16Step + 1;
      const finalforward16Right = forward16Step - 1;
  
      document
        .getElementById(finalforward16Left.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward16Right.toString())
        .classList.add("horseforward16Left");
  
      document
        .getElementById(finalBackward8Left.toString())
        .classList.add("finalforward8Left");
  
      document
        .getElementById(finalForwardd8Left.toString())
        .classList.add("finalBackward8Right");
    
    }
  
  
    if( clickedSquareId === 18 || 
        clickedSquareId === 26 || clickedSquareId === 34 || 
        clickedSquareId === 42
      
      ){
  
        const forward8Step = clickedSquareId + 8;
  
        const forward16Step = clickedSquareId + 16;
  
        const backward8Step = clickedSquareId - 8;
        const backward16Step = clickedSquareId - 16;
    
        const finalforward8Right = forward8Step + 2;
  
        const finalBackward8Right = backward8Step + 2;
  
    
    
        const finalforward16Left = forward16Step - 1;
        const finalforward16Right = forward16Step + 1;
  
        const finalBackward16Left = backward16Step + 1;
  
        const finalBackward16Right = backward16Step - 1;
    
   
        document
        .getElementById(finalBackward16Left.toString())
        .classList.add("finalBackward8Left");
    
    
        document
        .getElementById(finalBackward16Right.toString())
        .classList.add("finalForward8Left");
    
  
        document
          .getElementById(finalforward16Left.toString())
          .classList.add("finalBackward8Right");
    
        document
          .getElementById(finalforward16Right.toString())
          .classList.add("horseforward16Left");
    
        document
          .getElementById(finalforward8Right.toString())
          .classList.add("finalBackward8Right");
    
        document
          .getElementById(finalBackward8Right.toString())
          .classList.add("finalBackward8Right");
          
    }
  
  
  
  
    if( clickedSquareId === 23 || 
      clickedSquareId === 31 || clickedSquareId === 39 || 
      clickedSquareId === 47
    
    ){
  
      const forward8Step = clickedSquareId + 8;
  
      const forward16Step = clickedSquareId + 16;
  
      const backward8Step = clickedSquareId - 8;
      const backward16Step = clickedSquareId - 16;
  
      const finalforward8Left = forward8Step - 2;
  
      const finalBackward8Left = backward8Step - 2;
  
  
  
      const finalforward16Left = forward16Step - 1;
      const finalforward16Right = forward16Step + 1;
  
      const finalBackward16Left = backward16Step + 1;
  
      const finalBackward16Right = backward16Step - 1;
  
  
      document
      .getElementById(finalBackward16Left.toString())
      .classList.add("finalBackward8Left");
  
  
      document
      .getElementById(finalBackward16Right.toString())
      .classList.add("finalForward8Left");
  
  
      document
        .getElementById(finalforward16Left.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalforward16Right.toString())
        .classList.add("horseforward16Left");
  
      document
        .getElementById(finalforward8Left.toString())
        .classList.add("finalBackward8Right");
  
      document
        .getElementById(finalBackward8Left.toString())
        .classList.add("finalBackward8Right");
        
  }
  
  // localStorage.setItem("iwhiteTurn", "true");

  // let a  =   localStorage.getItem("iwhiteTurn");
  // document.getElementById("turn").innerHTML = a;
  // if(a === "true"){
  //  document.getElementById("turn").innerHTML = "Black Turn: False <br> White Turn: True" ;
  // }

  
    }
  

}