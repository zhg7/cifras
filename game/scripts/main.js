// Modal de ayuda
document.getElementById("help-modal-btn").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("help-modal").classList.add("is-visible");
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("help-modal").classList.remove("is-visible");
});

document.getElementById("help-close-btn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("help-modal").classList.remove("is-visible");
});

// Música de fondo
const musicPlayer = document.getElementById("soundtrack");
musicPlayer.play();
musicPlayer.volume = 0.1;

document.getElementById("ranking-btn").addEventListener("click", () => {
  window.location.href = "game/ranking.html";
});

//Loading
document.getElementById("play-btn").addEventListener("click", () => {
  document.getElementById("loader").classList.add("is-visible");
})

