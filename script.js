class matrixCalculator {
    constructor(mDimBoxA, nDimBoxA, mDimBoxB, nDimBoxB, cellTextLeft, cellTextRight, matrixATextbox, matrixBTextbox){
        this.mDimBoxA = mDimBoxA;
        this.nDimBoxA = nDimBoxA;
        this.mDimBoxB = mDimBoxB;
        this.nDimBoxB = nDimBoxB;
        this.ma = mDimBoxA.innerText;
        this.na = nDimBoxA.innerText;
        this.mb = mDimBoxB.innerText;
        this.nb = nDimBoxB.innerText;
        this.cellTextLeft = cellTextLeft;
        this.cellTextRight = cellTextRight;
        this.cellsA = document.querySelectorAll("[data-cell-a]");
        this.cellsB = document.querySelectorAll("[data-cell-b]");
        this.matrixATextbox = matrixATextbox;
        this.matrixBTextbox = matrixBTextbox;
        this.operation = "addition";
    }
    clearA(){
        this.cellsA = document.querySelectorAll("[data-cell-a]");
        //console.log(this.cellsA);
        for (var i = 0; i < this.cellsA.length; i++){
            //console.log("hi");
            this.cellsA[i].value = "";
        }
    }
    clearB(){
        this.cellsB = document.querySelectorAll("[data-cell-b]");
        //console.log(this.cellsB);
        for (var i = 0; i < this.cellsB.length; i++){
            //console.log("hi");
            this.cellsB[i].value = "";
        }
    }
    updateDisplay(){
        
    }

} //plan for dim updating: if the new input value is legal, change the class variable. if not, change back to the current class variable

const operationSelect = document.getElementById("select-operation");
const inputDiv = document.getElementById("matrix-input");
const inputRight = document.getElementById("input-right");

const mDimBoxA = document.getElementById("m-a");
const nDimBoxA = document.getElementById("n-a");

const cellTextLeft = document.getElementById("cell-text-left");
const matrixACells = document.getElementById("matrix-a-cells");
const matrixATextbox = document.getElementById("matrix-a-textbox");

const mDimBoxB = document.getElementById("m-b");
const nDimBoxB = document.getElementById("n-b");

const cellTextRight = document.getElementById("cell-text-right");
const matrixBCells = document.getElementById("matrix-b-cells");
const matrixBTextbox = document.getElementById("matrix-b-textbox");

const clearButtonA = document.getElementById("clear-a");
const clearButtonB = document.getElementById("clear-b");
const fillButtonA = document.getElementById("fill-empty-a");
const fillButtonB = document.getElementById("fill-empty-b");
const fillValueA = document.getElementById("fill-empty-a");
const fillValueB = document.getElementById("fill-empty-b");

const calculateButton = document.getElementById("calculate-button");

const matrixOutput = document.getElementById("matrix-output");
const solutionText = document.getElementById("solution-text");
const stepsButton = document.getElementById("steps-button");
const solutionSteps = document.getElementById("solution-steps");

const matCal = new matrixCalculator(mDimBoxA, nDimBoxA, mDimBoxB, nDimBoxB, cellTextLeft, cellTextRight, matrixATextbox, matrixBTextbox);

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
        matrixATextbox.style.setProperty("display", "inline");
    }
})

cellTextRight.addEventListener('change', (event) =>{
    if (event.target.value == "cells"){
        matrixBCells.style.setProperty("display", "block");
        matrixBTextbox.style.setProperty("display", "none");
    } else if (event.target.value == "textbox"){
        matrixBCells.style.setProperty("display", "none");
        matrixBTextbox.style.setProperty("display", "inline");
    }
})

//testing purposes
var lista = document.getElementsByClassName("cell");
//use next 3 lines to add cells in appropriate spots
//const newtestcell = document.createElement("input");
//newtestcell.classList.add("cell");
//lista[1].insertAdjacentElement("beforebegin", newtestcell);
//newtestcell.value="5";
const newtestcell2 = document.createElement("input");
newtestcell2.dataset.cellA = "";
newtestcell2.classList.add("cell");

lista[1].insertAdjacentElement("afterend", newtestcell2);
newtestcell2.value="99";
lista = document.getElementsByClassName("cell");
for (var i = 0; i < 5; i++){
    console.log(lista[i]);
}

var list2 = document.querySelectorAll("[data-cell-a]");
for (var i = 0; i < 5; i++){
    console.log(list2[i].value);
}
//end of test
///////////////////////////////////////////
clearButtonA.addEventListener("click", () => {
    matCal.clearA();
})

clearButtonB.addEventListener("click", () => {
    matCal.clearB();
})