document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("operation-log-modal").classList.remove("is-visible");
  emptyOperationLog()
});

document.getElementById("operation-log-close-btn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("operation-log-modal").classList.remove("is-visible");
  emptyOperationLog()
});

const operationList = document.getElementById("operation-log")
const playerIcons = document.querySelectorAll(".game-over-player-icon");
const playerNames = document.querySelectorAll(".game-over-player-name");
const players = JSON.parse(sessionStorage.getItem("currentPlayers"));

for (let i = 0; i <= 1; i++) {
  playerIcons[i].style.fill = players[i]["color"];
  playerNames[i].textContent = players[i]["name"];
}

/*const operationLogs = document.querySelectorAll(".operation-log");
  const firstPlayer = JSON.parse(sessionStorage.getItem("player0_operations"));
  const secondPlayer = JSON.parse(sessionStorage.getItem("player1_operations"));
  const operations = [firstPlayer, secondPlayer];

  for (let i = 0; i < operationLogs.length; i++) {
    for (let j = 0; j < operations[i].length; j++) {
      operationLogs[i].insertAdjacentHTML("beforeend", `<li>${operations[i][j]}</li>`);
    }
  }*/

const operationLogButtons = document.querySelectorAll(".view-operations");
operationLogButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    showOperationLog(e.target.parentElement.id)
  })
})

function setResults(){
  
}

function showOperationLog(player) {
  const playerName = players[Number(player.substr(-1)) - 1]["name"];
  const playerOperations = JSON.parse(sessionStorage.getItem(`player${Number(player.substr(-1)) - 1}_operations`));
  playerOperations.forEach(op => {
    operationList.insertAdjacentHTML("beforeend", `<li>${op}</li>`);
  })

  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("operation-log-modal").classList.add("is-visible");
  document.getElementById("player-log").textContent = playerName;
}

function emptyOperationLog() {
  while (operationList.firstElementChild) {
    operationList.removeChild(operationList.firstElementChild)
  }
}