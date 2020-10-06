let entradas = process.argv.slice(2);

entradas = entradas.map(Number);

if (!entradas.includes(NaN)) {
    const area = (entradas[0] + entradas[1]) * entradas[2] / 2;
    console.log(`A área do trapézio é ${area}`);
} else {
    console.log("Entrada inválida");
}
