const digitButtons = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
let display = document.querySelector(".display-content");
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

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

digitButtons.forEach((button) => {
  button.addEventListener("click", () => concatNumber(button.textContent));
});

operators.forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});

function concatNumber(number) {
  display.textContent += number;
}

function setOperator(operator) {
  display.textContent += operator;
}

function clearDisplay() {
  clear.addEventListener("click", (event) => {
    display.textContent = null;
  });  
}

clearDisplay();