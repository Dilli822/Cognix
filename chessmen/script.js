document.getElementById("chessboardWrapper").style.display = "none";
document.getElementById("loading").style.display = "block";

// Function to move the black rook forward to the black pawn square
function PawnMove() {

}

// Add event listener to the black rook
const blackRook = document.getElementById('black-pawn1');
blackRook.addEventListener('click', function () {
    alert('Black Pawn clicked!');
    PawnMove();
});

let idBlackCharPairs = [
    { id: "ibr", value: "&#9820;" },
    { id: "ibk", value: "&#9822;" },
    { id: "ibb", value: "&#9821;" },
    { id: "ibq", value: "&#9819;" },
    { id: "ibking", value: "&#9818;" },
    { id: "ibb2", value: "&#9821;" },
    { id: "ibk2", value: "&#9822;" },
    { id: "ibr2", value: "&#9820;" }
];

let idWhiteCharValuePairs = [
    { id: "iwr", value: "&#9814;" },
    { id: "iwk", value: "&#9816;" },
    { id: "iww", value: "&#9815;" },
    { id: "iwq", value: "&#9813;" },
    { id: "iwking", value: "&#9812;" },
    { id: "iww2", value: "&#9815;" },
    { id: "iwk2", value: "&#9816;" },
    { id: "iwr2", value: "&#9814;" }
];

// Iterate over each object and set ID and value for black pieces
idBlackCharPairs.forEach(function (pair) {
    let element = document.getElementById(pair.id);
    if (element) {
        element.innerHTML = pair.value;
    }
});

// Iterate over each object and set ID and value for white pieces
idWhiteCharValuePairs.forEach(function (pair) {
    let element = document.getElementById(pair.id);
    if (element) {
        element.innerHTML = pair.value;
    }
});
document.getElementById("loading").style.display = "none";
document.getElementById("chessboardWrapper").style.display = "block";

