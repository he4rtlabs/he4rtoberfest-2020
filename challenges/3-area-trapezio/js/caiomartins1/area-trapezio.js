// Esta função certifica-se que todos os valores recebidos são numeros, e retorna o resultado calculado pela formula.
function areaTrapezio(baseMenor, baseMaior, altura) {
  if (isNaN(baseMenor) || isNaN(baseMaior) || isNaN(altura)) {
    console.log('Valores Invalidos!');
    return;
  }
  return ((baseMaior + baseMenor) * altura) / 2;
}

// Faz o cast para Number do input recebido por linha de comandos e salva na variavel input.
const input = process.argv.slice(2).map((el) => Number(el));

// Caso o usuario não dê o numero de inputs esperado.
if (input.length !== 3) {
  console.log('Numero de argumentos invalido!');
  console.log('Uso correto: node area-trapezio.js baseMenor baseMaior altura');
  return;
}

const area = areaTrapezio(...input);

if (!area) return;

console.log('A área do trapézio é: ' + areaTrapezio(...input));
