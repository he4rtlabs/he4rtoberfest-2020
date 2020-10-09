import * as readline from 'readline'

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Qual o tamanho do lado maior do trapézio? ', (answer) => {
    if (isNumber(answer)) {
        const ladoMaior = parseInt(answer)
        rl.question('Qual o tamanho do lado menor do trapézio? ', (answer) => {
            if (isNumber(answer)) {
                const ladoMenor: number = parseInt(answer)
                rl.question('Qual a altura do trapézio? ', (answer: string) => {
                    if (isNumber(answer)) {
                        const altura: number = parseInt(answer)
                        const area = calcularArea(altura, ladoMenor, ladoMaior)
                        console.log(`\r\nA Área desse trapézio é ${area}`)
                    } else {
                        console.log('Só consigo fazer contas com números multiplicar números')
                    }
                    rl.close();
                })
            } else {
                console.log('Só consigo fazer contas com números multiplicar números')
            }
        })
    } else {
        console.log('Só consigo fazer contas com números multiplicar números')
    }
});

function calcularArea(altura: number, ladoMenor: number, ladoMaior: number) {
    return ((ladoMenor + ladoMaior) * altura) / 2
}

function isNumber(value: string | number): boolean {
    return ((value != null) &&
        (value !== '') &&
        !isNaN(Number(value.toString())))
}