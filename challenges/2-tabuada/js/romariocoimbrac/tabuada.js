function tabuada(numeroFinal) {
  for (let i = 1; i <= numeroFinal; i++) {
    console.log(`A tabuada de ${i} é: `);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
      console.log(`===========================`);
    }
  }
}

tabuada(2);
