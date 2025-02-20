let pontos = 100; 
let rodada = 1;

while (confirm("Deseja jogar o dado?")) {
    let dado = Math.floor(Math.random() * 6) + 1; 
    console.log(`Rodada ${rodada}: O dado caiu em ${dado}`);

    if (dado % 2 !== 0) {
        pontos += 10; 
        console.log("Você tirou um número ímpar! +10 pontos");
    } else {
        pontos -= 5; 
        console.log("Você tirou um número par! -5 pontos");
    }

    if (rodada % 3 === 0) {
        pontos += 15;
        console.log("Rodada múltipla de 3! +15 pontos");
    }

    console.log(`Pontos atuais: ${pontos}\n`);
    rodada++; //proxima rodada
}

console.log(`Jogo encerrado! Você terminou com ${pontos} pontos.`);