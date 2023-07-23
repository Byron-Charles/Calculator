const digitBtn = document.querySelectorAll(".digit");
const opBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const keyBtn = document.querySelectorAll(".key");
const output = document.querySelector(".output");
let prevOperandText = document.querySelector(".prev-operand");
let currentOperandText = document.querySelector(".current-operand");

let currentOperand = "";
let prevOperand = "";
let operator = "";
let result;

clearBtn.addEventListener("click", function () {
  currentOperandText.textContent = "";
  prevOperandText.textContent = "";
  currentOperand = "";
  prevOperand = "";
});

deleteBtn.addEventListener("click", function (e) {
  currentOperand = currentOperand.toString().slice(0, -1);
  currentOperandText.textContent = currentOperand;
  console.log(currentOperand);
});

digitBtn.forEach((key) =>
  key.addEventListener("click", function (e) {
    currentOperandText.textContent += e.target.textContent;
    currentOperand = +currentOperandText.textContent;
    console.log(currentOperand);
  })
);

opBtn.forEach((key) => {
  key.addEventListener("click", function (e) {
    if (prevOperand && currentOperand) {
      compute(prevOperand, operator, currentOperand);
      currentOperandText.textContent = result;
      currentOperand = result;
      // console.log(result);
    }

    prevOperandText.textContent = currentOperand + " " + e.target.textContent;
    prevOperand = currentOperand;
    currentOperandText.textContent = "";
    operator = e.target.textContent;
    console.log(operator);
  });
});

const secondNumber = function (e) {
  if (prevOperand) {
    currentOperandText.textContent = e.target.textContent;
  }
};

equalsBtn.addEventListener("click", function () {
  compute(prevOperand, operator, currentOperand);
  currentOperandText.textContent = result;
});

const compute = function (n1, operator, n2) {
  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "x") {
    result = n1 * n2;
  } else if (operator === "÷") {
    result = n1 / n2;
  }
  console.log(result);
  return result;
};

// let numberButtons = document.querySelectorAll('[data-number]')
//  let display = document.querySelector('[data-current-operand]')
//  display.innerHTML = '';

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     display.innerText = display.innerText + button.innerText
//     console.log(button.innerHTML)
// })
