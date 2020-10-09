const args = process.argv.slice(2).map((arg) => Number(arg));

if (args.length === 0 || args.length < 3)
  return console.log(
    'Insira a base maior, a base menor e a altura para a área ser calculada!'
  );

if (args.some((arg) => isNaN(arg) === true))
  return console.log('Todos os valores passados devem ser numéricos!');

const calculaAreaTrapezio = (baseMaior, baseMenor, altura) => {
  const area = ((baseMaior + baseMenor) * altura) / 2;
  return area;
};

const [baseMaior, baseMenor, altura] = args;
const area = calculaAreaTrapezio(baseMaior, baseMenor, altura);

console.log(`A área do trapézio é: ${area}`);
