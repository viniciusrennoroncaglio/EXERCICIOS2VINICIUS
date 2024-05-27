function compararNumeros() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero1 > numero2) {
            resultado.textContent = "O primeiro número é maior que o segundo.";
        } else if (numero1 < numero2) {
            resultado.textContent = "O primeiro número é menor que o segundo.";
        } else {
            resultado.textContent = "Os dois números são iguais.";
        }
    } else {
        resultado.textContent = "Por favor, insira números inteiros válidos.";
    }
}
