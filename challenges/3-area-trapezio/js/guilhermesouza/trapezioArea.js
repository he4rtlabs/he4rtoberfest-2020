const prompt = require('prompt-sync')();

function traparea(baseMaior, baseMenor, altura) {
    for(let testCase of arguments){
        if(typeof testCase !== 'number'){
            return console.log(`${testCase} Não é um numero, por favor use apenas numeros!`);
        }
    } 
    
    const areaValue = ((baseMaior + baseMenor) * altura) / 2;
    if(isNaN(areaValue)){
        return console.log('Ocorreu um erro, por favor digite apenas numeros!');
    }

    return console.log(`A área do trapezio é: ${areaValue}`);
}

const baseMaior = parseInt(prompt('Digite a base maior: '));
const baseMenor = parseInt(prompt('Digite a base menor: '));
const altura = parseInt(prompt('Digite a altura: '));

traparea(baseMaior, baseMenor, altura);