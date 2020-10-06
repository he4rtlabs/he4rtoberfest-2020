const showMultiplicationTable = limit => {
  if (!limit.match(/\d/)) throw new Error('This function only accept number parameters!');

  for (let tableLimit = 1; tableLimit <= limit; tableLimit += 1) {
    console.log(`=============================\nA tabuada de ${tableLimit} é:`);
    for (let number = 1; number <= 10; number += 1) {
      console.log(`${tableLimit} * ${number} = ${tableLimit * number}`);
    }
  }
};

showMultiplicationTable(process.argv[2]);
