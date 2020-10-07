import * as readline from 'readline'

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quer saber a tabuada de qual número? ', (answer: string) => {
    if (isNumber(answer)) {
        fazerTabuada(parseInt(answer))
    } else {
        console.log('Só consigo multiplicar números')
    }
    rl.close();
});

function fazerTabuada(numero: number) {
    console.log("=========================")
    multiplicarNumero(numero);
    console.log("=========================")
}

function multiplicarNumero(numero: number) {
    for (let n = 1; n <= 10; n++) {
        console.log(` ${numero} * ${n} = ${numero * n}`)
    }
}

function isNumber(value: string | number): boolean {
    return ((value != null) &&
        (value !== '') &&
        !isNaN(Number(value.toString())))
}