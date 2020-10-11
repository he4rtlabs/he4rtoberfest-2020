const reg = /^\d+$/;
process.argv.forEach(function (value, i, array) {
  if (i !== 0 && i !== 1) {
    if (reg.test(value)) {
      multiplicationTable(value);
    } else {
      console.log("[x] Apenas números como parâmetro. Inválido: ", value);
    }
  }
});

function multiplicationTable(value) {
  for (let i = 1; i <= value; i++) {
    console.log("===========================");
    console.log(`A tabuada do numero ${i} é:`);

    for (let multiplication = 1; multiplication <= 10; multiplication++) {
      console.log(`\t${i} * ${multiplication} = ${i * multiplication}`);
    }
  }
}
