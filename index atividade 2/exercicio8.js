function verificarParOuImpar() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            resultado.textContent = "O número " + numero + " é Par.";
        } else {
            resultado.textContent = "O número " + numero + " é Ímpar.";
        }
    } else {
        resultado.textContent = "Por favor, insira um número válido.";
    }
}
