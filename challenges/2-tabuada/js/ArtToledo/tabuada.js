const prompt = require('prompt-sync')();

let numberChoose = prompt('Digite um numero inteiro qualquer: ');
numberChoose = Number(numberChoose);

for (let numberOfTaboadaToBeMultiplied = 1; numberOfTaboadaToBeMultiplied <= numberChoose; numberOfTaboadaToBeMultiplied++) {
  console.log(`A tabuada do numero ${numberOfTaboadaToBeMultiplied} é:`);
  for (let index = 1; index <= 10; index++) {
    console.log(`${numberOfTaboadaToBeMultiplied} * ${index} = `, numberOfTaboadaToBeMultiplied * index)
  }
  console.log('===========================');
};
