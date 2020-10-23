const getArea = (baseMaior, baseMenor, altura) => {
  const area = ((baseMaior + baseMenor) * altura) / 2;
  if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
    return "Todos os valores precisam ser números";
  }
  return `A área do trapézio é: ${area}`;
};

console.log(getArea(8, 3, 5));
