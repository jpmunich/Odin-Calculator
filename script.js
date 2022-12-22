// Initialize variables
const calculatorButtons = document.getElementsByClassName("calculator-button");
const operatorButtons = document.getElementsByClassName("operator-button");

// Declare operator variable
let operator = null;

// Get the previous input and current input DOM elements
const previousInput = document.getElementById("previous-input");
const input = document.getElementById("input");

// Get the equals and clear calculator buttons
const equalsButton = document.getElementById("calculator-button-equals");
const clearCalculatorButton = document.getElementById("calculator-button-clear");

// Add click event listener to each calculator button
for (let i = 0; i < calculatorButtons.length; i++) {
    // Anonymous function to handle button click event
    calculatorButtons[i].addEventListener("click", function() {
      // Check if the input already contains a decimal point
      if (calculatorButtons[i].value === "." && input.innerText.includes(".")) {
        // Ignore button press if input already contains a decimal point
        return;
      }
      // Append button value to input
      input.innerText += calculatorButtons[i].value;
    });
  }

// Add click event listener to each operator button
for (let i = 0; i < operatorButtons.length; i++) {
  // Anonymous function to handle button click event
  operatorButtons[i].addEventListener("click", function() {
    // Check if input and previousInput are not empty
    if (input.innerText !== "" || previousInput !== "") {
        // Check if previousInput is not empty
        if (previousInput != "") {
            // If previousInput is not empty, call operate function to process inputs
            operate();
        }
        // Set operator based on button value
        operator = operatorButtons[i].value;
        // Set previousInput value to current input
        previousInput.innerText = input.innerText;
        // Clear input
        input.innerText = "";
    }
  });
}

/**
 * Processes the input and evaluates the expression.
 * If the operator is +, -, *, or /, performs the corresponding operation
 * and displays the result in the input element.
 * If the operator is not recognized or inputs are not valid numbers,
 * displays an error message.
 */
function operate() {
    // Parse input values as floats
    const firstInput = parseFloat(previousInput.innerText);
    const secondInput = parseFloat(input.innerText);
  
    // Check if inputs are valid numbers
    if (!isNaN(firstInput) && !isNaN(secondInput)) {
        // Check operator and perform corresponding operation
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
}

// When the equals button is pressed the expression is evaluated
equalsButton.addEventListener("click", operate);
equalsButton.addEventListener("click", function(){
    previousInput.innerText = "";
})

// Clears calculator
clearCalculatorButton.addEventListener("click", function() {
  input.innerText = "";
  previousInput.innerText = "";
  operator = null;
});