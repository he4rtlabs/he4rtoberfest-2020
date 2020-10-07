const prompt = require('prompt-sync')();

const fiboSequence = (number) => {

    if(number > 46){
        return console.log('ERRO, digite um numero de 0 a 46');
    }
    let storageArray = [];
    let swapValue1 = 0;
    let swapValue2 =1;

    for(let accumulator =0; accumulator<number; accumulator ++) {
        storageArray.push(swapValue1); //
        let aux = swapValue1 + swapValue2;
        swapValue1 = swapValue2;
        swapValue2 = aux;
    }
        let formatValue = storageArray.join(' ').toString(); 
    console.log(formatValue);
}
const number = parseInt(prompt('Digite um numero de 1 a 46: '));

fiboSequence(number);