const receberDadosInput = require('prompt-sync')();

const valores = [0, 1];
const quantidadeDeSequencia = Number(receberDadosInput('Digite um número inteiro: '));

for (let index = 3; index <= quantidadeDeSequencia; index++) {
  const tamanhoArray = valores.length;
  const valorAdd = valores[tamanhoArray - 1] + valores[tamanhoArray - 2];

  valores.push(valorAdd)
};

console.log(valores.join(' '))
