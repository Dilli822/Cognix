


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
    document.getElementById(forward16Step.toString()).classList.add("horse");
    document
      .getElementById(forward15StepLeft.toString())
      .classList.add("Lefthorse");
    document
      .getElementById(backwar17StepRight.toString())
      .classList.add("Righthorse");
  }
}

export function HorseForwardRightEnd(clickedSquareId) {
  const forward16Step = clickedSquareId + 16;
  const forward15StepLeft = clickedSquareId + 15;
  const backwar17StepRight = clickedSquareId + 0;

  if (
    clickedSquareId === 8 ||
    clickedSquareId === 16 ||
    clickedSquareId === 24 ||
    clickedSquareId === 32 ||
    clickedSquareId === 40 ||
    clickedSquareId === 48 ||
    clickedSquareId === 56 ||
    clickedSquareId === 64
  ) {
    console.log("Right side cannot be calculated");
    document.getElementById(forward16Step.toString()).classList.add("horse");
    document
      .getElementById(forward15StepLeft.toString())
      .classList.add("Lefthorse");
    document.getElementById(backwar17StepRight.toString()).classList.add("");
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

    const forward8Step = clickedSquareId + 8;
    const forward8int = parseInt(forward8Step.toString().match(/\d+/)?.[0], 10) || null;
    let backwar8StepLeftLeft;
    backwar8StepLeftLeft = forward8int + 2;
    document.getElementById(forward8Step.toString()).classList.add("horse8step");
    document.getElementById(backwar8StepLeftLeft.toString()).classList.add("forwardLeftLefthorse");

    document.getElementById(forward16Step.toString()).classList.add("horse");
    document
      .getElementById(backwar17StepRight.toString())
      .classList.add("Righthorse");
    document.getElementById(forward15StepLeft.toString()).classList.add("");
  }
}

export function forward8StepLeftLeft(clickedSquareId){
    const forward8Step = clickedSquareId + 8;
    const forward8int = parseInt(forward8Step.toString().match(/\d+/)?.[0], 10) || null;
    let backwar8StepLeftLeft;
    if (

        clickedSquareId === 7 ||
        clickedSquareId === 8  ||
        clickedSquareId === 15 || 
        clickedSquareId === 23 ||
        clickedSquareId === 31 || 
        clickedSquareId === 39 || 
        clickedSquareId === 47
      ) {
        backwar8StepLeftLeft = forward8int + 0;
      }else{
        backwar8StepLeftLeft = forward8int + 2;
        document.getElementById(forward8Step.toString()).classList.add("horse8step");
        document.getElementById(backwar8StepLeftLeft.toString()).classList.add("forwardLeftLefthorse");
      }

}