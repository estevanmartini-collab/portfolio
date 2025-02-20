function calcularImposto(preco, temDesconto) {
preco = Number(preco);  

    // Se o preço for inválido, encerrar a função
    if (!preco) { 
        console.log("Erro: O preço informado não é válido.");
        return;
    }

    // Variáveis primárias
    let precoComDesconto;
    let icmsMin = 12;
    let icmsMax = 25;

    let icms = Math.floor(Math.random() * (icmsMax - icmsMin + 1)) + icmsMin;

    console.log(`Valor original: R$${preco.toFixed(2)}`);

    if (temDesconto) {
        precoComDesconto = preco * 0.9; // 10% de desconto
        console.log("Teve desconto? Sim");
    } else {
        precoComDesconto = preco; // Preço original
        console.log("Teve desconto? Não");
    }

    console.log(`Valor com desconto: R$${precoComDesconto.toFixed(2)}`);

    let valorICMS = precoComDesconto * (icms / 100);
    let precoFinal = precoComDesconto + valorICMS;

    console.log(`ICMS aplicado: ${icms}%`);
    console.log(`Valor final com Imposto: R$${precoFinal.toFixed(2)}`);
}

calcularImposto(100, true);
calcularImposto("200", false); 
calcularImposto("", true); 

