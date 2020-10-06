const notas = process.argv.slice(2)

function calculaMedia(notas) {
  // Verifica se cada argumento passado é um número
  const isNumber = notas.every(nota => !isNaN(nota));

  if (isNumber) {

    const somaNotas = notas.reduce((acc, num) => {
      // Transforma o valor atual do array que no momento é uma string em um número para realizar a soma
      return acc + Number(num)
    }, 0)

    const media = somaNotas / notas.length
    console.log(`Média => ${media.toFixed(2)}`)
  } else {
    console.log('❌ Por favor, digite apenas números como argumento')
  }
}

// Pega os argumentos digitados no console e transforma em um array de string
calculaMedia(notas)
