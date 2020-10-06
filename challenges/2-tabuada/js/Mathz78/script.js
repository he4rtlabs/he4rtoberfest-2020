/** 
 *  Problema: Usuário informar um número e imprimir tabuadas começando do número 01 e indo até o número informado pelo usuário.
 * 
 * Resolução: Eu criei uma variável chamada number que irá receber o número informado pelo usuário
 * Após isto criei uma função com dois laços FOR, o primeiro para percorrer do número 01 até o número informado pelo usuário
 * E o segundo laço para printar a multiplicação do valor do primeiro laço FOR de 01 até 10.
 * 
 * Made with 💜 by Matheus Rocha.
 */

var number = 0;

function printTabuada(number) {
    // Primeiro FOR para printar todas as tabuadas comçando de 01 até o número informado pelo usuário.
    for(let i = 1; i <= number; i++) {
        console.log(`============= A tabuada atual é do número: ${i} =============`);
        // Segundo FOR para printar a multiplicação do número 01 até o 10.
        for(let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`); // Faz o print da multiplicação sendo ela: i * j
        }
        
        console.log("============= Tabuada finalizada com sucesso! =============");
        console.log();
    }
}

printTabuada(5);