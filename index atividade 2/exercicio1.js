function calcular() {
    var dolarAtual = parseFloat(document.getElementById("dolarInput").value);
    var resultados = document.getElementById("resultados");
    
    resultados.innerHTML = ""; // Limpar resultados anteriores
    
    if (!isNaN(dolarAtual)) {
        var porcentagens = [1, 2, 5, 10];
        porcentagens.forEach(function(porcentagem) {
            var aumento = dolarAtual * (porcentagem / 100);
            var novoValor = dolarAtual + aumento;
            resultados.innerHTML += "<p>Se a cotação subir " + porcentagem + "%, o novo valor será $" + novoValor.toFixed(2) + "</p>";
        });
    } else {
        resultados.innerHTML = "<p>Por favor, insira um valor válido para a cotação do dólar.</p>";
    }
}
