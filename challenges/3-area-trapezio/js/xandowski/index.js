const areaTrapezio = (baseMaior, baseMenor, altura) => {
  const area = (baseMaior + baseMenor) * altura / 2;

  if(typeof(baseMaior) !== 'number' || typeof(baseMenor) !== 'number' || typeof(altura) !== 'number'){
    return 'Por favor insira apenas números';
  }

  return area;
}

console.log(areaTrapezio(8, 3, 5));