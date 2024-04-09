function iniciarContagemRegressiva() {
    // Defina a data e hora do lançamento (exemplo: 8 de abril de 2024, 10:00:00)
    const dataLancamento = new Date('2024-04-08T12:00:00').getTime();

    // Atualize a contagem regressiva a cada segundo
    let contadorInterval = setInterval(function() {
        // Obtenha a data e hora atual
        const agora = new Date().getTime();
        
        // Calcule o tempo restante até o lançamento
        const tempoRestante = dataLancamento - agora;
        
        // Calcule dias, horas, minutos e segundos restantes
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        
        // Exiba a contagem regressiva
        document.getElementById("contador").innerHTML = "Contagem regressiva para o lançamento:<br>" + 
            dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
        
        // Verifique se o tempo de contagem regressiva acabou
        if (tempoRestante < 0) {
            clearInterval(contadorInterval); // Pare a contagem regressiva
            document.getElementById("contador").innerHTML = "Lançamento!";
        }
    }, 1000); // Atualiza a cada segundo
}