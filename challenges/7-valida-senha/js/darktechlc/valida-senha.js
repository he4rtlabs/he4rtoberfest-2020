const args = process.argv.slice(2);

if(args.length === 0)
  return console.log('Insira uma senha para validar!');

const validaSenha = (senha) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\W)(?!.*\s).{6,32}$/;
  return regex.test(senha);
}

const [senha] = args;
const senhaValida = validaSenha(senha);

if (senhaValida)
  console.log('Senha válida!');
else
  console.log('Senha inválida!');
