/** 
 * Script que informa a média de duas notas de um aluno.
 * 
 * Resolução: Neste desafio criei duas variáveis e atribui valores a elas, sendo 22 e 53 respectivamente.
 * Criei uma função chamada calcularMedia, onde esta função pede duas variáveis como argumento/parâmetro
 * A função recebe esses dois valores soma e depois divide por 02 e atribui o resultado em uma nova variável e então renorta esta variável.
 * O último passo é "chamar" a função dentro de um console.log, passando as duas variáveis criadas no começo do script como argumento. E então o resultado será impresso!
 */

var notaUm = 22;
var notaDois = 53;

function calcularMedia(notaUm, notaDois) {
    var media = (notaUm + notaDois) / 2;
    return(media);
}

console.log("A média do aluno foi: " + calcularMedia(notaUm, notaDois));
