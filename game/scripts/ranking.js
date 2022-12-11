const players = JSON.parse(localStorage.getItem("ranking"));

players.forEach((player) => {
  const playerName = player["player"];
  const playerScore = player["score"];
  const table = document.getElementById("ranking-table");
  const row = table.insertRow(table.rows.length);
  const nameCell = row.insertCell(0);
  const scoreCell = row.insertCell(1);
  nameCell.textContent = playerName;
  scoreCell.textContent = playerScore;
});