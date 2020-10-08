const receberDadosInput = require('prompt-sync')();

const quantidadeDeEntradas = Number(receberDadosInput('Quantos casos você deseja testar? '));

if (isNaN(quantidadeDeEntradas))
  throw 'Informe um número para poder prosseguir';

for (let quantidadeRodadas = 1; quantidadeRodadas <= quantidadeDeEntradas; quantidadeRodadas++) {
  const mensagem = receberDadosInput('Digite a mensagem/palavra que você deseja testar: ');
  const caracteresDaMensagem = mensagem.replace(/\s/g, '').toLowerCase().split('');
  const caracteresOrdenados = caracteresDaMensagem.sort((a, b) => a > b ? 1 : -1);

  const resultado = buscarMaiorFrequencia(caracteresOrdenados);
  console.log(resultado);
  console.log('======================');
};

function buscarMaiorFrequencia(caracteresOrdenados) {
  let maiorPontuacao = 0;
  let maioresPontuadores = [];

  for (let index = 0, pontuacaoLetraAtual = 1; index < caracteresOrdenados.length; index++) {
    let posicao = index;
    while (caracteresOrdenados[index] === caracteresOrdenados[posicao + 1]) {
      posicao += 1;
      pontuacaoLetraAtual += 1;
    }

    if (pontuacaoLetraAtual > maiorPontuacao) {
      maiorPontuacao = pontuacaoLetraAtual;
      maioresPontuadores = [caracteresOrdenados[index]];
    } else if (pontuacaoLetraAtual == maiorPontuacao) {
      maioresPontuadores.push(caracteresOrdenados[index]);
    }

    pontuacaoLetraAtual = 1;
  }

  return maioresPontuadores.join('');
};
