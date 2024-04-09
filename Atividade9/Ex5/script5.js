function transformarNumero() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (numero % 2 === 0) {
        resultadoElement.textContent = "O número " + numero + " é par. Transformado em ímpar: " + (numero + 1);
    } else {
        resultadoElement.textContent = "O número " + numero + " é ímpar. Transformado em par: " + (numero + 1);
    }
}