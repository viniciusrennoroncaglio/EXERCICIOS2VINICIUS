function calcularPedido() {
    var sabor1 = document.getElementById("sabor1").value;
    var sabor2 = document.getElementById("sabor2").value;
    var sabor3 = document.getElementById("sabor3").value;
    var sabor4 = document.getElementById("sabor4").value;
    var quantidadeRefrigerantes = parseInt(document.getElementById("refrigerantes").value);

    var valorPizza = 12.00;
    var valorRefrigerante = 7.00;

    var valorTotalPizzas = 4 * valorPizza;
    var valorTotalRefrigerantes = quantidadeRefrigerantes * valorRefrigerante;
    var valorTotalPedido = valorTotalPizzas + valorTotalRefrigerantes;

    var resultado = document.getElementById("resultado");

    resultado.innerHTML = "<h3>Sabores de Pizza:</h3>" +
                          "<ul>" +
                          "<li>" + sabor1 + "</li>" +
                          "<li>" + sabor2 + "</li>" +
                          "<li>" + sabor3 + "</li>" +
                          "<li>" + sabor4 + "</li>" +
                          "</ul>" +
                          "<h3>Valor Total do Pedido:</h3>" +
                          "<p>Total das pizzas: R$ " + valorTotalPizzas.toFixed(2) + "</p>" +
                          "<p>Total dos refrigerantes: R$ " + valorTotalRefrigerantes.toFixed(2) + "</p>" +
                          "<h2>Total a Pagar: R$ " + valorTotalPedido.toFixed(2) + "</h2>";
}
