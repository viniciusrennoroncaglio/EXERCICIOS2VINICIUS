function verificarIdade() {
    var nome1 = document.getElementById("nome1").value;
    var anoNascimento1 = parseInt(document.getElementById("anoNascimento1").value);
    var nome2 = document.getElementById("nome2").value;
    var anoNascimento2 = parseInt(document.getElementById("anoNascimento2").value);
    var nome3 = document.getElementById("nome3").value;
    var anoNascimento3 = parseInt(document.getElementById("anoNascimento3").value);

    var anoAtual = new Date().getFullYear();

    var idade1 = anoAtual - anoNascimento1;
    var idade2 = anoAtual - anoNascimento2;
    var idade3 = anoAtual - anoNascimento3;

    var resultado = document.getElementById("resultado");

    resultado.innerHTML = "<h3>Pessoas por idade:</h3>" +
                          "<p>Pessoa mais velha: " + determinarMaisVelha(nome1, idade1, nome2, idade2, nome3, idade3) + " - " + idade1 + " anos</p>" +
                          "<p>Segunda pessoa mais velha: " + determinarSegundaMaisVelha(nome1, idade1, nome2, idade2, nome3, idade3) + " - " + determinarSegundaMaisVelhaIdade(idade1, idade2, idade3) + " anos</p>" +
                          "<p>Terceira pessoa mais velha: " + determinarTerceiraMaisVelha(nome1, idade1, nome2, idade2, nome3, idade3) + " - " + determinarTerceiraMaisVelhaIdade(idade1, idade2, idade3) + " anos</p>";
}

function determinarMaisVelha(nome1, idade1, nome2, idade2, nome3, idade3) {
    if (idade1 >= idade2 && idade1 >= idade3) {
        return nome1;
    } else if (idade2 >= idade1 && idade2 >= idade3) {
        return nome2;
    } else {
        return nome3;
    }
}

function determinarSegundaMaisVelha(nome1, idade1, nome2, idade2, nome3, idade3) {
    if ((idade1 >= idade2 && idade1 <= idade3) || (idade1 >= idade3 && idade1 <= idade2)) {
        return nome1;
    } else if ((idade2 >= idade1 && idade2 <= idade3) || (idade2 >= idade3 && idade2 <= idade1)) {
        return nome2;
    } else {
        return nome3;
    }
}

function determinarSegundaMaisVelhaIdade(idade1, idade2, idade3) {
    if ((idade1 >= idade2 && idade1 <= idade3) || (idade1 >= idade3 && idade1 <= idade2)) {
        return idade1;
    } else if ((idade2 >= idade1 && idade2 <= idade3) || (idade2 >= idade3 && idade2 <= idade1)) {
        return idade2;
    } else {
        return idade3;
    }
}

function determinarTerceiraMaisVelha(nome1, idade1, nome2, idade2, nome3, idade3) {
    if (idade1 <= idade2 && idade1 <= idade3) {
        return nome1;
    } else if (idade2 <= idade1 && idade2 <= idade3) {
        return nome2;
    } else {
        return nome3;
    }
}

function determinarTerceiraMaisVelhaIdade(idade1, idade2, idade3) {
    if (idade1 <= idade2 && idade1 <= idade3) {
        return idade1;
    } else if (idade2 <= idade1 && idade2 <= idade3) {
        return idade2;
    } else {
        return idade3;
    }
}
