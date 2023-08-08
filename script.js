

const operationSelect = document.getElementById("select-operation");
const inputDiv = document.getElementById("matrix-input");
const inputRight = document.getElementById("input-right");

const cellTextLeft = document.getElementById("cell-text-left");
const matrixACells = document.getElementById("matrix-a-cells");
const matrixATextbox = document.getElementById("matrix-a-textbox");

const cellTextRight = document.getElementById("cell-text-right");
const matrixBCells = document.getElementById("matrix-b-cells");
const matrixBTextbox = document.getElementById("matrix-b-textbox");

operationSelect.addEventListener('change', (event) => {
    console.log("changed smth");
    if (event.target.value == "rref"){
        inputDiv.style.setProperty("grid-template-columns", "1fr");
        console.log('rref');
        inputRight.style.setProperty('display', "none");

    } else {
        inputDiv.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
        console.log('not rref');
        inputRight.style.setProperty('display', "block");
    }
})

cellTextLeft.addEventListener('change', (event) =>{
    if (event.target.value == "cells"){
        matrixACells.style.setProperty("display", "block");
        matrixATextbox.style.setProperty("display", "none");
    } else if (event.target.value == "textbox"){
        matrixACells.style.setProperty("display", "none");
        matrixATextbox.style.setProperty("display", "block");
    }
})

cellTextRight.addEventListener('change', (event) =>{
    if (event.target.value == "cells"){
        matrixBCells.style.setProperty("display", "block");
        matrixBTextbox.style.setProperty("display", "none");
    } else if (event.target.value == "textbox"){
        matrixBCells.style.setProperty("display", "none");
        matrixBTextbox.style.setProperty("display", "block");
    }
})