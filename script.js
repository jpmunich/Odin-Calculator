const calculatorButtons = document.getElementsByClassName("calculator-button");
const everything = document.getElementById("everything");
const input = document.getElementById("input");


for (let i = 0; i < calculatorButtons.length; i++) {
    calculatorButtons[i].addEventListener("click", function() {
                input.innerText += calculatorButtons[i].value;
        })
}