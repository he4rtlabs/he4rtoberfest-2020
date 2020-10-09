const receberDadosInput = require('prompt-sync')();

const quantidadeDeEntradas = Number(receberDadosInput('Quantos palavras mágicas desejas espalhar? '));

if (isNaN(quantidadeDeEntradas))
  throw 'Informe um número para poder prosseguir';

for (let quantidadeRodadas = 1; quantidadeRodadas <= quantidadeDeEntradas; quantidadeRodadas++) {
  const mensagem = receberDadosInput('Digite a mensagem/palavra que você deseja espalhar (2 a 100 caracteres): ');
  
  if (mensagem.length < 2 || mensagem.length > 100)
    throw 'Informe uma mensagem válida para poder prosseguir';
  
  
  mostrarPalavra(mensagem);
  console.log('======================');
};

function mostrarPalavra(palavraOriginal) {
  console.log('\n');

  for (let index = 1; index <= palavraOriginal.length; index++) {
    let novaPalavra = palavraOriginal.substr(0, palavraOriginal.length - index);
    novaPalavra = novaPalavra.split('').join(' ');

    console.log(`${' '.repeat(index)}${novaPalavra}`);
  };
};
