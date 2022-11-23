/*if (sessionStorage.getItem("started") !== "yes") {
  window.location.href = "start.html";
}*/

/*window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
})*/

document.getElementById("target-number").textContent = sessionStorage.getItem("targetNumber");
