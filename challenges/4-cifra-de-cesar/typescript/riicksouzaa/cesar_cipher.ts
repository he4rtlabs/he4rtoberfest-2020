import PromptSync from 'prompt-sync'

let prompt = PromptSync()

const alfabeto: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
]

async function makeCipher() {
    let msg = prompt("Digite a mensagem a ser criptografada (A-Z): ")

    if (msg === null || msg?.length > 50) {
        throw "Ocorreu um erro ao processar mensagem, ela não pode ser nula nem conter mais de 50 caracteres"
    } else {
        msg = msg.toUpperCase()
    }

    const leftOffset = prompt("Quantas casas de offset à esqueda a cifra terá (0-25)? ")

    let offset = 0
    if (leftOffset !== null) {
        offset = parseInt(leftOffset)
    }

    if (Number(leftOffset) < 0 || Number(leftOffset) > 25) {
        console.log("O offset deve estar entre 0 e 25")
        throw "O offset deve estar entre 0 e 25"
    }

    let words = msg.split('')

    for (let i = 0; i < words.length; i++) {
        const pos = alfabeto.indexOf(words[i])

        if (pos < offset) {
            const ret = offset - pos
            words[i] = alfabeto[26 - ret]
        } else {
            words[i] = alfabeto[pos - offset]
        }
    }

    const cipher = words.join('')

    console.log(cipher)
    console.log("--------------------------------")
}

const testcase = prompt('Quantos casos de teste serão necessários? ')
for (let i = 0; i < Number(testcase); i++) {
    makeCipher()
}