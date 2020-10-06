function mediaAritmetica(...args) {
  if (!args.every(x => typeof x === 'number'))
    return console.log('Entrada inválida! Utilize apenas números.');

  let media =
    args.reduce((acumulador, nota) => acumulador + nota, 0) / args.length;

  return console.log('Média => ', media);
}

mediaAritmetica(22, 53);
