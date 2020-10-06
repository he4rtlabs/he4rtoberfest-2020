const prompt = require('prompt-sync')();

const number = prompt('Digite um numero: ');
console.log(number);

for(let tableRange=1; tableRange<= number; tableRange++){
    console.log(`=========================== \nA tabuada do numero ${tableRange} é:`);
    for(let accumulator= 1; accumulator <= 10; accumulator++){
        console.log(`${tableRange} * ${accumulator} = ${tableRange*accumulator}`);
    }
}