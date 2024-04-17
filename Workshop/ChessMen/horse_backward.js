// let clickedSquareId = localStorage.getItem("clicked_id");

// if(clickedSquareId !== null){
//     console.log(localStorage.getItem("clicked_id"))
// }

//     else{
//         console.log("not found any clicked id game is not started")
//     }


//     export function HorseBackward(clickedSquareId) {
//     const backward16Step = clickedSquareId - 16;
//     const backwardStepExists =
//       document.getElementById(backward16Step.toString()) !== null;
  
//     if (backwardStepExists < 0 || backwardStepExists > 64) {
//       console.log("Backward Step Does Not Exist!");
//     } else {
//       console.log("Backward Step Does Exist");
//     }
//   }
  

// export function RestrictHorseBackward8step(clickedSquareId){
//     if(
//         clickedSquareId === 1 ||
//         clickedSquareId === 2 ||
//         clickedSquareId === 3 ||
//         clickedSquareId === 4 ||
//         clickedSquareId === 5 ||
//         clickedSquareId === 6 ||
//         clickedSquareId === 7 ||
//         clickedSquareId === 8 ||

//         clickedSquareId === 57 ||
//         clickedSquareId === 58 ||
//         clickedSquareId === 59 ||
//         clickedSquareId === 60 ||
//         clickedSquareId === 61 ||
//         clickedSquareId === 62 ||
//         clickedSquareId === 63 ||
//         clickedSquareId === 64
//     ){

//         console.log("Horse Cannot go 8 step back!")

//     }else{
//         console.log("Horse Can go 8 step back!")
//     }

// }


// export function RestrictHorseBackward16step(clickedSquareId){
//     if(
     
//         clickedSquareId === 9 ||  clickedSquareId === 10 ||
//         clickedSquareId === 11 ||  clickedSquareId === 12 ||
//         clickedSquareId === 13 ||  clickedSquareId === 14 ||
//         clickedSquareId === 15 ||  clickedSquareId === 16 ||

//         clickedSquareId === 56 ||  clickedSquareId === 55 ||
//         clickedSquareId === 54 ||  clickedSquareId === 53 ||
//         clickedSquareId === 52 ||  clickedSquareId === 51 ||
//         clickedSquareId === 50 ||  clickedSquareId === 49 
       
//     ){

//         console.log("Horse Cannot go straight 16 step back! bUT CAN GO BACK 4 STEP")

//     }else{
//         console.log("Horse cam go straight 16 step back!")

//     }

// }


