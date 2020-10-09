// Input/Args: numeroPosicoes, mensagem
// Output: qual(is) a(s) letra(s) de maior frequência do texto

const prompt = require('prompt-sync')()

function frequenciaLetras(mensagem) {

    const mensagemFormatada = mensagem.replace(/\s/g, '').replace( /[^a-zA-Zs]/g, '').toLowerCase()

    const ocorrencias = {}
    let maioresOcorrencias = []

    // mapeando a quantidade em que as letra aparecem
    for (const letra of mensagemFormatada) {
        if (letra in ocorrencias)
            ocorrencias[`${letra}`] += 1
        else
            ocorrencias[`${letra}`] = 1
    }

    // armazenando em um array as maiores ocorrências
    for (const letra in ocorrencias) {
        if (ocorrencias[letra] > 1)
            maioresOcorrencias.push(ocorrencias[letra])
    }

    // se o array estiver vazio, inserir todos os elementos e ordená-los
    if (maioresOcorrencias.length == 0) {

        for (const letra in ocorrencias) {
            maioresOcorrencias.push(letra)
        }

        maioresOcorrencias.sort()

    // se não, verificar o maior valor
    } else {

        // armazendo qual das maiores ocorrências é a maior
        const max = maioresOcorrencias.reduce(function (a, b) {
            return Math.max(a, b)
        })

        // limpando array para reutizá-lo
        maioresOcorrencias = []

        // adicionando no array as letra com o valor igual o 'max'
        for (const letra in ocorrencias) {
            if (ocorrencias[letra] == max)
                maioresOcorrencias.push(letra)
        }
    }

    console.log(maioresOcorrencias.join(''))

}

// função para verificar se a mensagem contém só números
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


const casosTeste = prompt('Quantos testes deseja fazer? \n=> ')

for(let i = 0; i < casosTeste; i++) {
    
    const mensagem = prompt('Digite a mensagem: ')
    
    if(mensagem.length > 200)
        console.log('---x--- Mensagem muito longa! ---x---')
    else if (isNumber(mensagem))
        console.log('---x--- A mensagem deve conter pelo menos uma letra! ---x---')
    else
        frequenciaLetras(mensagem)
}

