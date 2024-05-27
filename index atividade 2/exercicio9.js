function calcularDivisao() {
    var totalAlunos = parseInt(document.getElementById("totalAlunos").value);
    var quantidadeTurmas = parseInt(document.getElementById("quantidadeTurmas").value);
    var resultado = document.getElementById("resultado");

    if (!isNaN(totalAlunos) && !isNaN(quantidadeTurmas)) {
        var alunosPorTurma = Math.floor(totalAlunos / quantidadeTurmas);
        var alunosSemTurma = totalAlunos % quantidadeTurmas;

        resultado.innerHTML = "<p>Quantidade de pessoas por turma: " + alunosPorTurma + "</p>" +
                              "<p>Quantidade de pessoas sem turma: " + alunosSemTurma + "</p>";
    } else {
        resultado.innerHTML = "<p>Por favor, insira números válidos.</p>";
    }
}
