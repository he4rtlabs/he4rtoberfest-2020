const prompt = require('prompt-sync')(); //importa prompt-sync para receber os dados do usuario

let baseMaior = parseInt(prompt("Digite a base maior do trapézio: "));
let baseMenor = parseInt(prompt("Digite a base menor do trapézio: "));
let altura = parseInt(prompt("Digite a altura do trapézio: "));

function calculaArea(bMaior, bMenor, alt) {
    let A = (bMaior + bMenor) * alt / 2;

    if (isNaN(A)) {
        return `Erro no cálculo, digite apenas números.`;
    } else {
        return `\nA área do trapézio com base menor de ${bMaior}, base maior de ${bMenor} e altura ${alt} é igual a: ${A}`;
    }
}

console.log(calculaArea(baseMaior, baseMenor, altura));