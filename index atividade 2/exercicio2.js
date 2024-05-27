function calcular() {
    var quantidadePessoas = parseInt(document.getElementById("quantidadePessoas").value);
    var ovosNecessarios = quantidadePessoas * 2;
    var queijoNecessario = quantidadePessoas * 50;

    var resultado = document.getElementById("resultado");
    
    if (!isNaN(quantidadePessoas) && quantidadePessoas > 0) {
        resultado.innerHTML = "<p>Para fazer omelete para " + quantidadePessoas + " pessoas, você precisará de:</p>" +
                              "<p>" + ovosNecessarios + " ovos</p>" +
                              "<p>" + queijoNecessario + " gramas de queijo</p>";
    } else {
        resultado.innerHTML = "<p>Por favor, insira um número válido de pessoas.</p>";
    }
}
