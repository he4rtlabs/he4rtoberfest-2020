const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'list',
    name: 'notas',
    message: 'Informe as notas',
    initial: 'Ex: 5.5, 9, 5, 8.3',
    separator: ','
  });
  
  const soma = response.notas.reduce((acc, cur) => {
    return Number(acc) + Number(cur)
  })
  const media = soma/response.notas.length;

  console.log("A média deste aluno é", media);
  
})();

