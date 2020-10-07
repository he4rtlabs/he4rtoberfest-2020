const prompt = require('prompt-sync')();

const alfabeto = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

const receberDadosInput = (mensagem) => {
  return prompt(mensagem);
};

async function criptografar() {
  let mensagem = receberDadosInput('Digite a mensagem a ser criptografada (Letras de A-Z): ');

  if (mensagem.length > 50) {
    throw 'A mensagem pode ter no máximo 50 caracteres';
  } else {
    mensagem = mensagem.toUpperCase();
  }
  
  const numeroDeCasasEsquerda = receberDadosInput('Quantas casas você deseja retroceder a esquerda (0 a 25)? ');
  if (Number(numeroDeCasasEsquerda) < 0 || Number(numeroDeCasasEsquerda) > 25) {
    console.log('O número de casas deve ser entre 0 a 25')
    throw 'O número de casas deve ser entre 0 a 25';
  }
  
  let letrasDaMensagem = mensagem.split('');
  
  for (let index = 0; index < letrasDaMensagem.length; index++) {
    const posicaoNoAlfabeto = alfabeto.indexOf(letrasDaMensagem[index]);
  
    if (posicaoNoAlfabeto < numeroDeCasasEsquerda) {
      const quantidadeParaRetroceder = numeroDeCasasEsquerda - posicaoNoAlfabeto;
      letrasDaMensagem[index] = alfabeto[26 - quantidadeParaRetroceder];
    } else {
      letrasDaMensagem[index] = alfabeto[Number(posicaoNoAlfabeto) - Number(numeroDeCasasEsquerda)];
    }
  }
  
  const mensagemCriptografada = letrasDaMensagem.join('');

  console.log(mensagemCriptografada);
  console.log('=====================');
};

const numeroCasosDeTestes = prompt('Quantos casos de teste você deseja? ');
for (let vezesRodado = 1; vezesRodado <= Number(numeroCasosDeTestes); vezesRodado++) {
  criptografar();
}
