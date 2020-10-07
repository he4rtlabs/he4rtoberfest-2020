const receberDadosInput = require('prompt-sync')();

const quantidadeDeEntradas = Number(receberDadosInput('Quantos senhas você deseja testar? '));

if (isNaN(quantidadeDeEntradas))
  throw 'Informe um número para poder prosseguir';

for (let quantidadeRodadas = 1; quantidadeRodadas <= quantidadeDeEntradas; quantidadeRodadas++) {
  const senha = receberDadosInput('Digite a senha a ser testada: ');
  
  validarSenha(senha);
  console.log('======================');
};

function validarSenha(senha) {
  console.log('\n');

  const expressaoValidadora = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[$*&@#])[0-9a-zA-Z]{6,32}$/);

  expressaoValidadora.test(senha) ? console.log('Senha valida.') : console.log('Senha invalida');
};

/**
 * Explicação da regex:
 * 
 * /^
 *   (?=.*\d) - deve conter ao menos um numero
 *   (?=.*[a-z]) - deve conter ao menos uma letra minuscula
 *   (?=.*[A-Z]) - deve conter ao menos uma letra maiuscula
 *   (?!.*[$*&@#]) - nao pode conter nenhum caracter especial
 *   [0-9a-zA-Z]{6,32} - deve contar de 6 a 32 caracteres informados entre os []
 * $/
 */
