const checkPassword = (password) => {
  if (password.length === 0) return 'Insira uma senha para checar.'
  if (password.length !== 1) return 'Senha inválida.'
  const [pass] = password
  if (pass.length < 6 || pass.length > 32) return 'Senha inválida.'
  const haveLowerCase = /[a-z]/g.test(password);
  const haveUpperCase = /[A-Z]/g.test(password);
  const haveNumber = /[0-9]/g.test(password);
  const haveSpecialCharacter = /[/\.,_!?/'"`/áéíóúäëïöüàèìòù-]/g.test(password)
  const isInvalid = !haveLowerCase || !haveUpperCase || !haveNumber || haveSpecialCharacter;
  if (isInvalid) return 'Senha inválida.'
  return 'Senha válida.'
}

const password = process.argv.splice(2)
console.log(checkPassword(password))
