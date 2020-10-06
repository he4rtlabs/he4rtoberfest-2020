function tabuada(numero) {
  if (typeof numero !== 'number') {
    return console.log('Entrada inválida! Utilize apenas número.');
  }

  for (let num = 1; num <= numero; num++) {
    console.log('=========================');
    console.log(`A tabuada do ${num}`);

    for (let mult = 1; mult <= 10; mult++) {
      console.log(`${num} * ${mult} = ${num * mult}`);
    }
  }
}

tabuada(2);
tabuada('x');
