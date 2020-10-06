const somaDuasNotas = (nota1, nota2) => +nota1 + nota2;

const mediaAritmetica = (...args) => args.reduce(somaDuasNotas, 0) / args.length;

const mediaNotas = mediaAritmetica(22, 53);

console.log(mediaNotas);
