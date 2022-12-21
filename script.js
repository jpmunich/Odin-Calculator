// Initialize variables
const calculatorButtons = document.getElementsByClassName("calculator-button");
const operatorButtons = document.getElementsByClassName("operator-button");

let operator = null;

const previousInput = document.getElementById("previous-input");
const input = document.getElementById("input");

const equalsButton = document.getElementById("calculator-button-equals");
const clearCalculatorButton = document.getElementById("calculator-button-clear");

// Iterates through each button to allow user to type
for (let i = 0; i < calculatorButtons.length; i++) {
  calculatorButtons[i].addEventListener("click", function() {
    input.innerText += calculatorButtons[i].value;
  });
}

// Set the operator based on the operator button clicked
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    operator = operatorButtons[i].value;
    previousInput.innerText = input.innerText;
    input.innerText = "";
  });
}

// Processes the input and evaluates the expression
equalsButton.addEventListener("click", function() {
  const firstInput = parseFloat(previousInput.innerText);
  const secondInput = parseFloat(input.innerText);

  if (operator === "+") {
    input.innerText = firstInput + secondInput;
  } else if (operator === "-") {
    input.innerText = firstInput - secondInput;
  } else if (operator === "*") {
    input.innerText = firstInput * secondInput;
  } else if (operator === "/") {
    input.innerText = firstInput / secondInput;
  }
});

// Clears calculator
clearCalculatorButton.addEventListener("click", function() {
  input.innerText = "";
  previousInput.innerText = "";
  operator = null;
});

