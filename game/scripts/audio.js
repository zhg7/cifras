const soundtrack = document.getElementById("soundtrack");
const audioControl = document.querySelector("#audio-control input");
let playedOnce = false;
audioControl.addEventListener("change", (e) => {
  if (!e.target.checked) {
    soundtrack.pause();
  } else {
    soundtrack.play();
    if (!playedOnce && !window.location.href.includes("index")) {
      soundtrack.currentTime = Number(sessionStorage.getItem("soundtrackTime"));
      playedOnce = true;
    }
    soundtrack.volume = 0.1;
  }
});

function setSoundtrackTime() {
  sessionStorage.setItem("soundtrackTime", soundtrack.currentTime)
}

// Sonido interruptor
const switchSound = new Audio("../game/assets/audio/switch.wav");
switchSound.volume = 0.85;
document.querySelectorAll(".switch").forEach((element) => {
  element.addEventListener("click", () => {
    switchSound.play();
  });
});

// Sonido pulsación
const clickSound = new Audio("../game/assets/audio/click.wav");
clickSound.volume = 0.8;
document.querySelectorAll(".click").forEach((element) => {
  element.addEventListener("click", () => {
    clickSound.play();
  });
})

// Sonido alerta
const alertSound = new Audio("../game/assets/audio/alert.wav");
function playAlertSound(){
  alertSound.volume = 0.8;
  alertSound.play();
}

// Sonido error
const errorSound = new Audio("../game/assets/audio/error.wav");
function playErrorSound(){
  errorSound.volume = 0.8;
  errorSound.play();
}

