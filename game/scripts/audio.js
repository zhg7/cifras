const soundtrack = document.getElementById("soundtrack");
const audioControl = document.querySelector("#audio-control input");
let playedOnce = false;
audioControl.addEventListener("change", (e) => {
  if (!e.target.checked) {
    soundtrack.pause();
  } else {
    soundtrack.play();
    if (!playedOnce){
      soundtrack.currentTime = Number(sessionStorage.getItem("soundtrackTime"));
      playedOnce = true;
    }
    soundtrack.volume = 0.05;
  }
});

function setSoundtrackTime() {
  sessionStorage.setItem("soundtrackTime", soundtrack.currentTime)
}