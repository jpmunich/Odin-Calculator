const calculatorButtons = document.getElementsByClassName("calculator-button");
const everything = document.getElementById("everything");
const input = document.getElementById("input");


for (let i = 0; i < calculatorButtons.length; i++) {
    console.log(calculatorButtons[i].value);
    calculatorButtons[i].addEventListener("click", function() {
        const text = document.createTextNode(calculatorButtons[i].getAttribute("value"));
        input.innerText += text;
        })
}