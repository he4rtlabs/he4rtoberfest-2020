
const prompt = require('prompt-sync')();

const number = parseInt(prompt('Digite a quantidade de notas para o aluno(Apenas numeros):'));
let values = new Array(number);
for(let accumulator =1; accumulator<=number; accumulator++){
    values[accumulator] = parseInt(prompt(`Valor${accumulator}:`));
}

let sum = 0;
    for(let accumulator in values){
        sum+=values[accumulator];
    }

const  studentAverage =(sum,number) => {
    return console.log((sum)/number);
};

studentAverage(sum, number);
