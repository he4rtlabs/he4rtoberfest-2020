const multiplicationTable = (number) => {
  number = parseInt(number);

  for (let multiplicando = 1; multiplicando <= number; multiplicando++) {
    console.log("===========================");
    console.log(`A tabuada do numero ${multiplicando} é: `);
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      console.log(
        `${multiplicando}*${multiplicador} = ${multiplicando * multiplicador}`
      );
    }
  }
  console.log("===========================");
};

multiplicationTable(2);
