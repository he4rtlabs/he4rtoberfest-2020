const prompt = require('prompt-sync')(); //importa "prompt-sync" para receber valores
let numeroEscolhido = Math.round(prompt("Digite um número inteiro: ")); //recebe apenas valores inteiros do usuario, arrendondando-os

function calcTabuada(numero) {
    console.log("===========================");
    if (isNaN(numero)) { //tratamento para o input, se for NaN, o código nao executará
        console.log("ERRO! Por favor, digite apenas números inteiros.");
    } else {
        for (numeroEscolhido = 1; numeroEscolhido <= numero; numeroEscolhido++) {
            console.log(`A tabuada do número ${numeroEscolhido} é: `);

            for (index = 1; index <= 10; index++) {

                console.log(`${index} * ${numeroEscolhido} é igual a: ${index*numeroEscolhido}`);
            }

            console.log("===========================");
        }
    }
}

calcTabuada(numeroEscolhido); //passa os valores recebidos pelo prompt() para dentro da funcao