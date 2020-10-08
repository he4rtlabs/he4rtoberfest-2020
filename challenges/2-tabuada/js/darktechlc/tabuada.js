const args = process.argv.slice(2);

if (args.length === 0)
  return console.log('Insira um número para a tabuada ser gerada até ele!');

const geraTabuada = (multiplicandoMaximo) => {
  const separador = () => console.log('='.repeat(27));

  for (
    let multiplicando = 1;
    multiplicando <= multiplicandoMaximo;
    multiplicando++
  ) {
    separador();
    console.log(`A tabuada do número ${multiplicando} é:`);

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      const produto = multiplicando * multiplicador;
      console.log(`  ${multiplicando} x ${multiplicador} = ${produto}`);
    }
  }
  separador();
};

const multiplicandoMaximo = Number(args[0]);

geraTabuada(multiplicandoMaximo);
