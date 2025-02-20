function calcularPrecoFinal(precoProduto, estado, cupom) {
    let desconto = 0;
    let frete = 0;

    if (cupom === "PROMO15") {
        desconto = 0.15; 
    } else {
        // desconto aleatório
        if (Math.random() < 0.5) {
            desconto = 0.1; 
        }
    }

    // frete estado
    if (estado === "SP") {
        frete = 10;
    } else if (estado === "RJ") {
        frete = 20;
    } else {
        frete = 30;
    }

    // valor final calculado:
    let precoComDesconto = precoProduto * (1 - desconto);
    let precoFinal = precoComDesconto + frete;

    console.log(`Preço do produto: R$${precoProduto.toFixed(2)}`);
    console.log(`Desconto aplicado: ${desconto * 100}%`);
    console.log(`Frete para ${estado}: R$${frete.toFixed(2)}`);
    console.log(`Preço final: R$${precoFinal.toFixed(2)}`);
}

// Exemplo de uso
calcularPrecoFinal(100, "SP", "PROMO15");
