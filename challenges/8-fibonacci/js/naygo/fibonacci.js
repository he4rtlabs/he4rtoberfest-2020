// Input/Args: inteiroN
// Output: N primeiros números da série

const prompt = require('prompt-sync')()

function fibonacci(inteiroN) {
    let primeiroNumero = 0
    let segundoNumero = 1
    let proximoNumero
    let arrayFibonacci = [];

    for (let i = 1; i <= inteiroN; i++) {

        arrayFibonacci[i] = primeiroNumero;
        proximoNumero = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = proximoNumero;
    }
    return arrayFibonacci.join(" ");
}


const inteiroN = prompt('Digite um número inteiro: ')

console.log(fibonacci(inteiroN))