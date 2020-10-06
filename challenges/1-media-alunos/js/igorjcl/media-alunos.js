const notas = process.argv.slice(2);
const somatorioNotas = notas.reduce((total, nota) => Number(nota) + total, 0);

const media = somatorioNotas / notas.length

console.log(`Média -> ${media}`);