if (localStorage.getItem("ranking") === null) {
  localStorage.setItem("ranking", "[]");
}

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

document.getElementById("ranking-btn").addEventListener("click", () => {
  setSoundtrackTime();
  setTimeout(() => {
    window.location.href = "game/ranking.html";
  }, 400);
});

document.getElementById("play-btn").addEventListener("click", () => {
  setSoundtrackTime();
  setTimeout(() => {
    window.location.href = "game/start.html";
  }, 400);
});

//Loading
document.getElementById("play-btn").addEventListener("click", () => {
  document.getElementById("loader").classList.add("is-visible");
});

//Música de fondo y control
const soundtrack = document.getElementById("soundtrack");
const audioControl = document.querySelector("#audio-control input");
audioControl.addEventListener("change", (e) => {
  if (!e.target.checked) {
    soundtrack.pause();
  } else {
    soundtrack.play();
    soundtrack.volume = 0.05;
  }
});

//Audio botón
const buttonAudio = new Audio("../game/assets/audio/click.wav");
document.querySelectorAll(".action-button").forEach((button) => {
  button.addEventListener("click", () => {
    buttonAudio.play();
  });
});

document.querySelectorAll(".clicky").forEach((element) => {
  element.addEventListener("click", () => {
    const buttonAudio2 = new Audio("../game/assets/audio/click2.wav");
    buttonAudio2.play();
  });
});


function setSoundtrackTime() {
  sessionStorage.setItem("soundtrackTime", soundtrack.currentTime)
}
