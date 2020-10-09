const numeroEscolhido = +process.argv.slice(2)[0];

for (let multiplicador = 1; multiplicador <= numeroEscolhido; multiplicador++) {
    console.log(`\n=========================== \n A tabuada do numero ${multiplicador} é:`);
    for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
        console.log(`${multiplicador}x${multiplicando} = ${ multiplicador * multiplicando }`);
    }
}