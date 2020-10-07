// Input/Args: stringSenha
// Output: Senha válida ou inválida

const prompt = require('prompt-sync')()

const regexCaracteres = /(?=.*?[#?!@$%^&*-])/
const regexMinuscula = /(?=.*?[a-z])/
const regexMaiscula = /(?=.*?[A-Z])/
const regexDigito = /(?=.*?[0-9])/
const minimoMaximoCaracteres = /^.{6,32}$/

function validarSenha(senha) {
    if (
        regexMinuscula.test(senha) &&
        regexMaiscula.test(senha) &&
        regexDigito.test(senha) &&
        !regexCaracteres.test(senha)&&
        minimoMaximoCaracteres.test(senha)
    )
        console.log('Senha válida!!!')
    else
        console.log('Senha inválida...')
}


const casosTeste = prompt('Quantas vezes deseja testar? \n=> ')

for (let i = 0; i < casosTeste; i++) {

    const senha = prompt('Digite uma senha: ')
    validarSenha(senha)
    console.log('---x---x---x---x---')
}