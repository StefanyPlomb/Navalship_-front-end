const grid = document.getElementById("tabuleiro");

// cria 100 células (10x10)
for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("celula");

    cell.addEventListener("click", () => {
        atirar(i, cell);
    });

    grid.appendChild(cell);
}

function atirar(posicao, cell) {
    fetch(`http://localhost:8081/atirar?pos=${posicao}`)
        .then(res => res.text())
        .then(resposta => {
            if (resposta === "ACERTO") {
                cell.style.background = "green";
            } else {
                cell.style.background = "red";
            }
        })
        .catch(err => console.error("Erro:", err));
}
