console.log("ejercicio1.js se ha cargado correctamente.");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verificarBtn").addEventListener("click", verificarParImpar);
});

function verificarParImpar() {
    const numero = document.getElementById("numero").value;

    if (numero === "") {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número.";
        return;
    }

    const num = parseInt(numero);

    if (isNaN(num)) {
        document.getElementById("resultado").textContent = "El valor ingresado no es un número válido.";
    } else if (num % 2 === 0) {
        document.getElementById("resultado").textContent = `El número ${num} es par.`;
    } else {
        document.getElementById("resultado").textContent = `El número ${num} es impar.`;
    }

    document.getElementById("numero").value = '';
}
