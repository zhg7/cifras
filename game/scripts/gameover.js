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
const players = JSON.parse(sessionStorage.getItem("currentPlayers"));
const targetNumber = Number(sessionStorage.getItem("targetNumber"));

const operationLogButtons = document.querySelectorAll(".view-operations");
operationLogButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    showOperationLog(e.target.parentElement.id)
  })
})

setResults();

function calculateScore(player) {
  const result = Number(sessionStorage.getItem(`player${player}_result`));
  let score = 10;
  let difference = 0;
  if (result !== targetNumber) {
    if (JSON.parse(sessionStorage.getItem(`player${player}_operations`)).length !== 0) {
      difference = Math.abs(targetNumber - result);
      for (let i = 0; i < difference && i < 9; i++) {
        score -= 1;
      }
    } else {
      score = 0;
    }
  }
  saveScore(players[player]["name"], score);
  return score;
}

function setResults() {
  const results = [sessionStorage.getItem("player0_result"), sessionStorage.getItem("player1_result")];
  const playerIcons = document.querySelectorAll(".game-over-player-icon");
  const playerNames = document.querySelectorAll(".game-over-player-name");
  const playerResults = document.querySelectorAll(".player-result");
  document.getElementById("target-number").textContent = `(${targetNumber})`;
  for (let i = 0; i <= 1; i++) {
    calculateScore(i);
    playerIcons[i].style.fill = players[i]["color"];
    playerNames[i].textContent = players[i]["name"];
    playerResults[i].textContent = results[i];
  }
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

function saveScore(playerName, score) {

}