const trapezio = process.argv.slice(2);
const baseMaior = +trapezio[0];
const baseMenor = +trapezio[1];
const altura = +trapezio[2];

function calculaAreaTrapezio(baseMaior, baseMenor, altura) {
  const isNumber = [baseMaior, baseMenor, altura].every(
    (medida) => !isNaN(medida)
  );
  if (isNumber) {
    const areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
    return console.log(`A área do trapézio é: ${areaTrapezio}`);
  } else {
    console.error("❌ Por favor, digite apenas números como argumento");
  }
}

calculaAreaTrapezio(baseMaior, baseMenor, altura);
