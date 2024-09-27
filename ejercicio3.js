function calcularSumatoria() {
    let suma = 0;
    let numeroMayor = 500;
    let numeroMenor = 456;

    while (numeroMayor <= 800) {
        // Sumar ambos números
        suma += numeroMayor;
        suma += numeroMenor;  // Se puede mantener esto si deseas sumar ambos

        // Incrementar y decrementar según el patrón
        numeroMayor += 10;    // El número mayor aumenta de 10 en 10
        numeroMenor -= 2;     // El número menor disminuye de 2 en 2
    }

    // Mostrar el resultado en el elemento con ID "resultado"
    document.getElementById("resultado").textContent = `La sumatoria es: ${suma}`;
}
