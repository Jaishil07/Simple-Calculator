const primaryDisplay = document.querySelector(".primary-display");

function addTextToMainDisplay(value) {
    primaryDisplay.textContent += value;
}

function allClear(){
    primaryDisplay.textContent = "";    
}

const inputButtons = document.querySelectorAll(".input-numbers");

inputButtons.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        addTextToMainDisplay(e.target.value);
    })
});

const allClearButton = document.querySelector("#all-clear");
allClearButton.addEventListener("click", allClear);
