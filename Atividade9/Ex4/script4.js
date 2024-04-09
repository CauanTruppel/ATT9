function ordenar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);

    var valores = [num1, num2, num3, num4];
    valores.sort(function(a, b) {
        return b - a;
    });

    document.getElementById("resultado").innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
}