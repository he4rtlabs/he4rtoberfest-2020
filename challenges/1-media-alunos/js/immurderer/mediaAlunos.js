let entradas = process.argv.slice(2);

// Verifica se todos os valores são números através da negação do isNaN
const saoNumeros = entradas.every(valor => !isNaN(valor));

if (entradas.length > 0 && saoNumeros) {
    let total = entradas.reduce((total, valor) => total + Number(valor), 0);
    let media = total / entradas.length;
    console.log(`A média das notas é: ${media.toFixed(1)}`);
} else {
    console.log("Entrada inválida.");
}
