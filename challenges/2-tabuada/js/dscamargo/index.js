const calculate = (number) => {
  const numbers = Array.from(Array(11).keys())
  for(let i = 1; i <= number; i++){
    console.log(`===========================`)
    console.log(`A tabuada do numero ${i} é: `)
    for (const number of numbers) {
      console.log(`${i} * ${number} = ${i*number}`)
    }
  }
}

const maxNumber = parseInt(process.argv.splice(2)[0])
if (maxNumber === 0) return console.log('Defina um número maior que 0 para continuar.')
if (!maxNumber) return console.log('Defina o número da tabuada');

calculate(maxNumber)