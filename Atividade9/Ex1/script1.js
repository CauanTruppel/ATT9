function somaNumeros() {
    let soma = 0;
    let continuar = true;

    // Loop para solicitar números até que o usuário decida parar
    while (continuar) {
        // Solicitar um número ao usuário
        let numero = parseFloat(prompt("Digite um número (ou '0' para parar):"));

        // Verificar se o usuário deseja parar
        if (numero === 0 || isNaN(numero)) {
            continuar = false; // Define continuar como falso para sair do loop
        } else {
            soma += numero; // Adiciona o número à soma atual
        }
    }

    // Mostrar o resultado da soma
    alert("A soma dos números é: " + soma);
}

// Chamada da função principal
somaNumeros();