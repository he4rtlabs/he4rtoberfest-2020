function areaTrapezio(baseMaior, baseMenor, altura) {
  if (arguments.length !== 3)
    return console.log('Esse método requer 3 (três) argumentos.');

  for (let argument of arguments) {
    if (typeof argument !== 'number') {
      return console.log('Entrada inválida! Utilize apenas números.');
    }
  }

  let area = ((baseMaior + baseMenor) * altura) / 2;

  return console.log('A área do trapézio é:', area);
}

areaTrapezio(8, 3, 5);
