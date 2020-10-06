/**
 * Apesar do enunciado apenas pedir a media entre 2 valores,
 * decidi implementar uma solução que funcionará para todos os valores passados como argumento.
 *
 * Notas importantes:
 *  -> A media é calculada entre valores inteiros ou flutuantes, isto é, não se deve passar algo
 * que não seja um numero como input.
 *  -> Neste caso, os inputs vindos da linha de comandos vêm em forma de String,
 * por isso na linha 17 foi necessário fazer um cast para o tipo Number.
 */

const inputs = process.argv.slice(2);

const numberOfInputs = inputs.length;

const sum = inputs.reduce((acc, el) => {
  return acc + Number(el);
}, 0);

console.log(sum / numberOfInputs);
