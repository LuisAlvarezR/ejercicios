function calcularPromedio() {
    // Obtener las notas ingresadas por el usuario
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Validar que las notas no estén vacías y sean números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa todas las notas.";
        return;
    }

    // Calcular el promedio ponderado
    const promedioPonderado = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

    // Mostrar el promedio y el resultado según las condiciones dadas
    let resultado;
    if (promedioPonderado < 3.95) {
        resultado = `El promedio es ${promedioPonderado.toFixed(2)}. Has reprobado la asignatura.`;
    } else if (promedioPonderado >= 3.95 && promedioPonderado <= 4.94) {
        resultado = `El promedio es ${promedioPonderado.toFixed(2)}. Vas a examen.`;
    } else {
        resultado = `El promedio es ${promedioPonderado.toFixed(2)}. Te has eximido de la asignatura.`;
    }

    document.getElementById("resultado").textContent = resultado;
}
