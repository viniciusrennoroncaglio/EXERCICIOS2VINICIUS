document.addEventListener("DOMContentLoaded", function() {
    var calcularBtn = document.getElementById("calcularBtn");
    calcularBtn.addEventListener("click", function() {
        calcular();
    });
});

function calcular() {
    var valorVendido = parseFloat(document.getElementById("valorVendido").value);
    var meta = parseFloat(document.getElementById("meta").value);
    var metaMinima = parseFloat(document.getElementById("metaMinima").value);

    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

    var resultado = document.getElementById("result");
    resultado.innerHTML = "";

    if (percentualMeta >= 100) {
        resultado.innerHTML += "Parabéns! Você atingiu a meta.<br>";
    } else {
        resultado.innerHTML += "Você não atingiu a meta.<br>";
    }

    if (percentualMetaMinima >= 100) {
        resultado.innerHTML += "Você atingiu a meta mínima.<br>";
    } else {
        resultado.innerHTML += "Você não atingiu a meta mínima.<br>";
    }

    resultado.innerHTML += "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%<br>";
    resultado.innerHTML += "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";
}
