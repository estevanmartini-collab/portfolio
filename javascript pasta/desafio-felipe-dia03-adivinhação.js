let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;
let acertou = false;

while (!acertou) {
    let palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }

    tentativa++; //contagem de tentativas

    if (palpite > numeroSecreto) {
        alert("O número secreto é menor!");
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é maior!");
    } else {
        alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativa} tentativas.`);
        acertou = true;
    }
}