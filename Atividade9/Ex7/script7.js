function calcularPreco() {
    var saborSelecionado = document.getElementById("sabor").value;
    var preco;

    switch (saborSelecionado) {
        case 'chocolate':
            preco = 1.50;
            break;
        case 'morango':
        case 'creme':
            preco = 2.50;
            break;
        case 'manga':
            preco = 3.20;
            break;
        case 'melancia':
            preco = 3.40;
            break;
        case 'vanilla':
            preco = 3.00;
            break;
        case 'ceuazul':
            preco = 3.60;
            break;
        case 'brownie':
            preco = 4.00;
            break;
        case 'hawaiano':
            preco = 5.00;
            break;
        default:
            preco = "Não disponível";
            break;
    }

    var resultadoElement = document.getElementById("resultado");
    if (preco !== "Não disponível") {
        resultadoElement.textContent = "O preço do picolé de sabor " + saborSelecionado + " é R$" + preco.toFixed(2);
    } else {
        resultadoElement.textContent = "Sabor não disponível.";
    }
}