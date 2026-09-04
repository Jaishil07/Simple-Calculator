const primaryDisplay = document.querySelector(".primary-display");
const secondaryDisplay = document.querySelector(".secondary-display");
const inputButtons = document.querySelectorAll(".input-numbers");

const allClearButton = document.querySelector("#all-clear");
allClearButton.addEventListener("click", (e)=>{
    allClear();
    allClearSecondary();
});

let firstValue, secondValue;
let firstOperator;
let result;

const operationButtons = document.querySelectorAll(".operations");
operationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        getOperateNumber(e.target.textContent);
    });
})

inputButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        addTextToMainDisplay(e.target.value);
    })
});


function addTextToMainDisplay(value) {
    primaryDisplay.textContent += value;
}

function addTextToSecondaryDisplay(value) {
    secondaryDisplay.textContent += value;
}

function allClear() {
    primaryDisplay.textContent = "";
}

function allClearSecondary() {
    secondaryDisplay.textContent = "";
}

function getOperateNumber(operator) {
    if (primaryDisplay.textContent === "") return;

    if (!firstValue) {
        if(result){
            allClearSecondary();
            // addTextToSecondaryDisplay(result);
        }
        firstValue = +(primaryDisplay.textContent);
        firstOperator = operator;
        allClear();
        addTextToSecondaryDisplay(`${firstValue} ${firstOperator}`);
    } else {
        secondValue = +(primaryDisplay.textContent);
        triggerMath();
        allClear();
        addTextToMainDisplay(result);
        addTextToSecondaryDisplay(` ${secondValue}`);

        firstValue = undefined;
        secondValue = undefined;
    }
}

function triggerMath() {
    if (firstOperator === "+") {
        add(firstValue, secondValue);
    }
    else if (firstOperator === "-") {
        subtract(firstValue, secondValue);
    }
    else if (firstOperator === "*") {
        multiply(firstValue, secondValue);
    }
    else if (firstOperator === "/") {
        divide(firstValue, secondValue);
    }
}

function add(a, b) {
    result = a + b;
}

function subtract(a, b) {
    result = a - b;
}

function multiply(a, b) {
    result = a * b;
}

function divide(a, b) {
    b !== 0 ? result = a / b : result = "You cannot divide by zero...";
}


