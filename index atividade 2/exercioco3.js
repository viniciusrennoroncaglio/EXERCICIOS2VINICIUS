function calcular() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpar resultados anteriores
    
    if (!isNaN(numero1) && !isNaN(numero2)) {
        resultado.innerHTML += "<p>Soma: " + (numero1 + numero2) + "</p>";
        resultado.innerHTML += "<p>Subtração: " + (numero1 - numero2) + "</p>";
        resultado.innerHTML += "<p>Multiplicação: " + (numero1 * numero2) + "</p>";
        if (numero2 !== 0) {
            resultado.innerHTML += "<p>Divisão: " + (numero1 / numero2) + "</p>";
        } else {
            resultado.innerHTML += "<p>Divisão: Não é possível dividir por zero.</p>";
        }
    } else {
        resultado.innerHTML = "<p>Por favor, insira números inteiros válidos.</p>";
    }
}
