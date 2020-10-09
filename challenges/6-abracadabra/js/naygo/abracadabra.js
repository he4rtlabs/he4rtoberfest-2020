// Input/Args: palavraBase
// Output: palavra em forma de triângulo

const prompt = require('prompt-sync')()

function abracadabra(palavraBase) {

    let cont = 0

    while(cont <= palavraBase.length) {

        let palavraFormatada = palavraBase.substr(0, (palavraBase.length - cont))
        console.log(' '.repeat(cont) + palavraFormatada.split('').join(' '));

        cont++
    }
}

const verificaEspaco = (string) => string.indexOf(' ') >= 0;

const casosTeste = prompt('Quantos testes deseja fazer: \n=> ')

for(let i = 0; i < casosTeste; i++) {
    
    const palavra = prompt('Digite a mensagem: ')
    
    if(palavra.length > 100 || palavra.length < 2 || verificaEspaco(palavra))
        console.log('A mensagem precisa ter de 2 à 100 caracteres e sem espaços!')
    else
        abracadabra(palavra.toUpperCase())
}