document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("play-modal").classList.remove("is-visible");
});

document.getElementById("play-close-btn").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("play-modal").classList.remove("is-visible");
});

document.getElementById("play-btn").addEventListener("click", playEventHandler);

function playEventHandler() {
  const nameFields = document.querySelectorAll(".player_name");
  const emptyFields = [];
  nameFields.forEach(field => {
    if (field.value.trim() === "") {
      emptyFields.push(field);
    } else {
      revertFieldStyles(field);
    }
  })

  if (emptyFields.length === 0) {
    document.getElementById("overlay").classList.add("is-visible");
    document.getElementById("play-modal").classList.add("is-visible");
  } else {
    highlightEmptyFields(emptyFields);
  }

}

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
  .addEventListener("click", () => {
    storePlayers();
    window.location.href = "../game/randomizer.html";
  });

function storePlayers() {
  const player1 = {
    name: document.getElementById("player1_name").value.trim(),
    color: document.getElementById("player1_color").value.trim(),
    score: 0,
  };

  const player2 = {
    name: document.getElementById("player2_name").value.trim(),
    color: document.getElementById("player2_color").value.trim(),
    score: 0,
  };

  const players = [player1, player2];
  sessionStorage.setItem("currentPlayers", JSON.stringify(players));
  sessionStorage.setItem("started", "yes");
}

document.querySelectorAll(".player-icon").forEach((player) => {
  player.addEventListener("click", (e) => {
    if (e.target.tagName !== "svg") {
      const colorPicker = document.getElementById(
        `player${e.target.parentElement.id.substr(6, 1)}_color`
      );
      colorPicker.click();
    }
  });
});

function highlightEmptyFields(fields) {
  fields.forEach(field => {
    field.style.backgroundColor = "rgba(239,83,80,0.70)";
    field.classList.add("error-shake");
    field.nextElementSibling.classList.add("error-shake");
    setTimeout(() => {
      field.classList.remove("error-shake");
      field.nextElementSibling.classList.remove("error-shake");
    }, 500);

  })
}

function revertFieldStyles(field) {
  field.style.backgroundColor = "";
}