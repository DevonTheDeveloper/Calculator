const digitButtons = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
let display = document.querySelector(".display-content");
let decimalButton = document.querySelector(".decimal");
let number = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

digitButtons.forEach((button) => {
  button.addEventListener("click", () => concatNumber(button.textContent));
});

operators.forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});

function concatNumber(number) {
  if (display.textContent === "0") {
    clearDisplay();
  }
  display.textContent += number;
}

function setOperator(operator) {
  display.textContent += ` ${operator} `;
}

function clearDisplay() {
  display.textContent = "";
  clear.addEventListener("click", (event) => {
    display.textContent = "";
  });
}

clearDisplay();

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "×") {
    return multiply(a, b);
  } else if (operator === "÷") {
    return divide(a, b);
  }
}
