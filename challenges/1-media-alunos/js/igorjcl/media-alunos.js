let media = 0;
const notas = process.argv.slice(2);

if (notas.length) {
    const somatorioNotas = notas.reduce((total, nota) => total + Number(nota), 0);
    media = somatorioNotas / notas.length;
}

console.log(`Média -> ${media}`);