const digitButtons = document.querySelectorAll(".digits").forEach((item) => {
  item.addEventListener("click", (event) => {
    let num1 = event.target.value;
  });
});

const operators = document.querySelectorAll('.operators').forEach((item) => {
  item.addEventListener('click', (event) => {
    let operator = event.target.value;
  })
})

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
