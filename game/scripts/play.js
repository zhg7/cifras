/*if (sessionStorage.getItem("started") !== "yes") {
  window.location.href = "start.html";
}*/

/*window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
})*/

let availableNumbers = JSON.parse(sessionStorage.getItem("availableNumbers"));
const numberSpans = document.querySelectorAll(".number span");
let dragItem = null;

for (let i = 0; i < 6; i++) {
  numberSpans[i].textContent = availableNumbers[i];
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
}

function dragEnd(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave(e) {
  e.preventDefault();
}

function drop(e) {
  e.target.append(dragItem);
}
