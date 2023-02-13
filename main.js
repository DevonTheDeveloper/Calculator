let currNum = "";
let prevNum = "";
let operator = "";

const digitButtons = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");

currentDisplay.textContent = "0";

decimal.addEventListener("click", () => addDecimal());
equals.addEventListener("click", () => operate());

digitButtons.forEach((button) => {
  button.addEventListener("click", () => addNumber(button.textContent));
});

clear.addEventListener("click", () => clearDisplay());

operators.forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});

function addNumber(number) {
  if (currentDisplay.textContent === "0") {
    clearDisplay();
  }
  currNum += number;
  currentDisplay.textContent = currNum;
}

function addDecimal() {
  if (!currNum.includes("0") && currNum === "") {
    currNum = "0";
  }
  if (currentDisplay.textContent === "") currentDisplay.textContent = "0";
  if (currentDisplay.textContent.includes(".")) return;
  currNum += ".";
  currentDisplay.textContent = currNum;
}

function setOperator(opr) {
  if (currNum === "") {
    return;
  } else if (prevNum === "") {
    prevNum = currNum;
    oprCheck(opr);
  } else {
    operate();
    operator = opr;
    previousDisplay.textContent = `${prevNum} ${operator}`;
    currentDisplay.textContent = "";
  }
}

function oprCheck(txt) {
  operator = txt;
  previousDisplay.textContent = `${prevNum} ${operator}`;
  currentDisplay.textContent = "";
  currNum = "";
}

function clearDisplay() {
  currentDisplay.textContent = "0";
  previousDisplay.textContent = "";
  currNum = "";
  prevNum = "";
  operator = "";
}

function operate() {
  prevNum = Number(prevNum);
  currNum = Number(currNum);

  if (operator === "+") {
    prevNum += currNum;
  } else if (operator === "-") {
    prevNum -= currNum;
  } else if (operator === "×") {
    prevNum *= currNum;
  } else if (operator === "÷") {
    prevNum /= currNum;
    if (currNum <= 0 || prevNum <= 0) {
      currentDisplay.textContent = "Infinity";
      displayResults();
      return;
    }
  }
  else {
    return currNum;
  }
  
  prevNum = prevNum.toString();
  displayResults();
}

function displayResults() {
  if (true) {
    currentDisplay.textContent = prevNum;
  }
  previousDisplay.textContent = "";
  operator = "";
  currNum = "";
}
