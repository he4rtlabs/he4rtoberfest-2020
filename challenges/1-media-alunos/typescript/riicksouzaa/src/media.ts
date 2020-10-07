import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas: number[] = []

rl.question("\r\n\r\nDigite as notas dos alunos e caso queira finalizar digite apenas ENTER.\r\n", (answer: string) => {

    if (isNumber(answer)) {
        notas.push(parseInt(answer))
    } else {
        console.log(`${answer} não será somada para realização da meta pois não é um número`)
    }

    rl.on('line', (input) => {
        if (input === "") {
            const total = notas.reduce((soma, nt) => soma + nt)
            const quantidade = notas.length

            console.log(`A média das notas informadas é ${fazerMedia(total, quantidade)}.`)
            rl.close()
        } else if (isNumber(input)) {
            notas.push(parseInt(input))
        } else {
            console.log(`${input} não será somada para realização da meta pois não é um número`)
        }
    })
})

function fazerMedia(total: number, quantidade: number) {
    return total / quantidade;
}


function isNumber(value: string | number): boolean {
    return ((value != null) &&
        (value !== '') &&
        !isNaN(Number(value.toString())))
} 