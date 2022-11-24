/*if (sessionStorage.getItem("started") !== "yes") {
  window.location.href = "start.html";
}*/

/*window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
})*/

let availableNumbers = JSON.parse(sessionStorage.getItem("availableNumbers"));
const numberBoxes = document.querySelectorAll(".number-box span");
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
  dragItemSource = e.target.parentElement;
  if (e.target.classList.contains("operator")) {
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
    }

    e.target.style.borderStyle = "";
  }
}

function sendNumberBack(box) {
  box.appendChild(dragItem);
  dragItemSource.appendChild(box.firstElementChild);
}
