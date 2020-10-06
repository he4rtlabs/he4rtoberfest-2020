// Input/Args: baseMaior: 8, baseMenor: 3, altura: 5
// Output: A área do trapézio é: 27,5

function areaTrapezio(baseMaior, baseMenor, altura) {

    try {
        if (isNaN((baseMaior || baseMenor || altura)))
            throw 'você não inseriu apenas números'

        return console.log((baseMaior + baseMenor) * altura / 2)

    } catch (err) {
        return console.log('Erro: ', err)
    }
}

areaTrapezio(8, 3, 5)
areaTrapezio('a', 3, 5)
