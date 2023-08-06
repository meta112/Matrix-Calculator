

const operationSelect = document.getElementById("select-operation");
const inputdiv = document.getElementById("matrix-input");
const inputright = document.getElementById("input-right");

operationSelect.addEventListener('change', (event) => {
    console.log("changed smth");
    if (event.target.value == "rref"){
        inputdiv.style.setProperty("grid-template-columns", "1fr");
        console.log('rref');
        inputright.style.setProperty('display', "none");

    } else {
        inputdiv.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
        console.log('not rref');
        inputright.style.setProperty('display', "inline-block");
    }
})