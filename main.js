let currNum = "";
let prevNum = "";
let operator = "";

const digitButtons = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");
const decimalButton = document.querySelector(".decimal");

currentDisplay.textContent = "0";

equals.addEventListener("click", () => operate());

digitButtons.forEach((button) => {
  button.addEventListener("click", () => concatNumber(button.textContent));
});

clear.addEventListener("click", () => clearDisplay());

operators.forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});

function concatNumber(number) {
  if (currentDisplay.textContent === "0") {
    clearDisplay();
  }
  currNum += number;
  currentDisplay.textContent = currNum;
}

function setOperator(opr) {
  if (currNum === "") {
    oprCheck(opr);
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
    if (currNum <= 0) {
      currentDisplay.textContent = "Infinity";
      displayResults();
      return;
    }
  }

  prevNum = roundNumber(prevNum);
  prevNum = prevNum.toString();
  displayResults();
}

function roundNumber(num) {
  return Math.round(num);
}

function displayResults() {
  if (true) {
    currentDisplay.textContent = prevNum;
  }
  previousDisplay.textContent = "";
  operator = "";
  currNum = "";
}
