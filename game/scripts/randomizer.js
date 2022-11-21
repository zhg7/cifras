if (sessionStorage.getItem("started") !== "yes") {
  window.location.href = "start.html";
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 50, 75, 100].sort(
  (a, b) => 0.5 - Math.random()
);

sessionStorage.setItem("generationCounter", 0);

document.querySelector(".flipbox-front").addEventListener("click", () => {
  if (sessionStorage.getItem("generationCounter") < 6) {
    sessionStorage.setItem(
      "generationCounter",
      Number(sessionStorage.getItem("generationCounter")) + 1
    );

    const number = numbers[Math.floor(Math.random() * numbers.length)];
    numbers = numbers.filter((n) => n !== number);
    document.getElementById("generated-number").textContent = number;
    const numberSpans = document.querySelectorAll(".number");
    let inserted = false;
    for (let i = 0; !inserted; i++) {
      if (numberSpans[i].textContent === "") {
        numberSpans[i].textContent = number;
        inserted = true;
      }
    }
    document.querySelector(".flipbox-inner").classList.add("flip");
    setTimeout(() => {
      document.querySelector(".flipbox-inner").classList.remove("flip");
    }, 800);
  }
  setTimeout(() => {
    if (sessionStorage.getItem("generationCounter") > 5) {
      const box = document.querySelector(".flipbox-front");
      box.style.cursor = "default";
      box.textContent = "Todos los números generados";
    }
  }, 200);
});
