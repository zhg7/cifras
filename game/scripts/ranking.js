document.getElementById("back-btn").addEventListener("click", () => {
    window.location.href = "../../index.html";
})

const jugador1 = {
    nombre: "zheng",
    puntuacion: 30
}

const jugador2 = {
    nombre: "alex",
    puntuacion: 20
}

const jugadores = [jugador1, jugador2]

localStorage.setItem("jugadores", JSON.stringify(jugadores));

const players = JSON.parse(localStorage.getItem("jugadores"));

players.forEach(player => {
    console.log(player["nombre"]);
    console.log(player["puntuacion"]);
})