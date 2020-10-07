const listaDeArgumentos = process.argv.slice(2).map(arg => +arg);

if(listaDeArgumentos.length === 0)
  return console.log('Nenhuma valor passado como argumento.');

if (listaDeArgumentos.some(arg => isNaN(arg)))
  return console.log('Há elementos que não são números.');

const mediaAritmetica = (lista) => {
  const somaTotal = lista
    .reduce((acumulador, itemAtual) => acumulador + itemAtual);

  return somaTotal / lista.length;
}

const mediaDasNotas = mediaAritmetica(listaDeArgumentos);

console.log(mediaDasNotas);
