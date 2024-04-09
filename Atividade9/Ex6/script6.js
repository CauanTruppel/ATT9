function verificar() {
    var letra = document.getElementById("letra").value.toLowerCase();
    var resultadoElement = document.getElementById("resultado");

    if (!letra.match(/[a-z]/)) {
        resultadoElement.textContent = "Por favor, insira uma letra válida.";
        return;
    }

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        resultadoElement.textContent = "A letra " + letra + " é uma vogal.";
    } else {
        resultadoElement.textContent = "A letra " + letra + " é uma consoante.";
    }
}