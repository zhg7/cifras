/*if (sessionStorage.getItem("started") !== "yes") {
  window.location.href = "start.html";
}*/

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
})

const availableNumbers = JSON.parse(sessionStorage.getItem("availableNumbers"));
const numberBoxes = document.querySelectorAll(".number-box .number");
let dragItem = null;
let dragItemSource = null;

for (let i = 0; i < 6; i++) {
  numberBoxes[i].textContent = availableNumbers[i];
}

document.getElementById("target-number").textContent =
  sessionStorage.getItem("targetNumber");

const draggables = document.querySelectorAll("[draggable='true']");

draggables.forEach((element) => {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragend", dragEnd);
});

const droppables = document.querySelectorAll("[droppable='true']");

droppables.forEach((element) => {
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("drop", drop);
});

function dragStart(e) {
  dragItem = e.target;
  if (!e.target.classList.contains("operator")) {
    dragItemSource = e.target.parentElement;
  } else {
    dragItem = e.target.cloneNode(true);
  }
}

function dragEnd(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
  if (!e.target.classList.contains("number")) {
    e.target.style.borderStyle = "dashed";
    e.target.style.transition = ".05s";
  }
}

function dragLeave(e) {
  e.preventDefault();
  e.target.style.borderStyle = "";
}

function drop(e) {
  let correctDrop = false;
  if (e.target.firstChild) {
    sendNumberBack(e.target);
  } else {
    if (dragItem.classList.contains("operator")) {
      if (e.target.classList.contains("operator-box")) {
        correctDrop = true;
      }
    } else {
      if (
        !(
          dragItem.classList.contains("number") &&
          e.target.classList.contains("operator-box")
        )
      ) {
        correctDrop = true;
      }
    }

    if (correctDrop) {
      e.target.appendChild(dragItem);
      checkOperation();
    }

    e.target.style.borderStyle = "";
  }
}

function sendNumberBack(box) {
  if (box.firstElementChild.classList.contains("operator")) {
    box.removeChild(box.firstElementChild);
  } else {
    dragItemSource.appendChild(box.firstElementChild);
  }
  box.appendChild(dragItem);
  box.style.borderStyle = "";

}

function checkOperation() {
  const firstNumber = document.querySelector(".first-number-box");
  const secondNumber = document.querySelector(".second-number-box");
  const operator = document.querySelector(".operator-box");

  if (firstNumber.firstChild && secondNumber.firstChild && operator.firstChild) {
    calculate(firstNumber, secondNumber, operator)
  }
}


function calculate(firstNumber, secondNumber, operator) {
  const firstOperand = Number(firstNumber.firstElementChild.textContent);
  const secondOperand = Number(secondNumber.firstElementChild.textContent);
  let result = 0;
  switch (operator.firstElementChild.textContent) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "×":
      result = firstOperand * secondOperand;
      break;
    case "÷":
      result = Math.trunc(firstOperand / secondOperand);
  }
  saveResult(result);
  resetFields(firstNumber, secondNumber, operator);

}

function resetFields(firstNumber, secondNumber, operator) {
  firstNumber.removeChild(firstNumber.firstElementChild);
  secondNumber.removeChild(secondNumber.firstElementChild);
  operator.removeChild(operator.firstElementChild);
}

function saveResult(result) {
  removeResultClass();
  const span = document.createElement("span");
  span.classList.add("number", "result");
  span.setAttribute("draggable", "true");
  span.textContent = result;
  span.addEventListener("dragstart", dragStart);
  span.addEventListener("dragend", dragEnd);
  dragItemSource.appendChild(span);
}

function removeResultClass() {
  document.querySelectorAll(".result").forEach(item => {
    item.classList.remove("result");
  })
}
