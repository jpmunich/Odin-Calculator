// Initialize variables
const calculatorButtons = document.getElementsByClassName("calculator-button");
const input = document.getElementById("input");
const additionButton = document.getElementById("calculator-button-addition");
const equalsButton = document.getElementById("calculator-button-equals");
const clearCalculatorButton = document.getElementById("calculator-button-clear");

let hasClickedEquals = false;

// Iterates through each button to allow user to type
for (let i = 0; i < calculatorButtons.length; i++) {
    calculatorButtons[i].addEventListener("click", function() {
                input.innerText += calculatorButtons[i].value;
        })
}

// Clears calculator
clearCalculatorButton.addEventListener("click", function() {
    input.innerText = "";
})


// Addition
additionButton.addEventListener("click", function() {
    const addendOneInput = input.innerText;
    const addendOne = addendOneInput.substring(0, (addendOneInput.length - 1));
    console.log(addendOne);
    let addendTwo = "";

    equalsButton.addEventListener("click", function() {
        const addendTwoInput = input.innerText;

        addendTwo = addendTwoInput.substring(addendOneInput.length, addendTwoInput.length);
        console.log(addendTwo);

        const addendOneNum = parseInt(addendOne);
        const addendTwoNum = parseInt(addendTwo);

        let sum = addendOneNum + addendTwoNum;
        input.innerText = sum;
    })
})