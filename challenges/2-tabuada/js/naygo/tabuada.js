// Input/Args: 2
// Output: tabuada até o número inserido

const prompt = require('prompt-sync')();

function Tabuada(numero) {

    console.log('===========================')

    for (let i = 1; i <= numero; i++) {
        console.log(`A tabuada do número ${i} é:`)

        for (let j = 1; j <= 10; j++) {
            console.log(i + '*' + j + ' = ' + (i * j));
        }
        console.log('===========================')
    }

}

let number = prompt('Digite um numero: ');
Tabuada(number)

