const errors = [];
const notas = [];
const reg = /^\d+$/;

// lê os argumentos e testa
process.argv.forEach(function (value, index, array) {
  if (reg.test(value)) {
    notas.push(Number(value));
  } else if (index !== 0 && index !== 1) {
    errors.push(value);
  }
});

if (notas.length > 0) {
  let media =
    notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
  console.log("Média => ", media);

  if (errors.length > 0) {
    console.log(`[x] Algumas entradas inválidas: ${errors}`);
  }
} else {
  console.log(
    "[!] É necessário passar argumentos na chamada:\n Ex.: node index.js 10 10"
  );
}
