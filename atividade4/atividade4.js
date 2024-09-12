
let tempoRestante = parseInt(prompt(`Defina um tempo para contagem regressiva em segundos:`));

    const display = document.getElementById("contador");

    const contagemRegressiva = setInterval(() => {
        display.textContent = tempoRestante;
        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(contagemRegressiva);
            display.textContent = "Tempo esgotado!";
        }
    }, 1000);