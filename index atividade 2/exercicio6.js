function verificarNota() {
    var nota = parseFloat(document.getElementById("nota").value);
    var resultado = document.getElementById("resultado");

    if (!isNaN(nota)) {
        if (nota > 6 ) {
            resultado.textContent = "Aprovado";
        } else if (nota < 6 && nota > 4) {
            resultado.textContent = "Precisa fazer prova substitutiva";
        } else {
            resultado.textContent = "Reprovado";
        }
    } else {
        resultado.textContent = "Por favor, insira uma nota válida.";
    }
}
