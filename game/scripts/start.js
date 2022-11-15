// Modal de ayuda
document.getElementById("play-btn").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("play-modal").classList.add("is-visible");
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("play-modal").classList.remove("is-visible");
});

document.getElementById("play-close-btn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("play-modal").classList.remove("is-visible");
});

document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.querySelectorAll(".player_color").forEach((picker) => {
  picker.addEventListener("input", (e) => {
    const playerIcon = document.getElementById(
      `player${e.target.id.substr(6, 1)}_icon`
    );
    const playerColor = document.getElementById(
      `player${e.target.id.substr(6, 1)}_color`
    ).value;
    playerIcon.style.fill = playerColor;
  });
});

document
  .getElementById("confirm-play-btn")
  .addEventListener("click", storePlayers);
function storePlayers() {
  const player1 = {
    name: document.getElementById("player1_name").value,
    color: document.getElementById("player1_color").value,
    score: 0,
  };

  const player2 = {
    name: document.getElementById("player2_name").value,
    color: document.getElementById("player2_color").value,
    score: 0,
  };

  const players = [player1, player2];
  localStorage.setItem("currentPlayers", JSON.stringify(players));
}
