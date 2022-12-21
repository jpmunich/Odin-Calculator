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
      // Check if the input already contains a decimal point
      if (calculatorButtons[i].value === "." && input.innerText.includes(".")) {
        // Ignore button press if input already contains a decimal point
        return;
      }
      input.innerText += calculatorButtons[i].value;
    });
  }

// Set the operator based on the operator button clicked
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    if (previousInput != "") {
        operate();
    }
    operator = operatorButtons[i].value;
    previousInput.innerText = input.innerText;
    input.innerText = "";
  });
}

// Processes the input and evaluates the expression
function operate() {
    const firstInput = parseFloat(previousInput.innerText);
    const secondInput = parseFloat(input.innerText);
  
    if (operator === "+") {
      input.innerText = Math.round((firstInput + secondInput) * 100)/100;
    } else if (operator === "-") {
      input.innerText = Math.round((firstInput - secondInput) * 100)/100;
    } else if (operator === "*") {
      input.innerText = Math.round((firstInput * secondInput) * 100)/100;
    } else if (operator === "/") {
        if (secondInput !== 0) {
      input.innerText = Math.round((firstInput / secondInput) * 100)/100;
        }
        else {
            input.innerText = "Cannot divide by 0, clear calculator";
        }
    }
}

// When the equals button is pressed the expression is evaluated
equalsButton.addEventListener("click", operate);

// Clears calculator
clearCalculatorButton.addEventListener("click", function() {
  input.innerText = "";
  previousInput.innerText = "";
  operator = null;
});