const entrada = Number(process.argv.slice(2, 3));

function geraTabuada(num) {
    for (let j = 1; j <= 10; j++) {
        console.log(`  ${num}*${j} = ${num * j}`);
    }
}

if (entrada) {
    for (let i = 1; i <= entrada; i++) {
        console.log("===========================");
        console.log(`A tabuada do número ${i} é: `);
        geraTabuada(i);
    }

    console.log("===========================");
} else {
    console.log("Entrada inválida");
}
