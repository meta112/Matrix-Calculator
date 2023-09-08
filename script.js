class matrixCalculator {
    constructor(mDimBoxA, nDimBoxA, mDimBoxB, nDimBoxB, cellTextLeft, cellTextRight, matrixATextbox, matrixBTextbox){
        this.mDimBoxA = mDimBoxA;
        this.nDimBoxA = nDimBoxA;
        this.mDimBoxB = mDimBoxB;
        this.nDimBoxB = nDimBoxB;
        this.ma = parseInt(mDimBoxA.value);
        this.na = parseInt(nDimBoxA.value);
        this.mb = parseInt(mDimBoxB.value);
        this.nb = parseInt(nDimBoxB.value);
        this.cellTextLeft = cellTextLeft;
        this.cellTextRight = cellTextRight;
        this.cellsA = document.getElementsByClassName("cell-a");
        this.cellsB = document.getElementsByClassName("cell-b");
        this.matrixATextbox = matrixATextbox;
        this.matrixBTextbox = matrixBTextbox;
        this.operation = "addition";
    }
    clearA(){
        this.cellsA = document.getElementsByClassName("cell-a");
        //console.log(this.cellsA);
        for (var i = 0; i < this.cellsA.length; i++){
            //console.log("hi");
            this.cellsA[i].value = "";
        }
    }
    clearB(){
        this.cellsB = document.getElementsByClassName("cell-b");
        //console.log(this.cellsB);
        for (var i = 0; i < this.cellsB.length; i++){
            //console.log("hi");
            this.cellsB[i].value = "";
        }
    }

    checkLegalDimHelp(x){
        if (isNaN(x) || x < 1 || x > 10){
            return false;
        }
        return true;
    }

    checkLegalDim(self, aOrB, rowOrCol, newDim){
        var dim = parseInt(newDim);
        if (aOrB == "a"){
            if (rowOrCol == "row"){
                if (this.checkLegalDimHelp(dim)){
                    this.ma = dim;
                    self.value = this.ma;
                } else {
                    self.value = this.ma;
                }
            } else if (rowOrCol == "col"){
                if (this.checkLegalDimHelp(dim)){
                    this.na = dim;
                    self.value = this.na;
                } else {
                    self.value = this.na;
                }
            }
        } else if (aOrB == "b"){
            if (rowOrCol == "row"){
                if (this.checkLegalDimHelp(dim)){
                    this.mb = dim;
                    self.value = this.mb;
                } else {
                    self.value = this.mb;
                }
            } else if (rowOrCol == "col"){
                if (this.checkLegalDimHelp(dim)){
                    this.nb = dim;
                    self.value = this.nb;
                } else {
                    self.value = this.nb;
                }
            }
        }
        return this.checkLegalDimHelp(dim);
    }


    updateRows(self, aOrB){
        var old;
        var diff;
        if (aOrB == 'a'){
            old = this.ma;
            if (this.checkLegalDim(self, aOrB, "row", self.value) && old != this.ma){
                if (this.ma > old){
                    diff = this.ma - old;
                    for (var i = 0; i < this.na * diff; i++){
                        const newCell = document.createElement("input");
                        newCell.classList.add("cell", "cell-a");
                        this.cellsA[this.cellsA.length - 1].insertAdjacentElement("afterend", newCell);
                    }
                } else {
                    diff = old - this.ma;
                    var j = old * this.na - 1;
                    for (var i = 0; i < this.na * diff; i++){
                        this.cellsA[j].remove();
                        j--;
                    }
                }
                cellsGridA.style.setProperty("grid-template-rows", `repeat(${this.ma}, 25px)`);
            }
        } else if (aOrB == 'b'){
            old = this.mb;
            if (this.checkLegalDim(self, aOrB, "row", self.value) && old != this.mb){
                if (this.mb > old){
                    diff = this.mb - old;
                    for (var i = 0; i < this.nb * diff; i++){
                        const newCell = document.createElement("input");
                        newCell.classList.add("cell", "cell-b");
                        this.cellsB[this.cellsB.length - 1].insertAdjacentElement("afterend", newCell);
                    }
                } else {
                    diff = old - this.mb;
                    var j = old * this.nb - 1;
                    for (var i = 0; i < this.nb * diff; i++){
                        this.cellsB[j].remove();
                        j--;
                    }
                }
                cellsGridB.style.setProperty("grid-template-rows", `repeat(${this.mb}, 25px)`);
            }
        }
    }

    updateCols(self, aOrB){
        var old;
        var diff;
        if (aOrB == 'a'){
            old = this.na;
            if (this.checkLegalDim(self, aOrB, "col", self.value) && old != this.na){
                if (this.na > old){
                    diff = this.na - old;
                    for (var i = this.ma; i > 0; i--){
                        for (var j = 0; j < diff; j++){
                            const newCell = document.createElement("input");
                            newCell.classList.add("cell", "cell-a");
                            this.cellsA[i * old - 1].insertAdjacentElement("afterend", newCell);
                        }
                    }
                } else {
                    diff = old - this.na;
                    var j = old * this.ma - 1;
                    for (var i = this.ma * old - 1; i > 0; i = i - old){
                        var j = i;
                        for (var k = 0; k < diff; k++){
                            this.cellsA[j].remove();
                            j--;
                        }
                    }
                }
                cellsGridA.style.setProperty("grid-template-columns", `repeat(${this.na}, 50px)`);
            }
        } else if (aOrB == 'b'){
            old = this.nb;
            if (this.checkLegalDim(self, aOrB, "col", self.value) && old != this.nb){
                if (this.nb > old){
                    diff = this.nb - old;
                    for (var i = this.mb; i > 0; i--){
                        for (var j = 0; j < diff; j++){
                            const newCell = document.createElement("input");
                            newCell.classList.add("cell", "cell-b");
                            this.cellsB[i * old - 1].insertAdjacentElement("afterend", newCell);
                        }
                    }
                } else {
                    diff = old - this.nb;
                    var j = old * this.mb - 1;
                    for (var i = this.mb * old - 1; i > 0; i = i - old){
                        var j = i;
                        for (var k = 0; k < diff; k++){
                            this.cellsB[j].remove();
                            j--;
                        }
                    }
                }
                cellsGridB.style.setProperty("grid-template-columns", `repeat(${this.nb}, 50px)`);
            }
        }
    }

    updateDisplay(self, aOrB, rowOrCol){
        if (aOrB == 'a'){
            if (rowOrCol == "row"){
                this.updateRows(self, aOrB);
            } else if (rowOrCol == "col"){
                this.updateCols(self, aOrB);
            }
        } else if (aOrB == 'b') {
            if (rowOrCol == "row"){
                this.updateRows(self, aOrB);
            } else if (rowOrCol == "col"){
                this.updateCols(self, aOrB);
            }
        }
    }

    parseCellValue(x){
        var frac = false;
        var decimal = false;
        var first = "";
        var second = "";
        for (var i = 0; i < x.length; i++){
            if (isNaN(parseInt(x[i])) && x[i] != '.' && x[i] != '/'){
                return null;
            }
            if (x[i] == '.'){
                if (frac || decimal){
                    return null;
                }
                decimal = true;
            } else if (x[i] == '/'){
                if (frac || decimal){
                    return null;
                }
                frac = true;
            } else if (!frac && !decimal){
                if (Number.isInteger(parseInt(x[i]))){
                    first += x[i];
                }
            } else {
                if (Number.isInteger(parseInt(x[i]))){
                    second += x[i];
                }
            }
        }

        if (first == ""){
            return null;
        } else if (frac){
            return parseInt(first) / parseInt(second);
        } else if (decimal){
            return parseFloat(first + '.' + second);
        } else {
            return parseInt(first);
        }

    }

    parseInputCells(aOrB){
        console.log("hi");
        var matrix = [];
        var row = [];
        if (aOrB == 'a'){
            for (var i = 0; i < this.ma; i++){
                for (var j = 0; j < this.na; j++){
                    console.log('ok');
                    var x = this.parseCellValue(this.cellsA[i * this.na + j].value);
                    console.log(x);
                    if (x){
                        row.push(x);
                    } else {
                        this.matrixA = null;
                        return;
                    }
                }
                matrix.push(row);
                row = [];
            }
            this.matrixA = matrix;
            console.log(this.matrixA);
        } else if (aOrB == 'b'){
            for (var i = 0; i < this.mb; i++){
                for (var j = 0; j < this.nb; j++){
                    var x = this.parseCellValue(this.cellsB[i * this.nb + j].value);
                    if (x){
                        row.push(x);
                    } else {
                        this.matrixB = null;
                        return;
                    }
                }
                matrix.push(row);
                row = [];
            }
            this.matrixB = matrix;
            console.log(this.matrixB);
        }
        console.log(matrix);
    }

    buildMatrix(m){
        if (m) {
            var old = document.getElementById("solution-matrix");
            console.log(old);
            
            const mat = document.createElement("div");
            mat.classList.add("solution-matrix");
            mat.setAttribute("id", "solution-matrix");
            mat.style.setProperty("grid-template-columns", `repeat(${m[0].length}, max-content)`);
            mat.style.setProperty("grid-template-rows", `repeat(${m.length}, 1fr)`);
            for (var i = 0; i < m.length; i++){
                for (var j = 0; j < m[0].length; j++){
                    const entry = document.createElement("div");
                    entry.classList.add("output-cell");
                    entry.innerText = m[i][j];
                    mat.appendChild(entry);
                    console.log(entry);
                }
            }
            if (old){
                old.replaceWith(mat);
            }
        }
    }
    
    calculate(operation){
        if (operation == "addition"){
            this.addMatrices();
            console.log("answer:");
            console.log(this.solution);
            this.buildMatrix(this.solution);
        } else if (operation == "subtraction") {
            this.subtractMatrices();
        } else if (operation == "rref"){
            this.rref();
        }
    }

    
    addMatrices(){
        if (this.ma == this.mb && this.na == this.nb){
            console.log('adding');
            this.parseInputCells('a');
            this.parseInputCells('b');
            if (this.matrixA && this.matrixB){
                var matrix = [];
                var row = [];
                for (var i = 0; i < this.ma; i++){
                    for (var j = 0; j < this.na; j++){
                        row.push(this.matrixA[i][j] + this.matrixB[i][j]);
                    }
                    matrix.push(row);
                    row = [];
                }
                this.solution = matrix;
            } else {
                console.log("bad inputs");
                this.solution = "";
            }
            return;
        } else {
            console.log("mismatching inputs");
            this.solution = "";
        }
    }

    subtractMatrices(){
        return;
    }

    rref(){
        return;
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


const cellsGridA = document.getElementById("cells-grid-a");
const cellsGridB = document.getElementById("cells-grid-b");

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
//var lista = document.getElementsByClassName("cell-a");
//console.log(lista);
//use next 3 lines to add cells in appropriate spots
//const newtestcell = document.createElement("input");
//newtestcell.classList.add("cell");
//lista[1].insertAdjacentElement("beforebegin", newtestcell);
//newtestcell.value="5";
/*
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
*/
//end of test
///////////////////////////////////////////
clearButtonA.addEventListener("click", () => {
    matCal.clearA();
})

clearButtonB.addEventListener("click", () => {
    matCal.clearB();
})

mDimBoxA.addEventListener("change", (event) => {
    matCal.updateDisplay(event.target, 'a', "row");
})
nDimBoxA.addEventListener("change", (event) => {
    matCal.updateDisplay(event.target, "a", "col");
})
mDimBoxB.addEventListener("change", (event) => {
    matCal.updateDisplay(event.target, 'b', "row");
})
nDimBoxB.addEventListener("change", (event) => {
    matCal.updateDisplay(event.target, "b", "col");
})

calculateButton.addEventListener("click", () => {
    matCal.calculate(operationSelect.value);
})