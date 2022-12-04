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
