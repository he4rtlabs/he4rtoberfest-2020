/** 
 * Script que informa a média de duas notas de um aluno.
 * 
 * Resolução: Criei um ARRAY chamado notas, onde o usuário pode adicionar quantos notas ele quiser neste array, após isto
 * criei uma função contendo três variáveis, uma para receber a soma das notas, outra para receber a quantidade de notas validas e a última para armazenar a média
 * Usei um laço FOR para passar por todos os valores do array e fazer a verificação se é um NUMBER utilizando um IF
 * Caso seja um número, o valor daquele index do array será adicionado na variável soma e será adicionado +1 na variável quantidade
 * Após isto é armazenado a divisão da soma das notas pela quantidade de notas e mostrado ao usuário.
 * 
 */

var notas = [];

notas[0] = 22; 
notas[1] = 53;
notas[2] = "He4rt é a melhor comunidade."; // Adicionei este valor para testar se ele será desconsiderado na validação de número.


function calcularMedia(notas) {
    var somaNotas = 0; // Essa variável irá armazenar a soma de todas as notas "corretas"
    var qntNotas = 0; // Essa variável irá armazenar a quantidade de notas "corretas"
    var media = 0; // Essa variável irá armazenar a média das notas.

    // Esse laço FOR serve para passar por todos itens do array.
    for(let i = 0; i < notas.length; i++) {
        // Esse IF serve para verificar se o item do array é um número
        if(typeof notas[i] === "number") {
            somaNotas += notas[i]; // Se for um número, o valor será adicioando na variável que contem a soma dos valores.
            qntNotas += 1; // E será adicionado mais um valor na variável que armazena a quantidade de notas "corretas".
        }
    }

    media = somaNotas / qntNotas; // Faz o calculo da média dividindo a soma das notas pela quantidade de notas.
    return(media); // Retorna a variável.
}

console.log("A média do aluno foi: " + calcularMedia(notas));