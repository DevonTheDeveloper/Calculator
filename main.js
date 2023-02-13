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
    currentDisplay.textContent = "0";
  }
}

function oprCheck(txt) {
  operator = txt;
  previousDisplay.textContent = `${prevNum} ${operator}`;
  currentDisplay.textContent = "0";
  currNum = "";
}

function clearDisplay() {
  currentDisplay.textContent = "0";
  previousDisplay.textContent = "";
  currNum = "";
  prevNum = "";
  operator = "";
}