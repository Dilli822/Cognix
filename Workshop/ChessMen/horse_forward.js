export function HorseForward(clickedSquareId) {
  const forward16Step = clickedSquareId + 16;

  const forward15StepLeft = clickedSquareId + 15;
  const backwar17StepRight = clickedSquareId + 17;

  // Check if the forward and backward steps are valid IDs in the DOM
  const forwardStepExists =
    document.getElementById(forward16Step.toString()) !== null;

  // If either forward or backward steps exist, trigger an alert
  if (forwardStepExists) {
    console.log("Forward  step exists!");
    console.log(typeof forward16Step);
    if(document.getElementById(forward16Step.toString()).classList.add("horse"));
    
    if(document
      .getElementById(forward15StepLeft.toString()).classList.add("Lefthorse"));
    
    if(document
      .getElementById(backwar17StepRight.toString()).classList.add("Righthorse"));
  }
}

export function HorseForwardRightEnd(clickedSquareId) {
  const forward16Step = clickedSquareId + 16;
  const forward15StepLeft = clickedSquareId + 15;
  const backwar17StepRight = clickedSquareId + 0;
  const forward8StepLeftLeft = clickedSquareId + 8;
  const finalforward8StepLeftLeft  = forward8StepLeftLeft - 2;
  const Bakward8StepLeftLeft = clickedSquareId - 8;
  const finalBackward8StepLeftLeft = Bakward8StepLeftLeft - 2;
  const backward16Step = clickedSquareId - 16;
  const finalBackWar16LeftLeft = backward16Step - 1;
  if (
    clickedSquareId === 8 ||
    clickedSquareId === 16 ||
    clickedSquareId === 24 ||
    clickedSquareId === 32 ||
    clickedSquareId === 40 ||
    clickedSquareId === 48 ||

    clickedSquareId === 64
  ) {
    console.log("Right side cannot be calculated");
    if(document.getElementById(forward16Step.toString()).classList.add("horse"));
    if(document
      .getElementById(forward15StepLeft.toString()).classList.add("Lefthorse"));
      if(document.getElementById(backwar17StepRight.toString()));


      if(document.getElementById(finalforward8StepLeftLeft.toString()).classList.add("rightEndLeftLeft"));
      if(document.getElementById(finalBackward8StepLeftLeft.toString()).classList.add("backward8LeftLeft"));
      if(document.getElementById(finalBackWar16LeftLeft.toString()).classList.add("finalBackWar16LeftLeft"));
  }

  if(clickedSquareId === 56){
    const forward8Step = clickedSquareId + 8;
    const backward8Step = clickedSquareId - 8;
    const forward8stepLeftLeft = forward8Step - 2;
    const backward8stepLeftLeft = backward8Step - 2;

    const backward16Step = clickedSquareId - 16;
    const backward16stepLeft = backward16Step - 1;

    if(document.getElementById(forward8stepLeftLeft.toString()).classList.add("secondLast56Forward"));
    if(document.getElementById(backward8stepLeftLeft.toString()).classList.add("secondLast56Backward"));
    if(document.getElementById(backward16stepLeft.toString()).classList.add("backward16stepLeft"));
}
}

export function HorseForwardLeftEnd(clickedSquareId, miscellaneous) {
  if (
    clickedSquareId === 1 ||
    clickedSquareId === 9 ||
    clickedSquareId === 17 ||
    clickedSquareId === 25 ||
    clickedSquareId === 33 ||
    clickedSquareId === 41 ||
    clickedSquareId === 49 ||
    clickedSquareId === 57
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

    if( document
      .getElementById(forward8Step.toString())
      .classList.add("horse8step"));

      if(document
      .getElementById(backwar8StepLeftLeft?.toString())
      .classList.add("forwardLeftLefthorse"));

      if(document.getElementById(forward16Step.toString()).classList.add("horses"));

      if(document
      .getElementById(backwar17StepRight.toString())
      .classList.add("Righthorse"));
     document.getElementById(forward15StepLeft.toString());
      
     if( document
    .getElementById(backward8RightRight.toString())
    .classList.add("backward8RightRight"));
    
    if(document
    .getElementById(backward16RightRight.toString())
    .classList.add("backward16RightRight"));
  }
}

export function forward8StepLeftLeft(clickedSquareId) {
  const forward8Step = clickedSquareId + 8;
  const forward8int =
    parseInt(forward8Step.toString().match(/\d+/)?.[0], 10) || null;
  let backwar8StepLeftLeft;
  if (
    clickedSquareId === 7 ||
    clickedSquareId === 8 ||
    clickedSquareId === 15 ||
    clickedSquareId === 23 ||
    clickedSquareId === 31 ||
    clickedSquareId === 39 ||
    clickedSquareId === 47
  ) {
    backwar8StepLeftLeft = forward8int + 0;
  } else {
    backwar8StepLeftLeft = forward8int + 2;
    
    if(document
      .getElementById(forward8Step.toString())
      .classList.add("horse8step"));
      f(document
      .getElementById(backwar8StepLeftLeft.toString())
      .classList.add("forwardLeftLefthorse"));
  }
}

export function forward8StepRightRight(clickedSquareId) {
  const forward8Step = clickedSquareId + 8;
  const forward8int =
    parseInt(forward8Step.toString().match(/\d+/)?.[0], 10) || null;
  let backwar8StepRightRight;
  if (
    clickedSquareId === 1 ||
    clickedSquareId === 2 ||
    clickedSquareId === 7 ||
    clickedSquareId === 8 ||
    clickedSquareId === 10 ||
    clickedSquareId === 18 ||
    clickedSquareId === 26 ||
    clickedSquareId === 34 ||
    clickedSquareId === 38 ||
    clickedSquareId === 42 ||
    clickedSquareId === 15 ||
    clickedSquareId === 23 ||
    clickedSquareId === 31 ||
    clickedSquareId === 39 ||
    clickedSquareId === 50 ||
    clickedSquareId === 47
  ) {
    backwar8StepRightRight = forward8int + 0;
  } else {
    backwar8StepRightRight = forward8int - 2;
    document
      .getElementById(forward8Step.toString())
      ?.classList.add("horse8step");
    document
      .getElementById(backwar8StepRightRight.toString())
      ?.classList.add("forwardRightRighthorse");
  }
}