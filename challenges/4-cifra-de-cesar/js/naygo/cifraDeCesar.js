// Input/Args: numeroPosicoes, mensagem
// Output: três saídas

const prompt = require('prompt-sync')()

function cifraDeCesar(numeroPosicoes, mensagem) {

    const alfabeto = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ]

    const alfabetoInvertido = alfabeto.slice()
    alfabetoInvertido.reverse()

    let cifra = ''

    for (const letra of mensagem.toUpperCase()) {

        for (let i = 0; i <= 25; i++) {

            if (letra == alfabeto[i]){

                if((alfabeto[i - numeroPosicoes]) == undefined){
                    cifra += alfabetoInvertido[(numeroPosicoes - (alfabeto.indexOf(alfabeto[i]) + 1))]
                }
                else
                    cifra += alfabeto[i - numeroPosicoes]
            }
        }
    }

    console.log('---x---x---x---x---')
    console.log(cifra)
    console.log('---x---x---x---x---')
}

const numeroCasos =  prompt('Quantos casos deseja fazer => ')
let cont = 0

for(let i = 1; i <= numeroCasos; i++) {

    cont++
    console.log(`Caso Nº${cont}`)

    const numeroPosicoes = prompt('Nº de posições: ')
    const mensagem = prompt('Mensagem: ')
    
    cifraDeCesar(numeroPosicoes, mensagem)
} 