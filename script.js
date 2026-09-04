const primaryDisplay = document.querySelector(".primary-display");
const secondaryDisplay = document.querySelector(".secondary-display");
const inputButtons = document.querySelectorAll(".input-numbers");

let firstValue, secondValue;
let firstOperator;
let result;

const dotButton = document.querySelector("#dot");
dotButton.addEventListener("click", ()=>{
    if(primaryDisplay.textContent.includes(".")){
        dotButton.disabled = true;
        return;
    }
    addTextToMainDisplay(".");
})

const allClearButton = document.querySelector("#all-clear");
allClearButton.addEventListener("click", (e) => {
    allClear();
    allClearSecondary();
    firstValue = undefined;
    secondValue = undefined;
    firstOperator = undefined;
    result = undefined;
});

const equalButton = document.querySelector(".enter");
equalButton.addEventListener("click", () => {
    if (firstValue) {
        secondValue = +(primaryDisplay.textContent);
        triggerMath();
        allClear();
        addTextToMainDisplay(result);
        addTextToSecondaryDisplay(` ${secondValue}`);

        firstValue = undefined;
        secondValue = undefined;
    }
});


const operationButtons = document.querySelectorAll(".operations");
operationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        getOperateNumber(e.target.textContent);
    });
})

inputButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (firstOperator) {
            equalButton.click;
        }
        addTextToMainDisplay(e.target.value);
    })
});

const bkspace = document.querySelector("#backspace");
bkspace.addEventListener("click", backspace);

function backspace() {
    primaryDisplay.textContent = primaryDisplay.textContent.slice(0, -1);
}

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
        if (result) {
            allClearSecondary();
        }
        firstValue = result ? result : +(primaryDisplay.textContent);
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
        firstOperator = undefined;
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
    if (Math.floor(a + b) == a + b) {
        result = a + b;
    }
    else {
        result = (a + b).toFixed(2);
    }
}

function subtract(a, b) {
    if (Math.floor(a - b) == a - b) {
        result = a - b;
    }
    else {
        result = (a - b).toFixed(2);
    }
}

function multiply(a, b) {
    if (Math.floor(a * b) == a * b) {
        result = a * b;
    }
    else {
        result = (a * b).toFixed(2);
    }
}

function divide(a, b) {
    b !== 0 ? result = (a / b).toFixed(2) : result = "Math Error";
}



// KeyBoard Accessibility

document.addEventListener("keydown", (e) => {
    if (e.key === "1") {
        const key = document.querySelector("#one");
        key.click();
    } else if (e.key === "2") {
        const key = document.querySelector("#two");
        key.click();
    }
    else if (e.key === "3") {
        const key = document.querySelector("#three");
        key.click();
    }
    else if (e.key === "4") {
        const key = document.querySelector("#four");
        key.click();
    }
    else if (e.key === "5") {
        const key = document.querySelector("#five");
        key.click();
    }
    else if (e.key === "6") {
        const key = document.querySelector("#six");
        key.click();
    }
    else if (e.key === "7") {
        const key = document.querySelector("#seven");
        key.click();
    }
    else if (e.key === "8") {
        const key = document.querySelector("#eight");
        key.click();
    }
    else if (e.key === "9") {
        const key = document.querySelector("#nine");
        key.click();
    }
    else if (e.key === "0") {
        const key = document.querySelector("#zero");
        key.click();
    }
    else if (e.key === "Escape") {
        e.preventDefault();
        const key = document.querySelector("#all-clear");
        key.click();
    }
    else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        const key = document.querySelector("#equal");
        key.click();
    }
    else if (e.key === "Backspace") {
        e.preventDefault();
        const key = document.querySelector("#backspace");
        key.click();
    }
    else if (e.key === ".") {
        e.preventDefault();
        const key = document.querySelector("#dot");
        key.click();
    }
    else if (e.key === "+") {
        e.preventDefault();
        const key = document.querySelector("#plus");
        key.click();
    }
    else if (e.key === "-") {
        e.preventDefault();
        const key = document.querySelector("#minus");
        key.click();
    }
    else if (e.key === "*") {
        e.preventDefault();
        const key = document.querySelector("#multiply");
        key.click();
    }
    else if (e.key === "/") {
        e.preventDefault();
        const key = document.querySelector("#divide");
        key.click();
    }

});