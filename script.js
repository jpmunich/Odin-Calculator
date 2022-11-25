const calculatorButtons = document.getElementsByClassName("calculator-button");
const input = document.getElementById("input");
const additionButton = document.getElementById("calculator-button-addition");
const equalsButton = document.getElementById("calculator-button-equals");
const clearCalculatorButton = document.getElementById("calculator-button-clear");

let hasClickedEquals = false;

for (let i = 0; i < calculatorButtons.length; i++) {
    calculatorButtons[i].addEventListener("click", function() {
                input.innerText += calculatorButtons[i].value;
        })
}

clearCalculatorButton.addEventListener("click", function() {
    input.innerText = "";
})



additionButton.addEventListener("click", function() {
    const addendOneInput = input.innerText;
    const addendOne = addendOneInput.substring(0, (addendOneInput.length - 1));
    
    let addendTwo = "";

    equalsButton.addEventListener("click", function() {
        const addendTwoInput = input.innerText;
        addendTwo += addendTwoInput.substring(addendOneInput.length, addendTwoInput.length);

        const addendOneNum = parseInt(addendOne);
        const addendTwoNum = parseInt(addendTwo);

        const sum = addendOneNum + addendTwoNum;
        input.innerText = sum;
    })

})