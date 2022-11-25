"use strict"
/*if (sessionStorage.getItem("started") !== "yes") {
  window.location.href = "start.html";
}*/

window.addEventListener("beforeunload", preventAccidentalClose);

function preventAccidentalClose(e) {
  e.preventDefault();
}

let currentTurn = Number(null);
let dragItem = null;
let dragItemSource = null;
let playerName = null;
let playerColor = null;
let turnOver = false;
let gameOver = false;
let operationLog = [];
const numberBoxes = document.querySelectorAll(".available-numbers .number-box .number");

if (sessionStorage.getItem("turn") === null) {
  currentTurn = Math.floor(Math.random() * (1 - 0 + 1) + 0);
} else {
  currentTurn = Number(sessionStorage.getItem("turn"));
}

setTurnInfo(getTurnInfo(currentTurn)[0], getTurnInfo(currentTurn)[1]);
fillNumberBoxes();

function fillNumberBoxes() {

  const availableNumbers = JSON.parse(sessionStorage.getItem("availableNumbers"));
  for (let i = 0; i < 6; i++) {
    numberBoxes[i].textContent = availableNumbers[i];
  }
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

function changeTurn() {
  const turn = currentTurn === 0 ? 1 : 0;
  window.removeEventListener("beforeunload", preventAccidentalClose);
  location.reload();
  sessionStorage.setItem("turn", turn);
}

function getTurnInfo(playerNumber) {
  const players = JSON.parse(sessionStorage.getItem("currentPlayers"));
  const playerName = players[playerNumber]["name"];
  const playerColor = players[playerNumber]["color"];

  return [playerName, playerColor];
}

function setTurnInfo(playerName, playerColor) {
  document.getElementById("player-name").textContent = playerName;
  document.getElementById("player_icon").style.fill = playerColor;
}

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
  if (e.target.tagName === "DIV") {
    e.preventDefault();
    e.target.classList.add("dragover");
    checkValidDrop(e.target);
  }
}

function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove("dragover");
  resetStyles(e.target);
}

function drop(e) {
  resetStyles(e.target);
  let correctDrop = false;
  if (e.target.firstElementChild) {
    sendNumberBack(e.target);
  } else {
    if (dragItem.classList.contains("operator")) {
      if (e.target.classList.contains("operator-box")) {
        correctDrop = true;
      }
    } else {
      if (dragItem.classList.contains("number") && e.target.classList.contains("number-box")) {
        correctDrop = true;
      }
    }

    if (correctDrop) {
      e.target.appendChild(dragItem);
      checkOperation();
    }

    e.target.classList.remove("dragover");
  }
}

function sendNumberBack(box) {
  if (box.firstElementChild.classList.contains("operator")) {
    if (!dragItem.classList.contains("number")) {
      box.removeChild(box.firstElementChild);
      box.appendChild(dragItem);
    }
  } else {
    if (dragItem.classList.contains("number")) {
      dragItemSource.appendChild(box.firstElementChild);
      box.appendChild(dragItem);
    }

  }
  box.classList.remove("dragover");
}

function checkOperation() {
  const firstNumber = document.querySelector(".first-number-box");
  const secondNumber = document.querySelector(".second-number-box");
  const operator = document.querySelector(".operator-box");

  if (
    firstNumber.firstElementChild &&
    secondNumber.firstElementChild &&
    operator.firstElementChild
  ) {
    calculate(firstNumber, secondNumber, operator);
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
      if (result < 0) {
        result = 0;
      }
      break;
    case "×":
      result = firstOperand * secondOperand;
      break;
    case "÷":
      result = Math.trunc(firstOperand / secondOperand);
  }
  saveOperation(firstNumber, secondNumber, operator);
  saveResult(result);
  resetFields(firstNumber, secondNumber, operator);
  console.log(operationLog);
}


function saveOperation(firstNumber, secondNumber, operator) {
  const operation = `${firstNumber.firstElementChild.textContent} ${operator.firstElementChild.textContent} ${secondNumber.firstElementChild.textContent}`;
  operationLog.push(operation);
}

function resetFields(firstNumber, secondNumber, operator) {
  firstNumber.removeChild(firstNumber.firstElementChild);
  secondNumber.removeChild(secondNumber.firstElementChild);
  operator.removeChild(operator.firstElementChild);
}

function saveResult(result) {
  removeResultClass();
  const span = document.createElement("span");
  const boxes = document.querySelectorAll(".avail");
  span.classList.add("number", "result");
  span.setAttribute("draggable", "true");
  span.textContent = result;
  span.addEventListener("dragstart", dragStart);
  span.addEventListener("dragend", dragEnd);
  for (let i = 0; i < boxes.length; i++) {
    if (!boxes[i].firstElementChild) {
      boxes[i].appendChild(span);
      break;
    }
  }
}

function removeResultClass() {
  document.querySelectorAll(".result").forEach((item) => {
    item.classList.remove("result");
  });
}

function checkValidDrop(destination) {
  let isDropValid = true;
  if (destination.classList.contains("number-box") && dragItem.classList.contains("operator")) {
    isDropValid = false;
  }

  if (destination.classList.contains("operator-box") && dragItem.classList.contains("number")) {
    isDropValid = false;
  }

  if (isDropValid) {
    destination.style.backgroundColor = "rgba(0,128,0,0.45)";
  } else {
    destination.style.backgroundColor = "rgba(239,83,80,0.45)";
  }
}

function resetStyles(destination) {
  destination.style.backgroundColor = "";
}


