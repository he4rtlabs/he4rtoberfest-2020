const numero = +process.argv.slice(2);

function tabuada(numero) {
  if (numero !== isNaN && Number.isInteger(numero)) {
    for (let i = 1; i <= numero; i++) {
      console.log(`\n===========================`);
      console.log(`A tabuada do numero ${i} é:\n`);
      for (let count = 1; count <= 10; count++) {
        console.log(`${i} * ${count} = ${i * count}`);
      }
    }
  } else {
    console.error(
      "❌ Por favor, digite apenas números inteiros como argumento"
    );
  }
}

tabuada(numero);
