const mediaAritmetica = (...args) => {
  let media = args.reduce((acumulador, nota) => acumulador + nota, 0) / args.length;

  if (args.length < 2) {
    return 'Por favor insira 2 ou mais números';
  }
  
  return media;
}

console.log(mediaAritmetica(22, 53));